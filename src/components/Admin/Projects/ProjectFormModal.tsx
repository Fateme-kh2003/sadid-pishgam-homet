import EntityFormModal from "../Ui/EntityFormModal";
import type { FieldConfig } from "../../../Types/forms";
import type { ProjectDetail } from "../../../Types/content";
import { uploadProjectImage } from "../../../services/storageService";

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "title", label: "عنوان پروژه", type: "text", required: true },
  { name: "location", label: "لوکیشن", type: "text", required: true },
  { name: "description", label: "توضیحات", type: "textarea", required: true },
  { name: "image", label: "تصویر پروژه", type: "file" , required: false},
  { name: "features", label: "ویژگی‌ها (هر خط یک ویژگی)", type: "textarea", required:false},
];

const emptyValues = { title: "", location: "", description: "", image: "", features: "" };

type ProjectFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Omit<ProjectDetail, "id">) => void;
  initialData?: ProjectDetail;
};

const ProjectFormModal = ({ isOpen, onClose, onSave, initialData }: ProjectFormModalProps) => {
  const initialValues = initialData
    ? {
        title: initialData.title,
        location: initialData.location ?? "",
        description: initialData.description,
        image: initialData.image ?? "",
        features: initialData.features?.join("\n") ?? "",
      }
    : undefined;

  const handleSave = async (values: Record<string, FormValue>) => {
    const features = typeof values.features === "string" && values.features 
    ? values.features
     .split("\n")
     .map((feature) => feature.trim()) 
     .filter(Boolean) 
    : [];

    let imageUrl: string | undefined; 
    if (values.image instanceof File) {
      imageUrl = await uploadProjectImage(values.image);
    } else if (typeof values.image === "string" && values.image) { 
      imageUrl = values.image; 
    }

    await onSave({
      title: typeof values.title === "string" ? values.title : "",
      location: typeof values.location === "string" ? values.location : "",
      description: typeof values.description === "string" ? values.description : "",
      image: imageUrl ?? "",
      features,
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