import React, { useEffect, useState } from 'react'
import { deleteProvider, getProviders } from '../services/http'
import { Link } from 'react-router-dom';

const Providers = () => {

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders().then((data) => setProviders(data))
  }, []);


  const handleDeleteProvider = async (id) => {
    // 1. Implement the confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this provider? This action cannot be undone.");

    // 2. Proceed only if the user confirms
    if (isConfirmed) {
        // Optimistically remove from UI
        const newProviders = providers.filter((provider) => provider.id !== id); // Use !== for strict comparison
        setProviders(newProviders);

        try {
            // Send the request to the server
            await deleteProvider(id);
            // Optional: Show a success message if needed
        } catch (error) {
            // 3. Handle failure: Rollback state and show error
            console.error("Failed to delete provider on server:", error);
            // Re-fetch or re-add the deleted item to the state to rollback the UI change
            getProviders().then((data) => setProviders(data));
            window.alert("Deletion failed on the server. Please try again.");
        }
    }
};

  return (
    <div className="w-full h-full p-6">
      
      {/* Add Button */}
      <Link to={'/dashboard/providers/add'}>
        <button className="cursor-pointer bg-primary-100 text-bg-200 text-sm px-3 py-1 rounded-md mb-4">
          &#x2B; Add New Provider
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
                      <button className="bg-primary-300 text-text-100 text-xs px-2 py-1 rounded-md cursor-pointer">
                        &#x1F50D;
                      </button>
                    </Link>
                    <Link to={`/dashboard/providers/${provider.id}/edit`}>
                      <button className="bg-primary-200 text-bg-200 text-xs px-2 py-1 rounded-md cursor-pointer">
                        &#x270F;
                      </button>
                    </Link>
                    <button onClick={() => handleDeleteProvider(provider.id)} className="bg-primary-100 text-bg-200 text-xs px-2 py-1 rounded-md cursor-pointer">
                      &#x1F5D1;
                    </button>
                    <button className="bg-accent-100 text-bg-200 text-xs px-2 py-1 rounded-md cursor-pointer">
                      &#x26A0;
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
