import EntityFormModal from "../Ui/EntityFormModal";
import type { FieldConfig } from "../../../Types/forms";
import type { ProjectDetail } from "../../../Types/content";

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "title", label: "عنوان پروژه", type: "text", required: true },
  { name: "location", label: "لوکیشن", type: "text", required: true },
  { name: "description", label: "توضیحات", type: "textarea", required: true },
  { name: "image", label: "آدرس تصویر", type: "text"},
  { name: "features", label: "ویژگی‌ها (هر خط یک ویژگی)", type: "textarea"},
];

const emptyValues = { title: "", location: "", description: "", image: "", features: "" };

type ProjectFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: ProjectDetail) => void;
  initialData?: ProjectDetail;
};

const ProjectFormModal = ({ isOpen, onClose, onSave, initialData }: ProjectFormModalProps) => {
  const initialValues = initialData
    ? {
        title: initialData.title,
        location: initialData.location ?? "",
        description: initialData.description,
        image: initialData.image,
        features: initialData.features.join("\n"),
      }
    : undefined;

  const handleSave = (values: Record<string, FormValue>) => {
    const title = typeof values.title === "string" ? values.title : "";
    const location = typeof values.location === "string" ? values.location : "";
    const description = typeof values.description === "string" ? values.description : "";
    const image = typeof values.image === "string" ? values.image : "";
    const features = typeof values.features === "string" ? values.features : "";

    onSave({
      id: initialData?.id ?? crypto.randomUUID(),
      title,
      location,
      description,
      image,
      features: features
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean),
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
      addTitle="افزودن پروژه"
      editTitle="ویرایش پروژه"
      submitAddLabel="افزودن پروژه"
      submitEditLabel="ذخیره تغییرات"
    />
  );
};

export default ProjectFormModal;