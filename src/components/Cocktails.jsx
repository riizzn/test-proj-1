import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
const Cocktails = () => {
  useGSAP(()=>{
    const ptl=gsap.timeline({
      scrollTrigger:{
        trigger:"#cocktails",
        start:'top 30%',
        end:'bottom 80%',
        scrub:true,
      }

    })
    ptl.from("#c-left-leaf",{
      x:-100 , y:100
    })
    .from("#c-right-leaf",{
      x:100, y:100
    })

  })
  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left flower"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right flower"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({name,country,detail,price}) => (
              <li key={name}>
                <div className="flex flex-col gap-1 md:me-20">
                <h3>{name}</h3>
                <p>{country} | {detail}</p>
                </div>
                 <span>-{price}</span>


              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map(({name,country,detail,price}) => (
              <li key={name}>
                <div className="flex flex-col gap-1 me-20">
                <h3>{name}</h3>
                <p>{country} | {detail}</p>
                </div>
                 <span>-{price}</span>


              </li>
            ))}
          </ul>
        </div>

      </div>
      
    </section>
  );
};

export default Cocktails;
