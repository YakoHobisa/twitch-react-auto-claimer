// ==UserScript==
// @name Twitch React Auto Claimer
// @version 1.1.1
// @author YakoHobisa
// @author alex_lova
// @description Auto claim twitch channel reactions.
// @match https://www.twitch.tv/*
// @grant        none
// @namespace https://greasyfork.org/en/users/1085239-yakohobisa
// @license alex_lova
// ==/UserScript==


const clasnameR = "ScCoreButton-sc-ocjdkq-0 ScCoreButtonText-sc-ocjdkq-3 ibtYyW jYfhUy";
const classnameReact2 = "ScCheckBoxInputBase-sc-vu7u7d-1 gBDDIa tw-radio__input";
const classnameReact3 = "ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 ibtYyW wgheP";
const reactClose = "ButtonIconFigure-sc-1emm8lf-0 bxQRSJ";

async function main(){
    let buttoncounter = 0;
    while (true){

    while (document.getElementsByClassName(clasnameR)[0] == undefined){
          await sleep(1000);
      }
    if (document.getElementsByClassName(clasnameR).length == 2)
    {

        document.getElementsByClassName(clasnameR)[0].click();
        await sleep(300);
        try {

          document.getElementsByClassName(classnameReact2)[getRandomInt(5)].click();

        } catch (e){
          console.log("need ttv to w8")
        }
        await sleep(300);
        document.getElementsByClassName(classnameReact3)[document.getElementsByClassName(classnameReact3).length-1].click();
        await sleep(300);
        document.getElementsByClassName(reactClose)[document.getElementsByClassName(reactClose).length-1].click();
        buttoncounter++;
        console.log("Button clicked: " + buttoncounter);
        await sleep(5000);
    } else {
    await sleep(305000);

    }
  }
};

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
main();