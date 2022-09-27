import React, { useState } from "react";
import logo from "./image/logo.svg";
import artImage1 from "./image/art1.png";
import artImage2 from "./image/art2.jpg";
import artImage3 from "./image/art3.jpg";
import artImage4 from "./image/art4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  const [section2, setSection2] = useState("col-md-4");
  const [section3, setSection3] = useState("col-md-6");

  const [currentScroll, setCurrentScroll] = useState(0);

  window.onscroll = () => {
    scrollFunction();
    console.log("in here..", document.documentElement.scrollTop);
    setCurrentScroll(document.documentElement.scrollTop);
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.fontSize = "60px";
      document.getElementById("header-top").style.position = "fixed";
      document.getElementById("header-top").style.top = "-90px";
      document.getElementById("header-top").style.backgroundColor = "white";
      document.getElementById("header").style.marginLeft = "-5px";
      document.getElementById("page2").style.marginTop = "1000px";
    } else {
      document.getElementById("header").style.fontSize = "200px";
      document.getElementById("header").style.marginLeft = "-17px";
      document.getElementById("header-top").style.top = "60px";
      document.getElementById("header-top").style.backgroundColor =
        "transparent";
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
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById("tx").style.fontSize = "20px";
      document.getElementById("tx").style.marginTop = "-220px";
    }
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.getElementById("date").style.fontSize = "18px";
      document.getElementById("date").style.position = "fixed";
      document.getElementById("date").style.top = "20px";
      document.getElementById("date").style.transition = "2.5s";
    }
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("page2").style.marginTop = "570px";
    }
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      document.getElementById("page2").style.marginTop = "-100px";
    }
    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450
    ) {
      setSection2("col-md-7");
      setSection3("col-md-3");
    } else {
      setSection2("col-md-4");
      setSection3("col-md-6");
    }
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById("page3").style.marginTop = "50%";
    } else if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450
    ) {
      document.getElementById("page3").style.marginTop = "140%";
    }
    if (
      document.body.scrollTop > 650 ||
      document.documentElement.scrollTop > 650
    ) {
      document.getElementById("page3").style.marginTop = "-106%";
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
      document.getElementById("page4").style.marginTop = "57%";
      document.getElementById("page4text").style.marginTop = "950px";
    } else if (
      document.body.scrollTop > 650 ||
      document.documentElement.scrollTop > 650
    ) {
      document.getElementById("page4").style.marginTop = "140%";
      document.getElementById("page4text").style.marginTop = "1600px";
    }
    if (
      document.body.scrollTop > 850 ||
      document.documentElement.scrollTop > 850
    ) {
      document.getElementById("page4").style.marginTop = "-80%";
      document.getElementById("page4text").style.marginTop = "-200px";
    }
  };

  return (
    <div id="body" className="container-100%">
      <div style={{ position: "fixed", top: 0, right: 20 }}>
        scroll: {currentScroll}
      </div>
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
            {/* <text className="page3HeaderText">Commentary Title</text> */}
            <div className="page3Text">
              <b>
                an imagined state or society in which there is great suffering
                or injustice, typically one that is totalitarian or
                post-apocalyptic.
              </b>
              <p style={{ marginTop: 20 }}>
                Yet we can’t look away. Like witnesses to a catastrophe, aware
                of the spectacle before us, we look on, helpless, defiant, the
                signs all tellingly pointing towards the dystopic future. A
                shared destiny for all of humanity as set forth by an
                unquestioned subjugation to technology. Ultimately leading to
                the final surrender: the hand-off.
              </p>
              <p>
                With Dystopia, we wanted to take the temperature of a specific
                moment in time, of humanity on the threshold of a digital era
                and of man making way for machine, through a small but
                representative sample of digital artists working today. More
                importantly we wanted to tease out the underlying emotions, in
                search of a common denominator, be it angst, fear, excitement or
                whichever feeling bubbled to the surface.
              </p>
              <p>
                The works lend themselves to plenty of interpretation, as you’ll
                find when engaging with them. Though relatively small as sample,
                four in total, they are extremely ambitious in scope and
                ultimately act as official records of sorts for a highly
                consequential moment in time. A verdict of some kind, forever
                consigned to the blockchain, for posterity.
              </p>
            </div>
          </div>

          <div id="page4" className="page4">
            <img src={artImage1} alt="img1" width="400vh" />
            <p style={{ marginTop: "20px" }}>
              This wallet address owns [Name of Artwork]
            </p>
          </div>
          <div
            id="page5text"
            style={{ marginTop: "200px" }}
            className="page5text"
          >
            <text className="page3HeaderText">Last Choice</text>
            <p style={{ fontSize: "20px" }}>by Nicola Scognamiglio</p>
          </div>
          <div className="page4Right">
            <p>
              What will life be like when digital artifacts will render it
              completely abstract and intangible, and social interactions
              carefully planned and orchestrated? And what of the opportunity of
              choosing and constantly changing your digital identity, your
              avatar? Last Choice is actually your last choice. Imagining a
              future where there are no other possibilities of having your last
              shot at ultimately being yourself. After years of making up your
              identity and selling it in the best way, will you be ready to
              finally be yourself?
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
          <div id="page5Img" style={{ marginTop: "700px" }} className="page4">
            <img src={artImage2} alt="img1" width="400vh" />
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
