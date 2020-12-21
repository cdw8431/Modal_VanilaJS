const modalOverlay = document.querySelector(".modal_overlay");

const cancleModal = () => {
  modalOverlay.classList.add("hidden");
};

const onClicked = () => {
  modalOverlay.classList.remove("hidden");
};

function init() {
  const modalButton = document.querySelector(".modal_button");
  const modalCancleButton = modalOverlay.querySelector(".modal_cancle");
  modalButton.addEventListener("click", onClicked);
  modalCancleButton.addEventListener("click", cancleModal);
}

init();
