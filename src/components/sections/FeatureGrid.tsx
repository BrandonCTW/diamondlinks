interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${colClass} gap-6`}>
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7 group"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mb-5">
            <svg
              className="text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
              style={{ width: 20, height: 20 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
            </svg>
          </div>
          <h3 className="text-gray-900 font-bold text-base mb-2">{feature.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
