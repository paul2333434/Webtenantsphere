# Property Management Website

A modern property management website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🏠 Modern, responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🚀 Optimized for performance

## Components

- Hero Section
- Features
- Benefits
- Testimonials
- Pricing Plans
- Call-to-Action
- Waitlist Signup
- Navigation Bar
- Footer

## Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/paul2333434/Webtenantsphere.git

# Navigate to project directory
cd Webtenantsphere

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment on Netlify

This project is configured for easy deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the Next.js configuration
3. Deploy settings are pre-configured in `netlify.toml`

### Manual Deployment Steps:

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select this repository
4. Configure build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

## Environment Variables

No environment variables are required for basic deployment. If you add any in the future, make sure to:

1. Add them to `.env.local` for local development
2. Add them to Netlify's environment variables in the site settings

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify

## License

This project is private and proprietary.