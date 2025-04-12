/*
It is a 2D shader made for the weekly Creative Coding Challenge
(https://openprocessing.org/curation/78544) on the theme "Generative Landscapes".
*/

let theShader, dpr = Math.max(1, 0.5 * window.devicePixelRatio), ww = window.innerWidth*dpr, wh = window.innerHeight*dpr, startRandom;
const canvasStyle = 'width:100%;height:auto;touch-action:none;object-fit:contain;'

function windowResized() {
	ww = window.innerWidth*dpr; wh = window.innerHeight*dpr;
  resizeCanvas(ww, wh);
	const canvas = document.querySelector('canvas');
	canvas.style = canvasStyle;
}

function preload(){
	theShader = loadShader('vert.glsl', 'frag.glsl');
}

function setup() {
  pixelDensity(1);
  createCanvas(ww, wh, WEBGL);
	const canvas = document.querySelector('canvas');
	canvas.style = canvasStyle;
	startRandom = Math.random();
}

function draw() {
  shader(theShader);
  theShader.setUniform("resolution", [width, height]);
  theShader.setUniform("time", millis() / 1000.0);
  rect(0,0,width,height);
}

// Override to enable webgl2 and support for high resolution and retina displays
p5.RendererGL.prototype._initContext = function() {
	try { this.drawingContext = this.canvas.getContext('webgl2', this._pInst._glAttributes) ||
			this.canvas.getContext('experimental-webgl', this._pInst._glAttributes);
		if (this.drawingContext === null) { throw new Error('Error creating webgl context');
		} else { const gl = this.drawingContext;
			gl.viewport(0, 0, ww, wh);
			this._viewport = this.drawingContext.getParameter(this.drawingContext.VIEWPORT);
		} } catch (er) { throw er; }
};