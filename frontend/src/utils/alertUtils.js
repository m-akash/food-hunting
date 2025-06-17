import Swal from "sweetalert2";

// Success Alert
export const showSuccessAlert = (message) => {
  return Swal.fire({
    icon: "success",
    title: "Success!",
    text: message,
    timer: 2000,
    showConfirmButton: false,
    position: "top-end",
    toast: true,
  });
};

// Error Alert
export const showErrorAlert = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Error!",
    text: message,
    timer: 3000,
    showConfirmButton: false,
    position: "top-end",
    toast: true,
  });
};

// Warning Alert
export const showWarningAlert = (message) => {
  return Swal.fire({
    icon: "warning",
    title: "Warning!",
    text: message,
    timer: 3000,
    showConfirmButton: false,
    position: "top-end",
    toast: true,
  });
};

// Confirmation Dialog
export const showConfirmationDialog = (title, message) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });
};

// Loading Alert
export const showLoadingAlert = (message = "Loading...") => {
  return Swal.fire({
    title: message,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

// Close Loading Alert
export const closeLoadingAlert = () => {
  Swal.close();
};
