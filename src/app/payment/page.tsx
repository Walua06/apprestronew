'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PaymentForm {
  cardNumber: string
  cardName: string
  expiryDate: string
  cvv: string
}

export default function Payment() {
  const router = useRouter()
  const [formData, setFormData] = useState<PaymentForm>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    // For now, we'll just navigate to the order confirmation page
    router.push('/orderconfirmation')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Payment Information</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-secondary"
          >
            Back
          </button>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  )
} 