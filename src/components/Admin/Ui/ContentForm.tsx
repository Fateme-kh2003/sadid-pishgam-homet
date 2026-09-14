import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "../../Ui/Button";
import type { FieldConfig } from "../../../Types/forms";
import { toast } from "react-hot-toast";
import {SpinnerMini} from "../../../components/Ui/Spinner"

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";
type FormValue = string | File;

type ContentFormProps = {
  heading: string;
  helperText?: string;
  fields: FieldConfig[];
  initialValues: Record<string, FormValue>;
  onSave: (values: Record<string, FormValue>) => void | Promise<void>;
  submitLabel?: string;
};

const ContentForm = ({ heading, helperText, fields, initialValues, onSave, submitLabel = "ذخیره تغییرات",}: ContentFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, FormValue>>(initialValues);
  const [isSaving, setIsSaving] = useState(false);

  const getStringValue = (name: string) => {
    const value = formData[name];
    return typeof value === "string" ? value : "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSave(formData);
      toast.success("تغییرات با موفقیت ذخیره شد.");
      setIsOpen(false);
    } catch {
      toast.error("خطا در ذخیره‌سازی. دوباره تلاش کنید.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-5 md:p-5 shadow-md">
      <Button type="button" onClick={() => setIsOpen((prev) => !prev)} className="flex w-full justify-between text-right">
        <div>
          <h2 className="md:text-xl font-bold text-primary">{heading}</h2>
          {helperText && <p className="mt-1 text-sm text-gray-600">{helperText}</p>}
        </div>
        {isOpen ? <ChevronUp className="shrink-0 text-primary" size={22} /> : <ChevronDown className="shrink-0 text-primary" size={22} />}
      </Button>
      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
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
              {field.type === "file" && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {const file = e.target.files?.[0];
                    if (file) {setFormData({ ...formData, [field.name]: file });}
                    }}
                  className={`${inputClass} cursor-pointer`}
                  required={field.required}
                />
              )}
              {field.type !== "textarea" && field.type !== "file" && (
                <input
                  type="text"
                  value={getStringValue(field.name)}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className={inputClass}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
            </div>
          ))}
          <Button type="submit" disabled={isSaving} className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-60">
            {isSaving ? <SpinnerMini/> : submitLabel}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContentForm;