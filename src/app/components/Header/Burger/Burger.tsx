"use client";

const Burger = () => {
  const handleMenu = () => {
    const html = document.documentElement;
    html.classList.toggle("menu-open");
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        html.classList.remove("menu-open");
      }
    });
    if (html.classList.contains("menu-open")) {
      document.querySelectorAll(".NavLink").forEach((link) => {
        link.addEventListener("click", () =>
          html.classList.remove("menu-open"),
        );
      });
    }
    if (html.classList.contains("menu-open")) {
      const btns = document.querySelectorAll(".Action-btn");
      btns.forEach((btn) =>
        btn.addEventListener("click", () => html.classList.remove("menu-open")),
      );
    }
  };

  return (
    <button
      className="burger hidden h-6 w-[38px] content-between group-[.menu-open]:content-center tablets:grid"
      type="button"
      onClick={handleMenu}
    >
      <span className="h-1 w-full rounded-full bg-black transition-all duration-500 group-[.menu-open]:rotate-45 "></span>
      <span className="h-1 w-full rounded-full bg-black transition-all duration-500 group-[.menu-open]:scale-0"></span>
      <span className="h-1 w-full rounded-full bg-black transition-all duration-500 group-[.menu-open]:-translate-y-2 group-[.menu-open]:-rotate-45"></span>
    </button>
  );
};

export default Burger;
