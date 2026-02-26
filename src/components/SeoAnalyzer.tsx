'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

/* ─── Types ─── */
type Severity = 'pass' | 'warning' | 'fail'

interface AuditCheck {
  label: string
  status: Severity
  detail: string
}

interface AuditCategory {
  name: string
  score: number
  checks: AuditCheck[]
}

interface SeoActionItem {
  title: string
  description: string
  urgency: 'Immediate' | 'This Month' | 'Ongoing'
  impact: 'High' | 'Medium' | 'Low'
}

interface SeoReport {
  url: string
  domain: string
  overallScore: number
  grade: string
  categories: AuditCategory[]
  topIssues: string[]
  strengths: string[]
  actions: SeoActionItem[]
  keyMetrics: { label: string; value: string; trend: 'up' | 'down' | 'flat' }[]
}

/* ─── Score → Grade helpers ─── */
function gradeColor(grade: string): string {
  if (grade.startsWith('A')) return 'text-emerald-500'
  if (grade.startsWith('B')) return 'text-blue-500'
  if (grade.startsWith('C')) return 'text-amber-500'
  return 'text-red-500'
}

function gradeBg(grade: string): string {
  if (grade.startsWith('A')) return 'bg-emerald-500'
  if (grade.startsWith('B')) return 'bg-blue-500'
  if (grade.startsWith('C')) return 'bg-amber-500'
  return 'bg-red-500'
}

function scoreBarColor(score: number): string {
  if (score >= 80) return 'bg-emerald-500'
  if (score >= 60) return 'bg-blue-500'
  if (score >= 40) return 'bg-amber-500'
  return 'bg-red-500'
}

