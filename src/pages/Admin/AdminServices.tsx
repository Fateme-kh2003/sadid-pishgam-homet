import { Plus } from "lucide-react";
import AdminServiceCard from "../../components/Admin/Services/AdminServiceCard";
import ServiceFormModal from "../../components/Admin/Services/ServiceFormModal";
import type { ServiceItem } from "../../Types/content";
import Button from "../../components/Ui/Button";
import { useSupabaseCrud } from "../../hooks/useSupabaseCrud";
import { getServicesRequest, addServiceRequest, updateServiceRequest, deleteServiceRequest,} from "../../services/Servicesservice";

const AdminServices = () => {
  const {
    items: services,
    isLoading,
    isModalOpen,
    editingItem: editingService,
    openAddModal,
    openEditModal,
    closeModal,
    handleSave,
    handleDelete,
  } = useSupabaseCrud<ServiceItem>({
    getAll: getServicesRequest,
    add: addServiceRequest,
    update: updateServiceRequest,
    remove: deleteServiceRequest,
  });

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
      {isLoading ? (
        <p className="mt-8 text-gray-500">در حال بارگذاری...</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <AdminServiceCard
              key={service.id}
              service={service}
              onEdit={() => openEditModal(service)}
              onDelete={() => handleDelete(service.id)}
            />
          ))}
        </div>
      )}
      <ServiceFormModal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} initialData={editingService}/>
    </div>
  );
};

export default AdminServices;