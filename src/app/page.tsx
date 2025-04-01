'use client'

import { useState } from 'react'
import OrderDialog from './components/OrderDialog'
import CartItem from './components/CartItem'
import { menuItems } from './data/menuItems'

export default function Home() {
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, quantity: number}>>([])
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All Items')

  const filteredMenuItems = selectedCategory === 'All Items' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="flex min-h-screen">
      {/* Left Sidebar - Menu Categories */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <nav className="space-y-2">
            {['All Items', 'Main Course', 'Appetizers', 'Desserts', 'Beverages'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded ${
                  selectedCategory === category ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content - Menu Items */}
      <section className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Menu Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Sidebar - Cart */}
      <aside className="w-80 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold mb-4">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => setIsOrderDialogOpen(true)}
                  className="btn btn-primary w-full"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      <OrderDialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={() => setIsOrderDialogOpen(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Here you would typically send the order to your backend
                setCart([])
                setIsOrderDialogOpen(false)
              }}
              className="btn btn-primary"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </OrderDialog>
    </main>
  )
}
