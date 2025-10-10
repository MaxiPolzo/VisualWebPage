import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(
  "sk_test_51RX1Df2EEpyYsnya7JExIsbUlvKtMAVON1kq7jERz7LDNoHVGGKRP7Yd9MbfDxDuX9XQ1yZmRUdRpoLXMBWaGWKa00Yuqjc41T",
  {
    apiVersion: "2024-06-20",
  },
)

export async function POST(request: Request) {
  try {
    const { priceId, quantity = 1, successUrl, cancelUrl, items } = await request.json()

    let line_items

    if (items && items.length > 0) {
      // Múltiples items del carrito
      line_items = items.map((item: any) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            description: item.description,
          },
          unit_amount: item.price * 100, // Stripe usa centavos
        },
        quantity: item.quantity,
      }))
    } else {
      // Item individual
      const productData = getProductData(priceId)
      line_items = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: productData.name,
              description: productData.description,
            },
            unit_amount: productData.price * 100,
          },
          quantity,
        },
      ]
    }

    // Crear la sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["ES", "FR", "IT", "PT", "DE"],
      },
      metadata: {
        source: "visualcraft_website",
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
  }
}

function getProductData(priceId: string) {
  const products: Record<string, { name: string; description: string; price: number }> = {
    price_simple: {
      name: "Web Simple",
      description: "Sitio web informativo hasta 5 páginas",
      price: 499,
    },
    price_complex: {
      name: "Web Compleja",
      description: "E-commerce o plataforma avanzada hasta 10 páginas",
      price: 999,
    },
    price_hosting: {
      name: "Desarrollo + Hosting",
      description: "Web compleja + hosting por 1 año",
      price: 1299,
    },
    price_all_inclusive: {
      name: "Todo Incluido",
      description: "Web compleja + hosting + mantenimiento",
      price: 1999,
    },
  }

  return products[priceId] || products.price_simple
}
