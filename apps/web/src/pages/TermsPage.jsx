
import React from 'react';
import { Helmet } from 'react-helmet';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - ExtraRack</title>
        <meta name="description" content="Read our terms and conditions." />
        <link rel="canonical" href="https://extrarack.com/terms" />
      </Helmet>

      <main className="flex-grow pt-32 pb-24">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-6">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to ExtraRack. These Terms & Conditions govern your use of our website and hosting services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Service Provision</h2>
              <p>
                ExtraRack provides Virtual Private Servers (VPS) and Dedicated Hosting solutions. We strive to maintain a 99.9% uptime, but we do not guarantee uninterrupted service. Maintenance windows will be communicated in advance.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Acceptable Use Policy</h2>
              <p>
                You agree not to use our services for any illegal activities, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hosting malicious software or malware</li>
                <li>Sending unsolicited bulk email (SPAM)</li>
                <li>Participating in DDoS attacks</li>
                <li>Hosting copyrighted material without permission</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Account Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials. ExtraRack is not liable for any loss or damage arising from your failure to protect your account information.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                ExtraRack shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@extrarack.com or visit our headquarters in Lucknow, Uttar Pradesh, India.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsPage;
