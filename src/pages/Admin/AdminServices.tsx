import { Plus, Sun, Camera, BatteryCharging, Wrench } from "lucide-react";
import AdminServiceCard from "../../components/Admin/Services/AdminServiceCard";
import ServiceFormModal from "../../components/Admin/Services/ServiceFormModal";
import type { ServiceItem } from "../../Types";
import Button from "../../components/Ui/Button";
import useAdminCrud from "../../hooks/useAdminCrud";

const initialServices: ServiceItem[] = [
  { id: "solar", title: "پنل خورشیدی", description: "طراحی، تأمین و نصب انواع سیستم‌های خورشیدی برای مصارف خانگی، تجاری و صنعتی.", icon: Sun, path: "/services#solar",},
  { id: "camera", title: "دوربین مداربسته", description: "اجرای سیستم‌های نظارتی و امنیتی با تجهیزات پیشرفته و کیفیت بالا.", icon: Camera, path: "/services#camera",},
  { id: "storage", title: "ذخیره‌سازی انرژی", description: "ارائه راهکارهای ذخیره انرژی با استفاده از باتری‌ها و تجهیزات استاندارد.", icon: BatteryCharging, path: "/services#storage",},
  { id: "support", title: "نصب و پشتیبانی", description: "راه‌اندازی، سرویس دوره‌ای و پشتیبانی تخصصی برای تمامی پروژه‌ها.", icon: Wrench, path: "/services#support",},
];

const AdminServices = () => {
  const {
    items: services,
    isModalOpen,
    setIsModalOpen,
    editingItem: editingService,
    openAddModal,
    openEditModal,
    handleSave,
    handleDelete,
  } = useAdminCrud<ServiceItem>(initialServices);

  return (
    <div>
      <div className="md:flex mt-4 md:mt-0 items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">مدیریت خدمات</h1>
          <p className="mt-2 mb-4 md:mb-0 text-gray-600">افزودن، ویرایش یا حذف خدمات نمایش داده‌شده در سایت</p>
        </div>
        <Button onClick={openAddModal} className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:scale-105">
          <Plus size={20} />
          افزودن سرویس
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <AdminServiceCard key={service.id} service={service} onEdit={() => openEditModal(service)} onDelete={() => handleDelete(service.id)}/>
        ))}
      </div>
      <ServiceFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} initialData={editingService}/>
    </div>
  );
};

export default AdminServices;