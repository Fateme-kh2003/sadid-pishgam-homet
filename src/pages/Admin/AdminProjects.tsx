import { Plus } from "lucide-react";
import AdminProjectCard from "../../components/Admin/Projects/AdminProjectCard";
import ProjectFormModal from "../../components/Admin/Projects/ProjectFormModal";
import type { ProjectDetail } from "../../Types/content";
import Button from "../../components/Ui/Button";
import { useSupabaseCrud } from "../../hooks/useSupabaseCrud";
import { getProjectsRequest, addProjectRequest, updateProjectRequest, deleteProjectRequest, } from "../../services/Projectservice";

const AdminProjects = () => {
  const {
   items: projects,
   isLoading,
   isModalOpen, 
   editingItem: editingProject, 
   openAddModal, 
   openEditModal, 
   closeModal, 
   handleSave, 
   handleDelete, 
  } = useSupabaseCrud<ProjectDetail>({ 
    getAll: getProjectsRequest,
    add: addProjectRequest, 
    update: updateProjectRequest, 
    remove: deleteProjectRequest, 
  });

  return (
    <div>
      <div className="md:flex mt-4 md:mt-0 items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">مدیریت پروژه‌ها</h1>
          <p className="mt-2 mb-4 md:mb-0 text-gray-600">افزودن، ویرایش یا حذف پروژه‌ها — سه‌ی اول در صفحه اصلی هم نمایش داده می‌شوند</p>
        </div>
        <Button onClick={openAddModal} className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:scale-105">
          <Plus size={20} />
          افزودن پروژه
        </Button>
      </div>
      {isLoading ? ( 
        <p className="mt-8 text-gray-500">در حال بارگذاری...</p> 
        ) : ( 
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
      )}
      <ProjectFormModal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} initialData={editingProject}/>
    </div>
  );
};

export default AdminProjects;