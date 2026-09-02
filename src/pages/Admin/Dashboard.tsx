import { FolderKanban, Wrench, Users, ShieldCheck } from "lucide-react";

export type StatCard = {
  label: string;
  value: number;
  icon: React.ElementType;
};

const stats: StatCard[] = [
  { label: "پروژه‌ها", value: 3, icon: FolderKanban },
  { label: "خدمات", value: 4, icon: Wrench },
  { label: "اعضای تیم", value: 6, icon: Users },
  { label: "ادمین‌ها", value: 1, icon: ShieldCheck },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">داشبورد</h1>
      <p className="mt-2 text-gray-600">خلاصه‌ای از وضعیت کلی سایت</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20">
                <Icon className="text-secondary" size={28} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;