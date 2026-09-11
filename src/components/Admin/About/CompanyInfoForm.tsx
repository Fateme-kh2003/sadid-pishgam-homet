import ContentForm from "../Ui/ContentForm"
import type { FieldConfig } from "../../../Types/forms"
import { useSiteContent } from "../../../hooks/useSiteContent"
import {SpinnerMini} from "../../../components/Ui/Spinner"

type FormValue = string | File;

const fields: FieldConfig[] = [
  { name: "title",label: "عنوان", type: "text", required: true,},
  { name: "text", label: "توضیحات", type: "textarea", required: true,},
];
const emptyValues: Record<string, FormValue> = { title: "", text: "",};

const sections = [
  { section: "company-info", heading: "متن درباره ما", helperText: "این متن در صفحه‌ی درباره ما نمایش داده می‌شود.", },
  { section: "team-intro", heading: "متن تیم ما", helperText: "این متن در صفحه‌ی درباره ما بالای اعضای تیم نمایش داده می‌شود.", }, 
];

const CompanyInfoForm = () => {
  const {content,isLoading,saveContent,} = useSiteContent(sections.map((item) => item.section));

  const handleSave = async (section: string, values: Record<string, FormValue>) => {
    const title =typeof values.title === "string"? values.title: "";
    const text = typeof values.text === "string" ? values.text : "";

    await saveContent(section, { title, text, });
  };

  if (isLoading) return <SpinnerMini />;

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