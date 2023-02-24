import SendIcon from '@mui/icons-material/Send';
import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-screen h-full justify-center   bg-gray-100 flex  flex-col  p-2 '>
      <h1 className='text-6xl justify-center flex  text-indigo-500 text-extrabold'>Newsletter</h1>
      <p className='flex justify-center text-  text-xl m-2 text-bold'>Get timely Updates from your favorite Products</p>
      <div className='flex justify-center mb-2'>
        <input className='w-2/4 rounded-l-sm p-1  text-blue-700  text-extrabold ' placeholder='Your Email here:' type="email" ></input>
        <div className=' bg-blue-700 cursor-pointer rounded-r-sm p-1 text-white'>
          <button><SendIcon></SendIcon></button>
        </div>

      </div>
    </div>
  )
}

export default Newsletter
