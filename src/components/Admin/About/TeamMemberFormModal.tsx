import EntityFormModal from "../Ui/EntityFormModal";
import type { FieldConfig } from "../../../Types";
import type { TeamMember } from "../../../Types";

const fields: FieldConfig[] = [
  { name: "name", label: "نام", type: "text", required: true },
  { name: "role", label: "سمت", type: "text", required: true },
  { name: "image", label: "آدرس تصویر", type: "text"},
  { name: "description", label: "توضیحات", type: "textarea", required: true },
];

const emptyValues = { name: "", role: "", image: "", description: "" };

type TeamMemberFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: TeamMember) => void;
  initialData?: TeamMember;
};

const TeamMemberFormModal = ({ isOpen, onClose, onSave, initialData }: TeamMemberFormModalProps) => {
  const initialValues = initialData
    ? {
        name: initialData.name,
        role: initialData.role,
        image: initialData.image,
        description: initialData.description,
      }
    : undefined;

  const handleSave = (values: Record<string, string>) => {
    onSave({
      id: initialData?.id ?? crypto.randomUUID(),
      name: values.name,
      role: values.role,
      image: values.image,
      description: values.description,
    });
  };
  return (
    <EntityFormModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      initialValues={initialValues}
      emptyValues={emptyValues}
      fields={fields}
      addTitle="افزودن عضو تیم"
      editTitle="ویرایش عضو تیم"
      submitAddLabel="افزودن عضو"
      submitEditLabel="ذخیره تغییرات"
    />
  );
};

export default TeamMemberFormModal;