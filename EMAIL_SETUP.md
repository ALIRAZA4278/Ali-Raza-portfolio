# Email Setup Instructions

## Contact Form Email Functionality

Your portfolio now has a fully functional contact form that sends emails using Nodemailer and Gmail SMTP.

### Setup Steps:

1. **Create Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-Factor Authentication if not already enabled
   - Go to Security > App passwords
   - Create a new app password for "Mail"
   - Copy the 16-character password

2. **Setup Environment Variables:**
   - Copy `.env.local.example` to `.env.local`
   - Replace the placeholder values with your actual Gmail credentials:
   ```
   NM_EMAIL_USER=your-gmail@gmail.com
   NM_EMAIL_PW=your-16-character-app-password
   ```

3. **Test the Contact Form:**
   - Run your development server: `npm run dev`
   - Navigate to the contact section
   - Fill out and submit the form
   - Check your Gmail for the received message and auto-reply

### How It Works:

- When someone submits the contact form, it sends an email to your Gmail
- An automatic reply is sent to the person who submitted the form
- The emails are nicely formatted with HTML templates
- All form data is included in the email you receive

### Features:

✅ Professional HTML email templates
✅ Automatic reply to form submitters  
✅ Form validation and error handling
✅ Responsive design
✅ Success/error notifications

### Files Created/Modified:

- `/src/app/api/contact/route.js` - API endpoint for email processing
- `/src/components/Contact.js` - Updated to use real API
- `.env.local.example` - Environment variables template
- `package.json` - Added nodemailer dependency

Your portfolio is now production-ready with real email functionality!
