import init from './pkg/minimal_js_rust_setup.js';
import * as wasm from './pkg/minimal_js_rust_setup.js';

async function display_greeting() {
    console.log("init wasm")
    await init()
    console.log("invoking wasm")
    let greeting = await wasm.get_greeting_for("Mike")
    console.log("received from wasm: " + greeting)
    set_text(greeting)
}

function set_text(text) {
    let msg_div=document.getElementById("msg_box")
    msg_div.innerText = text
    console.log("set text to: " + text)
}

console.log("executing index.js")
set_text("loading ...")
display_greeting()