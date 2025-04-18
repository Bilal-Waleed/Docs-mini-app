import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({data, ref}) => {
  return (
    <motion.div drag dragConstraints={ref} whileDrag={{scale: 1.1}} dragElastic={0.5} className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm mt-5 leading-tight font-semibold'>
            {data.desc}
        </p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between mb-2 py-3 px-8'>
                <h4>{data.filesize}</h4>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdClose/> : <LuDownload size=".7rem" color='#fff'/>}
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center text-semibold`}>
                        <h3>{data.tag.tagTitle}</h3>
                    </div>
                )
            }
        </div>
    </motion.div>
  )
}

export default Card