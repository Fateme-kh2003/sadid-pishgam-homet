import { useState } from "react";

const useAdminCrud = <T extends { id: string }>(initialItems: T[]) => {
  const [items, setItems] = useState<T[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<T | undefined>(undefined);

  const openAddModal = () => {
    setEditingItem(undefined);
    setIsModalOpen(true);
  };

  const openEditModal = (item: T) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (item: T) => {
    if (editingItem) {
      setItems((prev) =>
        prev.map((current) =>
          current.id === editingItem.id ? item : current
        )
      );
    } else {
      setItems((prev) => [...prev, item]);
    }
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    items,
    isModalOpen,
    setIsModalOpen,
    editingItem,
    openAddModal,
    openEditModal,
    handleSave,
    handleDelete,
  };
};

export default useAdminCrud;