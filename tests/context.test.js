const { JSDOM } = require('jsdom');
const p5 = { RendererGL: function(){} };

global.p5 = p5;
describe('WebGL context initialization', () => {
  test('falls back from webgl2 to webgl', () => {
    const dom = new JSDOM('<!doctype html><html><body></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;
    window.devicePixelRatio = 1;
    window.innerWidth = 100;
    window.innerHeight = 100;

    // Load sketch which overrides _initContext
    require('../mySketch.js');

    const glAttributes = {};
    const gl = { viewport: jest.fn(), getParameter: jest.fn() };
    const canvas = { getContext: jest.fn() };
    canvas.getContext
      .mockReturnValueOnce(null)
      .mockReturnValueOnce(gl);

    const renderer = { canvas, _pInst: { _glAttributes: glAttributes } };

    p5.RendererGL.prototype._initContext.call(renderer);

    expect(canvas.getContext).toHaveBeenNthCalledWith(1, 'webgl2', glAttributes);
    expect(canvas.getContext).toHaveBeenNthCalledWith(2, 'webgl', glAttributes);
  });
});
