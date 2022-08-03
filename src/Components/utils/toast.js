import { toast } from "react-toastify";

export const toastUpdate = (load,type,massage)=>{
    toast.update(load, {
        render: massage,
        type: type,
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
}