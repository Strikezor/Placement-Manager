import React from "react";
import "https://kit.fontawesome.com/3994cc8e67.js";
import "./Chatbot.css";

const Chatbot = () => {
  var faqwindow = document.querySelector(".faq-window");
  const show_hide = () => {
    if (faqwindow.style.display === "block") {
      faqwindow.style.display = "none";
    } else {
      faqwindow.style.display = "block";
    }
  };
  return (
    <>
      <main>
        <header>
          <div className="title">
            <i className="fa-solid fa-user-graduate"></i>
            <h1>Placement Chatbot</h1>
          </div>
          <button type="button" onclick="show_hide()">
            <i className="fa-solid fa-bars"></i>
          </button>
        </header>

        <div className="container chat-section">
          <div className="faq-window">
            <div className="faq-head">
              <h3>Frequently Asked Questions</h3>
            </div>
            <div className="faq-questions">
              <p>how to get placed?</p>
              <p>how to create resume?</p>
              <p>how to prepare for interview?</p>
              <p>how to prepare for aptitude?</p>
            </div>
          </div>
          <div className="chat-window">
            <div className="chats">
              <div className="user-join">
                <p>
                  <b>Chat Buddy</b> joined the chat
                </p>
              </div>
              <div className="message common-msg">
                <p>Hey there!</p>
              </div>
              <div className="reply common-msg">
                <p>Hi, I am Chat Buddy. How can I help you?</p>
              </div>
              <div className="message common-msg">
                <p>How can i get placed?</p>
              </div>
              <div className="reply common-msg">
                <p>
                  The placement process involves several stages. It typically
                  begins with registration and profile creation.{" "}
                </p>
              </div>
              <div className="reply common-msg message-bottom">
                <p>What else would you like to know?</p>
              </div>
            </div>
            <div className="query-input">
              <input type="text" placeholder="Type a message..." />
              <button type="button">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Chatbot;
