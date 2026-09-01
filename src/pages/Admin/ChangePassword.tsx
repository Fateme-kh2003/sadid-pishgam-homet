import { useState } from "react";
import Button from "../../components/Ui/Button";

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("رمز عبور جدید و تکرار آن یکسان نیستند.");
      return;
    }

    setError("");
    // فعلاً بدون بک‌اند — فقط UI
    console.log({ currentPassword, newPassword });
  };

  return (
    <div className="mt-8 mx-auto max-w-md rounded-3xl bg-white p-6 shadow-md">
      <h1 className="text-xl md:text-3xl font-bold text-primary">تغییر رمز عبور</h1>
      <div className="max-w-md rounded-3xl bg-white p-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">رمز عبور فعلی</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">رمز عبور جدید</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">تکرار رمز عبور جدید</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:scale-105">
            ذخیره تغییرات
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;