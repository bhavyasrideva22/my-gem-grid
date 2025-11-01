import nodemailer from 'nodemailer';

export class EmailService {
  constructor() {
    this.transporter = null;
    this.initializeTransporter();
  }

  initializeTransporter() {
    // Configure email transporter based on environment
    const emailConfig = {
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || 'bhavyadeva2329@gmail.com',
        pass: process.env.EMAIL_PASS || process.env.EMAIL_APP_PASSWORD
      }
    };

    // Set default email recipient
    this.recipientEmail = process.env.EMAIL_TO || 'bhavyadeva2329@gmail.com';

    this.transporter = nodemailer.createTransport(emailConfig);

    // Verify connection configuration
    this.transporter.verify((error, success) => {
      if (error) {
        console.error('Email service configuration error:', error);
        console.log('📧 Email service will not work until proper credentials are configured');
      } else {
        console.log('📧 Email service is ready to send messages');
      }
    });
  }

  async sendContactNotification(contactData) {
    const { name, email, phone, message, timestamp } = contactData;
    
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Portfolio Contact Form'}" <${process.env.EMAIL_USER || 'bhavyadeva2329@gmail.com'}>`,
      to: this.recipientEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: this.generateEmailHTML(contactData),
      text: this.generateEmailText(contactData)
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('📧 Email sent successfully:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('📧 Email sending failed:', error);
      throw error;
    }
  }

  generateEmailHTML(contactData) {
    const { name, email, phone, message, timestamp, ip } = contactData;
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #667eea; }
          .message-field .value { white-space: pre-wrap; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📧 New Contact Form Submission</h2>
            <p>You have received a new message through your portfolio contact form.</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">📞 Phone:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            <div class="field message-field">
              <div class="label">💬 Message:</div>
              <div class="value">${message}</div>
            </div>
            <div class="field">
              <div class="label">🕒 Submitted:</div>
              <div class="value">${new Date(timestamp).toLocaleString()}</div>
            </div>
            ${ip ? `
            <div class="field">
              <div class="label">🌐 IP Address:</div>
              <div class="value">${ip}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This message was sent from your portfolio contact form at ${new Date().toLocaleString()}.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateEmailText(contactData) {
    const { name, email, phone, message, timestamp, ip } = contactData;
    
    return `
New Contact Form Submission
============================

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

Submitted: ${new Date(timestamp).toLocaleString()}
${ip ? `IP Address: ${ip}` : ''}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${name}.
    `.trim();
  }

  async sendAutoReply(contactData) {
    const { name, email } = contactData;
    
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Bhavya Deva'}" <${process.env.EMAIL_USER || 'bhavyadeva2329@gmail.com'}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: this.generateAutoReplyHTML(name),
      text: this.generateAutoReplyText(name)
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('📧 Auto-reply sent successfully:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('📧 Auto-reply sending failed:', error);
      throw error;
    }
  }

  generateAutoReplyHTML(name) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting me!</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank you for reaching out!</h2>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for taking the time to contact me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
            <p>I typically respond within 24 hours, so please keep an eye on your inbox.</p>
            <p>Best regards,<br>Bhavya Deva</p>
          </div>
          <div class="footer">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateAutoReplyText(name) {
    return `
Hi ${name},

Thank you for taking the time to contact me through my portfolio website. I have received your message and will get back to you as soon as possible.

I typically respond within 24 hours, so please keep an eye on your inbox.

Best regards,
Bhavya Deva

---
This is an automated response. Please do not reply to this email.
    `.trim();
  }
}
