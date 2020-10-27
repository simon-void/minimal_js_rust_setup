use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_greeting_for(name: &str) -> JsValue {
    let greeting = format!("Hi, {}", name);
    JsValue::from_str(greeting.as_str())
}