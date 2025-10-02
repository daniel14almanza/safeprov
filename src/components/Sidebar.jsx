import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[15%] h-full bg-unset p-4 text-white'>
      <div className='border-r-2 border-bg-300 my-2 h-full'>
        <div className='m-4 h-12 w-12 rounded-4xl bg-bg-300 flex justify-center items-center'>
          <p className='text-2xl'>&#128373;</p>
        </div>
        <p className="mb-2">Daniel Almanza</p>
        <a href="#" className="block mb-2">Dashboard</a>
        <a href="#" className="block mb-2">Providers</a>
        <button className="mt-4 w-[80%] bg-bg-200 text-text-100 px-2 py-1 rounded">Log out</button>
      </div>
    </div>
  )
}

export default Sidebar