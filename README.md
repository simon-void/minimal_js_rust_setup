## Minimal setup of JS-Rust/WASM interop (no bundler)

- compile the rust code with `wasm-pack build --release --target web`
(the web target is necessary since we don't want to use a bundler)
- copy the the generated pkg-folder into the docs folder
but remove the these two files (from /docs/pkg/): .gitignore and README.md
(this step is needed in order to deploy this website on [GitHub Pages](https://pages.github.com/),
 but might not be necessary for the way you deploy)