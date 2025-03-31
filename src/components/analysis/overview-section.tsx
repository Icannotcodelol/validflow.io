'use client'

import { motion } from 'framer-motion'
import { Card, Metric, Text } from '@tremor/react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

interface OverviewSectionProps {
  data: {
    sentimentScore: number
    marketSize: number
    successProbability: number
    marketShareProjection: number
    timeToMarket: string
    summary: string
  }
}

export function OverviewSection({ data }: OverviewSectionProps) {
  const metrics = [
    {
      name: 'Sentiment Score',
      value: data.sentimentScore,
      format: (value: number) => `${value}%`,
      color: data.sentimentScore > 70 ? 'text-green-500' : data.sentimentScore > 40 ? 'text-yellow-500' : 'text-red-500',
    },
    {
      name: 'Market Size',
      value: data.marketSize,
      format: (value: number) => `$${(value / 1e9).toFixed(1)}B`,
      color: 'text-blue-500',
    },
    {
      name: 'Success Probability',
      value: data.successProbability,
      format: (value: number) => `${value}%`,
      color: data.successProbability > 70 ? 'text-green-500' : data.successProbability > 40 ? 'text-yellow-500' : 'text-red-500',
    },
    {
      name: 'Market Share Projection',
      value: data.marketShareProjection,
      format: (value: number) => `${value}%`,
      color: 'text-purple-500',
    },
  ]

  const chartData = metrics.map(metric => ({
    name: metric.name,
    value: metric.value,
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.name} className="p-4">
            <Text>{metric.name}</Text>
            <Metric className={metric.color}>
              {metric.format(metric.value)}
            </Metric>
          </Card>
        ))}
      </div>

      {/* Time to Market */}
      <Card className="p-4">
        <Text>Estimated Time to Market</Text>
        <Metric>{data.timeToMarket}</Metric>
      </Card>

      {/* Metrics Visualization */}
      <Card className="p-4">
        <Text className="mb-4">Key Metrics Comparison</Text>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="var(--primary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Summary */}
      <Card className="p-4">
        <Text className="mb-2">Executive Summary</Text>
        <p className="text-muted-foreground whitespace-pre-line">
          {data.summary}
        </p>
      </Card>
    </motion.div>
  )
} 