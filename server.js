// ==UserScript==
// @name Twitch React Auto Claimer
// @version 2.3.8
// @author YakoHobisa
// @author Den3er
// @author alex_lova
// @description Auto claim twitch channel reactions.
// @match https://www.twitch.tv/*
// @grant        none
// @namespace https://greasyfork.org/en/users/1085239-yakohobisa
// @license alex_lova
// ==/UserScript==

// hide the modal box with a reaction content
const styles = `
  .ReactModalPortal:has(.feedback-flow-modal) {
    display: none;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

setInterval(() => {
  const $reactButton = Array.from(
    document.querySelectorAll('[data-a-target="tw-core-button-label-text"]')
  ).find((element) => element.textContent === "React");

  const $notifElem = Array.from(
    document.querySelectorAll(".Layout-sc-1xcs6mc-0.eHKPFw")
  ).find((element) => element.textContent === "Turn on Notifications");

  const $editPanelsButt = Array.from(
    document.querySelectorAll(".CoreText-sc-1txzju1-0")
  ).find((element) => element.textContent === "Edit Panels");

  if (!$reactButton || $notifElem || $editPanelsButt) {
    return;
  }

  $reactButton.click();

  setTimeout(() => {
    $reacts = document.querySelectorAll(
      ".ScCheckBoxInputBase-sc-vu7u7d-1.eNJaYf.tw-radio__input"
    );
    $randomReact = $reacts[getRandomInt(5)];
    $randomReact.click();

    const $submit = document.querySelector(
      ".ReactModalPortal .Layout-sc-1xcs6mc-0.eHKPFw"
    );
    $submit.click();

    const $close = document.querySelector(
      ".ReactModalPortal .ScCoreButton-sc-ocjdkq-0.hZACqf.ScButtonIcon-sc-9yap0r-0.cClrQk"
    );
    $close.click();
  }, 1000);
}, 10 * 1000);

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}
