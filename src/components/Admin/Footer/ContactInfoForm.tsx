import ContentForm from "../Ui/ContentForm";
import type { FieldConfig } from "../../../Types/forms";
import { useSiteContent } from "../../../hooks/useSiteContent";
import {SpinnerMini} from "../../../components/Ui/Spinner"

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "address", label: "آدرس", type: "text", required: true, }, 
  { name: "phone", label: "تلفن", type: "text", required: true, }, 
  { name: "email", label: "ایمیل", type: "text", required: true, }, 
  { name: "instagram", label: "اینستاگرام", type: "text", required: true, }, 
];
const emptyValues: Record<string, FormValue> = { address: "", phone: "", email: "", instagram: "", };

const ContactInfoForm = () => {
 const { content, isLoading, saveContent, } = useSiteContent(["contact-info"]);

  const handleSave = async ( values: Record<string, FormValue> ) => {
    const address = typeof values.address === "string" ? values.address : "";
    const phone = typeof values.phone === "string" ? values.phone : ""; 
    const email = typeof values.email === "string" ? values.email : ""; 
    const instagram = typeof values.instagram === "string" ? values.instagram : ""; 

    await saveContent("contact-info", { address, phone, email, instagram, }); 
  };

  if (isLoading) return <SpinnerMini/>;

  return (
    <ContentForm 
      heading="اطلاعات تماس" 
      helperText="این اطلاعات در فوتر سایت نمایش داده می‌شود." 
      fields={fields} initialValues={content["contact-info"] ?? emptyValues} 
      onSave={handleSave} 
      />
  );
};

export default ContactInfoForm;