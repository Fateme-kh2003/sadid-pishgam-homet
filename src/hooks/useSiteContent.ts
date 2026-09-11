import { useEffect, useState } from "react";
import { getSiteContentRequest, saveSiteContentRequest,} from "../services/siteContentService";

type SiteContent = Record<string, string>;
type SiteContentMap = Record<string, SiteContent | null>;

export const useSiteContent = (sections: string[]) => {
  const [content, setContent] = useState<SiteContentMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const sectionsKey = sections.join(",");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const results = await Promise.allSettled(
          sections.map((section) => getSiteContentRequest(section))
        );

        const contentMap: SiteContentMap = {};
        sections.forEach((section, index) => {
          const result = results[index];
          contentMap[section] = result.status === "fulfilled" ? result.value : null;
        });
        setContent(contentMap);
      } catch (error) {
        console.error("خطا در دریافت محتوای سایت:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, [sectionsKey]);

  const saveContent = async (section: string, data: SiteContent) => {
      await saveSiteContentRequest(section, data);
    setContent((prev) => ({...prev,[section]: data,}));
  };

  return { content, isLoading, saveContent,};
};