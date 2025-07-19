import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const Contact = () => {
  useGSAP(() => {
    const stitle = SplitText.create("#contact h2", { type: "words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    tl.from(stitle.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: -50,
        ease: "power1.inOut",
        duration: 0.5,
      })
       .to("#f-left-leaf", {
        y: 50,
        ease: "power1.inOut",
        duration: 0.5,
      },'<');
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />

      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where to Find Us </h2>
        <div className="gap-5">
          <h3>Visit our store</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div className="gap-5">
          <h3>Contact us</h3>
          <p>
            (555) 987-6543 <br /> hello@jsmcocktail.com
          </p>
        </div>
        <div className="gap-5">
          <h3>Open every day</h3>
          <ul>
            {openingHours.map((time) => (
              <li key={time.day}>
                <p>
                  {time.day} : {time.time}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-5">
          <h3>socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
