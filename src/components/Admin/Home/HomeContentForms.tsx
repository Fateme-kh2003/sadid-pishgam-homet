import ContentForm from "../Ui/ContentForm";
import type { FieldConfig } from "../../../Types/forms";
import { useSiteContent } from "../../../hooks/useSiteContent";
import { uploadSiteContentImage } from "../../../services/storageService";
import {SpinnerMini} from "../../../components/Ui/Spinner"

type FormValue = string | File;
const sections = ["hero","about-home","services-intro"];

const heroFields: FieldConfig[] = [
  { name: "title", label: "عنوان (هر خط یک سطر)", type: "textarea",},
  { name: "description", label: "توضیحات", type: "textarea",},
  { name: "image1", label: "تصویر اول اسلایدر", type: "file",},
  { name: "image2", label: "تصویر دوم اسلایدر", type: "file",},
  { name: "image3", label: "تصویر سوم اسلایدر", type: "file",},
];
const aboutHomeFields: FieldConfig[] = [
  { name: "title", label: "عنوان (هر خط یک سطر)", type: "textarea",},
  { name: "description", label: "توضیحات", type: "textarea",},
  { name: "image", label: "آدرس تصویر", type: "file",},
];
const servicesIntroFields: FieldConfig[] = [
  { name: "title", label: "عنوان کوچک", type: "text",},
  { name: "subtitle", label: "عنوان اصلی", type: "text",},
  { name: "description", label: "توضیحات", type: "textarea",},
];

const emptyTextValues: Record<string, FormValue> = { title: "", description: ""};
const emptyHeroValues: Record<string, FormValue> = {...emptyTextValues,image1: "",image2: "",image3: ""};
const emptyAboutHomeValues: Record<string, FormValue> = {...emptyTextValues, image: ""};
const emptyServicesIntroValues: Record<string, FormValue> = {...emptyTextValues,subtitle: "",};

const HomeContentForms = () => {
  const {content,isLoading,saveContent, } = useSiteContent(sections);

  const resolveFormValues = async (values: Record<string, FormValue>): Promise<Record<string, string>> => {
    const entries = await Promise.all(
      Object.entries(values).map(async ([key, value]) => {
        if (value instanceof File) {
          return [key, await uploadSiteContentImage(value)] as const;
        }
        return [key, typeof value === "string" ? value : ""] as const;
      })
    );
    return Object.fromEntries(entries);
  };

  const handleSaveHero = async (values: Record<string, FormValue>) => {
    await saveContent("hero", await resolveFormValues(values));
  };

  const handleSaveAboutHome = async (values: Record<string, FormValue>) => {
    await saveContent("about-home", await resolveFormValues(values));
  };

  const handleSaveServicesIntro = async (values: Record<string, FormValue>) => {
    await saveContent("services-intro", await resolveFormValues(values));
  };
  
  if (isLoading) return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <SpinnerMini />
    </div>
  );

  return (
    <div className="space-y-6">
      <ContentForm
        heading="بخش Hero (بالای صفحه اصلی)"
        helperText="این محتوا در اسلایدر بالای صفحه اصلی نمایش داده می‌شود."
        fields={heroFields}
        initialValues={content["hero"] ?? emptyHeroValues}
        onSave={handleSaveHero}
      />
      <ContentForm
        heading="بخش «چرا هومت؟»"
        helperText="این محتوا در صفحه اصلی، بخش «چرا هومت؟» نمایش داده می‌شود."
        fields={aboutHomeFields}
        initialValues={content["about-home"] ?? emptyAboutHomeValues}
        onSave={handleSaveAboutHome}
      />
      <ContentForm
        heading="بخش «خدمات ما»"
        helperText="کارت‌های این بخش به‌صورت خودکار از خدمات ثبت‌شده نمایش داده می‌شوند."
        fields={servicesIntroFields}
        initialValues={content["services-intro"] ?? emptyServicesIntroValues}
        onSave={handleSaveServicesIntro}
      />
    </div>
  );
};

export default HomeContentForms;