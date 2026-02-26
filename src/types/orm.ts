export interface SearchResult {
  title: string
  url: string
  displayUrl: string
  snippet: string
  sentiment: 'positive' | 'neutral' | 'negative'
}

export interface ActionItem {
  title: string
  description: string
  urgency: 'Immediate' | 'This Month' | 'Ongoing'
}

export interface OrmReport {
  query: string
  isLive: boolean
  overallScore: number
  afterScore: number
  categoryScores: {
    searchPresence: number
    sentimentScore: number
    profileCoverage: number
    contentControl: number
  }
  afterCategoryScores: {
    searchPresence: number
    sentimentScore: number
    profileCoverage: number
    contentControl: number
  }
  results: SearchResult[]
  afterResults: SearchResult[]
  risks: string[]
  opportunities: string[]
  actions: ActionItem[]
  profilesClaimed: { name: string; claimed: boolean }[]
}
