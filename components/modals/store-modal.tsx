"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modal";

export const StoreModel = () => {
  const StoreModel = useStoreModal();
  return (
    <Modal
      title="Creat store"
      descreption="Add a new store to manage and categories"
      isOpen={StoreModel.isOpen}
      onClose={StoreModel.onClose}
    >
      future creat store Form
    </Modal>
  );
};
