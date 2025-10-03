import React, { useEffect, useState } from 'react'
import { getProviders } from '../services/http'

const Providers = () => {

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders().then((data) => setProviders(data))
  }, []);

  console.log(providers);

  return (
    <>
      <div className='w-[85%] p-6 m-1 '>
        <table className="w-full table-auto border-collapse overflow-hidden rounded-xl shadow-md bg-bg-200 text-gray-100">
          <thead className="bg-bg-300 text-left text-sm tracking-wider text-gray-300">
            <tr>
              <th className="px-4 py-3">Legal Name</th>
              <th className="px-4 py-3">Trade Name</th>
              <th className="px-4 py-3">Website</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Anual Billing $</th>
              <th className="px-4 py-3">Last Edited</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bg-300">
            {providers.map(provider => (
              <tr key={provider.id} className="hover:bg-bg-300 transition-colors">
                <td className="px-4 py-3">{provider.legalName}</td>
                <td className="px-4 py-3">{provider.tradeName}</td>
                <td className="px-4 py-3">
                  <a href={provider.website} target='_blank'>
                    {provider.website}
                  </a>
                </td>
                <td className="px-4 py-3">{provider.country}</td>
                <td className="px-4 py-3">$ {provider.annualBillingUSD}</td>
                <td className="px-4 py-3">{provider.lastEdited}</td>
                <td className="px-4 py-3 space-x-2">
                  <button className="cursor-pointer bg-primary-300 text-text-100 text-sm px-3 py-1 rounded-md">Details</button>
                  <button className="cursor-pointer bg-primary-200 text-bg-200 text-sm px-3 py-1 rounded-md">Edit</button>
                  <button className="cursor-pointer bg-primary-100 text-bg-200 text-sm px-3 py-1 rounded-md">Delete</button>
                  <button className="cursor-pointer bg-accent-100 text-bg-200 text-sm px-3 py-1 rounded-md">Screenning</button>
                </td>
              </tr>
              ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Providers