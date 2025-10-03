import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProviderById } from '../services/http';

const ProviderDetails = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function fetchProvider() {
      try {
        const data = await getProviderById(id);
        setProvider(data);
      } catch (err) {
        alert('Failed to fetch provider details.');
      }
    }

    fetchProvider();
  }, [id]);

  if (!provider) {
    return <div className="text-center mt-10 text-text-200">Loading provider details...</div>;
  }

  return (
    <div className="w-[90%] mx-auto px-4 py-8">
      <div className="bg-bg-200 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-text-200">Provider Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-100">Legal Name</label>
              <input
                type="text"
                value={provider.legalName}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-100">Trade Name</label>
              <input
                type="text"
                value={provider.tradeName}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-100">Tax ID</label>
              <input
                type="text"
                value={provider.taxId}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-100">Phone Number</label>
              <input
                type="text"
                value={provider.phoneNumber}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-100">Email</label>
              <input
                type="email"
                value={provider.email}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-100">Website</label>
              <input
                type="text"
                value={provider.website}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-100">Address</label>
              <input
                type="text"
                value={provider.address}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-100">Country</label>
              <input
                type="text"
                value={provider.country}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-100">Annual Billing (USD)</label>
              <input
                type="number"
                value={provider.annualBillingUSD}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-bg-100 text-text-200 border border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Return Button */}
        <div className="mt-8">
          <Link
            to="/dashboard"
            className="w-full md:w-1/2 py-2 px-4 text-center bg-accent-200 text-bg-100 font-semibold rounded-md hover:brightness-110 transition flex items-center justify-center"
          >
            Return
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
