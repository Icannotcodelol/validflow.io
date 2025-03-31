'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSelect } from '@/components/ui/form-select'
import {
  industries,
  subIndustries,
  monetizationStrategies,
  teamCompositions,
  formSchema,
  type FormData,
} from '@/types/form'

export default function AnalyzePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState<keyof typeof subIndustries | ''>('')

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: '',
      subIndustry: '',
      monetization: '',
      teamComposition: '',
      idea: '',
    },
  })

  const { register, handleSubmit, watch, formState: { errors } } = methods
  const industryWatch = watch('industry')

  // Update sub-industry options when industry changes
  if (industryWatch !== selectedIndustry) {
    setSelectedIndustry(industryWatch as keyof typeof subIndustries)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Implement form submission
      console.log(data)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Analyze Your Business Idea</h1>
          <p className="mt-2 text-muted-foreground">
            Fill out the form below to get a comprehensive analysis of your business idea.
          </p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormSelect
              name="industry"
              label="Industry"
              options={industries}
              placeholder="Select an industry"
            />

            <FormSelect
              name="subIndustry"
              label="Sub-industry"
              options={selectedIndustry ? subIndustries[selectedIndustry] : []}
              placeholder="Select a sub-industry"
              disabled={!selectedIndustry}
            />

            <FormSelect
              name="monetization"
              label="Monetization Strategy"
              options={monetizationStrategies}
              placeholder="Select a monetization strategy"
            />

            <FormSelect
              name="teamComposition"
              label="Team Composition"
              options={teamCompositions}
              placeholder="Select your team composition"
            />

            <div className="space-y-2">
              <label htmlFor="idea" className="block text-sm font-medium text-foreground">
                Your Business Idea
              </label>
              <textarea
                id="idea"
                {...register('idea')}
                rows={6}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground border-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Describe your business idea and the problem it solves..."
              />
              {errors.idea && (
                <p className="text-sm text-destructive">{errors.idea.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Analyzing...' : 'Analyze Now'}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
} 