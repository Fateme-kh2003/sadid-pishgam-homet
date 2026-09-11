import ContentForm from "../Ui/ContentForm"; 
import type { FieldConfig } from "../../../Types/forms";
import { useSiteContent } from "../../../hooks/useSiteContent";
import {SpinnerMini} from "../../../components/Ui/Spinner"

type FormValue = string | File;

const fields: FieldConfig[] = [ { name: "text", label: "متن کپی‌رایت", type: "text", required: true, }, ];
const emptyValues: Record<string, FormValue> = { text: "", };

const CopyrightForm = () => {
  const { content, isLoading, saveContent, } = useSiteContent(["copyright"]);

  const handleSave = async ( values: Record<string, FormValue> ) => {
    const text = typeof values.text === "string" ? values.text : ""; 
    await saveContent("copyright", { text, }); 
  };

  if (isLoading) return <SpinnerMini/>;
  
  return (
    <ContentForm 
      heading="متن کپی‌رایت" 
      helperText="این متن در پایین فوتر سایت نمایش داده می‌شود." 
      fields={fields} 
      initialValues={content["copyright"] ?? emptyValues} 
      onSave={handleSave} 
      />
  );
};

export default CopyrightForm;