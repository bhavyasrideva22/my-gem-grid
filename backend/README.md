# Contact Form Backend

This backend service handles contact form submissions, stores them in a database, and sends email notifications.

## Features

- ✅ Store contact form messages in SQLite database
- ✅ Send email notifications to bhavyadeva2329@gmail.com
- ✅ Send auto-reply emails to form submitters (optional)
- ✅ Input validation and sanitization
- ✅ Rate limiting to prevent spam
- ✅ CORS support for frontend integration
- ✅ Security headers with Helmet
- ✅ RESTful API endpoints

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and configure your settings:

```bash
cp env.example .env
```

Edit `.env` with your configuration:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=bhavyadeva2329@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM_NAME=Bhavya Deva Portfolio
EMAIL_TO=bhavyadeva2329@gmail.com

# Optional: Send auto-reply to form submitters
SEND_AUTO_REPLY=true
```

### 3. Gmail Setup (Required for Email)

To send emails through Gmail, you need to:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS` (not your regular Gmail password)

### 4. Start the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:3001` by default.

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'd like to discuss a project."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you soon.",
  "id": 123
}
```

### GET /api/contact/messages
Get all stored messages (for admin purposes).

**Response:**
```json
{
  "success": true,
  "messages": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "message": "Hello, I'd like to discuss a project.",
      "ip": "192.168.1.1",
      "user_agent": "Mozilla/5.0...",
      "timestamp": "2024-01-15T10:30:00.000Z",
      "created_at": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "service": "Contact Form Backend"
}
```

## Database

The service uses SQLite for simplicity. The database file `contact_messages.db` will be created automatically in the backend directory.

### Database Schema

```sql
CREATE TABLE contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  ip TEXT,
  user_agent TEXT,
  timestamp TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Security Features

- **Rate Limiting**: 10 requests per 15 minutes per IP
- **Input Validation**: Server-side validation using express-validator
- **CORS Protection**: Configurable CORS for frontend integration
- **Security Headers**: Helmet.js for security headers
- **SQL Injection Protection**: Parameterized queries

## Frontend Integration

Update your frontend environment variables:

```env
VITE_API_URL=http://localhost:3001
```

The frontend will automatically connect to the backend API.

## Troubleshooting

### Email Not Sending
1. Check your Gmail app password is correct
2. Ensure 2-factor authentication is enabled
3. Check the server logs for email errors

### Database Issues
1. Ensure the backend directory is writable
2. Check file permissions for `contact_messages.db`

### CORS Issues
1. Verify `FRONTEND_URL` matches your frontend URL
2. Check that the frontend is making requests to the correct backend URL

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use a production database (PostgreSQL, MySQL, etc.)
3. Configure proper email service (SendGrid, AWS SES, etc.)
4. Set up proper logging and monitoring
5. Use environment variables for all sensitive data
6. Set up SSL/TLS certificates
7. Configure reverse proxy (nginx, Apache)
