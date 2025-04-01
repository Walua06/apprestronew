'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface OrderDialogProps {
  children: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function OrderDialog({ children, open, onOpenChange }: OrderDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 