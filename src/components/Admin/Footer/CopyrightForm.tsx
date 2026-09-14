import ContentForm from "../Ui/ContentForm"; 
import type { FieldConfig } from "../../../Types/forms";

type FormValue = string | File;

const fields: FieldConfig[] = [ { name: "text", label: "متن کپی‌رایت", type: "text", required: true, }, ];
const emptyValues: Record<string, FormValue> = { text: "", };

type CopyrightFormProps = {
  content: Record<string, string> | null;
  saveContent: (
    section: string,
    data: Record<string, string>
  ) => Promise<void>;
};

const CopyrightForm = ({ content, saveContent,}: CopyrightFormProps) => {
  const handleSave = async ( values: Record<string, FormValue> ) => {
    const text = typeof values.text === "string" ? values.text : ""; 
    await saveContent("copyright", { text, }); 
  };

  return (
    <ContentForm 
      heading="متن کپی‌رایت" 
      helperText="این متن در پایین فوتر سایت نمایش داده می‌شود." 
      fields={fields} 
      initialValues={content ?? emptyValues} 
      onSave={handleSave} 
      />
  );
};

export default CopyrightForm;