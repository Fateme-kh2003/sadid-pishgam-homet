import manager from "../../assets/manager.jpg"
import member1 from "../../assets/member1.jpg"
import member2 from "../../assets/member2.jpg"
import member3 from "../../assets/member3.jpg"
import member4 from "../../assets/member4.jpg"
import member5 from "../../assets/member5.jpg"

const teamMembers = [
  {
    name: "امیرحسین ملکان",
    role: "مدیرعامل",
    image: manager,
    description:
      "هدایت مجموعه و توسعه فعالیت‌های هومت با تمرکز بر ارائه راهکارهای نوین در حوزه انرژی خورشیدی و سیستم‌های امنیتی.",
  },
  {
    name: "محمد احمدی",
    role: "مدیر فنی",
    image: member1,
    description:
      "نظارت بر طراحی و اجرای پروژه‌ها و اطمینان از کیفیت فنی خدمات و تجهیزات مورد استفاده.",
  },
  {
    name: "سارا کریمی",
    role: "مهندس پروژه",
    image: member2,
    description:
      "برنامه‌ریزی و نظارت بر اجرای پروژه‌های انرژی خورشیدی و هماهنگی مراحل مختلف اجرای پروژه.",
  },
  {
    name: "رضا محمدی",
    role: "کارشناس سیستم‌های امنیتی",
    image: member3,
    description:
      "فعال در زمینه طراحی، نصب و پشتیبانی سیستم‌های نظارتی و تجهیزات امنیتی.",
  },
  {
    name: "محمد مهدی خدابنده لو",
    role: "کارشناس سیستم‌های امنیتی",
    image: member4,
    description:
      "فعال در زمینه طراحی، نصب و پشتیبانی سیستم‌های نظارتی و تجهیزات امنیتی.",
  },
  {
    name: "فاطمه خدابنده لو",
    role: "کارشناس سیستم‌های امنیتی",
    image: member5,
    description:
      "فعال در زمینه طراحی، نصب و پشتیبانی سیستم‌های نظارتی و تجهیزات امنیتی.",
  },
];


const Team = () => {
  return (
      <section className="bg-white px-8 py-5">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="text-3xl font-semibold text-secondary">
              تیم هومت
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary">
              آشنایی با اعضای تیم
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              پشت هر پروژه موفق، تیمی متخصص و متعهد قرار دارد. اعضای هومت با
              همکاری و تخصص خود تلاش می‌کنند هر پروژه را با بالاترین کیفیت
              اجرا کنند.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-3xl bg-gray-50 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary">
                    {member.name}
                  </h3>

                  <span className="mt-2 inline-block font-medium text-secondary">
                    {member.role}
                  </span>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Team
