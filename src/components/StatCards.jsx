import { Crown, MoreHorizontal } from 'lucide-react'

const stats = [
  { name: 'Nora', label: 'Total balance', amount: '$3,128', variant: 'light' },
  { name: 'Cielo', label: 'Monthly income', amount: '$3,284', variant: 'blue' },
  { name: 'Nexus', label: 'Savings', amount: '$3,102', variant: 'soft' },
  { name: 'Mojo', label: 'Investments', amount: '$3,750', variant: 'pink' },
]

const variants = {
  light: {
    card: 'bg-white/50 border-white/70 text-slate-700',
    sub: 'text-slate-500',
    line: 'bg-slate-300/60',
    chip: 'bg-white/60 text-violet-500',
  },
  blue: {
    card: 'bg-linear-to-br from-sky-400 to-blue-500 border-white/60 text-white ring-2 ring-cyan-200/70 shadow-lg shadow-sky-400/40',
    sub: 'text-white/80',
    line: 'bg-white/40',
    chip: 'bg-white/30 text-white',
  },
  soft: {
    card: 'bg-indigo-100/60 border-white/70 text-slate-700',
    sub: 'text-slate-500',
    line: 'bg-slate-300/60',
    chip: 'bg-white/60 text-indigo-500',
  },
  pink: {
    card: 'bg-linear-to-br from-fuchsia-400 to-pink-500 border-white/60 text-white shadow-lg shadow-pink-400/40',
    sub: 'text-white/80',
    line: 'bg-white/40',
    chip: 'bg-white/30 text-white',
  },
}

function StatCard({ name, label, amount, variant }) {
  const v = variants[variant]

  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border p-4 backdrop-blur-md ${v.card}`}
    >
      {/* Top row: avatar, name, menu */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-full bg-white/60 text-xs font-semibold text-slate-700">
            {name[0]}
          </div>
          <span className="text-sm font-medium">{name}</span>
        </div>
        <button className={`grid size-6 place-items-center rounded-md ${v.chip}`}>
          <MoreHorizontal size={14} />
        </button>
      </div>

      {/* Label and decorative lines */}
      <div className="flex flex-col gap-1.5">
        <span className={`text-xs ${v.sub}`}>{label}</span>
        <div className={`h-0.5 w-3/4 rounded-full ${v.line}`} />
        <div className={`h-0.5 w-1/2 rounded-full ${v.line}`} />
      </div>

      {/* Bottom row: amount and icon */}
      <div className="mt-1 flex items-end justify-between">
        <span className="text-xl font-semibold">{amount}</span>
        <div className={`grid size-7 place-items-center rounded-lg ${v.chip}`}>
          <Crown size={14} />
        </div>
      </div>
    </div>
  )
}

export default function StatCards() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard key={item.name} {...item} />
      ))}
    </section>
  )
}