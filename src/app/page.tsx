import { TypingAnimation } from '@/components/ui/typing-animation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center">
        <TypingAnimation />
        <p className="mt-8 text-xl text-muted-foreground max-w-2xl">
          Get comprehensive analysis and validation for your business ideas using AI-powered insights.
        </p>
        <Link
          href="/analyze"
          className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Try with your idea
        </Link>
      </section>

      {/* Sample Analysis Section */}
      <section className="bg-muted/50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Sample Analysis</h2>
          <div className="bg-card rounded-lg shadow-lg p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">AI-powered language tutor for travelers</h3>
              <p className="text-muted-foreground">
                A mobile app that provides personalized language learning experiences for travelers using AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Market Overview</h4>
                <p className="text-muted-foreground">
                  Global language learning market size: $12.49B (2023)
                  Expected CAGR: 18.7% (2024-2030)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Competitors</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Duolingo</li>
                  <li>Babbel</li>
                  <li>Rosetta Stone</li>
                  <li>Busuu</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Strengths</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>AI-powered personalization</li>
                <li>Travel-specific content</li>
                <li>Offline functionality</li>
                <li>Cultural context integration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Recommended Pricing</h4>
              <p className="text-muted-foreground">
                Freemium model with premium features at $9.99/month
                Estimated revenue potential: $1.2M/year with 10,000 paid users
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/analyze"
                className="inline-block px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Get your own analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 