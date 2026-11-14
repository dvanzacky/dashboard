import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import OverviewPage from './pages/OverviewPage'
import AnalyticsPage from './pages/AnalyticsPage'
import PaymentsPage from './pages/PaymentsPage'
import PlaceholderPage from './pages/PlaceholderPage'

const pages = {
  overview: {
    title: 'Dashboard Overview',
    subtitle: "Welcome back, here's what's happening today",
    Component: OverviewPage,
  },
  analytics: {
    title: 'Analytics',
    subtitle: 'Track performance and traffic trends',
    Component: AnalyticsPage,
  },
  payments: {
    title: 'Payments',
    subtitle: 'Manage your cards and transactions',
    Component: PaymentsPage,
  },
  accounts: {
    title: 'Accounts',
    subtitle: 'Manage users and teams',
    Component: PlaceholderPage,
  },
  reports: {
    title: 'Reports',
    subtitle: 'Review and export your reports',
    Component: PlaceholderPage,
  },
  settings: {
    title: 'Settings',
    subtitle: 'Customize your workspace',
    Component: PlaceholderPage,
  },
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [page, setPage] = useState('overview')

  const { title, subtitle, Component } = pages[page]

  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        page={page}
        onNavigate={setPage}
      />

      <main className="flex flex-1 flex-col gap-6 overflow-y-auto bg-linear-to-br from-violet-100 via-indigo-100 to-sky-200 p-4 sm:p-6 xl:p-8">
        <Header
          title={title}
          subtitle={subtitle}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <Component title={title} />
      </main>
    </div>
  )
}