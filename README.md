# Right Image Digital - Contact Form

A premium-quality, mobile-first contact form page for Right Image Digital, a full-service marketing company. This page serves as both a high-converting contact experience and a branded expression of the company's digital-first identity.

## ✨ Features

- **Hero Section**: Full-width background with compelling copy and CTA
- **Brand Readiness Quiz**: Interactive 2-question quiz to understand user needs
- **Smart Contact Form**: React Hook Form with Zod validation
- **Conditional Fields**: Dynamic form fields based on service selection
- **Success Experience**: Animated success message with Calendly integration
- **Mobile-First Design**: Responsive layout with sticky mobile CTA
- **Premium Imagery**: High-quality placeholder images throughout
- **Smooth Animations**: Framer Motion animations for enhanced UX

## 🛠️ Tech Stack

- **React 18** - Modern React with TypeScript
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📱 Page Structure

### 1. Hero Section
- Full-width background image
- Compelling headline: "Let's Make Your Brand Unforgettable"
- Clear value proposition
- Primary CTA: "Start the Conversation"

### 2. Brand Quiz (Optional)
- 2-question multiple choice quiz
- Progress indicator
- Skip option available
- Results passed to contact form

### 3. Contact Form
- Branded form labels with emojis
- Service selection with icons
- Conditional fields for tech services
- Real-time validation
- Loading states

### 4. Success Message
- Personalized thank you message
- Confetti animation
- Next steps overview
- Calendly integration prompt

## 🎨 Design System

### Colors
- **Charcoal Black**: `#1A1A1A`
- **Pure White**: `#FFFFFF`
- **Electric Blue**: `#2979FF`
- **Slate Gray**: `#6E6E6E`
- **Accent Lime**: `#B2FF59`

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive sizing**: Using `clamp()` and Tailwind's responsive classes
- **Hierarchy**: Bold headings, clean body text

### Components
- **Buttons**: Primary and secondary styles with hover effects
- **Form Inputs**: Consistent styling with focus states
- **Cards**: Subtle shadows and rounded corners
- **Animations**: Smooth transitions and micro-interactions

## 📋 Form Features

### Validation Rules
- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Service**: Required selection
- **Message**: Minimum 10 characters

### Conditional Logic
- **Tech Services**: Additional timeline and scope fields
- **Quiz Integration**: Pre-filled insights based on quiz answers

### User Experience
- **Real-time validation**: Immediate feedback
- **Loading states**: Visual feedback during submission
- **Error handling**: Clear error messages
- **Accessibility**: Proper labels and ARIA attributes

## 🖼️ Image Placeholders

The page uses high-quality placeholder images from Unsplash:
- **Hero Background**: Modern office workspace
- **Form Section**: Marketing team collaboration
- **Success Section**: Client collaboration imagery

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  charcoal: '#1A1A1A',
  electric: '#2979FF',
  slate: '#6E6E6E',
  accent: '#B2FF59',
}
```

### Content
- Update copy in individual component files
- Replace placeholder images with your own
- Modify form fields in `ContactForm.tsx`

### Calendly Integration
Replace the placeholder URL in `SuccessMessage.tsx`:
```javascript
window.open('https://calendly.com/YOUR_CALENDLY_URL', '_blank')
```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Performance Features

- **Lazy loading**: Images load as needed
- **Optimized animations**: Hardware-accelerated transforms
- **Responsive images**: Proper sizing for different devices
- **Fast form validation**: Client-side validation with Zod
- **Smooth transitions**: 60fps animations with Framer Motion

## 🔒 Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: Screen reader friendly
- **Keyboard navigation**: All interactive elements accessible
- **Color contrast**: WCAG compliant color combinations
- **Focus indicators**: Clear focus states

## 📱 Mobile Optimization

- **Touch-friendly**: Large tap targets
- **Sticky CTA**: Always accessible call-to-action
- **Responsive layout**: Adapts to all screen sizes
- **Fast loading**: Optimized for mobile networks
- **Gesture support**: Smooth scrolling and interactions

## 🚀 Deployment

This is a static site that can be deployed to any hosting service:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 📄 License

This project is created for Right Image Digital. All rights reserved. 