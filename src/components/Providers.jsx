import React from 'react'

const Providers = () => {
  return (
    <>
      <div className='w-[85%] p-6 m-1 '>
        <table className="w-full table-auto border-collapse overflow-hidden rounded-xl shadow-md bg-bg-200 text-gray-100">
          <thead className="bg-bg-300 text-left text-sm tracking-wider text-gray-300">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bg-300">
            <tr className="hover:bg-bg-300 transition-colors">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">Daniel</td>
              <td className="px-4 py-3">957</td>
              <td className="px-4 py-3 space-x-2">
                <button className="bg-primary-300 text-text-200 text-sm px-3 py-1 rounded-md">Details</button>
                <button className="bg-primary-200 text-text-200 text-sm px-3 py-1 rounded-md">Edit</button>
                <button className="bg-primary-100 text-text-200 text-sm px-3 py-1 rounded-md">Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-bg-300 transition-colors">
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">Javier</td>
              <td className="px-4 py-3">955</td>
              <td className="px-4 py-3 space-x-2">

                <button className="bg-primary-300 text-text-200 text-sm px-3 py-1 rounded-md">Details</button>
                <button className="bg-primary-200 text-text-200 text-sm px-3 py-1 rounded-md">Edit</button>
                <button className="bg-primary-100 text-text-200 text-sm px-3 py-1 rounded-md">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Providers