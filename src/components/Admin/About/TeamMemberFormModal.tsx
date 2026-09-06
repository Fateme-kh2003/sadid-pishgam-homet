import EntityFormModal from "../Ui/EntityFormModal";
import type { FieldConfig } from "../../../Types/forms";
import type { TeamMember } from "../../../Types/content";
import placeholderImage from "../../../assets/Portrait_Placeholder.webp";
import { uploadTeamImage } from "../../../services/storageService";

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "name", label: "نام", type: "text", required: true },
  { name: "role", label: "سمت", type: "text", required: true },
  { name: "image", label: "تصویر عضو تیم", type: "file" },
  { name: "description", label: "توضیحات", type: "textarea", required: true },
];

const emptyValues = {name: "",role: "",image: "",description: "",};

type TeamMemberFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: Omit<TeamMember, "id">) => void | Promise<void>;
  initialData?: TeamMember;
};

const TeamMemberFormModal = ({isOpen,onClose,onSave,initialData,}: TeamMemberFormModalProps) => {
  const initialValues = initialData
    ? {
        name: initialData.name,
        role: initialData.role,
        image: initialData.image,
        description: initialData.description,
      }
    : undefined;

  const handleSave = async (values: Record<string, FormValue>) => {
    const name = typeof values.name === "string" ? values.name : "";
    const role = typeof values.role === "string" ? values.role : "";
    const description =typeof values.description === "string" ? values.description : "";

    let imageUrl: string;
    if (values.image instanceof File) {
      imageUrl = await uploadTeamImage(values.image);
    } else if (typeof values.image === "string" && values.image) {
      imageUrl = values.image;
    } else {
      imageUrl = placeholderImage;
    }

    await onSave({
      name,
      role,
      image: imageUrl,
      description,
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