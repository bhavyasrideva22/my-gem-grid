# Bhavya Deva - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a full stack developer. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Contact Form**: Backend integration with email notifications
- **Project Showcase**: Detailed project cards with live demos
- **Skills Section**: Comprehensive technology stack display
- **Education Timeline**: Professional background and achievements
- **Dark/Light Theme**: Toggle between themes for better user experience

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Modern icon library
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **SQLite** - Lightweight database
- **Nodemailer** - Email sending functionality
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd my-gem-grid

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Install backend dependencies
npm run setup-backend

# Configure environment variables
# Edit backend/.env with your email settings

# Start backend server
npm run backend
```

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001
```

#### Backend (backend/.env)
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM_NAME=Bhavya Deva Portfolio
EMAIL_TO=bhavyadeva2329@gmail.com
SEND_AUTO_REPLY=true
```

### Gmail Setup
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: Google Account → Security → 2-Step Verification → App passwords
3. Use the app password in `EMAIL_PASS` (not your regular password)

## 🚀 Deployment

### Frontend Deployment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deploy the `dist` folder to your preferred hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Backend Deployment
```bash
# Start production server
npm run backend:start
```

Deploy to:
- Heroku
- Railway
- DigitalOcean
- AWS EC2
- Google Cloud Platform

## 📁 Project Structure

```
my-gem-grid/
├── public/                 # Static assets
├── src/
│   ├── api/               # API client functions
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── main.tsx          # Application entry point
├── backend/              # Backend server
│   ├── services/         # Business logic
│   ├── server.js         # Main server file
│   └── package.json      # Backend dependencies
└── README.md             # This file
```

## 🎨 Customization

### Colors & Theming
Edit `tailwind.config.ts` to customize the color scheme and design tokens.

### Content Updates
- **Personal Info**: Update `src/components/Hero.tsx`
- **Projects**: Modify `src/components/Projects.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Education**: Update `src/components/Education.tsx`
- **Contact**: Modify `src/components/Contact.tsx`

### Styling
- Global styles: `src/index.css`
- Component styles: Individual component files
- Tailwind configuration: `tailwind.config.ts`

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting (10 requests per 15 minutes)
- CORS protection
- Security headers with Helmet
- SQL injection protection
- Email validation

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Image Optimization**: WebP format support
- **Code Splitting**: Lazy loading for better performance
- **Caching**: Proper cache headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Bhavya Deva**
- Email: bhavyadeva2329@gmail.com
- Phone: +91 7670929939
- Location: Tanuku, AP, 534211

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for modern icons
- [Vite](https://vitejs.dev/) for fast development experience

---

**Built with ❤️ by Bhavya Deva**