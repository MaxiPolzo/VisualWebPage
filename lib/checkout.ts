"use client"

import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51RX1Df2EEpyYsnya2kbSukEZ979bjSpatu3hN0ioXkSBlfAbyAplqJDaaW7WQWksLtG0D4eo13t8FZCZYGIw5JBo00TBOQGqwf",
)

interface CheckoutOptions {
  priceId: string
  quantity?: number
  successUrl?: string
  cancelUrl?: string
  items?: Array<{
    price: string
    quantity: number
  }>
}

export async function checkout({
  priceId,
  quantity = 1,
  successUrl = `${window.location.origin}/success`,
  cancelUrl = window.location.href,
  items,
}: CheckoutOptions) {
  try {
    const stripe = await stripePromise

    if (!stripe) {
      throw new Error("Stripe failed to initialize")
    }

    // Crear la sesión de checkout
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId,
        quantity,
        successUrl,
        cancelUrl,
        items,
      }),
    })

    if (!response.ok) {
      throw new Error("Error creating checkout session")
    }

    const { sessionId } = await response.json()

    // Redirigir a Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId,
    })

    if (result.error) {
      console.error(result.error.message)
      throw new Error(result.error.message)
    }
  } catch (error) {
    console.error("Error during checkout:", error)
    throw error
  }
}
