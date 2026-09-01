import ContactInfoForm from "../../components/Admin/Footer/ContactInfoForm";
import CopyrightForm from "../../components/Admin/Footer/CopyrightForm";

const AdminFooter = () => {
  return (
    <div className="space-y-10 mt-4 md:mt-0">
      <div>
        <h1 className="text-3xl font-bold text-primary">مدیریت فوتر</h1>
        <p className="mt-2 text-gray-600">ویرایش اطلاعات تماس و متن کپی‌رایت فوتر</p>
      </div>
      <ContactInfoForm />
      <CopyrightForm />
    </div>
  );
};

export default AdminFooter;