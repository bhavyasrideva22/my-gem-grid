#!/usr/bin/env node

import { spawn, exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

console.log('🚀 Setting up Contact Form Backend Integration\n');

async function setupBackend() {
  try {
    // Check if backend directory exists
    if (!fs.existsSync('backend')) {
      console.log('❌ Backend directory not found. Please ensure the backend folder is in the project root.');
      process.exit(1);
    }

    console.log('📦 Installing backend dependencies...');
    await execAsync('cd backend && npm install');
    console.log('✅ Backend dependencies installed');

    // Create .env file for frontend if it doesn't exist
    if (!fs.existsSync('.env')) {
      console.log('📝 Creating frontend .env file...');
      fs.writeFileSync('.env', 'VITE_API_URL=http://localhost:3001\n');
      console.log('✅ Frontend .env file created');
    }

    // Create backend .env file if it doesn't exist
    if (!fs.existsSync('backend/.env')) {
      console.log('📝 Creating backend .env file...');
      const backendEnvContent = `# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration
# For Gmail, you'll need to use an App Password instead of your regular password
# Go to: Google Account > Security > 2-Step Verification > App passwords
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=bhavyadeva2329@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM_NAME=Bhavya Deva Portfolio
EMAIL_TO=bhavyadeva2329@gmail.com

# Optional: Send auto-reply to form submitters
SEND_AUTO_REPLY=true
`;
      fs.writeFileSync('backend/.env', backendEnvContent);
      console.log('✅ Backend .env file created');
    }

    console.log('\n🎉 Setup completed successfully!\n');
    console.log('📋 Next steps:');
    console.log('1. Edit backend/.env and set your Gmail app password for EMAIL_PASS');
    console.log('2. Start the backend server: cd backend && npm run dev');
    console.log('3. Start the frontend: npm run dev');
    console.log('4. Test the contact form at http://localhost:5173\n');
    
    console.log('📧 Gmail Setup Instructions:');
    console.log('1. Go to your Google Account settings');
    console.log('2. Security → 2-Step Verification → App passwords');
    console.log('3. Generate a new app password for "Mail"');
    console.log('4. Copy the password and paste it in backend/.env as EMAIL_PASS');
    console.log('5. Do NOT use your regular Gmail password!\n');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

setupBackend();
