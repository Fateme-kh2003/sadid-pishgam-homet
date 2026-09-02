import manager from "../../assets/manager.jpg"
import member2 from "../../assets/member2.jpg"
import member4 from "../../assets/member4.jpg"
import member5 from "../../assets/member5.jpg"

const teamMembers = [
  { name: "امیرحسین ملکان", role: "مدیرعامل و مدیر اجرایی", image: manager,},
  { name: "مائده میرباقری", role: "مدیرمالی و رئیس هیئت مدیره", image: member2,},
  { name: "محمد مهدی خدابنده لو", role: "کارشناس شبکه",image: member5,},
  { name: "فاطمه خدابنده لو", role: "کارشناس طراحی", image: member4,},
];

const Team = () => {
  return (
    <section className="bg-white px-8 pb-16 md:py-0 mx-auto max-w-7xl">
      <div className="mb-4 text-center">
        <span className="text-3xl font-semibold text-secondary">تیم هومت</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">آشنایی با اعضای تیم</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600"> پشت هر پروژه موفق، تیمی متخصص و متعهد قرار دارد. اعضای هومت با همکاری و تخصص خود تلاش می‌کنند هر پروژه را با بالاترین کیفیت اجرا کنند.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="overflow-hidden rounded-3xl bg-gray-50 shadow-md transition-all duration-300">
            <img src={member.image} alt={member.name} className="h-72 w-full object-cover"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
              <span className="mt-2 inline-block font-medium text-secondary">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team