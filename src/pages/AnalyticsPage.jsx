import {
  TrendingUp,
  TrendingDown,
  Eye,
  Users,
  MousePointerClick,
  Clock,
} from 'lucide-react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import GlassCard from '../components/GlassCard'

const kpis = [
  { label: 'Total visits', value: '48.2k', change: '+12.5%', up: true, icon: Eye, chip: 'bg-sky-100 text-sky-500' },
  { label: 'Unique users', value: '18.9k', change: '+8.1%', up: true, icon: Users, chip: 'bg-violet-100 text-violet-500' },
  { label: 'Bounce rate', value: '32.4%', change: '-2.3%', up: false, icon: MousePointerClick, chip: 'bg-pink-100 text-pink-500' },
  { label: 'Avg. session', value: '4m 32s', change: '+5.7%', up: true, icon: Clock, chip: 'bg-indigo-100 text-indigo-500' },
]

const weekly = [
  { day: 'Mon', visits: 4200 },
  { day: 'Tue', visits: 5800 },
  { day: 'Wed', visits: 5100 },
  { day: 'Thu', visits: 7200 },
  { day: 'Fri', visits: 6400 },
  { day: 'Sat', visits: 3800 },
  { day: 'Sun', visits: 3100 },
]

const sources = [
  { name: 'Direct', value: 38, color: '#6366f1' },
  { name: 'Social', value: 27, color: '#d946ef' },
  { name: 'Organic', value: 22, color: '#38bdf8' },
  { name: 'Referral', value: 13, color: '#a78bfa' },
]

const topPages = [
  { path: '/home', views: '12,480', share: 82 },
  { path: '/pricing', views: '8,920', share: 64 },
  { path: '/blog/getting-started', views: '6,310', share: 48 },
  { path: '/features', views: '4,870', share: 36 },
  { path: '/contact', views: '2,140', share: 18 },
]

const axisTick = { fill: '#64748b', fontSize: 11 }

export default function AnalyticsPage() {
  return (
    <>
      {/* KPI cards */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map(({ label, value, change, up, icon: Icon, chip }) => (
          <GlassCard key={label} className="flex items-center gap-4">
            <div className={`grid size-11 shrink-0 place-items-center rounded-xl ${chip}`}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500">{label}</p>
              <p className="text-xl font-semibold text-slate-700">{value}</p>
              <span
                className={`flex items-center gap-0.5 text-xs font-medium ${
                  up ? 'text-teal-500' : 'text-pink-500'
                }`}
              >
                {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {change}
              </span>
            </div>
          </GlassCard>
        ))}
      </section>

      {/* Bar chart + donut chart */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <GlassCard className="xl:col-span-2">
          <h2 className="mb-4 text-base font-semibold text-slate-700">
            Weekly Traffic
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weekly}
                margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="rgba(100,116,139,0.2)"
                />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={axisTick} />
                <YAxis tickLine={false} axisLine={false} tick={axisTick} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.4)' }}
                  contentStyle={{
                    borderRadius: 12,
                    border: 'none',
                    background: 'rgba(255,255,255,0.85)',
                    fontSize: 12,
                  }}
                />
                <Bar
                  dataKey="visits"
                  fill="url(#barFill)"
                  radius={[8, 8, 0, 0]}
                  barSize={22}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="mb-2 text-base font-semibold text-slate-700">
            Traffic Sources
          </h2>

          <div className="relative mx-auto h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sources}
                  dataKey="value"
                  innerRadius={55}
                  outerRadius={78}
                  paddingAngle={4}
                  stroke="none"
                >
                  {sources.map((s) => (
                    <Cell key={s.name} fill={s.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Text in the middle of the donut */}
            <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="text-xl font-bold text-slate-700">48.2k</p>
                <p className="text-[10px] text-slate-500">Total visits</p>
              </div>
            </div>
          </div>

          <ul className="mt-2 flex flex-col gap-2">
            {sources.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between text-xs text-slate-600"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  {s.name}
                </span>
                <span className="font-medium">{s.value}%</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* Top pages */}
      <GlassCard>
        <h2 className="mb-4 text-base font-semibold text-slate-700">Top Pages</h2>
        <ul className="flex flex-col gap-4">
          {topPages.map((p) => (
            <li key={p.path} className="flex items-center gap-4">
              <span className="w-40 shrink-0 truncate text-sm text-slate-600 sm:w-56">
                {p.path}
              </span>
              <div className="h-1.5 flex-1 rounded-full bg-slate-300/50">
                <div
                  className="h-full rounded-full bg-linear-to-r from-violet-400 to-pink-400"
                  style={{ width: `${p.share}%` }}
                />
              </div>
              <span className="w-16 shrink-0 text-right text-xs font-medium text-slate-600">
                {p.views}
              </span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </>
  )
}