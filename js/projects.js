// Projects page: clicking a project card shows its details on the right
export function initProjects() {
  const projectCards = document.querySelectorAll(".project-card");
  const detail = document.querySelector(".project-detail");

  if (detail) {
    const placeholder = detail.querySelector(".proj-detailed");
    const content = detail.querySelector(".proj-content");
    const detailImg = detail.querySelector(".proj-detailed-img");
    const detailName = detail.querySelector(".proj-detailed-name");
    const detailDesc = detail.querySelector(".proj-description");

    projectCards.forEach((card) => {
      card.addEventListener("click", () => {
        const thumb = card.querySelector(".project-thumb");

        detailImg.src = thumb.src;
        detailImg.alt = thumb.alt;
        detailName.textContent =
          card.querySelector(".project-name").textContent;
        detailDesc.textContent = card.dataset.description;

        placeholder.classList.add("d-none");
        content.classList.remove("d-none");

        projectCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      });
    });
  }
}
