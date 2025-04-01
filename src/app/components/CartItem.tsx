'use client'

interface CartItemProps {
  id: number
  name: string
  price: number
  quantity: number
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

export default function CartItem({
  id,
  name,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b">
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(id, Math.max(0, quantity - 1))}
          className="btn btn-secondary"
        >
          -
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => onUpdateQuantity(id, quantity + 1)}
          className="btn btn-secondary"
        >
          +
        </button>
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  )
} 