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
  updateContainer: (title?: string, colour?: string) => void;
}

export default function EditButton (props: EditButtonProps) { 
  return (
    <Popover>
      <PopoverTrigger>
        <button className="flex justify-center items-center">
          <MdEdit className="w-6 h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 absolute -right-2">
        <form className="flex flex-col">
          <label htmlFor="display-title">Display title</label>
          <input id="display-title" type="text" className="border border-black pl-1 mt-1" value={props.title} onChange={(event)=> props.updateContainer(event.target.value)} />
          <label htmlFor="colour" className="mt-2">Colour</label>
          <ColourPicker colour={props.colour} updateContainer={(title?: string, colour?: string) => props.updateContainer(title, colour)}/>
        </form>
      </PopoverContent>
    </Popover>
    
  )
}