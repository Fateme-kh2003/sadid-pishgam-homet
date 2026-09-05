import EntityFormModal from "../Ui/EntityFormModal";
import type { FieldConfig } from "../../../Types/forms";
import type { ServiceItem } from "../../../Types/content";
import { uploadServiceImage } from "../../../services/storageService";

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "title", label: "عنوان سرویس", type: "text", required: true },
  { name: "description", label: "توضیحات", type: "textarea", required: true },
  { name: "emoji", label: "آیکون", type: "text", required: false },
  { name: "image", label: "تصویر سرویس", type: "file", required: false },
  { name: "features", label: "ویژگی‌های سرویس", type: "textarea", required: false },
];

const emptyValues = { title: "", description: "", emoji: "", image: "", features: "" };

type ServiceFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: Omit<ServiceItem, "id">) => void;
  initialData?: ServiceItem;
};

const ServiceFormModal = ({ isOpen, onClose, onSave, initialData }: ServiceFormModalProps) => {
  const initialValues = initialData
    ? {
        title: initialData.title,
        description: initialData.description,
        emoji: initialData.emoji ?? "",
        image: initialData.image ?? "",
        features: initialData.features?.join("\n") ?? "",
      }
    : undefined;

  const handleSave = async (values: Record<string, FormValue>) => {
    const features =typeof values.features === "string" && values.features
        ? values.features
            .split("\n")
            .map((feature) => feature.trim())
            .filter(Boolean)
        : [];

    let imageUrl: string | undefined;
    if (values.image instanceof File) {
      imageUrl = await uploadServiceImage(values.image);
    } else if (typeof values.image === "string" && values.image) {
      imageUrl = values.image;
    }

    await onSave({
      title: typeof values.title === "string" ? values.title : "",
      description: typeof values.description === "string" ? values.description : "",
      emoji: typeof values.emoji === "string" && values.emoji ? values.emoji : undefined,
      image: imageUrl,
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
      addTitle="افزودن سرویس"
      editTitle="ویرایش سرویس"
      submitAddLabel="افزودن سرویس"
      submitEditLabel="ذخیره تغییرات"
    />
  );
};

export default ServiceFormModal;