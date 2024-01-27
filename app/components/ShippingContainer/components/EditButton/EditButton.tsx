import { MdEdit } from "react-icons/md";
import ColourPicker from "../ColourPicker";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface EditButtonProps {
  title: string;
  setTitle: (newTitle: string) => void;
  colour: string;
  setColour: (newColour: string) => void;
}

export default function EditButton (props: EditButtonProps) { 
  return (
    <Popover>
      <PopoverTrigger className="absolute top-2 right-2">
        <button>
          <MdEdit className="w-6 h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 absolute -right-2">
        <form className="flex flex-col">
          <label htmlFor="display-title">Display title</label>
          <input id="display-title" type="text" className="border border-black pl-1 mt-1" value={props.title} onChange={(event)=> props.setTitle(event.target.value)} />
          <label htmlFor="colour" className="mt-2">Colour</label>
          <ColourPicker colour={props.colour} setColour={props.setColour}/>
        </form>
      </PopoverContent>
    </Popover>
    
  )
}