export interface AnalysisData {
  id: string
  createdAt: string
  status: 'pending' | 'completed' | 'failed'
  shareableUrl?: string
  
  // Overview
  overview: {
    sentimentScore: number
    marketSize: number
    successProbability: number
    marketShareProjection: number
    timeToMarket: string
    summary: string
  }

  // Market Analysis
  market: {
    totalSize: number
    cagr: number
    geographicBreakdown: Record<string, number>
    keyTrends: Array<{
      trend: string
      impact: 'high' | 'medium' | 'low'
      description: string
    }>
    marketMaturity: 'emerging' | 'growing' | 'mature' | 'declining'
    barriers: Array<{
      type: string
      severity: number
      description: string
    }>
  }

  // Competitor Analysis
  competitors: Array<{
    name: string
    marketShare?: number
    strengths: string[]
    weaknesses: string[]
    pricing: {
      model: string
      range: [number, number]
    }
    targetMarket: string[]
    uniqueSellingPoints: string[]
    fundingHistory?: Array<{
      date: string
      amount: number
      round: string
    }>
  }>

  // VC Activity
  vcActivity: {
    recentDeals: Array<{
      company: string
      amount: number
      date: string
      investors: string[]
      valuation?: number
    }>
    sectorTrends: Array<{
      period: string
      dealCount: number
      totalValue: number
    }>
    investorInterest: {
      score: number
      keyFactors: string[]
    }
  }

  // SWOT Analysis
  swot: {
    strengths: Array<{
      point: string
      impact: number
      description: string
    }>
    weaknesses: Array<{
      point: string
      impact: number
      description: string
    }>
    opportunities: Array<{
      point: string
      impact: number
      description: string
    }>
    threats: Array<{
      point: string
      impact: number
      description: string
    }>
  }

  // Go-to-Market Strategy
  gtmStrategy: {
    phases: Array<{
      name: string
      duration: string
      keyActivities: string[]
      estimatedCosts: number
      kpis: Record<string, number>
    }>
    channels: Array<{
      name: string
      effectiveness: number
      costPerCustomer: number
      timeToROI: string
    }>
    partnerships: string[]
    marketingActivities: Array<{
      activity: string
      priority: number
      estimatedImpact: number
    }>
  }

  // Revenue Model
  revenueModel: {
    scenarios: {
      conservative: {
        revenue: number
        customers: number
        marketShare: number
        timeframe: string
      }
      moderate: {
        revenue: number
        customers: number
        marketShare: number
        timeframe: string
      }
      aggressive: {
        revenue: number
        customers: number
        marketShare: number
        timeframe: string
      }
    }
    metrics: {
      cac: number
      ltv: number
      churnRate: number
      conversionRate: number
    }
    breakeven: {
      timeframe: string
      requiredCustomers: number
      monthlyRevenue: number
    }
  }

  // Marketing Strategy
  marketingStrategy: {
    channels: Array<{
      name: string
      audience: string[]
      costRange: [number, number]
      expectedROI: number
      timeframe: string
      tactics: string[]
    }>
    contentStrategy: Array<{
      type: string
      frequency: string
      goals: string[]
      metrics: string[]
    }>
    budget: {
      allocation: Record<string, number>
      timeline: string
      milestones: Array<{
        metric: string
        target: number
        timeframe: string
      }>
    }
  }

  // Critical Analysis
  criticalAnalysis: {
    questions: Array<{
      question: string
      context: string
      importance: 'critical' | 'high' | 'medium'
      potentialAnswers: string[]
    }>
    recommendations: Array<{
      area: string
      action: string
      priority: number
      impact: string
      timeframe: string
    }>
  }
} 