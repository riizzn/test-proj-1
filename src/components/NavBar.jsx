import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "botton top",
      },
    });
    navTween.fromTo('nav',{backgroundColor: 'transparent'},{
        backgroundColor:'#00000050',
        backgroundFilter:'blur(10px)',
        duration:1,
        ease:"power1.inOut"

    }

    )
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <p>Drunken Muse</p>
          <img
            src="/images/logo.png"
            alt="logo"
            height={35}
            width={35}
            object-contain
          />
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
