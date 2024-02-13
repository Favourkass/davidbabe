// import React, { useState, useRef } from 'react';
// import Confetti from 'react-confetti';
// import emailjs from '@emailjs/browser';
// import Heart from './Heart';

// import './App.css';

// function App() {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [showHeart, setShowHeart] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   const [showYesNoButtons, setShowYesNoButtons] = useState(false);
//   const [showLoveMessage, setShowLoveMessage] = useState(false);

//   const [x, setX] = useState(52);
//   const [y, setY] = useState(55);
//   const form = useRef();

//   // Function to create heart animations
//   const createHeart = () => {
//     const heart = document.createElement("i");
//     heart.className = "fa-solid fa-heart";
//     heart.style.left = (Math.random() * 100) + "vw";
//     heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
//     document.body.appendChild(heart);
//   };

//   // Interval to continuously create heart animations
//   setInterval(createHeart, 1000);

//   // Remove hearts when their count exceeds 200
//   setInterval(() => {
//     const heartArr = document.querySelectorAll(".fa-heart");
//     if (heartArr.length > 200) {
//       heartArr[0].remove();
//     }
//   }, 100);

//   // Function to handle mouse over event on "No" button
//   const handleMouseOver = () => {
//     setX(Math.random() * 100);
//     setY(Math.random() * 100);
//   };

//   // Function to handle "No" button click
//   const handleNoClick = () => {
//     setShowYesNoButtons(false);
//     setShowMessage(false);
//     setShowLoveMessage(false);
//   };

//   // Function to handle "Yes" button click
//   const handleYesClick = (e) => {
//     e.preventDefault();
//     setShowYesNoButtons(false);
//     setShowConfetti(true);
//     setTimeout(() => setShowLoveMessage(true), 3000); // Show love message after 3 seconds

//     // Send email when "Yes" button is clicked
//     emailjs.sendForm('service_z199l6g', 'template_w4y121f', form.current, 'KI7bceeNiZsp0c9Kp')
//       .then((result) => {
//         console.log(result.text);
//       })
//       .catch((error) => {
//         console.log(error.text);
//       });
//     e.target.reset();
//   };

//   // Function to handle "Ask Her Out" button click
//   const handleAskOut = () => {
//     setShowConfetti(true);
//     setShowHeart(true);
//     setTimeout(() => {
//       setShowMessage(true);
//       setShowYesNoButtons(true);
//     }, 3000); // Show message and buttons after 3 seconds
//   };

//   return (
//     <div className='app'>
//       {/* <p className="pre-valentine">Will you be my</p>
//       <p className="valentine">Valentine</p> */}

//       <div className="buttons-container">
//         {showYesNoButtons && (
//           <form onSubmit={handleYesClick} ref={form}>
//             <button className="yes-button" type="submit">
//               YES!
//             </button>
//           </form>
//         )}

//         {showYesNoButtons && (
//           <button className="no-button" onMouseOver={handleMouseOver} onClick={handleNoClick}>
//             no
//           </button>
//         )}

//         {!showYesNoButtons && (
//           <button className="ask-out-button" onClick={handleAskOut}>
//             Ask Her Out
//           </button>
//         )}
//       </div>

//       {showConfetti && <Confetti />}
//       {showHeart && <Heart />}

//       {showMessage && (
//         <div className="message">
//           <p>Will you be my Val?</p>
//         </div>
//       )}

//       {showLoveMessage && (
//         <div className="love-message">
//           <p>I Love You!</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

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
  const [hideHeader, setHideHeader] = useState(false)
  const form = useRef();
  const [loveMessage, setLoveMessage] = useState('');

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
    setLoveMessage(`You are the answer to every prayer I've offered. I’m so thankful for all that you do for me. Thank you for making me feel this way. Happy Valentine’s Day my love.`);
    setShowLoveMessage(true)
    setHideHeader(true)
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
          {!hideHeader&&<div><p className="pre-valentine">Will you be my</p>
          <p className="valentine">Valentine</p></div>}

          <form onSubmit={sendEmail} ref={form}>
            <button style={yesStyle} type="submit" onClick={clickedYes}>
              YES!
            </button>
          </form>

          <button onMouseOver={mouseOver} style={noStyle} onClick={popUp}>
            no
          </button>
        </div>
      )}
      {showLoveMessage && (
        <div className="valentineTwo">
          <p>{loveMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
