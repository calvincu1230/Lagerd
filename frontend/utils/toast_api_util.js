export const createToast = toast => {
  return$.ajax({
    url: "/api/toasts",
    method: "POST",
    data: { toast }
  });
};

export const deleteToast = toastId => {
  return$.ajax({
    url: `/api/toasts/${toastId}`,
    method: "DELETE"
  });
};