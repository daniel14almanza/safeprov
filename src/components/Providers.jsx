import React, { useEffect, useState } from 'react';
import { deleteProvider, getProviders } from '../services/http';
import { Link } from 'react-router-dom';
import ScreeningModal from './ScreeningModal';

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    getProviders().then((data) => setProviders(data));
  }, []);

  const handleDeleteProvider = async (id) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this provider? This action cannot be undone.'
    );

    if (isConfirmed) {
      // Optimistically remove from UI
      const newProviders = providers.filter((provider) => provider.id !== id);
      setProviders(newProviders);

      try {
        await deleteProvider(id);
      } catch (error) {
        console.error('Failed to delete provider on server:', error);
        getProviders().then((data) => setProviders(data));
        window.alert('Deletion failed on the server. Please try again.');
      }
    }
  };

  return (
    <div className="w-full h-full p-6">

      {/* Help div above Add button */}
      <div className="mb-2 p-2 text-text-200">
        <p>🔍 : Details | ✏️ : Edit | 🗑️ : Delete | ⚠️ : Screening</p>
      </div>

      {/* Add Button */}
      <Link to={'/dashboard/providers/add'}>
        <button className="cursor-pointer bg-primary-100 text-bg-200 text-sm px-3 py-1 rounded-md mb-4 hover:bg-primary-200 transition-colors">
          &#x2B; Add New Provider
        </button>
      </Link>

      {/* Table wrapper with some separation for scrollbar */}
      <div className="overflow-x-auto rounded-xl shadow-md pb-4"> {/* pb-4 adds space below scrollbar */}
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
              <tr key={provider.id} className="hover:bg-bg-300 transition-colors cursor-pointer">
                <td className="px-4 py-3">{provider.legalName}</td>
                <td className="px-4 py-3">{provider.tradeName}</td>
                <td className="px-4 py-3">
                  <a href={provider.website} target="_blank" rel="noreferrer" className="text-accent-100 hover:underline">
                    {provider.website}
                  </a>
                </td>
                <td className="px-4 py-3">{provider.country}</td>
                <td className="px-4 py-3">
                  {/* Format as USD currency */}
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(provider.annualBillingUSD)}
                </td>
                <td className="px-4 py-3">
                  {/* Format as readable date + hour */}
                  {provider.lastEdited ? new Date(provider.lastEdited).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  }) : '-'}
                </td>
                <td className="px-4 py-3">
                  {/* Actions remain unchanged */}
                  <div className="flex flex-wrap gap-2">
                    <Link to={`/dashboard/providers/${provider.id}`}>
                      <button className="bg-primary-300 text-text-100 text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-primary-400 transition">
                        &#x1F50D;
                      </button>
                    </Link>
                    <Link to={`/dashboard/providers/${provider.id}/edit`}>
                      <button className="bg-primary-200 text-bg-200 text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-primary-300 transition">
                        &#x270F;
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteProvider(provider.id)}
                      className="bg-primary-100 text-bg-200 text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-red-500 transition"
                    >
                      &#x1F5D1;
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProvider(provider);
                        setIsModalOpen(true);
                      }}
                      className="bg-accent-100 text-bg-200 text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-accent-200 transition"
                    >
                      &#x26A0;
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Screening Modal */}
      {isModalOpen && selectedProvider && (
        <ScreeningModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          provider={selectedProvider}
        />
      )}
    </div>
  );
};

export default Providers;
