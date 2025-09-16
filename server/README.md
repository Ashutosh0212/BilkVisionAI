# BulkVision AI Contact Server

This is the backend service for handling contact form submissions from the BulkVision AI website.

## Features

- Email sending via Gmail SMTP
- Rate limiting (5 requests per 15 minutes per IP)
- CORS protection
- Form validation
- Auto-reply emails to users
- Security headers with Helmet

## Setup

### Prerequisites

- Node.js 16 or higher
- Gmail account with App Password enabled

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment variables:
   Create a `.env` file with:
   ```
   PORT=3001
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=your-email@gmail.com
   ```

3. Start the server:
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## API Endpoints

### POST /api/contact

Submit a contact form.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "phone": "+1234567890",
  "industry": "mining",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### GET /api/health

Health check endpoint.

## Deployment

### Option 1: Railway (Recommended)

1. Create account at [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set environment variables in Railway dashboard
4. Deploy automatically

### Option 2: Heroku

1. Install Heroku CLI
2. Create Heroku app: `heroku create your-app-name`
3. Set environment variables: `heroku config:set EMAIL_USER=your-email@gmail.com`
4. Deploy: `git push heroku main`

### Option 3: Vercel (Serverless)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard

## CORS Configuration

The server is configured to accept requests from:
- `http://localhost:5173` (development)
- `https://ashutosh0212.github.io` (GitHub Pages)
- `https://labin.space` (custom domain)
- `http://labin.space` (custom domain)

## Security

- Rate limiting: 5 requests per 15 minutes per IP
- CORS protection
- Security headers via Helmet
- Input validation and sanitization
