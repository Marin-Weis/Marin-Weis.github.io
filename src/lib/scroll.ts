// Smoothly scroll a section into view so its title lands at a consistent gap
// below the sticky navbar — identical for every section in the nav menu.
//
// Tweak NAV_GAP to move every landing up/down by the same amount.
const NAV_GAP = 24; // px between the navbar bottom and the section title

// Absolute document top of an element via offsetTop accumulation.
// Unlike getBoundingClientRect(), this is NOT affected by CSS transforms
// (the page-transition animation applies a transform to an ancestor).
const absoluteTop = (node: HTMLElement): number => {
  let y = 0;
  let el: HTMLElement | null = node;
  while (el) {
    y += el.offsetTop;
    el = el.offsetParent as HTMLElement | null;
  }
  return y;
};

export const scrollToSection = (id: string) => {
  // The hero: always go to the very top.
  if (id === "Home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const navH = header ? header.getBoundingClientRect().height : 0;

  // Land on the section's title (first heading) so the gap is identical
  // regardless of how much padding the section wraps it in.
  const target = (el.querySelector("h1, h2") as HTMLElement | null) ?? el;

  const y = absoluteTop(target) - navH - NAV_GAP;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
};
