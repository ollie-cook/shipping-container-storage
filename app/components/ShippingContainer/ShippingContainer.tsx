'use client'

import { useState } from "react"
import EditButton from "./components/EditButton"

interface ShippingContainerProps {
  className: string;
}

export default function ShippingContainer(props: ShippingContainerProps) {
  const [title, setTitle] = useState("Shipping Container")
  const [colour, setColour] = useState("bg-[#cc4d4e]")

  return (
    <button className={`w-full aspect-[4.7] relative ${props.className} ${colour}`}>
      <EditButton title={title} setTitle={(value) => setTitle(value)} colour={colour} setColour={(value) => setColour(value)} />
      <h1 className="text-2xl font-bold">{title}</h1>
    </button>
  )
}