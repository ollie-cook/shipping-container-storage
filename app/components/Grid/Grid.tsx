'use client'

import { useState, useEffect } from "react"
import ShippingContainer from "../ShippingContainer"
import { IoIosAddCircleOutline } from "react-icons/io";
import Cookies from "js-cookie";

export default function Grid() {
  const [containers, setContainers] = useState([{id: 1, title: "Shipping Container", colour: "bg-[#cc4d4e]"}])

  useEffect(() => {
    if (Cookies.get('shipping-containers') == undefined) {
      Cookies.set('shipping-containers', JSON.stringify(containers))
      console.log('no cookies')
    } else {
      setContainers(JSON.parse(Cookies.get('shipping-containers') || ''))
      console.log(JSON.parse(Cookies.get('shipping-containers') || ''))
      console.log('cookies')
    }
  }, [])

  useEffect(() => {
    //set the cookie
    console.log("containers updated")
    console.log(containers)
    Cookies.set('shipping-containers', JSON.stringify(containers))
  }, [containers])

  return (
    <div className="min-h-screen grid grid-cols-10 content-end px-6">
      {
        containers.map(container => (
          <ShippingContainer title={container.title} colour={container.colour} className="col-span-5" key={container.id} />
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
    //Cookies.set('shipping-containers', 'test')

    const newContainer = {
      id: props.containers.length + 1,
      title: "Shipping Container",
      colour: "bg-[#cc4d4e]"
    }

    props.onClick([...props.containers, newContainer])
  }

  return (
    <div className="w-full aspect-[4.7] flex justify-center items-center col-span-5">
      <button onClick={handleClick}>
        <IoIosAddCircleOutline className = "h-16 w-16" />
      </button>
    </div>
  )
}