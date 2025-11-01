# Contact Form Backend Integration

This document explains how to set up and use the backend integration for the contact form, which stores messages in a database and sends email notifications to `bhavyadeva2329@gmail.com`.

## 🚀 Quick Start

### 1. Run the Setup Script
```bash
npm run setup-backend
```

This will:
- Install backend dependencies
- Create necessary environment files
- Set up the database
- Configure email settings

### 2. Configure Gmail (Required)
1. Go to your Google Account settings
2. Security → 2-Step Verification → App passwords
3. Generate a new app password for "Mail"
4. Edit `backend/.env` and set `EMAIL_PASS` to your app password

### 3. Start the Backend
```bash
npm run backend
```

### 4. Start the Frontend (in a new terminal)
```bash
npm run dev
```

## 📁 Project Structure

```
my-gem-grid/
├── backend/                 # Backend server
│   ├── services/           # Service modules
│   │   ├── contactService.js
│   │   ├── databaseService.js
│   │   └── emailService.js
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env               # Backend environment variables
├── src/
│   ├── api/
│   │   └── contact.ts      # Updated frontend API client
│   └── components/
│       └── Contact.tsx     # Contact form component
├── .env                   # Frontend environment variables
└── setup-backend.js       # Setup script
```

## 🔧 Features

### Backend Features
- ✅ **Database Storage**: SQLite database stores all contact messages
- ✅ **Email Notifications**: Sends formatted emails to bhavyadeva2329@gmail.com
- ✅ **Auto-Reply**: Optional auto-reply emails to form submitters
- ✅ **Input Validation**: Server-side validation and sanitization
- ✅ **Rate Limiting**: Prevents spam (10 requests per 15 minutes)
- ✅ **Security**: CORS, Helmet security headers, SQL injection protection
- ✅ **RESTful API**: Clean API endpoints for frontend integration

### Frontend Features
- ✅ **Real API Integration**: Connects to backend instead of mock data
- ✅ **Error Handling**: Proper error handling and user feedback
- ✅ **Loading States**: Shows loading indicators during submission
- ✅ **Form Validation**: Client-side validation with server-side backup

## 📧 Email Configuration

The system sends two types of emails:

### 1. Notification Email (to bhavyadeva2329@gmail.com)
- Formatted HTML email with all contact details
- Includes sender information, message, timestamp, and IP
- Professional styling with your branding

### 2. Auto-Reply Email (to form submitter)
- Optional thank you message
- Confirms message was received
- Professional auto-response

## 🗄️ Database

### SQLite Database
- File: `backend/contact_messages.db`
- Created automatically on first run
- Stores all contact form submissions

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

## 🔌 API Endpoints

### POST /api/contact
Submit a contact form message.

**Request:**
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
Get all stored messages (admin endpoint).

### GET /api/health
Health check endpoint.

## 🛠️ Development

### Backend Development
```bash
cd backend
npm run dev  # Starts with nodemon (auto-restart)
```

### Frontend Development
```bash
npm run dev  # Starts Vite dev server
```

### Viewing Stored Messages
You can view all stored messages by visiting:
```
http://localhost:3001/api/contact/messages
```

## 🚀 Production Deployment

### Backend Deployment
1. Set `NODE_ENV=production` in `backend/.env`
2. Use a production database (PostgreSQL, MySQL)
3. Configure production email service (SendGrid, AWS SES)
4. Set up proper logging and monitoring
5. Use environment variables for all sensitive data

### Frontend Deployment
1. Set `VITE_API_URL` to your production backend URL
2. Build the frontend: `npm run build`
3. Deploy to your hosting service

## 🔒 Security Features

- **Rate Limiting**: 10 requests per 15 minutes per IP
- **Input Validation**: Server-side validation using express-validator
- **CORS Protection**: Configurable CORS for frontend integration
- **Security Headers**: Helmet.js for security headers
- **SQL Injection Protection**: Parameterized queries
- **Email Validation**: Proper email format validation

## 🐛 Troubleshooting

### Common Issues

#### Email Not Sending
1. Check Gmail app password is correct
2. Ensure 2-factor authentication is enabled
3. Check server logs for email errors
4. Verify EMAIL_PASS in backend/.env

#### Database Issues
1. Ensure backend directory is writable
2. Check file permissions for contact_messages.db
3. Verify SQLite3 is installed

#### CORS Issues
1. Verify FRONTEND_URL matches your frontend URL
2. Check that frontend is making requests to correct backend URL
3. Ensure backend is running on correct port

#### Frontend Not Connecting
1. Check VITE_API_URL in .env
2. Verify backend is running
3. Check browser console for errors
4. Ensure both servers are running

### Logs
- Backend logs: Check terminal where backend is running
- Frontend logs: Check browser console
- Database: SQLite database file in backend directory

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Ensure both frontend and backend are running
4. Check the server logs for error messages

## 🔄 Updates

To update the backend:

1. Pull latest changes
2. Run `npm run setup-backend` to update dependencies
3. Restart both frontend and backend servers

---

**Note**: This integration provides a complete contact form solution with database storage and email notifications. The messages will be stored locally in SQLite and sent to bhavyadeva2329@gmail.com as requested.
