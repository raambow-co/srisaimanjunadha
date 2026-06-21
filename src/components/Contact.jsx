import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    { value: 'solar', label: 'Solar Rooftop Installation' },
    { value: 'ro', label: 'RO Water Purifier System' },
    { value: 'softener', label: 'Water Softener System' },
    { value: 'appliance', label: 'Authorized Appliance Repair' },
    { value: 'amc', label: 'Annual Maintenance Contract (AMC)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.location.trim()) tempErrors.location = "Your City/Location is required";
    if (!formData.service) tempErrors.service = "Please select a service";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Formspree Integration
    // IMPORTANT: Replace "xoqgldqy" with your actual Formspree Form ID
    const formspreeFormId = "xkolwbkq";

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Location: formData.location,
          Service: formData.service,
          Message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          location: '',
          service: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setErrors({
          submit: errorData.error || "Form submission failed. Please check your credentials or try again later."
        });
      }
    } catch (err) {
      setErrors({
        submit: "An internet connection or network error occurred. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-brand-green/5 glow-orb"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-orange/5 glow-orb"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Contact Info & Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-extrabold text-brand-green tracking-[0.2em] uppercase">
                CONTACT INFORMATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3 mb-4">
                Get in Touch With Us
              </h2>
              <p className="text-brand-gray text-sm leading-relaxed">
                Have an inquiry or want to request a site inspection? Contact our support team or fill out the form, and we will get back to you within 24 hours.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-white border border-gray-150 p-6 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm mb-1">Call Support Helpline</h4>
                  <a href="tel:+919949144551" className="text-brand-green font-bold text-sm block hover:underline">
                    +91 99491 44551
                  </a>
                  <span className="text-xs text-brand-gray">Alternative: +91 92480 44551</span>
                </div>
              </div>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm mb-1">Email Inquiries</h4>
                  <a href="mailto:srisaimanjunadhaenterprises@gmail.com" className="text-brand-green font-bold text-sm block hover:underline break-all">
                    srisaimanjunadhaenterprises@gmail.com
                  </a>
                  <span className="text-xs text-brand-gray">Support: srisaimanjunadhaenterprises@gmail.com</span>
                </div>
              </div>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm mb-1">Registered Office Address</h4>
                  <p className="text-brand-gray text-xs leading-relaxed">
                    Sri Sai Manjunadha Enterprises, Door No: 22B-5-7, Kanukolanu Vari Street, Powerpeta, Station Road, opp. K S Towers, Eluru, Andhra Pradesh - 534002
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm mb-1">Working Hours</h4>
                  <p className="text-brand-gray text-xs leading-relaxed">
                    Monday - Saturday: 09:00 AM - 08:00 PM<br />
                    Sunday: Emergency Solar Support Only
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl border border-gray-150 overflow-hidden shadow-sm aspect-video w-full bg-gray-100">
              <iframe
                title="Sri Sai Manjunadha Enterprises Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.454238515082!2d81.10505081534015!3d16.712482900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3614ce47902335%3A0xeedaf7fd01f73b9d!2sSri%20Sai%20Manjunadha%20Enterprises!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-150 p-8 md:p-12 rounded-3xl shadow-lg relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  // Success State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle2 size={64} className="text-brand-green mb-6 animate-bounce" />
                    <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight mb-3">
                      Inquiry Submitted Successfully!
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed max-w-md mb-8">
                      Thank you for contacting Sri Sai Manjunadha Enterprises. Our technical support representative has received your request and will reach out to you at your phone number shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-brand-green text-white font-bold text-xs shadow-md hover:bg-brand-green/95 transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  // Form State
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-gray-100 pb-4 mb-6">
                      <h3 className="text-xl font-extrabold text-brand-dark tracking-tight">
                        Send An Instant Message
                      </h3>
                      <p className="text-brand-gray text-xs mt-1">
                        Select your requested service and we will contact you immediately.
                      </p>
                    </div>

                    {errors.submit && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center shadow-sm">
                        <AlertCircle size={16} className="mr-2 shrink-0 text-red-600" />
                        <span>{errors.submit}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-xs font-bold text-brand-dark mb-1.5 uppercase tracking-wide">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`px-4 py-3 rounded-xl bg-brand-light border focus:outline-none focus:ring-2 transition-all ${
                            errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-blue focus:ring-brand-blue/25'
                          }`}
                          placeholder="Enter your name"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-xs font-semibold mt-1 flex items-center">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="text-xs font-bold text-brand-dark mb-1.5 uppercase tracking-wide">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`px-4 py-3 rounded-xl bg-brand-light border focus:outline-none focus:ring-2 transition-all ${
                            errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-blue focus:ring-brand-blue/25'
                          }`}
                          placeholder="10-digit number"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs font-semibold mt-1 flex items-center">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Location */}
                      <div className="flex flex-col">
                        <label htmlFor="location" className="text-xs font-bold text-brand-dark mb-1.5 uppercase tracking-wide">
                          Location (City / Town)
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`px-4 py-3 rounded-xl bg-brand-light border focus:outline-none focus:ring-2 transition-all ${
                            errors.location ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-blue focus:ring-brand-blue/25'
                          }`}
                          placeholder="e.g. Eluru, Bhimavaram"
                        />
                        {errors.location && (
                          <span className="text-red-500 text-xs font-semibold mt-1 flex items-center">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.location}
                          </span>
                        )}
                      </div>

                      {/* Requested Service */}
                      <div className="flex flex-col">
                        <label htmlFor="service" className="text-xs font-bold text-brand-dark mb-1.5 uppercase tracking-wide">
                          Requested Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className={`px-4 py-3.5 rounded-xl bg-brand-light border focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                            errors.service ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-blue focus:ring-brand-blue/25'
                          }`}
                        >
                          <option value="">Select a service...</option>
                          {services.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <span className="text-red-500 text-xs font-semibold mt-1 flex items-center">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.service}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-xs font-bold text-brand-dark mb-1.5 uppercase tracking-wide">
                        Your Message / Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`px-4 py-3 rounded-xl bg-brand-light border focus:outline-none focus:ring-2 transition-all ${
                          errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-blue focus:ring-brand-blue/25'
                        }`}
                        placeholder="Tell us about your requirements (e.g. 3BHK rooftop installation details or RO capacity)..."
                      ></textarea>
                      {errors.message && (
                        <span className="text-red-500 text-xs font-semibold mt-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 rounded-xl bg-brand-green px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-brand-green/95 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Submit Free Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
