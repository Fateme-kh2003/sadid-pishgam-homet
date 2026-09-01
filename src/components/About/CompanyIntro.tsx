const CompanyIntro = () => {
    const paragraphs = [
    "هومت با تمرکز بر ارائه راهکارهای نوین در حوزه انرژی خورشیدی و سیستم‌های امنیتی، فعالیت خود را با هدف ارائه خدمات تخصصی و قابل اعتماد به مشتریان آغاز کرده است.",
    "ما تلاش می‌کنیم با استفاده از تجهیزات باکیفیت، دانش فنی و اجرای دقیق، راهکارهایی متناسب با نیاز هر پروژه ارائه دهیم. از مشاوره و طراحی اولیه تا تأمین تجهیزات، نصب و پشتیبانی، در کنار مشتریان خود هستیم تا تجربه‌ای مطمئن و رضایت‌بخش ایجاد کنیم.",
    "باور ما این است که استفاده هوشمندانه از انرژی پاک در کنار راهکارهای نوین امنیتی می‌تواند نقش مهمی در ساخت آینده‌ای پایدارتر و ایمن‌تر داشته باشد.",
  ];
  return (
    <section className="max-w-4xl px-4 md:px-8 pt-20  md:pb-10 mx-auto text-center">
        <span className="text-3xl font-semibold text-secondary">درباره هومت</span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-relaxed text-primary">
            همراه شما برای انرژی پاک
            <br />
            و امنیت پایدار
          </h1>
          {paragraphs.map((text, index) => (
          <p key={index} className={`text-lg leading-9 text-gray-600 ${index === 0 ? "mt-8" : "mt-5"}`}>
            {text}
          </p>
        ))}
      </section>
  )
}

export default CompanyIntro
