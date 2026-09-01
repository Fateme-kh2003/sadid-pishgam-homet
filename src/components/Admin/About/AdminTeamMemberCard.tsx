import type { TeamMember } from "../../../Types";
import AdminCardActions from "../Ui/AdminCardactions";

type AdminTeamMemberCardProps = {
  member: TeamMember;
  onEdit: () => void;
  onDelete: () => void;
};

const AdminTeamMemberCard = ({ member, onEdit, onDelete }: AdminTeamMemberCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md">
      <img src={member.image} alt={member.name} className="h-48 w-full object-cover" />
      <div className="py-5 px-3 text-center">
        <h3 className="text-lg font-bold text-primary">{member.name}</h3>
        <span className="mt-1 inline-block text-sm font-medium text-secondary">{member.role}</span>
        <p className="text-sm text-gray-500 mt-1">{member.description}</p>
        <AdminCardActions onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default AdminTeamMemberCard;