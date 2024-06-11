const header = document.querySelector("header");
const scrollers = document.querySelectorAll(".scroller")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    _AddAnimation()
}

function _AddAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}