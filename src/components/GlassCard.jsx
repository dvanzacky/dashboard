export default function GlassCard({ className = '', children }) {
  return (
    <section
      className={`rounded-2xl border border-white/70 bg-white/40 p-5 backdrop-blur-md ${className}`}
    >
      {children}
    </section>
  )
}