import { useState } from "react";
import Button from "../../Ui/Button";

const currentCopyright = "© 2026 Hoomat. All rights reserved.";

const CopyrightForm = () => {
  const [copyrightText, setCopyrightText] = useState(currentCopyright);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // فعلاً بدون بک‌اند — فقط UI
    console.log({ copyrightText });
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-bold text-primary">متن کپی‌رایت</h2>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          value={copyrightText}
          onChange={(e) => setCopyrightText(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary"
        />
        <Button type="submit" className="whitespace-nowrap rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-secondary hover:text-primary">
          ذخیره
        </Button>
      </form>
    </div>
  );
};

export default CopyrightForm;