import { useEffect, useState } from "react";
import { getSiteContentRequest } from "../../services/siteContentService";
import type { TitleDescriptionContent } from "../../Types/content";
import {MultilineText , Paragraphs} from "../Ui/TextHelpers"

const CompanyIntro = () => {
  const [content, setContent] = useState<TitleDescriptionContent | null>(null);

  useEffect(() => {
    getSiteContentRequest("company-info")
      .then((data) => {
        setContent(data as TitleDescriptionContent);
      })
      .catch((error) => {
        console.error("خطا در دریافت اطلاعات درباره ما:", error);
      });
  }, []);

  if (!content) return null;

  return (
    <section className="max-w-4xl px-4 md:px-8 pt-20  md:pb-10 mx-auto text-center">
      <span className="text-3xl font-semibold text-secondary">درباره هومت</span>
      <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-relaxed text-primary">
        <MultilineText text={content.title} />
      </h1>
      <Paragraphs
        text={content.description}
        className="text-lg leading-9 text-gray-600"
        firstClassName="mt-8"
        restClassName="mt-5"
      />
    </section>
  );
};

export default CompanyIntro;