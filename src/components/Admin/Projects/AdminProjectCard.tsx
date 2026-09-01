import type { ProjectDetail } from "../../../Types";
import AdminCardActions from "../Ui/AdminCardactions";

type AdminProjectCardProps = {
  project: ProjectDetail;
  onEdit: () => void;
  onDelete: () => void;
};

const AdminProjectCard = ({ project, onEdit, onDelete }: AdminProjectCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md">
      <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary">{project.title}</h3>
        <h4 className="text-sm text-primary">{project.location}</h4>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{project.description}</p>
        <AdminCardActions onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default AdminProjectCard;