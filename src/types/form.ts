import { z } from "zod"

export interface Option {
  value: string
  label: string
}

export const industries = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "finance", label: "Finance" },
  { value: "retail", label: "Retail" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "entertainment", label: "Entertainment" },
  { value: "travel", label: "Travel & Tourism" },
  { value: "food", label: "Food & Beverage" },
  { value: "real_estate", label: "Real Estate" },
] satisfies Option[]

export const subIndustries = {
  technology: [
    { value: "saas", label: "Software as a Service" },
    { value: "ai", label: "Artificial Intelligence" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "iot", label: "Internet of Things" },
  ],
  healthcare: [
    { value: "telemedicine", label: "Telemedicine" },
    { value: "health_tech", label: "Health Tech" },
    { value: "mental_health", label: "Mental Health" },
    { value: "fitness", label: "Fitness & Wellness" },
    { value: "medical_devices", label: "Medical Devices" },
  ],
  // Add more sub-industries for other categories...
} satisfies Record<string, Option[]>

export const monetizationStrategies = [
  { value: "subscription", label: "Subscription Model" },
  { value: "freemium", label: "Freemium" },
  { value: "one_time", label: "One-time Purchase" },
  { value: "marketplace", label: "Marketplace Fees" },
  { value: "advertising", label: "Advertising" },
  { value: "saas", label: "SaaS" },
  { value: "usage_based", label: "Usage-based Pricing" },
] satisfies Option[]

export const teamCompositions = [
  { value: "solo", label: "Solo Founder" },
  { value: "technical", label: "Technical Co-founders" },
  { value: "mixed", label: "Mixed Expertise Team" },
  { value: "business", label: "Business-focused Team" },
  { value: "seeking", label: "Seeking Co-founders" },
] satisfies Option[]

export const formSchema = z.object({
  industry: z.string().min(1, "Please select an industry"),
  subIndustry: z.string().min(1, "Please select a sub-industry"),
  monetization: z.string().min(1, "Please select a monetization strategy"),
  teamComposition: z.string().min(1, "Please select a team composition"),
  idea: z.string()
    .min(50, "Please provide more details about your idea (minimum 50 characters)")
    .max(800, "Please keep your idea description under 800 characters"),
})

export type FormData = z.infer<typeof formSchema> 