import * as wasm from './pkg/minimal_js_rust_setup.js'

async function display_greeting() {
    set_text("loading ...")
    const greeting = await wasm.get_greeting_for("Mike")
    console.log("received from wasm: " + greeting)
}

function set_text(text) {
    let msg_div=document.getElementById("msg_box")
    msg_div.innerText = greeting
}

display_greeting()