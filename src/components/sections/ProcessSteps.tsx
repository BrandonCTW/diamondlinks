interface Step {
  phase: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="max-w-2xl mx-auto">
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1
        const colors = [
          { dot: 'bg-blue-500', text: 'text-blue-600' },
          { dot: 'bg-indigo-500', text: 'text-indigo-600' },
          { dot: 'bg-violet-500', text: 'text-violet-600' },
          { dot: 'bg-emerald-500', text: 'text-emerald-600' },
          { dot: 'bg-blue-500', text: 'text-blue-600' },
        ]
        const color = colors[idx % colors.length]

        return (
          <div key={step.phase} className="flex gap-5">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className={`w-3 h-3 rounded-full ${color.dot} mt-1.5 flex-shrink-0 ring-4 ring-white`} />
              {!isLast && <div className="w-px flex-1 bg-gray-200 my-1" />}
            </div>
            <div className={`${!isLast ? 'pb-8' : ''}`}>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${color.text}`}>{step.phase}</span>
              <p className="text-gray-900 text-base font-semibold mt-0.5 mb-1">{step.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
