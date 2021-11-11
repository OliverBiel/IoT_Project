import { SECRET_KEY } from "./env.js"

window.onload=function(){
    const buttonOn = document.querySelector('#on');
    const buttonOff = document.querySelector('#off');
    
    buttonOn.addEventListener('click', buttonOnFunc);
    buttonOff.addEventListener('click', buttonOffFunc);

}

const init = {
    method: 'GET'
}

function buttonOnFunc(e){
    console.log('Button on')
    const eventName = "light_on"
    const linkOn = "https://maker.ifttt.com/trigger/"+ eventName + "/with/key/" + SECRET_KEY
    var light_on = new Request(linkOn, init);
    fetch(light_on);
    console.log('Button on')
}

function buttonOffFunc(e){
    console.log('Button off')
    const eventName = "light_off"
    const linkOff = "https://maker.ifttt.com/trigger/"+ eventName + "/with/key/" + SECRET_KEY
    var light_on = new Request(linkOff, init);
    fetch(light_on);
    console.log('Button off')
}
