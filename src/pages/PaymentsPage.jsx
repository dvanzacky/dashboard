import { Wifi, ArrowDownLeft, ArrowUpRight, Clock3 } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const summary = [
  { label: 'Income', value: '$8,420', icon: ArrowDownLeft, chip: 'bg-sky-100 text-sky-500' },
  { label: 'Expenses', value: '$3,265', icon: ArrowUpRight, chip: 'bg-pink-100 text-pink-500' },
  { label: 'Pending', value: '$640', icon: Clock3, chip: 'bg-violet-100 text-violet-500' },
]

const transactions = [
  { name: 'Spotify', category: 'Subscription', date: 'Nov 13, 2026', amount: '-$9.99', status: 'Completed' },
  { name: 'Acme Corp', category: 'Salary', date: 'Nov 12, 2026', amount: '+$4,200.00', status: 'Completed' },
  { name: 'Grab', category: 'Transport', date: 'Nov 11, 2026', amount: '-$14.50', status: 'Pending' },
  { name: 'Tokopedia', category: 'Shopping', date: 'Nov 10, 2026', amount: '-$86.20', status: 'Completed' },
  { name: 'Netflix', category: 'Subscription', date: 'Nov 09, 2026', amount: '-$12.99', status: 'Failed' },
]

const statusStyle = {
  Completed: 'bg-sky-100 text-sky-600',
  Pending: 'bg-violet-100 text-violet-600',
  Failed: 'bg-pink-100 text-pink-600',
}

const categories = [
  { name: 'Shopping', value: 42, fill: 'from-violet-400 to-indigo-500' },
  { name: 'Food', value: 28, fill: 'from-pink-400 to-rose-400' },
  { name: 'Transport', value: 18, fill: 'from-sky-400 to-cyan-400' },
  { name: 'Bills', value: 12, fill: 'from-fuchsia-400 to-pink-400' },
]

export default function PaymentsPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Card visual */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-violet-500 via-indigo-500 to-sky-400 p-6 text-white shadow-lg shadow-indigo-400/40">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/15" />
          <div className="absolute -bottom-12 -left-8 size-36 rounded-full bg-pink-300/25" />

          <div className="relative flex h-full min-h-48 flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium tracking-wide">Nimbus Card</span>
              <Wifi size={20} className="rotate-90 text-white/80" />
            </div>

            <div>
              <div className="mb-3 h-7 w-9 rounded-md bg-white/30" />
              <p className="text-lg tracking-widest">•••• •••• •••• 4242</p>
            </div>

            <div className="flex items-end justify-between text-xs">
              <div>
                <p className="text-white/70">Card holder</p>
                <p className="font-medium">Alex Morgan</p>
              </div>
              <div className="text-right">
                <p className="text-white/70">Expires</p>
                <p className="font-medium">08/29</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary + monthly limit */}
        <div className="flex flex-col gap-5 xl:col-span-2">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {summary.map(({ label, value, icon: Icon, chip }) => (
              <GlassCard key={label} className="flex items-center gap-3">
                <div className={`grid size-10 shrink-0 place-items-center rounded-xl ${chip}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-lg font-semibold text-slate-700">{value}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="flex-1">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-700">
                Monthly limit
              </h2>
              <span className="text-xs text-slate-500">$3,265 of $5,000</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-300/50">
              <div
                className="h-full rounded-full bg-linear-to-r from-sky-400 via-violet-400 to-pink-400"
                style={{ width: '65%' }}
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              You have used 65% of your monthly spending limit.
            </p>
          </GlassCard>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Recent transactions */}
        <GlassCard className="xl:col-span-2">
          <h2 className="mb-4 text-base font-semibold text-slate-700">
            Recent Transactions
          </h2>
          <ul className="flex flex-col divide-y divide-white/60">
            {transactions.map((t) => (
              <li
                key={t.name + t.date}
                className="flex items-center justify-between gap-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-violet-400 to-pink-400 text-sm font-semibold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.category} · {t.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`hidden rounded-full px-2.5 py-0.5 text-[11px] font-medium sm:inline ${statusStyle[t.status]}`}
                  >
                    {t.status}
                  </span>
                  <span
                    className={`w-24 text-right text-sm font-semibold ${
                      t.amount.startsWith('+') ? 'text-teal-500' : 'text-slate-700'
                    }`}
                  >
                    {t.amount}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* Spending by category */}
        <GlassCard>
          <h2 className="mb-4 text-base font-semibold text-slate-700">
            Spending by Category
          </h2>
          <ul className="flex flex-col gap-4">
            {categories.map((c) => (
              <li key={c.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-slate-600">{c.name}</span>
                  <span className="font-medium text-slate-600">{c.value}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-300/50">
                  <div
                    className={`h-full rounded-full bg-linear-to-r ${c.fill}`}
                    style={{ width: `${c.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </>
  )
}