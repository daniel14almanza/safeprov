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

  const [errors, setErrors] = useState({});

  // Validation logic
  const validateField = (name, value) => {
    switch(name) {
      case 'legalName':
      case 'tradeName':
        if (!value) return 'This field is required';
        if (value.length > 255) return 'Maximum 255 characters';
        return '';
      case 'taxId':
        if (!value) return 'Tax ID is required';
        if (!/^\d{11}$/.test(value)) return 'Tax ID must be exactly 11 digits';
        return '';
      case 'phoneNumber':
        if (!value) return 'Phone number is required';
        if (!/^\+?[0-9\s\-]{7,}$/.test(value)) return 'Invalid phone number';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/^\S+@\S+\.\S+$/.test(value)) return 'Invalid email address';
        return '';
      case 'website':
        if (!value) return '';
        if (!/^https?:\/\/.+/.test(value)) return 'Invalid URL';
        return '';
      case 'annualBillingUSD':
        if (value === '' || value === null) return 'Annual billing is required';
        if (Number(value) < 0) return 'Must be a positive number';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'annualBillingUSD' ? Number(value) : value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submit
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert(`Validation error: ${Object.values(newErrors).join(', ')}`);
      return;
    }

    try {
      const payload = {
        legalName: formData.legalName,
        tradeName: formData.tradeName,
        taxId: formData.taxId,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        website: formData.website.trim() === '' ? null : formData.website,
        address: formData.address.trim() === '' ? null : formData.address,
        country: formData.country.trim() === '' ? null : formData.country,
        annualBillingUSD: formData.annualBillingUSD || 0
      };

      await addProvider(payload);

      alert('Provider created successfully!');
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
      setErrors({});
    } catch (err) {
      // Backend validation
      if (err.response) {
        const data = await err.response.json();
        if (data.errors) {
          const backendErrors = {};
          for (const key in data.errors) {
            backendErrors[key] = data.errors[key].join(', ');
          }
          setErrors(backendErrors);
          alert(`Validation error: ${Object.values(backendErrors).join(', ')}`);
          return;
        }
      }
      alert(err.message || 'Something went wrong while creating the provider.');
    }
  };

  return (
    <div className="w-[90%] mx-auto px-4 py-8">
      <div className="bg-bg-200 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-text-200">Add New Provider</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {['legalName','tradeName','taxId','phoneNumber','email'].map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-text-100">{field}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  />
                  {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {['website','address','country','annualBillingUSD'].map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-text-100">{field}</label>
                  <input
                    type={field === 'annualBillingUSD' ? 'number' : (field === 'website' ? 'url' : 'text')}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    min={field === 'annualBillingUSD' ? 0 : undefined}
                    placeholder={field === 'website' ? 'https://example.com' : ''}
                    className="w-full mt-1 px-3 py-2 rounded-md shadow-sm bg-bg-100 text-text-200 focus:ring-primary-100 focus:border-primary-100"
                  />
                  {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button type="submit" className="w-full md:w-1/2 py-2 px-4 bg-accent-100 text-bg-100 font-semibold rounded-md hover:brightness-120 transition">
              Add Provider
            </button>
            <Link to="/dashboard" className="w-full md:w-1/2 py-2 px-4 text-center bg-accent-200 text-bg-100 font-semibold rounded-md hover:brightness-120 transition flex items-center justify-center">
              Return
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderAdd;
