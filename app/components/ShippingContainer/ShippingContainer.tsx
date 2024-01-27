'use client'

import EditButton from "./components/EditButton"

interface ShippingContainerProps {
  className: string;
}

export default function ShippingContainer(props: ShippingContainerProps) {
  return (
    <button className={`w-full aspect-[4.7] relative ${props.className}`}>
      <EditButton />
    </button>
  )
}