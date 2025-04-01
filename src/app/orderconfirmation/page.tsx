'use client'

import { useRouter } from 'next/navigation'

export default function OrderConfirmation() {
  const router = useRouter()

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. We'll send you a confirmation email with your order details shortly.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Order Details</h2>
          <div className="text-left space-y-2">
            <p><span className="font-medium">Order ID:</span> #123456</p>
            <p><span className="font-medium">Date:</span> {new Date().toLocaleDateString()}</p>
            <p><span className="font-medium">Status:</span> Processing</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.push('/')}
            className="btn btn-primary"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => router.push('/aichat')}
            className="btn btn-secondary"
          >
            Chat with AI Assistant
          </button>
        </div>
      </div>
    </div>
  )
} 