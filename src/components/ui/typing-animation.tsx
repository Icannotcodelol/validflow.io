'use client'

import { useEffect, useState } from 'react'

const ideas = [
  'recipe subscription box for busy parents',
  'AI-powered language tutor for travelers',
  'marketplace for unused corporate event tickets',
  'personal finance app for freelancers',
  'smart home energy optimization system',
  'microlearning platform for healthcare professionals',
  'productivity tool for remote teams',
  'personalized fitness coaching app',
  'subscription service for sustainable clothing',
  'digital estate planning solution',
  'mental health chatbot for teens',
  'peer-to-peer pet sitting platform',
  'virtual reality meditation space',
  'on-demand handyman service app',
  'gamified recycling rewards program',
  'professional networking app for introverts',
  'digital nomad housing marketplace',
  'meal planning tool for dietary restrictions',
  'smart garden monitoring system',
  'skill-sharing platform for retirees'
]

export function TypingAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [delta, setDelta] = useState(200)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(ideas[currentIndex].substring(0, text.length - 1))
        setDelta(50)
        if (text === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % ideas.length)
        }
      } else {
        setText(ideas[currentIndex].substring(0, text.length + 1))
        setDelta(100)
        if (text === ideas[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, delta)

    return () => clearTimeout(timer)
  }, [text, isDeleting, currentIndex, delta])

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="text-4xl md:text-6xl font-bold text-center">
        <span className="text-primary">Validate my</span>{' '}
        <span className="text-secondary">{text}</span>
        <span className="animate-pulse">|</span>
      </div>
    </div>
  )
} 