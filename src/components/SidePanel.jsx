import { Volume2, CalendarDays } from 'lucide-react'

const timer = [
  { value: '08', unit: 'Hours' },
  { value: '45', unit: 'Min' },
  { value: '12', unit: 'Sec' },
]

const legend = [
  { label: 'Completed', value: '24', dot: 'bg-pink-400' },
  { label: 'In progress', value: '12', dot: 'bg-violet-400' },
  { label: 'Pending', value: '08', dot: 'bg-sky-400' },
]

const schedule = [
  { time: '09:00', title: 'Team standup', tag: 'Meeting', dot: 'bg-sky-400' },
  { time: '11:30', title: 'Design review', tag: 'Review', dot: 'bg-violet-400' },
  { time: '14:00', title: 'Client call', tag: 'Call', dot: 'bg-pink-400' },
  { time: '16:15', title: 'Sprint planning', tag: 'Planning', dot: 'bg-indigo-400' },
]

const team = [
  { initial: 'A', color: 'bg-pink-400' },
  { initial: 'R', color: 'bg-violet-400' },
  { initial: 'S', color: 'bg-sky-400' },
  { initial: 'D', color: 'bg-indigo-400' },
]

export default function SidePanel() {
  return (
    <aside className="flex h-full flex-col gap-4 rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-md">
      {/* Small top label and icon */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">Tasks &amp; Mastery</span>
        <Volume2 size={14} className="text-slate-400" />
      </div>

      <h2 className="text-lg font-semibold text-slate-700">Session Summary</h2>

      {/* Timer and legend card */}
      <div className="rounded-xl border border-white/70 bg-white/50 p-4">
        <p className="mb-3 text-xs text-slate-500">Time spent today</p>

        <div className="grid grid-cols-3 gap-2">
          {timer.map((t) => (
            <div
              key={t.unit}
              className="rounded-lg bg-pink-100/80 py-2 text-center"
            >
              <p className="text-xl font-bold text-pink-500">{t.value}</p>
              <p className="text-[10px] uppercase tracking-wide text-pink-400">
                {t.unit}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-4 flex flex-col gap-2">
          {legend.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between text-xs text-slate-600"
            >
              <span className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${item.dot}`} />
                {item.label}
              </span>
              <span className="font-medium">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Weekly goal progress */}
      <div className="rounded-xl border border-white/70 bg-white/50 p-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-medium text-slate-700">Weekly goal</span>
          <span className="text-slate-500">68%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-300/50">
          <div
            className="h-full rounded-full bg-linear-to-r from-violet-400 to-pink-400"
            style={{ width: '68%' }}
          />
        </div>
      </div>

      {/* Today's schedule */}
      <div className="rounded-xl border border-white/70 bg-white/50 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">
            Today's schedule
          </span>
          <CalendarDays size={14} className="text-slate-400" />
        </div>

        <ul className="flex flex-col gap-3">
          {schedule.map((item) => (
            <li key={item.time} className="flex items-center gap-3">
              <span className="w-10 text-xs text-slate-500">{item.time}</span>
              <span className={`h-8 w-1 rounded-full ${item.dot}`} />
              <div className="flex-1">
                <p className="text-xs font-medium text-slate-700">
                  {item.title}
                </p>
                <p className="text-[10px] text-slate-500">{item.tag}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom card pushed to the bottom */}
      <div className="mt-auto rounded-xl border border-white/70 bg-white/50 p-4">
        <p className="text-sm font-medium text-slate-700">Weekly report</p>
        <p className="mt-1 text-xs text-slate-500">
          Your summary for this week is ready to download.
        </p>

        <div className="mt-3 flex items-center justify-between">
          {/* Stacked avatars */}
          <div className="flex -space-x-2">
            {team.map((m) => (
              <span
                key={m.initial}
                className={`grid size-7 place-items-center rounded-full border-2 border-white text-[10px] font-semibold text-white ${m.color}`}
              >
                {m.initial}
              </span>
            ))}
          </div>

          <button className="rounded-full bg-pink-100 px-4 py-1.5 text-xs font-medium text-pink-500 transition hover:bg-pink-200">
            Export report
          </button>
        </div>
      </div>
    </aside>
  )
}