import Swal from "sweetalert2";

const successAlert = (msg, timer = 2000) => {
  Swal.fire({
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: timer,
  });
};

export default successAlert;
