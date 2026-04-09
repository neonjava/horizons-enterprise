
import React from 'react';
import { Helmet } from 'react-helmet';

const RefundPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - ExtraRack</title>
        <meta name="description" content="Read our refund policy." />
        <link rel="canonical" href="https://extrarack.com/refund-policy" />
      </Helmet>

      <main className="flex-grow pt-32 pb-24">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Refund Policy</h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-6">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. General Policy</h2>
              <p>
                At ExtraRack, we want to ensure you are completely satisfied with our hosting services. We offer a 7-day money-back guarantee for new VPS hosting accounts.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Eligibility for Refund</h2>
              <p>
                Refunds are applicable under the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The request is made within 7 days of the initial purchase.</li>
                <li>The account is in good standing and has not violated our Terms of Service.</li>
                <li>The service purchased is a standard VPS plan (Dedicated servers are non-refundable).</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Non-Refundable Items</h2>
              <p>
                The following services and fees are strictly non-refundable:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dedicated Server hosting</li>
                <li>Domain name registrations or transfers</li>
                <li>Software licenses (e.g., cPanel, Plesk)</li>
                <li>Custom setup or administrative fees</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Process for Requesting a Refund</h2>
              <p>
                To request a refund, please open a support ticket through your billing dashboard or email support@extrarack.com. Please include your account details and the reason for cancellation.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Processing Time</h2>
              <p>
                Approved refunds will be processed within 5-7 business days. The funds will be returned to the original payment method used during the purchase.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RefundPolicyPage;
