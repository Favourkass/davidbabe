import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";
import Heart from "./Heart";
import "./App.css";

function App() {
  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const [showHeart, setShowHeart] = useState(false);

  const [showYesNoButtons, setShowYesNoButtons] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const form = useRef();
  const [loveMessage, setLoveMessage] = useState("");

  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
      heartArr[0].remove();
    }
  }, 100);

  const handleAskOut = () => {
    setShowConfetti(true);
    setShowHeart(true);
    setTimeout(() => {
      setShowMessage(true);
      setShowYesNoButtons(true);
    }, 3000); // Show message and buttons after 3 seconds
  };

  /* code for moving button */
  const popUp = () => {
    alert(
      "AH look at you, you caught the button. \nLucky button catchers win one free date on February 14th with an eligible bachelor who will be in touch with you to follow up!"
    );
  };

  const clickedYes = () => {
    setLoveMessage(
      'Joyce you  are so special and mean the world to me. I always look forward to talking to you every morning as soon as I wake, and talking to you every night before I sleep, this help me survive my stressful daysThank you for all you do for me, I love you.'
    );
    setShowLoveMessage(true);
    setHideHeader(true);
  };

  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }

  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  };

  /* code for email alert sent when she says yes */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z199l6g",
        "template_w4y121f",
        form.current,
        "KI7bceeNiZsp0c9Kp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="app">
      {!showConfetti && !showHeart && (
        <button className="ask-out-button" onClick={handleAskOut}>
          Ask Her Out
        </button>
      )}
      {showConfetti && <Confetti />}
      {showHeart && (
        <div style={{ marginTop: -500 }}>
          <Heart />
        </div>
      )}
      {showConfetti && showHeart && (
        <div>
          {!hideHeader && (
            <div>
              <p className="pre-valentine">Will you be my</p>
              <p className="valentine">Valentine</p>
            </div>
          )}

          <form onSubmit={sendEmail} ref={form}>
            <button style={yesStyle} type="submit" onClick={clickedYes} className="yes-button">
              YES!
            </button>
          </form>

          <button onMouseOver={mouseOver} style={noStyle} onClick={popUp} className="no-button">
            no
          </button>
        </div>
      )}
      {showYesNoButtons && showMessage && <div></div>}
      {showLoveMessage && (
        <div className="valentineTwo">
          <p>{loveMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
