# 3d_landscape_p5js
Artistic approach to 2D shaders
# 🌄 Generative Landscapes Shader – Creative Coding Challenge

![Challenge](https://img.shields.io/badge/Challenge-Creative%20Coding%20Weekly-blueviolet)
![Technology](https://img.shields.io/badge/Technology-p5.js%20+%20GLSL-orange)
![Render](https://img.shields.io/badge/Rendering-WebGL2-lightblue)

---

## 🎨 Overview

This project is a **2D generative shader landscape** created for the [Creative Coding Weekly Challenge](https://openprocessing.org/curation/78544) under the theme **"Generative Landscapes"**.

The sketch uses **p5.js** and custom **GLSL shaders** (`vert.glsl` and `frag.glsl`) to render a dynamic, animated terrain in real-time.

---

## 🧠 Key Features

- 💡 Fully GPU-rendered using WebGL2 and GLSL
- 🖼️ Responsive canvas with retina/high DPI support
- 🎲 Randomized start state via `startRandom`
- ⌚ Time-based animation using `millis()` uniform
- 📐 Resolution-aware via `resolution` uniform
- ✨ Adaptable to any screen size with custom resizing

---

## 🛠️ Technologies Used

- [p5.js](https://p5js.org/)
- WebGL2 rendering context
- GLSL vertex and fragment shaders
- JavaScript (ES6)

---

## 📁 File Structure

```
/project-folder
│
├── mySketch.js         # p5.js main file
├── vert.glsl         # Vertex shader
├── frag.glsl         # Fragment shader
└── index.html        # Basic HTML shell to embed the canvas
```

---

## 📏 Responsive Design

The canvas adjusts to device pixel ratio (`window.devicePixelRatio`) and resizes dynamically on window events. Custom CSS via `canvas.style` ensures proper scaling and aspect ratio handling across devices.

---

## 🚀 How to Run

1. Ensure you have an HTTP server (local or remote).
2. Place all files (`index.html`, `mySketch.js`, `vert.glsl`, `frag.glsl`) in the same folder.
3. Open `index.html` in a browser that supports **WebGL2**.
4. Enjoy the animated generative landscape.

---

## 📸 Preview

> _Add a GIF or screenshot here to showcase the shader in action._

---

## 🧑‍🎨 Credits

- Created as part of the **Creative Coding Weekly Challenge**.
- Inspired by procedural terrain generation and GPU shader art.

---

## 📜 License

MIT – Feel free to explore, learn, and build on this shader art.
