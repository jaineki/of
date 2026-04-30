// src/components/Contact.tsx
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Demo success
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'selovkszaskzx@gmail.com', href: 'mailto:selovkszaskzx@gmail.com'' },
    { icon: Phone, label: 'Phone', value: '+639243901969', href: 'tel:+639243901969' },
    { icon: MapPin, label: 'Location', value: 'Cebu, PH', href: '#' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always interested in hearing about new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <info.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
