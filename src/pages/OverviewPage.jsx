import StatCards from '../components/StatCards'
import ChartCard from '../components/ChartCard'
import SliderRow from '../components/SliderRow'
import SidePanel from '../components/SidePanel'

export default function OverviewPage() {
  return (
    <>
      <StatCards />

      {/* Two-column area: left (chart + sliders), right (side panel) */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <ChartCard />
          <SliderRow />
        </div>

        <SidePanel />
      </div>
    </>
  )
}