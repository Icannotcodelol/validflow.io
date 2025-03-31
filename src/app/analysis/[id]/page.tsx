'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import { SectionLoading } from '@/components/ui/section-loading'
import { OverviewSection } from '@/components/analysis/overview-section'
import type { AnalysisData } from '@/types/analysis'

// Mock data loading delays (will be replaced with actual API calls)
const MOCK_LOADING_DELAYS = {
  overview: 1000,
  market: 2000,
  competitors: 3000,
  vcActivity: 4000,
  swot: 2500,
  gtmStrategy: 3500,
  revenueModel: 3000,
  marketingStrategy: 2500,
  criticalAnalysis: 2000,
}

// Mock data (will be replaced with API data)
const MOCK_DATA: AnalysisData = {
  id: '123',
  createdAt: new Date().toISOString(),
  status: 'completed',
  overview: {
    sentimentScore: 85,
    marketSize: 15.7e9, // $15.7B
    successProbability: 72,
    marketShareProjection: 3.5,
    timeToMarket: '6-8 months',
    summary: `This business idea shows strong potential in a growing market. The high sentiment score reflects positive market reception and clear problem-solution fit. With a substantial market size and favorable success probability, the opportunity is compelling.

Key success factors include:
• Strong market timing
• Clear competitive advantage
• Scalable business model
• Reasonable time to market

Consider focusing on rapid market entry while maintaining quality standards. The projected market share is conservative but achievable with proper execution.`,
  },
  // ... other sections will be added as we implement them
} as AnalysisData

export default function AnalysisPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Partial<AnalysisData>>({})
  const [activeTab, setActiveTab] = useState('overview')
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set())

  // Simulate progressive loading of sections
  useEffect(() => {
    Object.entries(MOCK_LOADING_DELAYS).forEach(([section, delay]) => {
      setTimeout(() => {
        setLoadedSections((prev) => {
          const newSet = new Set(prev)
          newSet.add(section)
          // Add mock data when section is loaded
          setData((prevData) => ({
            ...prevData,
            [section]: MOCK_DATA[section as keyof AnalysisData],
          }))
          return newSet
        })
      }, delay)
    })
  }, [])

  const renderSection = (section: string) => {
    if (!loadedSections.has(section)) {
      return <SectionLoading title={section} />
    }

    switch (section) {
      case 'overview':
        return data.overview ? (
          <OverviewSection data={data.overview} />
        ) : null
      // Other sections will be added here
      default:
        return (
          <div className="rounded-lg border border-border p-6">
            <p>Content for {section} will go here</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground">Business Idea Analysis</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Comprehensive analysis and validation of your business idea
          </p>
        </motion.div>

        <Tabs.Root
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <Tabs.List className="flex space-x-2 border-b border-border">
            {Object.keys(MOCK_LOADING_DELAYS).map((section) => (
              <Tabs.Trigger
                key={section}
                value={section}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {Object.keys(MOCK_LOADING_DELAYS).map((section) => (
            <Tabs.Content
              key={section}
              value={section}
              className="outline-none"
            >
              {renderSection(section)}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  )
} 