function severityIcon(status: Severity) {
  if (status === 'pass')
    return (
      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  if (status === 'warning')
    return (
      <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    )
  return (
    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'On-Page SEO': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  'Technical SEO': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  'Content Quality': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  'Performance Indicators': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  'Social & Sharing': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
    </svg>
  ),
}

/* ─── Scanning animation ─── */
function ScanningState({ url }: { url: string }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const phases = [
    'Fetching page HTML...',
    'Analyzing on-page SEO...',
    'Checking technical health...',
    'Evaluating content & performance...',
    'Building recommendations...',
  ]

  return (
    <div className="py-16 text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
        <div className="absolute inset-3 rounded-full border-4 border-indigo-300 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </div>
      </div>
      <p className="text-gray-900 font-bold text-lg mb-4">
        Auditing {url}
      </p>
      <div className="space-y-2 text-sm max-w-xs mx-auto">
        {phases.map((text, i) => (
          <div
            key={text}
            className={`flex items-center gap-2.5 justify-center transition-all duration-500 ${
              i <= phase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {i < phase ? (
              <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            ) : i === phase ? (
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              </div>
            ) : (
              <div className="w-4 h-4 flex-shrink-0" />
            )}
            <span className={i <= phase ? 'text-gray-700' : 'text-gray-300'}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Staggered reveal ─── */
function RevealSection({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  return (
    <div className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  )
}

/* ─── Category Card ─── */
function CategoryCard({ category, delay }: { category: AuditCategory; delay: number }) {
  const [expanded, setExpanded] = useState(false)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const passCount = category.checks.filter(c => c.status === 'pass').length
  const warnCount = category.checks.filter(c => c.status === 'warning').length
  const failCount = category.checks.filter(c => c.status === 'fail').length

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-5 flex items-center gap-4 hover:bg-gray-50/50 transition-colors text-left"
      >
        <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 flex-shrink-0">
          {CATEGORY_ICONS[category.name] || CATEGORY_ICONS['On-Page SEO']}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-gray-900 font-bold text-sm">{category.name}</h3>
            <span className={`text-sm font-bold ${category.score >= 80 ? 'text-emerald-600' : category.score >= 60 ? 'text-blue-600' : category.score >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
              {category.score}/100
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${scoreBarColor(category.score)} transition-all duration-700 ease-out`}
              style={{ width: animated ? `${category.score}%` : '0%' }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          <span className="text-emerald-600 text-xs font-medium">{passCount}</span>
          {warnCount > 0 && <span className="text-amber-600 text-xs font-medium">{warnCount}</span>}
          {failCount > 0 && <span className="text-red-600 text-xs font-medium">{failCount}</span>}
          <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-5 border-t border-gray-100">
          <div className="space-y-3 pt-4">
            {category.checks.map((check) => (
              <div key={check.label} className={`flex items-start gap-3 p-3 rounded-xl ${
                check.status === 'fail' ? 'bg-red-50/60 border border-red-100/60' :
                check.status === 'warning' ? 'bg-amber-50/40' : 'bg-gray-50/50'
              }`}>
                <div className="mt-0.5">{severityIcon(check.status)}</div>
                <div className="min-w-0">
                  <p className="text-gray-900 font-semibold text-sm">{check.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{check.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Main component ─── */
export default function SeoAnalyzer() {
  const [url, setUrl] = useState('')
  const [scanning, setScanning] = useState(false)
  const [report, setReport] = useState<SeoReport | null>(null)
  const [error, setError] = useState<string | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleAnalyze = useCallback(async () => {
    if (!url.trim() || scanning) return
    setReport(null)
    setError(null)
    setScanning(true)

    try {
      const res = await fetch('/api/seo-audit/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Audit failed')
      }

      const data: SeoReport = await res.json()
      setReport(data)
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setScanning(false)
    }
  }, [url, scanning])

  const totalChecks = report?.categories.reduce((sum, cat) => sum + cat.checks.length, 0) ?? 0
  const passChecks = report?.categories.reduce((sum, cat) => sum + cat.checks.filter(c => c.status === 'pass').length, 0) ?? 0
  const warnChecks = report?.categories.reduce((sum, cat) => sum + cat.checks.filter(c => c.status === 'warning').length, 0) ?? 0
  const failChecks = report?.categories.reduce((sum, cat) => sum + cat.checks.filter(c => c.status === 'fail').length, 0) ?? 0

  return (
    <div>
      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Instant SEO Audit
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Enter any website to get a comprehensive SEO health check — on-page, technical,
            content, performance, and social signals analyzed in seconds.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="e.g. example.com, https://mysite.com"
              disabled={scanning}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors disabled:opacity-50"
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!url.trim() || scanning}
            className="hero-cta-shimmer inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 text-base disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-3">
          100% free. No signup required. Results are confidential.
        </p>
      </div>

      {/* Error State */}
      {error && (
        <div className="max-w-2xl mx-auto mb-8 bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <div>
            <p className="text-red-800 font-semibold text-sm">Audit Failed</p>
            <p className="text-red-700 text-sm mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Scanning State */}
      {scanning && <ScanningState url={url} />}

      {/* Results */}
      {report && !scanning && (
        <div ref={resultsRef} className="space-y-8">
          {/* Grade + Score Hero */}
          <RevealSection delay={0}>
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              {/* Grade Circle */}
              <div className="text-center flex-shrink-0">
                <div className="relative w-32 h-32 mx-auto mb-3">
                  <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeDasharray={`${(report.overallScore / 100) * 326.7} 326.7`}
                      strokeLinecap="round"
                      className={`${gradeColor(report.grade)} transition-all duration-1000 ease-out`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-4xl font-bold ${gradeColor(report.grade)}`}>{report.grade}</span>
                    <span className="text-gray-500 text-xs">{report.overallScore}/100</span>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 ${gradeBg(report.grade)} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                  {report.overallScore >= 80 ? 'Good' : report.overallScore >= 60 ? 'Needs Work' : 'Needs Attention'}
                </span>
              </div>

              {/* Domain + Stats */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">SEO Audit Results</p>
                <h3 className="text-white font-bold text-xl mb-4">{report.domain}</h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-white">{totalChecks}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Checks</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-400">{passChecks}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Passed</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-amber-400">{warnChecks}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Warnings</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-red-400">{failChecks}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Failed</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Key Metrics Strip */}
          <RevealSection delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {report.keyMetrics.map((metric) => (
                <div key={metric.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                  <p className="text-gray-400 text-xs font-medium mb-1">{metric.label}</p>
                  <p className="text-gray-900 text-lg font-bold">{metric.value}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* Category Breakdown */}
          <RevealSection delay={200}>
            <div className="space-y-3">
              {report.categories.map((category, i) => (
                <CategoryCard key={category.name} category={category} delay={300 + i * 100} />
              ))}
            </div>
          </RevealSection>

          {/* Issues + Strengths Row */}
          <RevealSection delay={400}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Top Issues */}
              {report.topIssues.length > 0 && (
                <div className="bg-red-50/50 rounded-2xl border border-red-100/60 p-6">
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    Top Issues
                  </h3>
                  <ul className="space-y-3">
                    {report.topIssues.map((issue) => (
                      <li key={issue} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Strengths */}
              {report.strengths.length > 0 && (
                <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100/60 p-6">
                  <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Strengths
                  </h3>
                  <ul className="space-y-3">
                    {report.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </RevealSection>

          {/* Action Plan */}
          {report.actions.length > 0 && (
            <RevealSection delay={600}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">Recommended Action Plan</h3>
                    <p className="text-gray-400 text-xs">Prioritized steps to improve your SEO score</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {report.actions.map((action, i) => {
                    const urgencyConfig = {
                      Immediate: 'bg-red-50 text-red-700 border-red-100',
                      'This Month': 'bg-amber-50 text-amber-700 border-amber-100',
                      Ongoing: 'bg-blue-50 text-blue-700 border-blue-100',
                    }
                    const impactConfig = {
                      High: 'text-red-600',
                      Medium: 'text-amber-600',
                      Low: 'text-gray-500',
                    }
                    return (
                      <div key={action.title} className="relative bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Step {i + 1}</span>
                          <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded border ${urgencyConfig[action.urgency]}`}>
                            {action.urgency}
                          </span>
                        </div>
                        <h4 className="text-gray-900 font-bold text-sm mb-2">{action.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed mb-3">{action.description}</p>
                        <p className={`text-xs font-semibold ${impactConfig[action.impact]}`}>Impact: {action.impact}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </RevealSection>
          )}

          {/* CTA */}
          <RevealSection delay={800}>
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                Ready to Fix These Issues?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg mx-auto">
                DiamondLinks builds custom SEO strategies that address every issue found in your audit — from technical fixes to content optimization and link building.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:504-233-4365"
                  className="hero-cta-shimmer inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25 text-base"
                >
                  Call 504.233.4365
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/free-orm-scan/"
                  className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors text-base"
                >
                  Try ORM Scan
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-4">Free consultation. No obligation. 48-hour turnaround.</p>
            </div>
          </RevealSection>
        </div>
      )}
    </div>
  )
}
