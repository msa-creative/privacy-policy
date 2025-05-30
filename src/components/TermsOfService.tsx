import React, { useState } from 'react';
import { Shield, Book, Scale, FileText, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

function TermsOfService() {
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
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <Shield className="w-6 h-6" />,
      content: `
        <p>By installing and using the Aurora New Tab Chrome Extension ("Extension"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not install or use the Extension.</p>
        <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date.</p>
      `
    },
    {
      id: 'license',
      title: 'License and Usage',
      icon: <Book className="w-6 h-6" />,
      content: `
        <h4 class="text-lg font-semibold mb-2">License Grant</h4>
        <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
        <ul class="list-disc pl-5 mb-3">
          <li>Install and use the Extension for personal, non-commercial purposes</li>
          <li>Use features and functionalities provided by the Extension</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Restrictions</h4>
        <p>You may not:</p>
        <ul class="list-disc pl-5">
          <li>Modify, reverse engineer, or create derivative works</li>
          <li>Use the Extension for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to any service, account, or network</li>
          <li>Redistribute or sell the Extension</li>
        </ul>
      `
    },
    {
      id: 'user-content',
      title: 'User Content and Data',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>When using the Extension, you may create, upload, or store content ("User Content"). You retain all rights to your User Content, and you are responsible for:</p>
        <ul class="list-disc pl-5">
          <li>All content you create or store using the Extension</li>
          <li>Ensuring you have the necessary rights to your content</li>
          <li>Backing up your important data</li>
        </ul>
        <p>We do not claim ownership of your User Content but may need to access it to provide Extension features.</p>
      `
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>The Extension may integrate with third-party services to provide certain features:</p>
        <ul class="list-disc pl-5">
          <li>Weather data services</li>
          <li>Google services for authentication and sync</li>
          <li>Other API services for Extension functionality</li>
        </ul>
        <p>Your use of third-party services is subject to their respective terms and privacy policies. We are not responsible for third-party services.</p>
      `
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer and Limitation of Liability',
      icon: <Scale className="w-6 h-6" />,
      content: `
        <p>The Extension is provided "as is" without warranties of any kind, either express or implied. We do not warrant that:</p>
        <ul class="list-disc pl-5">
          <li>The Extension will meet your requirements</li>
          <li>The Extension will be uninterrupted, timely, or error-free</li>
          <li>Any errors will be corrected</li>
        </ul>
        <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Extension.</p>
      `
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>We may terminate or suspend your access to the Extension immediately, without prior notice, if:</p>
        <ul class="list-disc pl-5">
          <li>You violate these Terms</li>
          <li>You use the Extension in a way that could harm other users or our services</li>
          <li>We are required to do so by law</li>
        </ul>
        <p>You may terminate your use of the Extension at any time by uninstalling it from your browser.</p>
      `
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: <Scale className="w-6 h-6" />,
      content: `
        <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
        <p>Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located within the United States.</p>
      `
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>For any questions about these Terms, please contact us:</p>
        <p>Email: msaaperals@gmail.com</p>
        <a href="https://portfolio-msaapperals-projects.vercel.app/" target="_blank" color="#0077b6"><p>website</p></a>
      `
    }
  ];

  return (
    <div className="page-transition">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Terms of Service
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
          <p className="mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;