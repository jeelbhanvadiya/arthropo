import React, {  useState } from "react";
import logo from "./Image/logo.svg";
import image1 from "./Image/image 1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  const [section2, setSection2] = useState("col-md-4");
  const [section3, setSection3] = useState("col-md-6");


  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header-top").style.position = "fixed";
      document.getElementById("header-top").style.top = "-90px";
      document.getElementById("header-top").style.backgroundColor = "white";
      document.getElementById("header").style.fontSize = "60px";
      document.getElementById("header").style.marginLeft = "-5px";
      document.getElementById("page2").style.marginTop = "1000px";

    } else {
      document.getElementById("header-top").style.top = "50px";
      document.getElementById("header-top").style.background = "transparent";
      document.getElementById("header").style.fontSize = "200px";
      document.getElementById("header").style.marginLeft = "-17px";
      document.getElementById("page2").style.marginTop = "1000px";
      document.getElementById("page2").style.transitionDelay = "0s";
      document.getElementById("tx").style.fontSize = "60px";
      document.getElementById("tx").style.marginTop = "10px";
      document.getElementById("tx").style.transitionDelay = "0s";
      document.getElementById("date").style.position = "fixed";
      document.getElementById("date").style.top = "90%";
      document.getElementById("date").style.fontSize = "18px";
      document.getElementById("date").style.transitionDelay = "0s";
      document.getElementById("date").style.transition = "1s";
    }
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("tx").style.fontSize = "20px";
      document.getElementById("tx").style.marginTop = "-220px";
    }
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("date").style.fontSize = "18px";
      document.getElementById("date").style.position = "fixed";
      document.getElementById("date").style.top = "0px";
      document.getElementById("date").style.transition = "2.5s";
    }
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
      document.getElementById("page2").style.marginTop = "600px";
    }
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
      document.getElementById("page2").style.marginTop = "-220px";
    }
    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450) {
      setSection2("col-md-7");
      setSection3("col-md-3");
    } else {
      setSection2("col-md-4");
      setSection3("col-md-6");
    }
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
      document.getElementById("page3").style.marginTop = "62%";
    }else if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
      document.getElementById("page3").style.marginTop = "142%";
    }
    if (
      document.body.scrollTop > 650 ||
      document.documentElement.scrollTop > 650
    ) {
      document.getElementById("page3").style.marginTop = "-70%";
      setSection2("col-md-5");
      setSection3("col-md-5");
    }
    if (
      document.body.scrollTop > 650 ||
      document.documentElement.scrollTop > 650
    ) {
      document.getElementById("tx").style.display = "none";
    } else {
      document.getElementById("tx").style.display = "block";
    }
    if (
        document.body.scrollTop > 750 ||
        document.documentElement.scrollTop > 750
    ) {
      document.getElementById("header-top").style.height = "180px";
      document.getElementById("page4").style.marginTop = "40%";
      document.getElementById("page4text").style.marginTop = "950px";
    }else if (document.body.scrollTop > 650 ||
        document.documentElement.scrollTop > 650){
      document.getElementById("header-top").style.height = "260px";
      document.getElementById("page4").style.marginTop = "130%";
      document.getElementById("page4text").style.marginTop = "1600px";
    }
    if (
        document.body.scrollTop > 850 ||
        document.documentElement.scrollTop > 850
    ) {
      document.getElementById("page4").style.marginTop = "-100%";
      document.getElementById("page4text").style.marginTop = "-200px";
    }
    if (
        document.body.scrollTop > 900 ||
        document.documentElement.scrollTop > 900
    ) {
      document.getElementById("page5Img").style.marginTop = "130%";
      document.getElementById("page5text").style.marginTop = "50%";
    }
    else if(document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800){
      document.getElementById("page5Img").style.marginTop = "230%";
      document.getElementById("page5text").style.marginTop = "150%";
    }
  };

  return (
    <div id="body" className="container-100%">
      <div className="row">
        <div id="logo" className="col-md-2">
          <img src={logo} alt="logo" />
        </div>
        <div id="home" className={section2}>
          <div id="header-top">
            <text id="header">Dystopia</text>
          </div>
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
          <div id="page4" className="page4">
            <img src={image1} alt="img1" width="400vh" />
            <p style={{ marginTop: "20px" }}>
              This wallet address owns [Name of Artwork]
            </p>
          </div>
          <div id="page5text" style={{ marginTop: "150%" }} className="page5text">
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
          <div id="page5Img" style={{ marginTop: "230%" }} className="page4">
            <img src={image1} alt="img1" width="400vh" />
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
