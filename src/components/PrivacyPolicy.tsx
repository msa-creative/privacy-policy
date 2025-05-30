import React, { useState } from 'react';
import { Shield, Lock, Eye, FileText, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Shield className="w-6 h-6" />,
      content: `
        <p>Last Updated: ${new Date().toLocaleDateString()}</p>
        <p>Welcome to Aurora New Tab ("we," "our," or "us"). We are committed to protecting your privacy and providing you with a secure experience when using our Chrome Extension.</p>
        <p>This Privacy Policy explains how we collect, use, and safeguard your information when you use the Aurora New Tab Chrome Extension. Please read this Privacy Policy carefully. By using Aurora New Tab, you consent to the data practices described in this statement.</p>
      `
    },
    {
      id: 'data-collection',
      title: 'Data Collection & Storage',
      icon: <Lock className="w-6 h-6" />,
      content: `
        <h4 class="text-lg font-semibold mb-2">Local Storage</h4>
        <p>Aurora New Tab primarily stores your data locally on your device using browser storage technologies:</p>
        <ul class="list-disc pl-5 mb-3">
          <li>User preferences (theme settings, widget layouts, etc.)</li>
          <li>To-do lists and notes</li>
          <li>Bookmarks and favorites</li>
          <li>Dashboard configuration</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Optional Cloud Sync</h4>
        <p>If you choose to enable cloud synchronization, we may use Google OAuth to authenticate and store your settings in the cloud, allowing you to access your personalized dashboard across devices. This is entirely optional and requires your explicit authorization.</p>
        
        <h4 class="text-lg font-semibold mb-2">Third-Party Services</h4>
        <p>Aurora New Tab may connect to third-party services to provide certain features:</p>
        <ul class="list-disc pl-5">
          <li>Weather data (from weather service APIs)</li>
          <li>Quote services</li>
          <li>Wallpaper services</li>
        </ul>
        <p>These services may collect anonymous usage data according to their own privacy policies.</p>
      `
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <Eye className="w-6 h-6" />,
      content: `
        <p>We use the information we collect solely to provide, maintain, and improve Aurora New Tab:</p>
        <ul class="list-disc pl-5">
          <li>To personalize your dashboard experience</li>
          <li>To save your preferences and settings</li>
          <li>To synchronize your data across devices (if you enable cloud sync)</li>
          <li>To troubleshoot issues and improve functionality</li>
        </ul>
        <p>We do not use your data for advertising purposes, nor do we sell or rent your personal information to third parties.</p>
      `
    },
    {
      id: 'user-control',
      title: 'User Control Over Data',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>You have full control over your data:</p>
        <ul class="list-disc pl-5">
          <li><strong>Local Data:</strong> You can clear all locally stored data through your browser settings or the extension's reset option.</li>
          <li><strong>Cloud Sync:</strong> If you've enabled cloud synchronization, you can disconnect at any time through the extension settings.</li>
          <li><strong>Third-Party Connections:</strong> You can disable connections to third-party services through the extension settings.</li>
        </ul>
        <p>If you uninstall the extension, all locally stored data will be removed from your device.</p>
      `
    },
    {
      id: 'security',
      title: 'Security Practices',
      icon: <Lock className="w-6 h-6" />,
      content: `
        <p>We implement appropriate security measures to protect your personal information:</p>
        <ul class="list-disc pl-5">
          <li>All cloud synchronization is performed over secure HTTPS connections</li>
          <li>We use industry-standard OAuth 2.0 protocols for authentication</li>
          <li>We regularly review our collection and storage practices to guard against unauthorized access</li>
        </ul>
        <p>While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security. No method of transmission over the Internet or electronic storage is 100% secure.</p>
      `
    },
    {
      id: 'cookies',
      title: 'Cookies & Similar Technologies',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>Aurora New Tab uses local storage and similar technologies to enhance your experience:</p>
        <ul class="list-disc pl-5">
          <li>We use browser storage to save your preferences and settings</li>
          <li>We do not use tracking cookies</li>
          <li>Third-party services we connect to may use their own cookies according to their policies</li>
        </ul>
        <p>You can clear stored data through your browser settings at any time.</p>
      `
    },
    {
      id: 'policy-changes',
      title: 'Changes to This Policy',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      `
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
        <p>Email: msaaperals@gmail.com</p>
        <a href="https://portfolio-msaapperals-projects.vercel.app/" target="_blank" class="text-blue-500"><p>Website</p></a>
      `
    },
    {
      id: 'faqs',
      title: 'Frequently Asked Questions',
      icon: <HelpCircle className="w-6 h-6" />,
      content: `
        <div class="space-y-4">
          <div>
            <h4 class="text-lg font-semibold">Does Aurora New Tab collect my browsing history?</h4>
            <p>No. Aurora New Tab does not collect, access, or store your browsing history.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">Can I use Aurora New Tab without enabling cloud sync?</h4>
            <p>Absolutely. Cloud synchronization is entirely optional. You can use all features with data stored locally on your device.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">What happens to my data if I uninstall the extension?</h4>
            <p>When you uninstall Aurora New Tab, all locally stored data is removed from your device. If you've enabled cloud sync, your data will remain in your cloud storage until you explicitly delete it through our website.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">Does Aurora New Tab share my data with advertisers?</h4>
            <p>No. We do not share your data with advertisers or use it for advertising purposes.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold">How can I delete all my data?</h4>
            <p>You can reset all local data through the extension settings. If you've enabled cloud sync, you can delete your cloud data by visiting your account settings on our website.</p>
          </div>
        </div>
      `
    }
  ];

  return (
    <div className="page-transition">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Privacy Policy
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
          Aurora New Tab Chrome Extension
        </p>
      </header>
      
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-black/40 rounded-2xl p-6 md:p-10 border border-white/10 shadow-xl">
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-white/10 pb-4 last:border-b-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-blue-900/50 text-blue-400 group-hover:bg-blue-800/50 transition-colors">
                    {section.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{section.title}</h3>
                </div>
                {activeSection === section.id ? (
                  <ChevronUp className="w-6 h-6 text-blue-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                )}
              </button>
              
              {activeSection === section.id && (
                <div 
                  className="mt-4 pl-12 pr-4 text-gray-300 space-y-4 animate-fadeIn"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aurora New Tab. All rights reserved.</p>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <a href="/terms" className="text-blue-400 hover:text-blue-300 flex items-center">
              Terms of Service <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <a href="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
              Contact Us <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;