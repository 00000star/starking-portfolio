const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

navToggle?.addEventListener("click", () => {
  const open = navLinks?.classList.toggle("open") ?? false;
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.getAttribute("data-filter") ?? "all";

    filters.forEach((button) => button.classList.remove("active"));
    filter.classList.add("active");

    cards.forEach((card) => {
      const tags = card.getAttribute("data-tags") ?? "";
      const visible = selected === "all" || tags.split(" ").includes(selected);
      if (card instanceof HTMLElement) {
        card.hidden = !visible;
      }
    });
  });
});
