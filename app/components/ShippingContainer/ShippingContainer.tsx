'use client'

import { useState } from "react"
import EditButton from "./components/EditButton"

interface ShippingContainerProps {
  title: string;
  colour: string;
  className: string;
}

export default function ShippingContainer(props: ShippingContainerProps) {
  const [title, setTitle] = useState(props.title)
  const [colour, setColour] = useState(props.colour)

  return (
    <div className={`flex items-center justify-center w-full aspect-[4.7] relative ${props.className} ${colour}`}>
      <EditButton title={title} setTitle={(value) => setTitle(value)} colour={colour} setColour={(value) => setColour(value)} />
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}