import moment from 'moment/moment'
import React, { useState } from 'react'
import { VscClose, VscCheck, VscAdd } from 'react-icons/vsc'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
function NewMemory() {
  const [favorite, setFavorite] = useState(true)
  const [isPublic, setIsPublic] = useState(true)
  const [storyCount, setStoryCount] = useState(0)
  
  return (
    <>
      <div className="h-full max-w-2xl mx-auto bg-white">
        <nav className="flex items-center justify-between w-full p-4">
          <VscClose />
          <span className="text-base leading-6 uppercase sm:text-2xl sm:px-6">{moment().format('ddd ll')}</span>
          <VscCheck />
        </nav>
        
        <form action="">
          <div className="bg-[#EDEDED] h-80 sm:h-[427px] relative flex justify-center items-center">
            <label htmlFor="file" className="sr-only">Upload Image</label>
            <input type="file" name="image" id="upload" className="hidden"/>
            <button id="upload-icon" className="bg-[#C0C0C0] sm:p-8 p-6 border-0 flex justify-center items-center" type="button">
              <VscAdd className="text-4xl text-white sm:text-6xl" />
            </button>
          </div>

          <div className="mx-6 border-0 border-[#EDEDED] border-b-2 pt-4 pb-2 border-solid">
            <label htmlFor="title" className="sr-only">Title</label>
            <input type="text" name="title" id="title" placeholder="Title" className="text-2xl font-bold text-center border-0 sm:text-4xl placeholder:text-2xl sm:placeholder:text-4xl placeholder:ml-[45%] placeholder:mr-[45%] placeholder:tracking-wider w-full " />
          </div>
          
          <div className="flex justify-between mx-6 border-[#EDEDED] border-b-2 py-4 border-solid border-0">
            <button
              type="button"
              className="bg-white border-0"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? <BsHeartFill className="text-2xl text-red-600 sm:text-4xl" /> : <BsHeart className="text-2xl sm:text-4xl" />}
            </button>
            <div className="flex gap-x-2">
              <p className="text-base">Share with public</p>
              <button
                type="button"
                className="relative w-4 h-4 bg-white border-black border-[0.5px]"
                onClick={() => setIsPublic(!isPublic)}
              >
                {isPublic && <VscCheck className="absolute bottom-[-2px] text-4xl text-green-500 left-[-6px]" />}
              </button>
            </div>
          </div>

          <div className="py-2 m-6 text-base text-center bg-white shadow-box rounded-xl">
            <p>What are you grateful for today?</p>
          </div>

          <div className="mx-6">
            <label htmlFor="description" className="sr-only">Description</label>
            <textarea name="description" id="description" placeholder="Share your story.." className="w-full mx-auto text-base min-h-[200px] max-h-max border-0 outline-none"></textarea>
            <p className="">{storyCount}/100</p>
          </div>
          
        </form>
        
      </div>
    </>
    
  )
}

export default NewMemory