import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_os4gtws',
        'template_1iqja4l',
        formRef.current,
        '7KLf15x02seNLRcxt'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-transition">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
          Get in touch with the Aurora team
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="backdrop-blur-lg bg-black/40 rounded-2xl p-6 md:p-10 border border-white/10 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Send us a message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="backdrop-blur-lg bg-black/40 rounded-2xl p-6 md:p-10 border border-white/10 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-900/50 text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">msaaperals@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-900/50 text-blue-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+923495272553</p>
                <p className="text-gray-300">Mon - Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-900/50 text-blue-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-300">Islamabad</p>
                <p className="text-gray-300">faizabad</p>
                <p className="text-gray-300">Pakistan</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/msa-creative"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 bg-blue-900/50 hover:bg-blue-800/70 transition-colors text-blue-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://wa.me/923495272553"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 bg-green-700/50 hover:bg-green-700/80 transition-colors text-green-400"
              >
                {/* WhatsApp SVG icon */}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 5.568h-.001a8.933 8.933 0 01-4.548-1.252l-.327-.194-3.377.889.902-3.292-.213-.337A8.933 8.933 0 013.07 12.06c0-4.962 4.037-9 9-9 2.406 0 4.668.936 6.364 2.636A8.933 8.933 0 0121.07 12.06c0 4.962-4.037 9-9 9zm7.507-16.507A10.944 10.944 0 0012.07 0C5.405 0 .07 5.335.07 12c0 2.117.553 4.187 1.6 6.006L0 24l6.153-1.624A11.944 11.944 0 0012.07 24c6.665 0 12-5.335 12-12 0-3.193-1.247-6.197-3.512-8.557z"/>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
              <a
                href="https://www.fiverr.com/m_sharjeel884"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 bg-green-900/50 hover:bg-green-800/70 transition-colors text-green-400"
              >
                {/* Fiverr SVG icon */}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="12" fill="currentColor"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">fi</text>
                </svg>
                <span className="sr-only">Fiverr</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;