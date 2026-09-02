import { Plus } from "lucide-react";
import CompanyInfoForm from "../../components/Admin/About/CompanyInfoForm";
import AdminTeamMemberCard from "../../components/Admin/About/AdminTeamMemberCard";
import TeamMemberFormModal from "../../components/Admin/About/TeamMemberFormModal";
import type { TeamMember } from "../../Types/content";
import manager from "../../assets/manager.jpg";
import member1 from "../../assets/member1.jpg";
import member2 from "../../assets/member2.jpg";
import Button from "../../components/Ui/Button";
import useAdminCrud from "../../hooks/useAdminCrud";

const initialTeam: TeamMember[] = [
  { id: "manager", name: "امیرحسین ملکان", role: "مدیرعامل", image: manager, description: "هدایت مجموعه و توسعه فعالیت‌های هومت با تمرکز بر ارائه راهکارهای نوین.",},
  { id: "member1", name: "محمد احمدی", role: "مدیر فنی", image: member1, description: "نظارت بر طراحی و اجرای پروژه‌ها و اطمینان از کیفیت فنی خدمات.",},
  { id: "member2",  name: "سارا کریمی", role: "مهندس پروژه", image: member2, description: "برنامه‌ریزی و نظارت بر اجرای پروژه‌های انرژی خورشیدی.",},
];

const AdminAbout = () => {
const {
    items: team,
    isModalOpen,
    setIsModalOpen,
    editingItem: editingMember,
    openAddModal,
    openEditModal,
    handleSave,
    handleDelete,
  } = useAdminCrud<TeamMember>(initialTeam);

  return (
    <div className="space-y-10 mt-4 md:mt-0">
      <div>
        <h1 className="text-3xl font-bold text-primary">درباره ما و تیم</h1>
        <p className="mt-2 text-gray-600">ویرایش متن معرفی شرکت و مدیریت اعضای تیم</p>
      </div>
      <CompanyInfoForm />
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
      <TeamMemberFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} initialData={editingMember}/>
    </div>
  );
};

export default AdminAbout;