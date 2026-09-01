import { Pencil, Trash2 } from "lucide-react";
import Button from "../../Ui/Button";

type AdminCardActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

const AdminCardActions = ({ onEdit, onDelete }: AdminCardActionsProps) => {
  return (
    <div className="mt-4 flex gap-2">
      <Button onClick={onEdit} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary/20 py-2 text-sm font-medium text-primary transition hover:bg-secondary/30">
        <Pencil size={16} />
        ویرایش
      </Button>
      <Button onClick={onDelete} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100">
        <Trash2 size={16} />
        حذف
      </Button>
    </div>
  );
};

export default AdminCardActions;