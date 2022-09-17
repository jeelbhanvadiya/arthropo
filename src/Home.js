import React, { useEffect, useState } from "react";
import logo from "./Image/logo.jpg";
import image1 from "./Image/image 1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  const [section2, setSection2] = useState("col-md-5");
  const [section3, setSection3] = useState("col-md-5");

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.fontSize = "60px";
      document.getElementById("header").style.marginLeft = "-5px";
      document.getElementById("page2").style.marginTop = "1050px";
      document.getElementById("page2").style.marginTop = "60px";
      document.getElementById("page2").style.transitionDelay = "3s";
      document.getElementById("tx").style.fontSize = "20px";
      document.getElementById("tx").style.marginTop = "-220px";
      document.getElementById("tx").style.transitionDelay = "1s";
      document.getElementById("date").style.fontSize = "18px";
      document.getElementById("date").style.position = "fixed";
      document.getElementById("date").style.top = "20px";
      document.getElementById("date").style.transition = "2.5s";
      document.getElementById("date").style.transitionDelay = "2s";
    } else {
      document.getElementById("header").style.fontSize = "200px";
      document.getElementById("header").style.marginLeft = "-17px";
      document.getElementById("page2").style.marginTop = "600px";
      document.getElementById("page2").style.transitionDelay = "0s";
      document.getElementById("tx").style.fontSize = "60px";
      document.getElementById("tx").style.marginTop = "10px";
      document.getElementById("tx").style.transitionDelay = "0s";
      document.getElementById("date").style.position = "fixed";
      document.getElementById("date").style.top = "600px";
      document.getElementById("date").style.fontSize = "18px";
      document.getElementById("date").style.transitionDelay = "0s";
      document.getElementById("date").style.transition = "1s";
    }

    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      setSection2("col-md-7");
      setSection3("col-md-3");
    } else {
      setSection2("col-md-5");
      setSection3("col-md-5");
    }
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      setSection2("col-md-5");
      setSection3("col-md-5");
    } else if (
      document.body.scrollTop > 20000 ||
      document.documentElement.scrollTop > 2000
    ) {
      setSection2("col-md-7");
      setSection3("col-md-3");
    }
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      document.getElementById("tx").style.display = "none";
    } else {
      document.getElementById("tx").style.display = "block";
    }
  };

  return (
    <div className="container-100%">
      <div className="row">
        <div id="logo" className="col-md-2">
          <img src={logo} alt="logo" />
        </div>
        <div id="home" className={section2}>
          <text id="header">Dystopia</text>
          <div id="tx">
            <text>The Human Condition</text>
            <br />
            <text>on the Threshold</text>
            <br />
            <text>of the Digital Era</text>
          </div>
          <div id="page2" className="page2">
            <text className="page2HeaderText">Featuring works of</text>
            <div className="page2text">
              <text>Mattia Pannoni</text>
              <br />
              <text>The Isolationist</text>
              <br />
              <text>Anthony Samaniego</text>
              <br />
              <text>Nicola Scognamiglio</text>
            </div>
          </div>
          <div id="page3" className="page3">
            <text className="page3HeaderText">Commentary Title</text>
            <div className="page3Text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit.
              </p>
              <p>
                Sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>
          <div className="page4">
            <img src={image1} alt="img1" width="390vh" />
            <p style={{ marginTop: "20px" }}>
              This wallet address owns [Name of Artwork]
            </p>
          </div>
          <div style={{ marginTop: "150px" }} className="page5text">
            <text className="page3HeaderText">Next Artpiece Title</text>
            <p style={{ fontSize: "20px" }}>by Next Artist</p>
          </div>
          <div className="page4Right">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </p>
          </div>
        </div>
        <div id="section2" className={section3}>
          <div id="date" className="date">
            <h3>September 30, 2022</h3>
          </div>
          <div id="page4text" className="page4text">
            <text className="page3HeaderText">Artpiece Title</text>
            <p style={{ fontSize: "20px" }}>by Mattia Pannoni</p>
          </div>
          <div className="page4Right">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </p>
          </div>
          <div style={{ marginTop: "200px" }} className="page4">
            <img src={image1} alt="img1" width="390vh" />
            <p style={{ marginTop: "20px" }}>
              This wallet address owns [Name of Artwork]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
