# ValiFlow

ValiFlow is a web application that helps users validate their business ideas by providing comprehensive analysis using AI-powered insights.

## Features

- Dynamic typing animation showcasing various business ideas
- Comprehensive business idea analysis
- Market overview and competitor analysis
- Venture capital activity insights
- SWOT analysis
- Go-to-market strategy recommendations
- Pricing structure analysis with revenue calculator
- Marketing strategy suggestions
- Critical questions for founders

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Supabase
- Stripe
- AI APIs (OpenAI, Claude, Perplexity)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Fill in your environment variables in `.env.local`
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── lib/             # Utility functions and configurations
├── types/           # TypeScript type definitions
└── styles/          # Global styles
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The project is configured for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

## License

Private - All rights reserved 