import { useState, useEffect } from "react";
import Modal from "../../Ui/Modal";
import Button from "../../Ui/Button";
import type { FieldConfig } from "../../../Types/forms";

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";

type FormValue = string | File;

type EntityFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: Record<string, FormValue>) => void | Promise<void>;
  initialValues?: Record<string, FormValue>;
  emptyValues: Record<string, FormValue>;
  fields: FieldConfig[];
  addTitle: string;
  editTitle: string;
  submitAddLabel: string;
  submitEditLabel: string;
};

const EntityFormModal = ({isOpen,onClose,onSave,initialValues,emptyValues,fields,addTitle,editTitle,submitAddLabel,submitEditLabel,}: EntityFormModalProps) => {
  const [formData, setFormData] = useState<Record<string, FormValue>>(initialValues ?? emptyValues);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setFormData(initialValues ?? emptyValues);
  }, [initialValues, isOpen, emptyValues]);

  const isEditing = Boolean(initialValues);

  const getStringValue = (name: string) => {
    const value = formData[name];
    return typeof value === "string" ? value : "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSave(formData);
      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEditing ? editTitle : addTitle}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="mb-2 block text-sm font-medium text-gray-700">{field.label}</label>
            {field.type === "textarea" && (
              <textarea
                value={getStringValue(field.name)}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className={`${inputClass} min-h-24`}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === "text" && (
              <input
                type="text"
                value={getStringValue(field.name)}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className={inputClass}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === "file" && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFormData({ ...formData, [field.name]: file });
                  }
                }}
                className={`${inputClass} cursor-pointer`}
                required={field.required}
              />
            )}
          </div>
        ))}
        <Button type="submit" disabled={isSaving} className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-60">
          {isSaving ? "در حال ذخیره..." : isEditing ? submitEditLabel : submitAddLabel}
        </Button>
      </form>
    </Modal>
  );
};

export default EntityFormModal;