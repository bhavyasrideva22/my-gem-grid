import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';
import { ContactService } from './services/contactService.js';
import { EmailService } from './services/emailService.js';
import { DatabaseService } from './services/databaseService.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize services
const databaseService = new DatabaseService();
const emailService = new EmailService();
const contactService = new ContactService(databaseService, emailService);

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many contact form submissions from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/contact', limiter);

// CORS configuration
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:8082',  // Vite default port
    'http://localhost:8080',  // Alternative Vite port
    'http://localhost:3000'   // Common React port
  ],
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Contact Form Backend'
  });
});

// Contact form submission endpoint
app.post('/api/contact', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email address'),
  body('phone').optional(),
  body('message').trim().notEmpty().withMessage('Message is required')
], async (req, res) => {
  try {
    // Log the incoming request for debugging
    console.log('📝 Contact form submission received:', {
      body: req.body,
      headers: req.headers
    });

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('❌ Validation errors:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, phone, message } = req.body;
    
    // Store in database
    const storedMessage = await contactService.storeMessage({
      name,
      email,
      phone: phone || null,
      message,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      timestamp: new Date().toISOString()
    });

    // Send email notification
    await contactService.sendEmailNotification(storedMessage);

    res.json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      id: storedMessage.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error processing your message. Please try again later.'
    });
  }
});

// Get all messages endpoint (for admin purposes)
app.get('/api/contact/messages', async (req, res) => {
  try {
    const messages = await contactService.getAllMessages();
    res.json({
      success: true,
      messages
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching messages'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Initialize database and start server
async function startServer() {
  try {
    await databaseService.initialize();
    console.log('Database initialized successfully');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📧 Email notifications will be sent to: ${process.env.EMAIL_TO || 'bhavyadeva2329@gmail.com'}`);
      console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
