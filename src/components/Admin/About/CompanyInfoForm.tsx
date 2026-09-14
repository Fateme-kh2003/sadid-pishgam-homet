import ContentForm from "../Ui/ContentForm"
import type { FieldConfig } from "../../../Types/forms"

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "title",label: "عنوان", type: "text", required: true,},
  { name: "description", label: "توضیحات", type: "textarea", required: true,},
];
const emptyValues: Record<string, FormValue> = { title: "", description: "",};

const sections = [
  { section: "company-info", heading: "متن درباره ما", helperText: "این متن در صفحه‌ی درباره ما نمایش داده می‌شود.", },
  { section: "team-intro", heading: "متن تیم ما", helperText: "این متن در صفحه‌ی درباره ما بالای اعضای تیم نمایش داده می‌شود.", }, 
];

type CompanyInfoFormProps = {
  content: Record<string, Record<string, string> | null>;
  saveContent: (
    section: string,
    data: Record<string, string>
  ) => Promise<void>;
};

const CompanyInfoForm = ({content,saveContent,}: CompanyInfoFormProps) => {

  const handleSave = async (section: string, values: Record<string, FormValue>) => {
    const title =typeof values.title === "string"? values.title: "";
    const description = typeof values.description === "string" ? values.description : "";

    await saveContent(section, { title, description });
  };

  return (
    <div className="space-y-6">
      {sections.map((item) => (
        <ContentForm 
          key={item.section} 
          heading={item.heading} 
          helperText={item.helperText} 
          fields={fields} 
          initialValues={ content[item.section] ?? emptyValues } 
          onSave={(values) => handleSave(item.section, values) } 
        /> 
      ))}
    </div>
  );
};

export default CompanyInfoForm;