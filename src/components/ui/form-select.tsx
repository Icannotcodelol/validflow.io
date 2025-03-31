'use client'

import { useFormContext } from 'react-hook-form'

interface Option {
  value: string
  label: string
}

interface FormSelectProps {
  name: string
  label: string
  options: Option[]
  placeholder?: string
  disabled?: boolean
}

export function FormSelect({
  name,
  label,
  options,
  placeholder = 'Select an option',
  disabled = false,
}: FormSelectProps) {
  const { register, formState: { errors } } = useFormContext()
  const error = errors[name]?.message as string | undefined

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={name}
        {...register(name)}
        disabled={disabled}
        className="w-full px-3 py-2 border rounded-md bg-background text-foreground border-input focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
} 