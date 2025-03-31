'use client'

import { motion } from 'framer-motion'

interface SectionLoadingProps {
  title: string
}

export function SectionLoading({ title }: SectionLoadingProps) {
  return (
    <div className="w-full space-y-4 rounded-lg border border-border p-6">
      <div className="flex items-center justify-between">
        <motion.div
          className="h-8 w-48 rounded-md bg-muted"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="h-4 w-24 rounded-md bg-muted"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        />
      </div>
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="h-24 w-full rounded-md bg-muted"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.1 * (i + 2),
            }}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-muted-foreground">Loading {title}...</p>
      </div>
    </div>
  )
} 