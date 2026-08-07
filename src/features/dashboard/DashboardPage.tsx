import { Cpu, HardDrive, Network, MemoryStick } from "lucide-react";

import { StatCard } from "./widgets";

export function DashboardPage() {
  return (
    <div className="grid grid-cols-4 gap-6">

     <StatCard
    title="CPU"
    value="--"
    icon={Cpu}
/>

<StatCard
    title="Memory"
    value="--"
    icon={MemoryStick}
/>

<StatCard
    title="Storage"
    value="--"
    icon={HardDrive}
/>

<StatCard
    title="Network"
    value="--"
    icon={Network}
/>
      /

    </div>
  );
}