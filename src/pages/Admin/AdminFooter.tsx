import ContactInfoForm from "../../components/Admin/Footer/ContactInfoForm";
import CopyrightForm from "../../components/Admin/Footer/CopyrightForm";
import { useSiteContent } from "../../hooks/useSiteContent";
import { SpinnerMini } from "../../components/Ui/Spinner";

const sections = ["contact-info", "copyright"];

const AdminFooter = () => {
  const { content, isLoading, saveContent } = useSiteContent(sections);

  if (isLoading) return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <SpinnerMini />
    </div>
  );

  return (
    <div className="space-y-10 mt-4 md:mt-0">
      <div>
        <h1 className="text-3xl font-bold text-primary">مدیریت فوتر</h1>
        <p className="mt-2 text-gray-600">ویرایش اطلاعات تماس و متن کپی‌رایت فوتر</p>
      </div>
      <ContactInfoForm  
        content={content["contact-info"]} 
        saveContent={saveContent}
      />
      <CopyrightForm 
        content={content["copyright"]}
        saveContent={saveContent}
      />
    </div>
  );
};

export default AdminFooter;