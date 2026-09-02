import { useState, useEffect } from "react";
import Modal from "../../Ui/Modal";
import Button from "../../Ui/Button";
import type {FieldConfig} from "../../../Types/forms"

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";

type EntityFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: Record<string, string>) => void;
  initialValues?: Record<string, string>;
  emptyValues: Record<string, string>;
  fields: FieldConfig[];
  addTitle: string;
  editTitle: string;
  submitAddLabel: string;
  submitEditLabel: string;
};

const EntityFormModal = ({
  isOpen,
  onClose,
  onSave,
  initialValues,
  emptyValues,
  fields,
  addTitle,
  editTitle,
  submitAddLabel,
  submitEditLabel,
}: EntityFormModalProps) => {
  const [formData, setFormData] = useState<Record<string, string>>(initialValues ?? emptyValues);

  useEffect(() => {
    setFormData(initialValues ?? emptyValues);
  }, [initialValues, isOpen]);
  const isEditing = Boolean(initialValues);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEditing ? editTitle : addTitle}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="mb-2 block text-sm font-medium text-gray-700">{field.label}</label>
            {field.type === "textarea" && (
              <textarea
                value={formData[field.name] ?? ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className={`${inputClass} min-h-24`}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === "select" && (
              <select
                value={formData[field.name] ?? ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className={inputClass}
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
            {field.type === "text" && (
              <input
                type="text"
                value={formData[field.name] ?? ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className={inputClass}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        <Button type="submit" className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:scale-105">
          {isEditing ? submitEditLabel : submitAddLabel}
        </Button>
      </form>
    </Modal>
  );
};

export default EntityFormModal;