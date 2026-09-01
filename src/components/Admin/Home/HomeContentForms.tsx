import ContentForm from "../Ui/ContentForm";
import type { FieldConfig } from "../../../Types";

const heroFields: FieldConfig[] = [
  { name: "title", label: "عنوان (هر خط یک سطر)", type: "textarea" },
  { name: "description", label: "توضیحات", type: "textarea" },
  { name: "images", label: "تصاویر اسلایدر (هر خط یک آدرس تصویر)", type: "textarea" },
];

const heroInitialValues = {
  title: "راهکارهای نوین\nانرژی خورشیدی و سیستم‌های امنیتی",
  description:"طراحی، تأمین، نصب و پشتیبانی انواع پنل‌های خورشیدی و سیستم‌های نظارتی با بهره‌گیری از تجهیزات باکیفیت و تیمی متخصص.",
  images: ["Panel.jpg", "Panel2.png", "Dorbin.jpg"].join("\n"),
};

const aboutHomeFields: FieldConfig[] = [
  { name: "title", label: "عنوان (هر خط یک سطر)", type: "textarea" },
  { name: "description", label: "توضیحات", type: "textarea" },
  { name: "image", label: "آدرس تصویر", type: "text", placeholder: "مسیر فایل تصویر" },
];

const aboutHomeInitialValues = {
  title: "انتخابی مطمئن برای\nانرژی پاک و امنیت پایدار",
  description:"ما با ترکیب دانش فنی، تجربه اجرایی و استفاده از تجهیزات باکیفیت، راهکارهایی ارائه می‌دهیم که علاوه بر افزایش بهره‌وری انرژی، امنیت و آرامش خاطر را برای مشتریان فراهم می‌کند. از مشاوره و طراحی تا اجرا و پشتیبانی، در تمامی مراحل پروژه همراه شما هستیم.",
  image: "img3.jpg",
};

const servicesIntroFields: FieldConfig[] = [
  { name: "title", label: "عنوان کوچک", type: "text" },
  { name: "subtitle", label: "عنوان اصلی", type: "text" },
  { name: "description", label: "توضیحات", type: "textarea" },
];

const servicesIntroInitialValues = {
  title: "خدمات ما",
  subtitle: "خدماتی که ارائه می‌دهیم",
  description:"با ارائه خدمات تخصصی در حوزه انرژی خورشیدی و سیستم‌های امنیتی، راهکارهایی مطمئن، به‌روز و متناسب با نیاز مشتریان ارائه می‌دهیم.",
};

const HomeContentForms = () => {
  return (
    <div className="space-y-6 ">
      <ContentForm
        heading="بخش Hero"
        helperText="این محتوا در اسلایدر بالای صفحه اصلی نمایش داده می‌شود."
        fields={heroFields}
        initialValues={heroInitialValues}
        onSave={(values) =>
          console.log("hero:", { ...values, images: values.images.split("\n").filter(Boolean) })
        }
      />
      <ContentForm
        heading="بخش «چرا هومت؟»"
        helperText="این محتوا در صفحه اصلی، بخش «چرا هومت؟» نمایش داده می‌شود."
        fields={aboutHomeFields}
        initialValues={aboutHomeInitialValues}
        onSave={(values) => console.log("about-home:", values)}
      />
      <ContentForm
        heading=" بخش «خدمات ما»"
        helperText="کارت‌های این بخش به‌صورت خودکار از ۴ سرویس اول (در مدیریت خدمات) نمایش داده می‌شوند."
        fields={servicesIntroFields}
        initialValues={servicesIntroInitialValues}
        onSave={(values) => console.log("services-intro:", values)}
      />
    </div>
  );
};

export default HomeContentForms;