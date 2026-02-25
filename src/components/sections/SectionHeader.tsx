interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  eyebrowColor?: string
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  eyebrowColor = 'text-blue-600',
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-14`}>
      <p className={`${eyebrowColor} text-sm font-semibold uppercase tracking-widest mb-2`}>{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
