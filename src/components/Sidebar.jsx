import {
  LayoutDashboard,
  BarChart3,
  CreditCard,
  Users,
  FileText,
  Settings,
  User,
  X,
} from 'lucide-react'

const mainMenu = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'accounts', label: 'Accounts', icon: Users },
]

const secondaryMenu = [
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
]

function MenuItem({ label, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
        active
          ? 'bg-blue-500 text-white shadow-md shadow-blue-900/30'
          : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  )
}

export default function Sidebar({ open, onClose, page, onNavigate }) {
  // Switch page, then close the drawer (only matters on mobile)
  const go = (id) => {
    onNavigate(id)
    onClose()
  }

  return (
    <>
      {/* Dark backdrop (mobile only) */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-56 shrink-0 flex-col bg-linear-to-b from-violet-600 via-indigo-700 to-indigo-900 p-5 text-white transition-transform duration-300 md:static md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo and close button (close is mobile only) */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg bg-white/20 font-bold">
              N
            </div>
            <span className="text-lg font-semibold tracking-tight">Nimbus</span>
          </div>
          <button
            onClick={onClose}
            className="grid size-7 place-items-center rounded-md text-white/70 hover:bg-white/10 md:hidden"
          >
            <X size={16} />
          </button>
        </div>

        {/* Main menu */}
        <nav className="flex flex-col gap-1">
          {mainMenu.map((item) => (
            <MenuItem
              key={item.id}
              {...item}
              active={page === item.id}
              onClick={() => go(item.id)}
            />
          ))}
        </nav>

        {/* Divider */}
        <div className="my-4 border-t border-white/20" />

        {/* Secondary menu */}
        <nav className="flex flex-col gap-1">
          {secondaryMenu.map((item) => (
            <MenuItem
              key={item.id}
              {...item}
              active={page === item.id}
              onClick={() => go(item.id)}
            />
          ))}
        </nav>

        {/* Account at the bottom */}
        <div className="mt-auto flex items-center gap-2 text-sm text-white/70">
          <User size={16} />
          Account
        </div>
      </aside>
    </>
  )
}