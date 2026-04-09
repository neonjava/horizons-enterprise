
import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ExtraRack</title>
        <meta name="description" content="Read our privacy policy." />
        <link rel="canonical" href="https://extrarack.com/privacy-policy" />
      </Helmet>

      <main className="flex-grow pt-32 pb-24">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-6">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p>
                ExtraRack collects information to provide better services to our users. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (Name, Email, Phone number)</li>
                <li>Billing and payment details</li>
                <li>Technical data (IP addresses, browser type, operating system)</li>
                <li>Usage data regarding how you interact with our services</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our hosting services</li>
                <li>To process transactions and send related information</li>
                <li>To send technical notices, updates, and security alerts</li>
                <li>To respond to your comments, questions, and customer service requests</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal data to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to strict confidentiality agreements.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at support@extrarack.com or write to us at our headquarters in Lucknow, Uttar Pradesh, India.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
