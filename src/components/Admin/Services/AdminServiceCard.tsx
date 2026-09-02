import type { ServiceItem } from "../../../Types/content";
import AdminCardActions from "../Ui/AdminCardactions";

type AdminServiceCardProps = {
  service: ServiceItem;
  onEdit: () => void;
  onDelete: () => void;
};

const AdminServiceCard = ({ service, onEdit, onDelete }: AdminServiceCardProps) => {
  const Icon = service.icon;
  return (
    <div className="rounded-3xl bg-white p-5 text-center shadow-md">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20">
        <Icon className="text-secondary" size={28} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-primary">{service.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-gray-600">{service.description}</p>
      <AdminCardActions onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default AdminServiceCard;