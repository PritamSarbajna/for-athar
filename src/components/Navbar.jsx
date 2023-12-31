import React from "react";
import "./../css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const AnotherPageRedirect = () => {
    navigate("/another")
  }

  return (
    <>
    
  <div className="container">
    <div className="content">
      <section className="top_section">
        <div className="image_container">
          <img src="./images/A._P._J._Abdul_Kalam.jpg.jpg" alt="tribute" />
        </div>
        <div>
          <h1>A.P.J Abdul Kalam</h1>
          <h4>1931 - 2015</h4>
          <button onClick={AnotherPageRedirect} >Another Page</button>
        </div>
      </section>
      <section className="about_section">
        <h2>Missile Man Of India</h2>
        <p>
          <b>Avul Pakir Jainelabdeen Abdul Kalam was the 11th President of the
            country from 2002 and 2007 and is also popularly known as the
            'Missile Man' of India.</b>Born in a poor family in Tamil Nadu's Rameswaram, Kalam went on to
          study physics and aerospace engineering and worked with Defence
          Research and Development Organisation (DRDO) and Indian Space
          Research Organisation (ISRO). He also played a role in 1998
          Pokhran-II tests under leadership of Atar Bihar Vajpayee. Abdul
          Kalam was felicitated with a Padma Bhushan in 1981, Padma Vibhushan
          in 1990 and then received India's highest civilian honour Bharat
          Ratna in 1997. He is also known for a humble and respectful attitude
          towards people and was called the 'People's President'. After the
          end of his tenure as President of the country, he went back to
          delivering lectures to students and writing. He died after suffering
          cardiac arrest while delivering a lecture at Indian Institute of
          Management Shillong on July, 27, 2015. He was buried in his hometown
          Rameswaram with full state honours.
        </p>
      </section>
      <section className="biography_section">
        <h3>Biographies</h3>
        <ul>
          <li>His full name was Avul Pakir Jainulabdeen Abdul Kalam.</li>
          <li>He was born in a Tamil Muslim Family.</li>
          <li>He was India’s ‘first bachelor President.</li>
          <li>He was very popular among children.</li>
        </ul>
      </section>
      <footer>
        <p>
          Read More About A.P.J. Kalam on
          <a href="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam">Wikipedia</a>
        </p>
      </footer>
    </div>
  </div>

    </>
  );
};

export default Navbar;
