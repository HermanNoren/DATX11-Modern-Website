import gsap from "gsap";

export function animateLettersIn(amount: string = "100%") {
  const letters = document.querySelectorAll("#transitionContentLetter");

  const lettersTimeline = gsap.timeline();

  lettersTimeline
    .set(letters, {
      top: amount,
    })
    .to(letters, {
      top: "0",
      duration: 1,
      stagger: 0.01,
      delay: 1,
      ease: "power4.out",
    });
}
