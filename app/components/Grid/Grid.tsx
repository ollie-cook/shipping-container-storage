'use client'

import { useState, useEffect } from "react"
import ShippingContainer from "../ShippingContainer"
import { IoIosAddCircleOutline } from "react-icons/io";
import Cookies from "js-cookie";

export default function Grid() {
  const [containers, setContainers] = useState<any[]>([])

  useEffect(() => {
    if (Cookies.get('shipping-containers') == undefined) {
      const guid = crypto.randomUUID()
      setContainers([{id: guid, title: "Shipping Container", colour: "bg-[#cc4d4e]", text_colour: "text-black"}])
      Cookies.set('shipping-containers', JSON.stringify(containers))
    } else {
      setContainers(JSON.parse(Cookies.get('shipping-containers') || ''))
    }
  }, [])

  useEffect(() => {
    //set the cookie
    Cookies.set('shipping-containers', JSON.stringify(containers))
  }, [containers])

  const updateContainer = (newContainer: any, deleteContainer?: boolean) => {
    console.log("go there" + deleteContainer)
    if (deleteContainer != true) {
      const newContainers = containers.map(container => 
        container.id === newContainer.id ? newContainer : container
      )
      setContainers(newContainers);
    } else {
      console.log("delete")
      const newContainers = containers.filter(container => container.id !== newContainer.id)
      setContainers(newContainers);
    }
  }

  return (
    <div className="w-full flex flex-wrap-reverse justify-end content-end px-6">
      {
        containers.map(container => (
          <ShippingContainer container={container} update={(container, deleteContainer) => updateContainer(container, deleteContainer)} className="w-1/2 shrink-0" key={container.id} />
        ))
      }
      <AddShippingContainer onClick={(value) => setContainers(value)} containers={containers} />
    </div>
  )
}

interface AddShippingContainerProps {
  containers: any;
  onClick: (containers: any) => void;
}

function AddShippingContainer(props: AddShippingContainerProps) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const guid = crypto.randomUUID()

    const newContainer = {
      id: guid,
      title: "Shipping Container",
      colour: "bg-[#cc4d4e]",
      text_colour: "text-black"
    }

    props.onClick([...props.containers, newContainer])
  }

  return (
    <div className=" aspect-[4.7] flex justify-center items-center w-1/2">
      <button onClick={handleClick}>
        <IoIosAddCircleOutline className = "h-16 w-16" />
      </button>
    </div>
  )
}