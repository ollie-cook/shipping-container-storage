'use client'

import { useState } from "react"

interface ColourPickerProps {
  colourOptions?: string[];
  updateContainer: (title?: string, colour?: string) => void;
  isTextColourPicker: boolean;
}

export default function ColourPicker(props: ColourPickerProps) {
  

  return (
    <div className="flex mt-1 gap-2">
      {
        props.colourOptions?.map(colour => (
          <ColourOption colour={colour} updateContainer={props.updateContainer} isTextColour={props.isTextColourPicker} />
        ))
      }
    </div>
  )
}

interface ColourOptionProps {
  colour: string;
  updateContainer: (title?: string, colour?: string, text_colour?:string) => void;
  isTextColour: boolean;
}

function ColourOption(props: ColourOptionProps) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (props.isTextColour == false) {
      props.updateContainer(undefined, props.colour)
    } else if (props.isTextColour == true) {
      let newColour = ""
      if (props.colour == "bg-black") {
        newColour = "text-black"
      } else if (props.colour == "bg-white") {
        newColour = "text-white"
      }

      props.updateContainer(undefined, undefined, newColour)
    }
  }

  return (
    <button 
      className={`h-6 aspect-square rounded-lg ${props.colour} ${props.colour == "bg-white" ? "border border-black" : ""}`}
      onClick={(event) => handleClick(event)}
    >

    </button>
  )
}