import React from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const About = () => {
  useGSAP(() => {
    const tSplit = new SplitText("#about h2", { type: "words" });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    scrollTimeline
      .from(tSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(".top-grid div, .bottom-grid div", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      },'-=0.5');
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge"> Best Cocktails</p>
            <h2>Where every detail matters—from muddle to garnish</h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>
        <div className="md:col-span-3 lineargrad px-5 py-10  ">
          <div className="noisy" />
          <div className="flex flex-col gap-2 relative items-center justify-center mb-5  ">
            <div className="font-modern-negra text-3xl ">
              Crafted to Impress
            </div>
            <div className="w-full h-px bg-white rounded-full" />
          </div>
          <ul className="space-y-4 text-md font-semibold flex items-center flex-col ">
            <li> Perfectly balanced blends</li>
            <li> Garnished to perfection</li>
            <li> Ice-cold every time</li>
            <li> Expertly shaken & stirred</li>
          </ul>
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
