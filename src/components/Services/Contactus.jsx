import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Contactus = () => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    message: '',
    country: 'India',
  });

  const countryCodes = {
    India: '+91',
    // Add more countries if needed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number to accept only natural numbers 
    if (name === 'phoneNumber' && (!/^\d+$/.test(value))) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      country: selectedCountry,
      phoneNumber: countryCodes[selectedCountry] || '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('You must agree to the privacy policy to submit the form.');
      return;
    }
    setIsSubmitting(true);
  
    const serviceId = 'service_x3y9pmc';
    const templateId = 'template_z8jkb6n';
    const userId = 'YBPHtMkiDsFRGpeN4';
  
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phoneNumber,
      company: formData.company,
      message: formData.message,
      to_email: 'support@codecraftconsulting.in',
      cc_email: 'sanjit@codecraftconsulting.in',
    };
  
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Thank you for contacting us! Your message has been sent.');
        setIsSubmitting(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          company: '',
          message: '',
          country: 'India',
        });
        setAgreed(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again.');
        setIsSubmitting(false);
      });
  };
  

  return (
    <div>
      <div className="bg-white px-6 md:py-18 py-20 lg:px-72">
        <div style={{ boxShadow: '14px 14px 14px 14px rgba(0, 0, 0, 0.279)', padding: '1rem' }}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight pt-4 text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
          </div>
          <form className="mx-auto mt-10 max-w-xl sm:mt-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-md font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-md font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-md font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-md font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-md font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 cursor-pointer rounded-full p-px transition-colors duration-200'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm transition'
                    )}
                  />
                </Switch>
                <Switch.Label className="text-sm text-gray-600">
                  By selecting this, you agree to our{' '}
                  <Link to="/Privacy-Policy" className="font-semibold text-indigo-600">
                    privacy policy
                  </Link>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="my-10">
              <button
                type="submit"
                className={classNames(
                  'block w-full rounded-md px-4 py-3 text-center text-sm font-semibold text-white shadow-sm',
                  agreed && !isSubmitting ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
                )}
                disabled={!agreed || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
