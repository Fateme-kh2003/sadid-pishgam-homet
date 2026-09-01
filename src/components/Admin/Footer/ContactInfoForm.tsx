import { useState } from "react";
import ContentForm from "../Ui/ContentForm";
import type { ContactInfo } from "../../../Types";

const initialContactInfo: ContactInfo = {address: "سمنان، شاهرود، میدان ولایت، بلوار شیرودی قبل از اخلاقی", phone: "0912 123 4567", email: "info@hoomat.ir", instagram: "hoomat.co",};

const AdminContact = () => {
  const [contactInfo, setContactInfo] =useState<ContactInfo>(initialContactInfo);

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary"> مدیریت اطلاعات تماس</h1>
      <p className="mt-2 text-gray-600"> مدیریت اطلاعات تماس نمایش داده‌شده در سایت</p>
      <div className="mt-8">
        <ContentForm
          heading="اطلاعات تماس"
          helperText="این اطلاعات در فوتر سایت نمایش داده می‌شود."
          initialValues={contactInfo}
          onSave={(values) => {
            setContactInfo({
              address: values.address,
              phone: values.phone,
              email: values.email,
              instagram: values.instagram,
            });
            console.log(values);
          }}
          fields={[
            { name: "address", label: "آدرس", type: "text", required: true,},
            { name: "phone", label: "تلفن", type: "text", required: true,},
            { name: "email", label: "ایمیل", type: "text", required: true,},
            { name: "instagram", label: "اینستاگرام", type: "text", required: true,},
          ]}
        />
      </div>
    </div>
  );
};

export default AdminContact;