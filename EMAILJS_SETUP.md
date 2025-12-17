# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form submissions to `isaac@rightimagedigital.com`.

## Step 1: Get Your EmailJS Credentials

1. Go to https://www.emailjs.com/ and sign in (or create a free account)
2. Navigate to **Email Services** in the left sidebar
3. Click on your email service (or create a new one)
4. Note your **Service ID** (you'll see it in the service details)

5. Go to **Email Templates** in the left sidebar
6. Click on your "Contact Us" template (or create a new one)
7. Note your **Template ID** (found in the template URL or template settings)

8. Go to **Account** → **General** in the left sidebar
9. Find your **Public Key** (under "API Keys")

## Step 2: Configure Your Email Template

In your EmailJS template settings, use these template variables:

### Available Template Variables:

**Basic Contact Info:**
- `{{name}}` - Submitter's full name
- `{{email}}` - Submitter's email address
- `{{title}}` - Email subject line
- `{{time}}` - Timestamp when form was submitted

**Services:**
- `{{services}}` - Comma-separated list of selected services
- `{{services_list}}` - Bullet-point formatted list (each service on a new line with •)

**Challenges/Issues:**
- `{{issues}}` - Comma-separated list of selected challenges
- `{{issues_list}}` - Bullet-point formatted list (each issue on a new line with •)

**Project Details:**
- `{{budget}}` - Selected monthly ad budget range
- `{{timeline}}` - Selected project timeline
- `{{scope}}` - Selected project scope

**User Message:**
- `{{message}}` - The user's written message/description

**Quiz Results (if completed):**
- `{{quiz_brand_status}}` - Brand status from quiz
- `{{quiz_priorities}}` - Priorities from quiz

**Pre-formatted (optional):**
- `{{formatted_message}}` - All information formatted in one string (backup option)

### Template Settings:

- **To Email**: `isaac@rightimagedigital.com` ✅ (you already have this set)
- **From Name**: `{{name}}` (optional, shows who submitted the form)
- **From Email**: Use your default email service email
- **Reply To**: `{{email}}` (so you can reply directly to the submitter)
- **Subject**: `Contact Us: {{title}}` ✅ (you already have this)

### Template Content Example:

```
New Contact Form Submission

Name: {{name}}
Email: {{email}}
Submitted: {{time}}

SERVICES INTERESTED IN:
{{services_list}}

CHALLENGES FACING:
{{issues_list}}

PROJECT DETAILS:
Budget: {{budget}}
Timeline: {{timeline}}
Scope: {{scope}}

MESSAGE:
{{message}}

QUIZ RESULTS:
Brand Status: {{quiz_brand_status}}
Priorities: {{quiz_priorities}}

---
Reply to: {{email}}
```

Or use the pre-formatted version:
```
A message by {{name}} has been received at {{time}}.

{{formatted_message}}

---
Reply to: {{email}}
```

## Step 3: Create Your .env File

1. In your project root directory, create a file named `.env`
2. Add the following three lines with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important Notes:**
- Replace `your_service_id_here`, `your_template_id_here`, and `your_public_key_here` with your actual values
- Do NOT commit the `.env` file to git (it should already be in `.gitignore`)
- Make sure there are no quotes around the values
- Restart your development server after adding the `.env` file

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Fill out the contact form and click "Let's Talk"
3. Check your browser console for "Email sent successfully" message
4. Check your email inbox at `isaac@rightimagedigital.com`

## Troubleshooting

- **Email not sending?** Check the browser console for error messages
- **Credentials not working?** Verify you copied the exact values from EmailJS (no extra spaces)
- **Template variables not showing?** Make sure your template uses `{{variable}}` syntax (double curly braces)
- **Free tier limits?** EmailJS free tier allows 200 emails/month

## Example .env File

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

