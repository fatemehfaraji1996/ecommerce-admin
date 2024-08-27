'use client'
import { Modal } from "@/components/modal";
// import {UserButton,} from "@clerk/nextjs";
const SetupPage=()=>{
  return (
    <div className="p-4">
    <Modal title="Test" descreption="test desc" isOpen onClose={()=>{}}>
      children
    </Modal>
    
    </div>
  );
}
export default SetupPage