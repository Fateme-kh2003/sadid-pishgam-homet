import ContentForm from "../Ui/ContentForm";
import type { FieldConfig } from "../../../Types/forms";

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "address", label: "آدرس", type: "text", required: true, }, 
  { name: "phone", label: "تلفن", type: "text", required: true, }, 
  { name: "email", label: "ایمیل", type: "text", required: true, }, 
  { name: "instagram", label: "اینستاگرام", type: "text", required: true, }, 
];
const emptyValues: Record<string, FormValue> = { address: "", phone: "", email: "", instagram: "", };

type ContactInfoFormProps = {
  content: Record<string, string> | null;
  saveContent: (
    section: string,
    data: Record<string, string>
  ) => Promise<void>;
};

const ContactInfoForm = ({content, saveContent,}: ContactInfoFormProps) => {
  const handleSave = async ( values: Record<string, FormValue> ) => {
    const address = typeof values.address === "string" ? values.address : "";
    const phone = typeof values.phone === "string" ? values.phone : ""; 
    const email = typeof values.email === "string" ? values.email : ""; 
    const instagram = typeof values.instagram === "string" ? values.instagram : ""; 

    await saveContent("contact-info", { address, phone, email, instagram, }); 
  };

  return (
    <ContentForm 
      heading="اطلاعات تماس" 
      helperText="این اطلاعات در فوتر سایت نمایش داده می‌شود." 
      fields={fields} 
      initialValues={content ?? emptyValues} 
      onSave={handleSave} 
      />
  );
};

export default ContactInfoForm;