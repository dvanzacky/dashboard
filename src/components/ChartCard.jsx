import { Maximize2 } from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Jan', main: 2200, back: 3100 },
  { name: 'Feb', main: 3800, back: 3600 },
  { name: 'Mar', main: 6200, back: 4400 },
  { name: 'Apr', main: 4600, back: 5200 },
  { name: 'May', main: 3000, back: 3800 },
  { name: 'Jun', main: 3400, back: 3000 },
  { name: 'Jul', main: 5200, back: 4200 },
  { name: 'Aug', main: 6400, back: 5600 },
  { name: 'Sep', main: 4800, back: 5000 },
  { name: 'Oct', main: 3600, back: 4200 },
  { name: 'Nov', main: 5000, back: 4600 },
  { name: 'Dec', main: 5800, back: 5400 },
]

export default function ChartCard() {
  return (
    <section className="rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-md">
      {/* Card header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-700">
          Activity Overview
        </h2>
        <button className="grid size-7 place-items-center rounded-md text-slate-500 transition hover:bg-white/60">
          <Maximize2 size={14} />
        </button>
      </div>

      {/* Chart (parent must have a fixed height) */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="mainFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.15} />
              </linearGradient>
              <linearGradient id="backFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d946ef" stopOpacity={0.55} />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="rgba(100,116,139,0.2)"
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b', fontSize: 11 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: 'none',
                background: 'rgba(255,255,255,0.85)',
                fontSize: 12,
              }}
            />

            {/* Back layer first so it renders behind */}
            <Area
              type="monotone"
              dataKey="back"
              stroke="#d946ef"
              strokeWidth={1.5}
              fill="url(#backFill)"
            />
            <Area
              type="monotone"
              dataKey="main"
              stroke="#4f46e5"
              strokeWidth={2}
              fill="url(#mainFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}