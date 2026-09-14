import { Plus } from "lucide-react";
import CompanyInfoForm from "../../components/Admin/About/CompanyInfoForm";
import AdminTeamMemberCard from "../../components/Admin/About/AdminTeamMemberCard";
import TeamMemberFormModal from "../../components/Admin/About/TeamMemberFormModal";
import type { TeamMember } from "../../Types/content";
import { useSupabaseCrud } from "../../hooks/useSupabaseCrud";
import Button from "../../components/Ui/Button";
import { getTeamMembersRequest, addTeamMemberRequest, updateTeamMemberRequest, deleteTeamMemberRequest} from "../../services/teamService";
import { useSiteContent } from "../../hooks/useSiteContent";
import {SpinnerMini} from "../../components/Ui/Spinner"

const sections = ["company-info", "team-intro"];

const AdminAbout = () => {
const {
    items: team,
    isLoading: isTeamLoading,
    isModalOpen,
    editingItem: editingMember,
    openAddModal,
    openEditModal,
    closeModal,
    handleSave,
    handleDelete,
  } = useSupabaseCrud<TeamMember>({
    getAll: getTeamMembersRequest,
    add: addTeamMemberRequest,
    update: updateTeamMemberRequest,
    remove: deleteTeamMemberRequest,
  });
  
  const { content, isLoading: isContentLoading, saveContent,} = useSiteContent(sections);
  const isLoading = isTeamLoading || isContentLoading;
  if (isLoading) return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <SpinnerMini />
    </div>
  );

  return (
    <div className="space-y-10 mt-4 md:mt-0">
      <div>
        <h1 className="text-3xl font-bold text-primary">درباره ما و تیم</h1>
        <p className="mt-2 text-gray-600">ویرایش متن معرفی شرکت و مدیریت اعضای تیم</p>
      </div>
      <CompanyInfoForm content={content} saveContent={saveContent}/>
      <div>
        <div className="md:flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary mb-5">اعضای تیم</h2>
          <Button onClick={openAddModal} className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:scale-105">
            <Plus size={20} />
            افزودن عضو
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <AdminTeamMemberCard key={member.id} member={member} onEdit={() => openEditModal(member)} onDelete={() => handleDelete(member.id)}/>
          ))}
        </div>
      </div>
      <TeamMemberFormModal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} initialData={editingMember}/>
    </div>
  );
};

export default AdminAbout;