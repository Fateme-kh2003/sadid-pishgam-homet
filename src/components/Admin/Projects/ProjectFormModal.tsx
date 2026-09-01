import EntityFormModal from "../Ui/EntityFormModal";
import type { FieldConfig } from "../../../Types";
import type { ProjectDetail } from "../../../Types";

const fields: FieldConfig[] = [
  { name: "title", label: "عنوان پروژه", type: "text", required: true },
  { name: "location", label: "لوکیشن", type: "text", required: true },
  { name: "description", label: "توضیحات", type: "textarea", required: true },
  { name: "image", label: "آدرس تصویر", type: "text" },
  { name: "features",label: "ویژگی‌ها (هر خط یک ویژگی)",type: "textarea",placeholder: "طراحی سیستم\nتأمین تجهیزات\nنصب و راه‌اندازی",},
];

const emptyValues = { title: "", location: "", description: "", image: "", features: "" };

type ProjectFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: ProjectDetail) => void;
  initialData?: ProjectDetail;
};

const ProjectFormModal = ({ isOpen, onClose, onSave, initialData }: ProjectFormModalProps) => {
  const initialValues: Record<string, string> = initialData
    ? {
      title: initialData.title,
      location: initialData.location ?? "",
      description: initialData.description,
      image: initialData.image,
      features: initialData.features.join("\n"),
    }
   : emptyValues;
    
  const handleSave = (values: Record<string, string>) => {
    onSave({
      id: initialData?.id ?? crypto.randomUUID(),
      title: values.title,
      location: values.location,
      description: values.description,
      image: values.image,
      features: values.features.split("\n").map((f) => f.trim()).filter(Boolean),
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