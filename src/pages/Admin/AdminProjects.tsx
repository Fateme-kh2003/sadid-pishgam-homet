import { useState } from "react";
import { Plus } from "lucide-react";
import AdminProjectCard from "../../components/Admin/Projects/AdminProjectCard";
import ProjectFormModal from "../../components/Admin/Projects/ProjectFormModal";
import type { ProjectDetail } from "../../Types";
import Service1 from "../../assets/service1.jpg";
import Service2 from "../../assets/service2.jpg";
import Service3 from "../../assets/service3.jpg";
import Button from "../../components/Ui/Button";

const initialProjects: ProjectDetail[] = [
  {
    id: "solar-projects",
    title: "پروژه پنل خورشیدی",
    location: "شاهرود",
    image: Service1,
    description:
      "ارائه راهکارهای مناسب برای استفاده از انرژی خورشیدی، از طراحی و انتخاب تجهیزات تا نصب و راه‌اندازی سیستم.",
    features: ["طراحی سیستم خورشیدی", "تأمین تجهیزات", "نصب و راه‌اندازی", "پشتیبانی و نگهداری"],
  },
  {
    id: "camera-projects",
    title: "پروژه دوربین مداربسته",
    location: "تهران",
    image: Service2,
    description:
      "طراحی و اجرای سیستم‌های نظارتی و امنیتی متناسب با نیاز ساختمان‌ها، مجموعه‌های تجاری و پروژه‌های مختلف.",
    features: ["طراحی سیستم نظارتی", "تأمین دوربین و تجهیزات", "نصب و تنظیم تجهیزات", "پشتیبانی سیستم"],
  },
  {
    id: "storage-projects",
    title: "پروژه سیستم ذخیره انرژی",
    location: "سمنان",
    image: Service3,
    description: "راهکارهای ذخیره‌سازی انرژی برای استفاده بهینه‌تر از انرژی تولیدشده و افزایش پایداری سیستم.",
    features: ["بررسی نیاز پروژه", "انتخاب تجهیزات مناسب", "نصب و راه‌اندازی", "پشتیبانی فنی"],
  },
];

const AdminProjects = () => {
  const [projects, setProjects] = useState<ProjectDetail[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectDetail | undefined>(undefined);

  const openAddModal = () => {
    setEditingProject(undefined);
    setIsModalOpen(true);
  };

  const openEditModal = (project: ProjectDetail) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleSave = (project: ProjectDetail) => {
    setProjects((prev) => {
      const exists = prev.some((p) => p.id === project.id);
      return exists ? prev.map((p) => (p.id === project.id ? project : p)) : [...prev, project];
    });
  };

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="md:flex mt-4 md:mt-0 items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">مدیریت پروژه‌ها</h1>
          <p className="mt-2 mb-4 md:mb-0 text-gray-600">
            افزودن، ویرایش یا حذف پروژه‌ها — سه‌ی اول در صفحه اصلی هم نمایش داده می‌شوند
          </p>
        </div>
        <Button onClick={openAddModal} className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:scale-105">
          <Plus size={20} />
          افزودن پروژه
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <AdminProjectCard
            key={project.id}
            project={project}
            onEdit={() => openEditModal(project)}
            onDelete={() => handleDelete(project.id)}
          />
        ))}
      </div>
      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={editingProject}
      />
    </div>
  );
};

export default AdminProjects;