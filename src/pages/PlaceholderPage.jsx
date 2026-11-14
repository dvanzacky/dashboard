import { Construction } from 'lucide-react'
import GlassCard from '../components/GlassCard'

export default function PlaceholderPage({ title }) {
  return (
    <GlassCard className="grid flex-1 place-items-center py-20 text-center">
      <div>
        <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-linear-to-br from-violet-400 to-pink-400 text-white shadow-lg shadow-violet-300/50">
          <Construction size={24} />
        </div>
        <h2 className="text-lg font-semibold text-slate-700">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">
          This page is coming soon.
        </p>
      </div>
    </GlassCard>
  )
}