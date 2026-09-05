import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Identifiable = { id: string };

type SupabaseCrudConfig<T> = {
  getAll: () => Promise<T[]>;
  add: (data: Omit<T, "id">) => Promise<T>;
  update: (id: string, data: Omit<T, "id">) => Promise<T>;
  remove: (id: string) => Promise<void>;
};

export function useSupabaseCrud<T extends Identifiable>(config: SupabaseCrudConfig<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<T | undefined>(undefined);

  useEffect(() => {
    config
      .getAll()
      .then(setItems)
      .catch(() => toast.error("خطا در دریافت اطلاعات از سرور."))
      .finally(() => setIsLoading(false));
  }, []);

  const openAddModal = () => {
    setEditingItem(undefined);
    setIsModalOpen(true);
  };

  const openEditModal = (item: T) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = async (data: Omit<T, "id">) => {
    try {
      if (editingItem) {
        const updated = await config.update(editingItem.id, data);
        setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
        toast.success("اطلاعات با موفقیت ویرایش شد.");
      } else {
        const created = await config.add(data);
        setItems((prev) => [...prev, created]);
        toast.success("با موفقیت اضافه شد.");
      }
      setIsModalOpen(false);
    } catch {
      toast.error("خطا در ذخیره‌سازی. دوباره تلاش کنید.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await config.remove(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
      toast.success("با موفقیت حذف شد.");
    } catch {
      toast.error("خطا در حذف. دوباره تلاش کنید.");
    }
  };
  return {items,isLoading,isModalOpen,editingItem,openAddModal,openEditModal,closeModal,handleSave,handleDelete,};
}