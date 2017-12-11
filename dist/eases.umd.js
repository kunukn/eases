(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.eases = factory());
}(this, (function () { 'use strict';

function linear(t) {
  return t
}

return linear;

})));
