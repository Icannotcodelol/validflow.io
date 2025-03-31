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
  education: [
    { value: "e_learning", label: "E-Learning Platforms" },
    { value: "ed_tech", label: "Educational Technology" },
    { value: "professional_dev", label: "Professional Development" },
    { value: "tutoring", label: "Tutoring Services" },
    { value: "language", label: "Language Learning" },
  ],
  finance: [
    { value: "fintech", label: "Financial Technology" },
    { value: "banking", label: "Banking Services" },
    { value: "investment", label: "Investment & Trading" },
    { value: "insurance", label: "Insurance" },
    { value: "crypto", label: "Cryptocurrency & Blockchain" },
    { value: "personal_finance", label: "Personal Finance" },
  ],
  retail: [
    { value: "ecommerce", label: "E-commerce" },
    { value: "d2c", label: "Direct to Consumer" },
    { value: "marketplace", label: "Online Marketplace" },
    { value: "subscription_box", label: "Subscription Box" },
    { value: "brick_mortar", label: "Brick and Mortar" },
  ],
  manufacturing: [
    { value: "smart_manufacturing", label: "Smart Manufacturing" },
    { value: "3d_printing", label: "3D Printing" },
    { value: "robotics", label: "Robotics & Automation" },
    { value: "sustainable", label: "Sustainable Manufacturing" },
    { value: "custom", label: "Custom Manufacturing" },
  ],
  entertainment: [
    { value: "gaming", label: "Gaming & Esports" },
    { value: "streaming", label: "Streaming Services" },
    { value: "virtual_reality", label: "Virtual Reality" },
    { value: "content_creation", label: "Content Creation" },
    { value: "events", label: "Live Events & Experiences" },
  ],
  travel: [
    { value: "booking", label: "Travel Booking" },
    { value: "experiences", label: "Local Experiences" },
    { value: "business_travel", label: "Business Travel" },
    { value: "accommodation", label: "Accommodation Services" },
    { value: "transportation", label: "Transportation Services" },
  ],
  food: [
    { value: "delivery", label: "Food Delivery" },
    { value: "meal_prep", label: "Meal Preparation" },
    { value: "restaurant", label: "Restaurant Technology" },
    { value: "ghost_kitchen", label: "Ghost Kitchen" },
    { value: "specialty_food", label: "Specialty Food & Beverage" },
  ],
  real_estate: [
    { value: "proptech", label: "Property Technology" },
    { value: "rental", label: "Rental & Property Management" },
    { value: "commercial", label: "Commercial Real Estate" },
    { value: "residential", label: "Residential Real Estate" },
    { value: "co_living", label: "Co-living Spaces" },
  ],
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