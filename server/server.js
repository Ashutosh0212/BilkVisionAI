const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://ashutosh0212.github.io',
    'https://labin.space',
    'http://labin.space'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
});

app.use('/api/contact', limiter);

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'guptaashu0212@gmail.com',
    pass: 'xfbu vhvo aftp gvpt' // This should be moved to environment variables in production
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      industry,
      message
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields: firstName, lastName, email, and message are required.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format.'
      });
    }

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission - BulkVision AI</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h3>Contact Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company}</td>
          </tr>
          ` : ''}
          ${phone ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
          </tr>
          ` : ''}
          ${industry ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Industry:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${industry}</td>
          </tr>
          ` : ''}
        </table>
        
        <h3>Message:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This message was sent from the BulkVision AI contact form on ${new Date().toLocaleString()}.
        </p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: 'guptaashu0212@gmail.com',
      to: 'guptaashu0212@gmail.com',
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: 'guptaashu0212@gmail.com',
      to: email,
      subject: 'Thank you for contacting BulkVision AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for your interest in BulkVision AI!</h2>
          
          <p>Dear ${firstName},</p>
          
          <p>Thank you for reaching out to us. We have received your message and our team will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Your Message Summary:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${industry ? `<p><strong>Industry:</strong> ${industry}</p>` : ''}
            <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>In the meantime, feel free to explore our website to learn more about how BulkVision AI can revolutionize your inventory management with our precision 3D vision technology.</p>
          
          <p>Best regards,<br>
          The BulkVision AI Team</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px;">
            This is an automated response. Please do not reply to this email directly.
            If you need immediate assistance, please contact us at hello@bulkvision.ai
          </p>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'BulkVision AI Contact Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Contact server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
