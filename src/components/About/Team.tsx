import { useEffect, useState } from "react";
import type { TeamMember , TitleDescriptionContent } from "../../Types/content";
import { getTeamMembersRequest } from "../../services/teamService";
import { getSiteContentRequest } from "../../services/siteContentService";
import { SpinnerMini } from "../../components/Ui/Spinner";;
import {MultilineText , Paragraphs} from "../Ui/TextHelpers";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [content, setContent] = useState<TitleDescriptionContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getTeamMembersRequest(), getSiteContentRequest("team-intro")])
      .then(([members, teamIntro]) => {
        setTeamMembers(members);
        setContent(teamIntro as TitleDescriptionContent);
      })
      .catch((error) => {
        console.error("خطا در دریافت اطلاعات تیم:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return (
    <div className="pt-32">
      <SpinnerMini />
    </div>
  );
  if (!content) {return null;}

  return (
    <section className="bg-white px-8 pb-16 md:py-0 mx-auto max-w-7xl">
      <div className="mb-4 text-center">
        <span className="text-3xl font-semibold text-secondary">تیم هومت</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
          <MultilineText text={content.title} />
        </h2>
        <Paragraphs text={content.description} className="mx-auto max-w-2xl text-lg leading-8 text-gray-600" firstClassName="mt-5" restClassName="mt-3"/>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="overflow-hidden rounded-3xl bg-gray-50 shadow-md transition-all duration-300">
            <img src={member.image} alt={member.name} className="h-72 w-full object-cover"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
              <span className="mt-2 inline-block font-medium text-secondary">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;