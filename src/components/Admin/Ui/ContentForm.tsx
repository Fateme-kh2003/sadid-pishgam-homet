import { useState } from "react";
import Button from "../../Ui/Button";
import type { FieldConfig } from "../../../Types/forms";

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";

type ContentFormProps = {
  heading: string;
  helperText?: string;
  fields: FieldConfig[];
  initialValues: Record<string, string>;
  onSave: (values: Record<string, string>) => void;
  submitLabel?: string;
};

const ContentForm = ({
  heading,
  helperText,
  fields,
  initialValues,
  onSave,
  submitLabel = "ذخیره تغییرات",
}: ContentFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>(initialValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="rounded-3xl bg-white p-5 md:p-5 shadow-md">
      <Button type="button" onClick={() => setIsOpen((prev) => !prev)} className="flex w-full justify-between text-right">
        <div>
          <h2 className="md:text-xl font-bold text-primary">{heading}</h2>
          {helperText && <p className="mt-1 text-sm text-gray-600">{helperText}</p>}
        </div>
      </Button>
      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="mb-2 block text-sm font-medium text-gray-700">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  value={formData[field.name] ?? ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className={`${inputClass} min-h-24`}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ) : (
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
          <Button type="submit" className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105">
            {submitLabel}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContentForm;