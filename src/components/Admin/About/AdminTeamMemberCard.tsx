import type { TeamMember } from "../../../Types/content";
import AdminCardActions from "../Ui/AdminCardactions";

type AdminTeamMemberCardProps = {
  member: TeamMember;
  onEdit: () => void;
  onDelete: () => void;
};

const AdminTeamMemberCard = ({ member, onEdit, onDelete }: AdminTeamMemberCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-gray-50 shadow-md">
      <img src={member.image} alt={member.name} className="h-72 w-full object-position" />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
        <span className="mt-2 inline-block font-medium text-secondary">{member.role}</span>
        <AdminCardActions onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default AdminTeamMemberCard;