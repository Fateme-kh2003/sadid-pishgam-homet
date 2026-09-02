import { Sun, Camera, BatteryCharging, Wrench } from "lucide-react";
import EntityFormModal from "../Ui/EntityFormModal";
import type { FieldConfig } from "../../../Types/forms";
import type { ServiceItem } from "../../../Types/content";

const iconMap: Record<string, React.ElementType> = { Sun, Camera, BatteryCharging, Wrench };

const findIconName = (icon?: React.ElementType): string => {
  const found = Object.entries(iconMap).find(([, component]) => component === icon);
  return found ? found[0] : "Sun";
};

const fields: FieldConfig[] = [
  { name: "title", label: "عنوان سرویس", type: "text", required: true },
  { name: "description", label: "توضیحات", type: "textarea", required: true },
  { name: "iconName", label: "آیکون", type: "select", options: Object.keys(iconMap).map((name) => ({ label: name, value: name })),},
];

const emptyValues = { title: "", description: "", path: "", iconName: "Sun" };

type ServiceFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: ServiceItem) => void;
  initialData?: ServiceItem;
};

const ServiceFormModal = ({ isOpen, onClose, onSave, initialData }: ServiceFormModalProps) => {
  const initialValues = initialData
    ? {
        title: initialData.title,
        description: initialData.description,
        path: initialData.path,
        iconName: findIconName(initialData.icon),
      }
    : undefined;

  const handleSave = (values: Record<string, string>) => {
    onSave({
      id: initialData?.id ?? crypto.randomUUID(),
      title: values.title,
      description: values.description,
      path: values.path,
      icon: iconMap[values.iconName],
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