import { useGSAP } from "@gsap/react";
import React from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((chars) => chars.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".right-flower",
        { y: 200, rotation: 20, opacity: 1, ease: "sine.out" },
        0
      )
      .to(
        ".left-flower",
        { y: -200, rotation: 20, opacity: 1, ease: "sine.out" },
        0
      )
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">ROSELLA</h1>
        <img src="/images/f2.png" alt="left flower" className="left-flower" />
        <img src="/images/f1.png" alt="right flower" className="right-flower" />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool, Crisp, Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails"> View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
