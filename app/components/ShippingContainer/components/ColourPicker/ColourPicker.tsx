'use client'

import { useState } from "react"

interface ColourPickerProps {
  colour?: string;
  updateContainer: (title?: string, colour?: string) => void;
}

export default function ColourPicker(props: ColourPickerProps) {
  

  return (
    <div className="flex mt-1 gap-2">
      <ColourOption colour="bg-[#cc4d4e]" updateContainer={props.updateContainer} />
      <ColourOption colour="bg-[#166394]" updateContainer={props.updateContainer}/>
      <ColourOption colour="bg-[#00b4c3]" updateContainer={props.updateContainer}/>
      <ColourOption colour="bg-[#79b375]" updateContainer={props.updateContainer}/>
      <ColourOption colour="bg-[#f6e595]" updateContainer={props.updateContainer}/>
    </div>
  )
}

interface ColourOptionProps {
  colour: string;
  updateContainer: (title?: string, colour?: string) => void;
}

function ColourOption(props: ColourOptionProps) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    props.updateContainer(undefined, props.colour)
  }

  return (
    <button 
      className={`h-6 aspect-square rounded-lg ${props.colour}`}
      onClick={(event) => handleClick(event)}
    >

    </button>
  )
}