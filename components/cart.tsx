"use client"

import { useState } from "react"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useCartStore } from "@/lib/cart-store"
import { checkout } from "@/lib/checkout"
import { useToast } from "@/hooks/use-toast"

export function Cart() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleCheckout = async () => {
    if (items.length === 0) return

    setIsLoading(true)
    try {
      // Convertir items del carrito al formato de Stripe
      const stripeItems = items.map((item) => ({
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
      }))

      await checkout({
        priceId: "multiple_items",
        items: stripeItems,
        successUrl: `${window.location.origin}/success?total=${getTotalPrice()}`,
        cancelUrl: window.location.href,
      })

      clearCart()
      setIsOpen(false)
    } catch (error) {
      console.error("Error during checkout:", error)
      toast({
        title: "Error",
        description: "Hubo un problema al procesar el pago. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Carrito de Compras</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4 h-[calc(100vh-200px)] overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Tu carrito está vacío</p>
              <p className="text-sm text-muted-foreground mt-2">Añade algunos servicios para comenzar</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 border rounded-lg bg-white dark:bg-gray-800"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                    <p className="font-semibold text-primary">{item.price}€</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => {
                        if (item.quantity === 1) {
                          removeItem(item.id)
                        } else {
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      }}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.id)}>
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">{getTotalPrice()}€</span>
              </div>
              <div className="text-xs text-muted-foreground">* IVA no incluido (se aplicará 21% en el checkout)</div>
              <div className="space-y-2">
                <Button onClick={handleCheckout} className="w-full" disabled={isLoading}>
                  {isLoading ? "Procesando..." : "Proceder al Pago"}
                </Button>
                <Button onClick={clearCart} variant="outline" className="w-full" disabled={isLoading}>
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
