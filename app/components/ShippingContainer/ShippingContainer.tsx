'use client'

import { useState } from "react"
import EditButton from "./components/EditButton"
import { MdDelete } from "react-icons/md";

interface ShippingContainerProps {
  container: any;
  update: (container: any, boolean?: true) => void;
  className: string;
}

export default function ShippingContainer(props: ShippingContainerProps) {
  const [title, setTitle] = useState(props.container.title)
  const [colour, setColour] = useState(props.container.colour)
  const [textColour, setTextColour] = useState(props.container.text_colour)

  const updateContainer = (newTitle?: string, newColour?: string, newTextColour?: string) => {
    if (newTitle != undefined) {
      setTitle(newTitle)
    }
    if (newColour != undefined) {
      setColour(newColour)
    }

    const updatedContainer = {
      id: props.container.id,
      title: newTitle || props.container.title,
      colour: newColour || props.container.colour,
      text_colour: newTextColour || props.container.text_colour
    }

    props.update(updatedContainer)
  }

  const deleteContainer = () => {
    props.update(props.container, true)
  }

  return (
    <div className={`flex items-center justify-center aspect-[4.7] relative ${props.className} ${colour}`}>
      <img src="/container-background.png" className="absolute w-full" />
      <div className="absolute top-2 right-0 flex flex-col gap-2">
        <EditButton title={title} colour={colour} textColour={textColour} updateContainer = {(title?: string, colour?: string, text_colour?: string) => updateContainer(title, colour, text_colour)} />
        <button className="flex justify-center items-center" onClick={deleteContainer}>
          <MdDelete className="w-5 h-5" />
        </button>
      </div>
      <h1 className={`text-5xl font-bold z-10 ${props.container.text_colour}`}>{title}</h1>
    </div>
  )
}