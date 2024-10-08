// src/components/LoginPage.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LoginPage.css';

const countries = [
  { code: '+1', name: 'United States', currency: 'USD' },
  { code: '+44', name: 'United Kingdom', currency: 'GBP' },
  { code: '+91', name: 'India', currency: 'INR' },
  // Add more countries as needed
];

const priceMap = {
  USD: '$100',
  GBP: '£100',
  INR: '₹100',
  // Add more currency formats as needed
};

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (e) => {
    const selected = countries.find(country => country.code === e.target.value);
    setSelectedCountry(selected);
    setPhoneNumber(selected.code); // Update phone number input with country code
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const placeholderPrice = priceMap[selectedCountry.currency] || '$100'; // Default to USD if currency not found

  return (
    <div className="container">
      <h1>{t('login.title')}</h1>
      <label>
        {t('login.phoneNumber')}
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <select onChange={handleCountryChange} value={selectedCountry.code}>
        {countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        {/* Add more languages as needed */}
      </select>
      <div>
        <p>{t('login.currency', { currency: selectedCountry.currency })}</p>
        <p className="price">
          {placeholderPrice} {/* Display the price based on the selected currency */}
        </p>
      </div>
      <button>{t('login.submit')}</button>
    </div>
  );
};

export default LoginPage;
