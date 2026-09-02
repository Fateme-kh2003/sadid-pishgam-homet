import HomeContentForms from "../../components/Admin/Home/HomeContentForms";

const AdminHome = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mt-5 md:mt-0 font-bold text-primary">مدیریت صفحه اصلی</h1>
        <p className="mt-2 text-gray-600">ویرایش محتوای بخش‌های صفحه اصلی</p>
      </div>
      <HomeContentForms />
    </div>
  );
};

export default AdminHome;