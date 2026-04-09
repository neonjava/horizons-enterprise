/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const senderAddress = $app.settings().meta.senderAddress;
  const senderName = $app.settings().meta.senderName;
  
  const submitterEmail = e.record.get("email");
  const submitterName = e.record.get("name");
  const subject = e.record.get("subject");
  const message = e.record.get("message");
  const phone = e.record.get("phone") || "Not provided";
  
  // Send confirmation email to user
  const userMessage = new MailerMessage({
    from: {
      address: senderAddress,
      name: senderName
    },
    to: [{ address: submitterEmail }],
    subject: "We received your message",
    html: "<h2>Thank you for contacting us, " + submitterName + "!</h2><p>We have received your submission and will get back to you shortly.</p><p><strong>Subject:</strong> " + subject + "</p><p><strong>Message:</strong><br>" + message + "</p>"
  });
  $app.newMailClient().send(userMessage);
  
  // Send notification email to admin
  const adminMessage = new MailerMessage({
    from: {
      address: senderAddress,
      name: senderName
    },
    to: [{ address: "contact@extrarack.com" }],
    subject: "New Contact Submission: " + subject,
    html: "<h2>New contact form submission</h2><p><strong>Name:</strong> " + submitterName + "</p><p><strong>Email:</strong> " + submitterEmail + "</p><p><strong>Phone:</strong> " + phone + "</p><p><strong>Subject:</strong> " + subject + "</p><p><strong>Message:</strong><br>" + message + "</p><p><strong>Submission ID:</strong> " + e.record.id + "</p>"
  });
  $app.newMailClient().send(adminMessage);
  
  e.next();
}, "contact_submissions");