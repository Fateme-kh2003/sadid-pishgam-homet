import ContentForm from "../Ui/ContentForm";
import type { FieldConfig } from "../../../Types/forms";

const currentTitle = "همراه شما برای انرژی پاک و امنیت پایدار";

const currentText = [
  "هومت با تمرکز بر ارائه راهکارهای نوین در حوزه انرژی خورشیدی و سیستم‌های امنیتی، فعالیت خود را با هدف ارائه خدمات تخصصی و قابل اعتماد به مشتریان آغاز کرده است.",
  "ما تلاش می‌کنیم با استفاده از تجهیزات باکیفیت، دانش فنی و اجرای دقیق، راهکارهایی متناسب با نیاز هر پروژه ارائه دهیم. از مشاوره و طراحی اولیه تا تأمین تجهیزات، نصب و پشتیبانی، در کنار مشتریان خود هستیم تا تجربه‌ای مطمئن و رضایت‌بخش ایجاد کنیم.",
  "باور ما این است که استفاده هوشمندانه از انرژی پاک در کنار راهکارهای نوین امنیتی می‌تواند نقش مهمی در ساخت آینده‌ای پایدارتر و ایمن‌تر داشته باشد.",
].join("\n\n");

const fields: FieldConfig[] = [
  { name: "title",label: "عنوان", type: "text", required: true,},
  { name: "text", label: "متن معرفی", type: "textarea", required: true,},
];

const CompanyInfoForm = () => {
  const handleSave = (values: Record<string, string>) => {
    console.log(values);
  };

  return (
    <ContentForm
      heading="متن درباره ما"
      helperText="این متن در صفحه‌ی درباره ما نمایش داده می‌شود."
      fields={fields}
      initialValues={{
        title: currentTitle,
        text: currentText,
      }}
      onSave={handleSave}
    />
  );
};

export default CompanyInfoForm;