import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";

const Cocktails = () => {
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
