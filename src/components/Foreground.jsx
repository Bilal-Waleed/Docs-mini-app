import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: "This is the background color of the card",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "This is the background color of the card",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            desc: "This is the background color of the card",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "This is the background color of the card",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload Now",
                tagColor: "green"
            }
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-full z[3] p-5 flex flex-wrap gap-10'>
        {data.map((data,index) => (
            <Card key={index} data={data} ref={ref}/>
        ))}
    </div>
  )
}

export default Foreground