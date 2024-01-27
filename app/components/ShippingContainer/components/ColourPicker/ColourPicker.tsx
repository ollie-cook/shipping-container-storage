'use client'

import { useState } from "react"

interface ColourPickerProps {
  colour?: string;
  setColour: (newColour: string) => void;
}

export default function ColourPicker(props: ColourPickerProps) {
  

  return (
    <div className="flex mt-1 gap-2">
      <ColourOption colour="bg-[#cc4d4e]" setColour={props.setColour} />
      <ColourOption colour="bg-[#166394]" setColour={props.setColour}/>
      <ColourOption colour="bg-[#00b4c3]" setColour={props.setColour}/>
      <ColourOption colour="bg-[#79b375]" setColour={props.setColour}/>
      <ColourOption colour="bg-[#f6e595]" setColour={props.setColour}/>
    </div>
  )
}

interface ColourOptionProps {
  colour: string;
  setColour: (newColour: string) => void;
}

function ColourOption(props: ColourOptionProps) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    props.setColour(props.colour)
  }

  return (
    <button 
      className={`h-6 aspect-square rounded-lg ${props.colour}`}
      onClick={(event) => handleClick(event)}
    >

    </button>
  )
}