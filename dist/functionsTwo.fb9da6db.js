// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/functionsTwo.js":[function(require,module,exports) {
var activeCursor = function activeCursor() {
  var mouseCursor = document.querySelector(".cursor");
  var links = document.querySelectorAll('.nav-a');
  window.addEventListener('mousemove', cursor);

  function cursor(e) {
    //console.log(e);
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }

  links.forEach(function (link) {
    link.addEventListener('mouseleave', function () {
      mouseCursor.classList.remove("cursor-turn");
      link.classList.remove("cursor-switch");
    });
    link.addEventListener('mouseover', function () {
      mouseCursor.classList.add("cursor-turn");
      link.classList.add("cursor-switch");
    });
  });
};

var navSlide = function navSlide() {
  var hamburg = document.querySelector('.hamburg');
  var nav = document.querySelector('.nav-l');
  var navL = document.querySelectorAll('.nav-l li');
  hamburg.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    hamburg.classList.toggle('hamSwitch');
    navL.forEach(function (link, index) {
      if (!hamburg.classList.contains('hamSwitch')) {
        link.style.opacity = 1;
        link.style.animation = '';
      } else {
        link.style.opacity = 0;
        link.style.animation = "listFadeUp 1.5s ease forwards ".concat(index / 7 + 0.3, "s");
      }
    });
  });
};

var scrollItems = function scrollItems() {
  var workcontainer = document.querySelector('.work-scroll');
  var delta = 80;
  var speed = 50;
  var reverseMove = -20; //console.log(workcontainer.offsetHeight);

  window.addEventListener("wheel", function (e) {
    if (delta <= 80 && delta >= -(workcontainer.offsetHeight - 500)) {
      if (Math.sign(e.deltaY) == 1) {
        delta = delta + speed;
        reverseMove = -speed;
      } else if (Math.sign(e.deltaY) == -1) {
        delta = delta - speed;
        reverseMove = speed;
      }
    } else {
      delta = delta + reverseMove;
    }

    workcontainer.style.top = delta + "px";
    console.log(workcontainer.style.top);
  });
};

var colorChange = function colorChange() {
  var bgchange = document.querySelector('.cc');
  var nav = document.querySelector('.nav-l');
  var socialbox = document.querySelectorAll('.social-box');
  var colors = ["crimson", "rebeccapurple", "royalblue", "black"];
  /*  const gradient = ["linear-gradient(90deg, crimson, rebeccapurple)", 
                      "linear-gradient(90deg, rebeccapurple, royalblue)",
                      "linear-gradient(90deg, royalblue, black)",
                      "linear-gradient(90deg, black, crimson)"]; */

  var c = 0;
  bgchange.addEventListener('click', function () {
    c += 1;
    document.body.style.backgroundColor = colors[c];

    for (var s = 0; s < socialbox.length; s++) {
      socialbox[s].style.backgroundColor = colors[c];
    }

    if (window.innerWidth < 1024) {
      nav.style.backgroundColor = colors[c];
    } else {
      nav.style.backgroundColor = "transparent";
    }

    if (c > 3) {
      c = 0;
      document.body.style.backgroundColor = colors[c];

      for (var _s = 0; _s < socialbox.length; _s++) {
        socialbox[_s].style.backgroundColor = colors[c];
      }

      if (window.innerWidth < 1024) {
        nav.style.backgroundColor = colors[c];
      } else {
        nav.style.backgroundColor = "transparent";
      }
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth < 1024) {
      nav.style.backgroundColor = colors[c];
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
};

var backgroundElements = function backgroundElements() {
  function positionElements() {
    var crosses = document.querySelector('.crosses').childNodes;
    var dots = document.querySelector('.dots').childNodes;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var cPosX = [screenWidth / 5, screenWidth / 1.5, screenWidth / 1.4];
    var cPosY = [screenHeight / 2.4, screenHeight / 8, screenHeight / 1.5];
    var dPosX = [screenWidth / screenWidth, screenWidth / 6, screenWidth / 1.3];
    var dPosY = [screenHeight / 2, screenHeight / screenHeight, screenHeight / 1.5]; //console.log(crosses, dots);

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    ;

    for (var c = 0; c < crosses.length; c++) {
      crosses[c].style.left = getRandomInt(100) + cPosX[c] + "px";
      crosses[c].style.top = getRandomInt(100) + cPosY[c] + "px";
    }

    ;

    for (var d = 0; d < dots.length; d++) {
      dots[d].style.left = getRandomInt(100) + dPosX[d] + "px";
      dots[d].style.top = getRandomInt(100) + dPosY[d] + "px";
    }

    ;
  }

  positionElements();
  window.addEventListener('resize', function () {
    positionElements();
  });
};

activeCursor();
navSlide();
scrollItems();
colorChange();
backgroundElements();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56236" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/functionsTwo.js"], null)
//# sourceMappingURL=/functionsTwo.fb9da6db.js.map