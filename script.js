const backdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("modalClose");

function openModal(templateId) {
  const tpl = document.getElementById(templateId);
  if (!tpl) return;

  const tmp = tpl.content.cloneNode(true);
  const h = tmp.querySelector("h3,h4");
  modalTitle.textContent = h ? h.textContent : "內容";

  modalBody.innerHTML = "";
  modalBody.appendChild(tmp);

  backdrop.classList.add("show");
  backdrop.setAttribute("aria-hidden", "false");
}

function closeModal() {
  backdrop.classList.remove("show");
  backdrop.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.modal));
});

closeBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

