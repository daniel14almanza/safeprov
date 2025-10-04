import React, { useEffect, useState } from 'react'
import { getProviders } from '../services/http'
import { Link } from 'react-router-dom';

const Providers = () => {

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders().then((data) => setProviders(data))
  }, []);

  return (
    <div className="w-full h-full p-6">
      
      {/* Add Button */}
      <Link to={'/dashboard/providers/add'}>
        <button className="cursor-pointer bg-primary-100 text-bg-200 text-sm px-3 py-1 rounded-md mb-4">
          Add New Provider
        </button>
      </Link>

      {/* Table wrapper with scroll */}
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full table-auto border-collapse bg-bg-200 text-gray-100 text-sm">
          
          {/* Table Header */}
          <thead className="bg-bg-300 text-left text-xs uppercase tracking-wider text-gray-300">
            <tr>
              <th className="px-4 py-3 min-w-[180px]">Legal Name</th>
              <th className="px-4 py-3 min-w-[150px]">Trade Name</th>
              <th className="px-4 py-3 min-w-[200px]">Website</th>
              <th className="px-4 py-3 w-[100px]">Country</th>
              <th className="px-4 py-3 w-[140px]">Annual Billing $</th>
              <th className="px-4 py-3 min-w-[180px]">Last Edited</th>
              <th className="px-4 py-3 min-w-[260px]">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-bg-300 text-sm">
            {providers.map(provider => (
              <tr key={provider.id} className="hover:bg-bg-300 transition-colors">
                <td className="px-4 py-3">{provider.legalName}</td>
                <td className="px-4 py-3">{provider.tradeName}</td>
                <td className="px-4 py-3">
                  <a href={provider.website} target="_blank" rel="noreferrer">
                    {provider.website}
                  </a>
                </td>
                <td className="px-4 py-3">{provider.country}</td>
                <td className="px-4 py-3">$ {provider.annualBillingUSD}</td>
                <td className="px-4 py-3">{provider.lastEdited}</td>
                
                {/* Actions cell */}
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link to={`/dashboard/providers/${provider.id}`}>
                      <button className="bg-primary-300 text-text-100 text-xs px-2 py-1 rounded-md">
                        D
                      </button>
                    </Link>
                    <Link to={`/dashboard/providers/${provider.id}/edit`}>
                      <button className="bg-primary-200 text-bg-200 text-xs px-2 py-1 rounded-md">
                        E
                      </button>
                    </Link>
                    <button className="bg-primary-100 text-bg-200 text-xs px-2 py-1 rounded-md">
                      DE
                    </button>
                    <button className="bg-accent-100 text-bg-200 text-xs px-2 py-1 rounded-md">
                      Screening
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Providers
