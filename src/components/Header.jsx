import { ChevronRight, Menu } from 'lucide-react'

export default function Header({ title, subtitle, onMenuClick }) {
  return (
    <header className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile only) */}
        <button
          onClick={onMenuClick}
          className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/60 bg-white/40 text-slate-700 backdrop-blur-md md:hidden"
        >
          <Menu size={18} />
        </button>

        <div>
          <h1 className="text-xl font-semibold text-slate-800 sm:text-2xl">
            {title}
          </h1>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>

      <button className="flex shrink-0 items-center gap-1 rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-sm text-slate-700 backdrop-blur-md transition hover:bg-white/60">
        Data backup
        <ChevronRight size={16} />
      </button>
    </header>
  )
}