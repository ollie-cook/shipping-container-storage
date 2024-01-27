import { MdEdit } from "react-icons/md";
import ColourPicker from "../ColourPicker";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface EditButtonProps {
  title: string;
  colour: string;
  textColour: string;
  updateContainer: (title?: string, colour?: string, text_colour?: string) => void;
}

export default function EditButton (props: EditButtonProps) { 
  return (
    <Popover>
      <PopoverTrigger>
        <button className="flex justify-center items-center">
          <MdEdit className="w-5 h-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 absolute -right-2">
        <form className="flex flex-col">
          <label htmlFor="display-title">Display title</label>
          <input id="display-title" type="text" className="border border-black pl-1 mt-1" value={props.title} onChange={(event)=> props.updateContainer(event.target.value)} />
          <label>Text Colour</label>
          <ColourPicker isTextColourPicker={true} colourOptions = {["bg-black", "bg-white"]} updateContainer={(title?: string, colour?: string, text_colour?: string) => props.updateContainer(title, colour, text_colour)}/>
          <label htmlFor="colour" className="mt-2">Colour</label>
          <ColourPicker isTextColourPicker={false} colourOptions = {["bg-[#cc4d4e]", "bg-[#166394]", "bg-[#00b4c3]", "bg-[#79b375]", "bg-[#f6e595]"]} updateContainer={(title?: string, colour?: string) => props.updateContainer(title, colour)}/>
        </form>
      </PopoverContent>
    </Popover>
    
  )
}