// Generate Table of Contents dynamically
document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    const header = section.querySelector(".section-header").innerText;
    const tocItem = document.createElement("li");
    const tocLink = document.createElement("a");

    tocLink.href = `#${section.id}`;
    tocLink.innerText = `${index + 1}. ${header}`;
    tocItem.appendChild(tocLink);
    toc.appendChild(tocItem);
  });

  // Add collapsibility to sections
  const sectionHeaders = document.querySelectorAll(".section-header");

  sectionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    });
  });
});
