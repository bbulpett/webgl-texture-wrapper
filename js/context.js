var gl; // Global variable for WebGL context

function start() {
  var canvas = document.getElementById('glCanvas');

  gl = initWebGL(canvas); // Initialize the GL context
  gl.viewport(0, 0, canvas.width, canvas.height);
  
  if (!gl) {
    return; // Return early if WebGL is unavailable or not working
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);                  // Set clear color to black, 100% opaque (RGBA)
  gl.enable(gl.DEPTH_TEST);                           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);                            // Make close things obscure far things
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT) // Clear color and depth buffer
}

function initWebGL(canvas) {
  gl = null

  // Try to grab the standard context. If it fails, fallback to experimental.
  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // If we don't have a GL context, give up now
  if (!gl) {
    alert('Unable to initialize WebGL. Your browser may not support it.');
  }
  
  return gl;
}