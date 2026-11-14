const sliders = [
  {
    title: 'Performance',
    value: 72,
    fill: 'from-sky-400 to-blue-500',
    button: 'Adjust',
  },
  {
    title: 'Storage',
    value: 48,
    fill: 'from-teal-300 to-cyan-400',
    button: 'Manage',
  },
  {
    title: 'Bandwidth',
    value: 86,
    fill: 'from-fuchsia-400 to-rose-500',
    button: 'Upgrade',
  },
]

function SliderItem({ title, value, fill, button }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium text-slate-600">{title}</span>

      {/* Track */}
      <div className="h-1.5 w-full rounded-full bg-slate-300/50">
        {/* Filled part with a knob at its end */}
        <div
          className={`relative h-full rounded-full bg-linear-to-r ${fill}`}
          style={{ width: `${value}%` }}
        >
          <span className="absolute -right-1.5 top-1/2 size-3.5 -translate-y-1/2 rounded-full border-2 border-white bg-white/80 shadow" />
        </div>
      </div>

      {/* Value and button */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">{value}%</span>
        <button className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs text-slate-600 shadow-sm transition hover:bg-white/90">
          {button}
        </button>
      </div>
    </div>
  )
}

export default function SliderRow() {
  return (
    <section className="grid grid-cols-1 gap-6 rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-md sm:grid-cols-3">
      {sliders.map((item) => (
        <SliderItem key={item.title} {...item} />
      ))}
    </section>
  )
}