import { useEffect, useState } from "react";
import { FolderKanban, Wrench, Users } from "lucide-react";
import { getProjectsRequest } from "../../services/projectService";
import { getServicesRequest } from "../../services/servicesService";
import { getTeamMembersRequest } from "../../services/teamService";
import { SpinnerMini } from "../../components/Ui/Spinner";

export type StatCard = {
  label: string;
  value: number;
  icon: React.ElementType;
};

const Dashboard = () => {
  const [counts, setCounts] = useState<{ projects: number; services: number; team: number } | null>(null);

  useEffect(() => {
    Promise.all([getProjectsRequest(), getServicesRequest(), getTeamMembersRequest()])
      .then(([projects, services, team]) => {
        setCounts({ projects: projects.length, services: services.length, team: team.length });
      })
      .catch((error) => {
        console.error("خطا در دریافت آمار داشبورد:", error);
      });
  }, []);

  if (!counts) return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <SpinnerMini />
    </div>
  );

  const stats: StatCard[] = [
    { label: "پروژه‌ها", value: counts.projects, icon: FolderKanban },
    { label: "خدمات", value: counts.services, icon: Wrench },
    { label: "اعضای تیم", value: counts.team, icon: Users },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">داشبورد</h1>
      <p className="mt-2 text-gray-600">خلاصه‌ای از وضعیت کلی سایت</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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