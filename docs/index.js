import init from './pkg/minimal_js_rust_setup.js';
import * as wasm from './pkg/minimal_js_rust_setup.js';

async function display_greeting(name) {
    console.log("init wasm");
    await init();
    console.log("invoking wasm");
    let greeting = await wasm.get_greeting_for(name);
    console.log("received from wasm: " + greeting);
    setText(greeting);
}

function setText(text) {
    let msg_div=document.getElementById("msg_box");
    msg_div.innerText = text;
    console.log("set text to: " + text);
}

window.onload = function () {
    function update_greeting(event){
        display_greeting(event.target.value);
    }
    let nameTextField = document.getElementById('name');
    nameTextField.addEventListener("keyup", update_greeting,false);
}