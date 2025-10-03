import React, { useState } from 'react';
import { addProvider } from '../services/http';
import { Link } from 'react-router-dom';

const ProviderAdd = () => {
  const [formData, setFormData] = useState({
    legalName: '',
    tradeName: '',
    taxId: '',
    phoneNumber: '',
    email: '',
    website: '',
    address: '',
    country: '',
    annualBillingUSD: 0,
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'annualBillingUSD' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await addProvider(formData);
      setSuccess(true);
      setFormData({
        legalName: '',
        tradeName: '',
        taxId: '',
        phoneNumber: '',
        email: '',
        website: '',
        address: '',
        country: '',
        annualBillingUSD: 0,
      });
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="w-[90%] mx-auto px-4 py-8">
      <div className="bg-bg-200 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-text-200">Add New Provider</h2>

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-400 rounded">
            Provider created successfully!
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div>
                <label htmlFor="legalName" className="block text-sm font-medium text-text-100">Legal Name</label>
                <input
                  type="text"
                  id="legalName"
                  name="legalName"
                  value={formData.legalName}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  required
                  />
              </div>

              <div>
                <label htmlFor="tradeName" className="block text-sm font-medium text-text-100">Trade Name</label>
                <input
                  type="text"
                  id="tradeName"
                  name="tradeName"
                  value={formData.tradeName}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  required
                  />
              </div>

              <div>
                <label htmlFor="taxId" className="block text-sm font-medium text-text-100">Tax ID</label>
                <input
                  type="text"
                  id="taxId"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  required
                  />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-text-100">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  required
                  />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-100">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  required
                  />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-text-100">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-text-100">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-text-100">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  />
              </div>

              <div>
                <label htmlFor="annualBillingUSD" className="block text-sm font-medium text-text-100">Annual Billing (USD)</label>
                <input
                  type="number"
                  id="annualBillingUSD"
                  name="annualBillingUSD"
                  value={formData.annualBillingUSD}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  required
                  />
              </div>

            </div>
            <div className="pt-2 flex">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-accent-100 text-bg-100 font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Add Provider
              </button>
              <Link to={"/dashboard"} >
              <button
                type="submit"
                className="w-full mx-6 py-2 px-4 bg-accent-200 text-bg-100 font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Return
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderAdd;
