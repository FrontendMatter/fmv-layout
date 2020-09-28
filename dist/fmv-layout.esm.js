import { handler, util } from 'dom-factory';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var watchObject = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.unwatch=e.watch=void 0;var o=n(4),i=r(o),c=n(3),a=r(c),f=(e.watch=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];var r=e[1];_(r)?g.apply(void 0,e):f(r)?b.apply(void 0,e):w.apply(void 0,e);},e.unwatch=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];var r=e[1];_(r)||void 0===r?m.apply(void 0,e):f(r)?O.apply(void 0,e):x.apply(void 0,e);},function(t){return "[object Array]"==={}.toString.call(t)}),u=function(t){return "[object Object]"==={}.toString.call(t)},_=function(t){return "[object Function]"==={}.toString.call(t)},s=function(t,e,n){(0, a["default"])(t,e,{enumerable:!1,configurable:!0,writable:!1,value:n});},l=function(t,e,n,r){(0, a["default"])(t,e,{get:n,set:function(t){r.call(this,t);},enumerable:!0,configurable:!0});},p=function(t,e,n,r,o){var i=void 0,c=t.__watchers__[e];(i=t.__watchers__.__watchall__)&&(c=c?c.concat(i):i);for(var a=c?c.length:0,f=0;a>f;f++)c[f].call(t,n,r,e,o);},v=["pop","push","reverse","shift","sort","unshift","splice"],h=function(t,e,n,r){s(t,n,function(){for(var o=0,i=void 0,c=void 0,a=arguments.length,f=Array(a),u=0;a>u;u++)f[u]=arguments[u];if("splice"===n){var _=f[0],s=_+f[1];i=t.slice(_,s),c=[];for(var l=2;l<f.length;l++)c[l-2]=f[l];o=_;}else c="push"===n||"unshift"===n?f.length>0?f:void 0:f.length>0?f[0]:void 0;var p=e.apply(t,f);return "pop"===n?(i=p,o=t.length):"push"===n?o=t.length-1:"shift"===n?i=p:"unshift"!==n&&void 0===c&&(c=p),r.call(t,o,n,c,i),p});},d=function(t,e){if(_(e)&&t&&!(t instanceof String)&&f(t))for(var n=v.length;n>0;n--){var r=v[n-1];h(t,t[r],r,e);}},y=function(t,e,n,r){var o=!1,c=f(t);void 0===t.__watchers__&&(s(t,"__watchers__",{}),c&&d(t,function(n,o,i,c){if(p(t,n,i,c,o),0!==r&&i&&(u(i)||f(i))){var a=void 0,_=t.__watchers__[e];(a=t.__watchers__.__watchall__)&&(_=_?_.concat(a):a);for(var s=_?_.length:0,l=0;s>l;l++)if("splice"!==o)g(i,_[l],void 0===r?r:r-1);else for(var v=0;v<i.length;v++)g(i[v],_[l],void 0===r?r:r-1);}})),void 0===t.__proxy__&&s(t,"__proxy__",{}),void 0===t.__watchers__[e]&&(t.__watchers__[e]=[],c||(o=!0));for(var _=0;_<t.__watchers__[e].length;_++)if(t.__watchers__[e][_]===n)return;t.__watchers__[e].push(n),o&&!function(){var n=(0, i["default"])(t,e);void 0!==n?!function(){var r={enumerable:n.enumerable,configurable:n.configurable},o=["get","set"];o.forEach(function(e){void 0!==n[e]&&(r[e]=function(){for(var r=arguments.length,o=Array(r),i=0;r>i;i++)o[i]=arguments[i];return n[e].apply(t,o)});});var i=["writable","value"];i.forEach(function(t){void 0!==n[t]&&(r[t]=n[t]);}),(0, a["default"])(t.__proxy__,e,r);}():t.__proxy__[e]=t[e];var o=function(){return t.__proxy__[e]},c=function(n){var o=t.__proxy__[e];if(0!==r&&t[e]&&(u(t[e])||f(t[e]))&&!t[e].__watchers__)for(var i=0;i<t.__watchers__[e].length;i++)g(t[e],t.__watchers__[e][i],void 0===r?r:r-1);o!==n&&(t.__proxy__[e]=n,p(t,e,n,o,"set"));};l(t,e,o,c);}();},g=function P(t,e,n){if("string"!=typeof t&&(t instanceof Object||f(t)))if(f(t)){if(y(t,"__watchall__",e,n),void 0===n||n>0)for(var r=0;r<t.length;r++)P(t[r],e,n);}else {var o=[];for(var i in t)({}).hasOwnProperty.call(t,i)&&o.push(i);b(t,o,e,n);}},w=function(t,e,n,r){"string"!=typeof t&&(t instanceof Object||f(t))&&(_(t[e])||(null!==t[e]&&(void 0===r||r>0)&&g(t[e],n,void 0!==r?r-1:r),y(t,e,n,r)));},b=function(t,e,n,r){if("string"!=typeof t&&(t instanceof Object||f(t)))for(var o=0;o<e.length;o++){var i=e[o];w(t,i,n,r);}},x=function(t,e,n){if(void 0!==t.__watchers__&&void 0!==t.__watchers__[e])if(void 0===n)delete t.__watchers__[e];else for(var r=0;r<t.__watchers__[e].length;r++)t.__watchers__[e][r]===n&&t.__watchers__[e].splice(r,1);},O=function(t,e,n){for(var r in e)e.hasOwnProperty(r)&&x(t,e[r],n);},j=function S(t,e){var n=[];for(var r in t)t.hasOwnProperty(r)&&(t[r]instanceof Object&&S(t[r],e),n.push(r));O(t,n,e);},m=function(t,e){if(!(t instanceof String||!t instanceof Object&&!f(t)))if(f(t)){for(var n=["__watchall__"],r=0;r<t.length;r++)n.push(r);O(t,n,e);}else j(t,e);};},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n);},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach};},function(t,e,n){t.exports={"default":n(5),__esModule:!0};},function(t,e,n){t.exports={"default":n(6),__esModule:!0};},function(t,e,n){var r=n(2);t.exports=function(t,e,n){return r.setDesc(t,e,n)};},function(t,e,n){var r=n(2);n(17),t.exports=function(t,e){return r.getDesc(t,e)};},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},function(t,e,n){var r=n(7);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}};},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,e,n){var r=n(13),o=n(1),i=n(9),c="prototype",a=function(t,e,n){var f,u,_,s=t&a.F,l=t&a.G,p=t&a.S,v=t&a.P,h=t&a.B,d=t&a.W,y=l?o:o[e]||(o[e]={}),g=l?r:p?r[e]:(r[e]||{})[c];l&&(n=e);for(f in n)u=!s&&g&&f in g,u&&f in y||(_=u?g[f]:n[f],y[f]=l&&"function"!=typeof g[f]?n[f]:h&&u?i(_,r):d&&g[f]==_?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[c]=t[c],e}(_):v&&"function"==typeof _?i(Function.call,_):_,v&&((y[c]||(y[c]={}))[f]=_));};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a;},function(t,e){t.exports=function(t){try{return !!t()}catch(e){return !0}};},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(t,e,n){var r=n(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==r(t)?t.split(""):Object(t)};},function(t,e,n){var r=n(11),o=n(1),i=n(12);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1);}),"Object",c);};},function(t,e,n){var r=n(14),o=n(10);t.exports=function(t){return r(o(t))};},function(t,e,n){var r=n(16);n(15)("getOwnPropertyDescriptor",function(t){return function(e,n){return t(r(e),n)}});}])});
});

/**
 * Allows an element to respond to scroll events from a designated scroll target.
 * Use from a consumer via dom-factory mixins i.e. 
 * 
 * import { scrollTargetBehavior } from 'material-design-kit'
 * const anotherComponent = () => ({
 *   mixins: [ scrollTargetBehavior ]
 * })
 * 
 * @param  {HTMLElement} element The element which should respond to scroll events
 * @return {Object}
 */
const scrollTargetBehavior = () => ({

  // The scroll target selector
  _scrollTargetSelector: null,

  // The scroll target HTMLElement
  _scrollTarget: null,
  
  /**
   * Get the HTMLELement of the scroll target
   * @return {HTMLElement}
   */
  get scrollTarget () {
    if (this._scrollTarget) {
      return this._scrollTarget
    }
    return this._defaultScrollTarget
  },

  /**
   * Set the HTMLElement of the scroll target
   * @param  {HTMLElement} value
   */
  set scrollTarget (value) {
    this._scrollTarget = value;
  },

  /**
   * Get the scroll target selector
   * @return {String|HTMLElement}
   */
  get scrollTargetSelector () {
    if (this._scrollTargetSelector) {
      return this._scrollTargetSelector
    }
    if (this.element.hasAttribute('data-scroll-target')) {
      return this.element.getAttribute('data-scroll-target')
    }
  },

  /**
   * Set the scroll target selector
   * @param  {String|HTMLElement} value
   */
  set scrollTargetSelector (value) {
    this._scrollTargetSelector = value;
  },

  /**
   * Get the default scroll target
   * @return {HTMLElement}
   */
  get _defaultScrollTarget () {
    return this._doc
  },

  /**
   * Get the ownerDocument
   * @return {HTMLElement}
   */
  get _owner () {
    return this.element.ownerDocument
  },

  /**
   * Get the document element
   * @return {HTMLElement}
   */
  get _doc () {
    return this._owner.documentElement
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled upward.
   * @return {number}
   */
  get _scrollTop () {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop
    }
    return 0
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled upward.
   * @param  {number} top
   */
  set _scrollTop (top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    }
    else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the left.
   * @return {number}
   */
  get _scrollLeft () {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft
    }
    return 0
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the left.
   * @param  {number} left
   */
  set _scrollLeft (left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    }
    else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Gets the width of the scroll target.
   * @return {number}
   */
  get _scrollTargetWidth () {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth
    }
    return 0
  },

  /**
   * Gets the height of the scroll target.
   * @return {number}
   */
  get _scrollTargetHeight () {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight
    }
    return 0
  },

  get _isPositionedFixed () {
    if (this.element instanceof HTMLElement) {
      return window.getComputedStyle(this.element).position === 'fixed'
    }
    return false
  },

  /**
   * Attach the scroll event listener to the scroll target
   * @param  {string|HTMLElement} scrollTarget The scroll target (optional)
   */
  attachToScrollTarget () {
    this.detachFromScrollTarget();
    watchObject.watch(this, 'scrollTargetSelector', this.attachToScrollTarget);
    
    if (this.scrollTargetSelector === 'document') {
      this.scrollTarget = this._doc;
    }
    else if (typeof this.scrollTargetSelector === 'string') {
      this.scrollTarget = document.querySelector(`${ this.scrollTargetSelector }`);
    }
    else if (this.scrollTargetSelector instanceof HTMLElement) {
      this.scrollTarget = this.scrollTargetSelector;
    }

    if (!this._doc.style.overflow) {
      this._doc.style.overflow = this.scrollTarget !== this._doc ? 'hidden' : '';
    }

    if (this.scrollTarget) {
      this.eventTarget = this.scrollTarget === this._doc ? window : this.scrollTarget;
      this._boundScrollHandler = this._boundScrollHandler || this._scrollHandler.bind(this);
      this._loop();
      // this.eventTarget.addEventListener('scroll', this._boundScrollHandler)
    }
  },

  _loop () {
    requestAnimationFrame(this._boundScrollHandler);
  },

  /**
   * Detach the scroll event listener from the scroll target
   * @return {[type]} [description]
   */
  detachFromScrollTarget () {
    watchObject.unwatch(this, 'scrollTargetSelector', this.attachToScrollTarget);
    // if (this.eventTarget) {
    //   this.eventTarget.removeEventListener('scroll', this._boundScrollHandler)
    // }
  },

  /**
   * Scrolls the content to a particular place.
   * @param  {number} left The left position
   * @param  {number} top  The top position
   */
  scroll (left = 0, top = 0) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    }
    else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Scrolls the content to a particular place using a behavior.
   * @param  {Number} left     The left position
   * @param  {Number} top      The top position
   * @param  {String} behavior The behavior name
   * @param  {Function} scrollFn Custom scroll timing function used with `behavior` (optional)
   */
  scrollWithBehavior (left = 0, top = 0, behavior, scrollFn) {

    // Scroll timing function used with `behavior`
    scrollFn = typeof scrollFn === 'function' ? scrollFn : function easeOutQuad (t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b
    };
    
    // Smooth
    if (behavior === 'smooth') {
      let startTime = Date.now();
      let currentScrollTop = this._scrollTop;
      let currentScrollLeft = this._scrollLeft;
      let dScrollTop = top - currentScrollTop;
      let dScrollLeft = left - currentScrollLeft;
      let duration = 300;

      (function updateFrame () {
        let now = Date.now();
        let elapsedTime = now - startTime;

        if (elapsedTime < duration) {
          this.scroll(
            scrollFn(elapsedTime, currentScrollLeft, dScrollLeft, duration),
            scrollFn(elapsedTime, currentScrollTop, dScrollTop, duration)
          );
          requestAnimationFrame(updateFrame.bind(this));
        }
      }).call(this);
    }

    // Default
    else {
      this.scroll(left, top);
    }
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   * @return {Boolean}
   */
  _isValidScrollTarget () {
    return this.scrollTarget instanceof HTMLElement
  },

  /**
   * Scroll event handler (runs on every scroll event)
   */
  _scrollHandler () {}
});

/**
 * Allows a scrollTargetBehavior consumer to use scroll effects.
 * Use from a consumer via dom-factory mixins i.e. 
 * 
 * import { 
 *   scrollTargetBehavior, 
 *   scrollEffectBehavior 
 * } from 'material-design-kit'
 * 
 * const anotherComponent = () => ({
 *   mixins: [
 *     scrollTargetBehavior,
 *     scrollEffectBehavior
 *   ]
 * })
 * 
 * @param  {HTMLElement} element The element which should respond to scroll events
 * @return {Object}
 */
const scrollEffectBehavior = () => ({

  // List of registered scroll effects
  _scrollEffects: {},

  // List of effects handlers that will take place during scroll
  _effectsRunFn: [],

  // List of the effects definitions
  _effects: [],

  // Effects config
  _effectsConfig: null,

  /**
   * Get the list of effect names to run
   * @return {Array}
   */
  get effects () {
    if (!this.element.dataset.effects) {
      return []
    }
    return this.element.dataset.effects.split(' ')
  },

  /**
   * Get the effects config object
   * @return {Object}
   */
  get effectsConfig () {
    if (this._effectsConfig) {
      return this._effectsConfig
    }
    if (this.element.hasAttribute('data-effects-config')) {
      try {
        return JSON.parse(this.element.getAttribute('data-effects-config'))
      }
      catch (e) {}
    }
    return {}
  },

  /**
   * Set the effects config object
   * @param  {Object} value
   */
  set effectsConfig (value) {
    this._effectsConfig = value;
  },

  /**
   * The clamped value of `_scrollTop`.
   * @return {number}
   */
  get _clampedScrollTop () {
    return Math.max(0, this._scrollTop)
  },

  /**
   * Registers a scroll effect
   * @param  {string} effectName The effect name
   * @param  {Object} effectDef  The effect definition
   */
  registerEffect (effectName, effectDef) {
    if (this._scrollEffects[effectName] !== undefined) {
      throw new Error(`effect ${ effectName } is already registered.`)
    }
    this._scrollEffects[effectName] = effectDef;
  },

  /**
   * Returns true if the element is visible in the current viewport.
   * This method should be overridden by the consumer of this behavior.
   * @return {Boolean}
   */
  isOnScreen () {
    return false
  },

  /**
   * Returns true if there's content below the element.
   * This method should be overridden by the consumer of this behavior.
   * @return {Boolean}
   */
  isContentBelow () {
    return false
  },

  /**
   * Creates an effect object from an effect's name that can be used to run
     * effects programmatically.
   * @param  {string} effectName   The effect name
   * @param  {Object} effectConfig The effect config (optional)
   * @return {Object}              An effect object with the following functions:
   *
   * `effect.setUp()`, Sets up the requirements for the effect 
   * `effect.run(progress, top)`, Runs the effect given a `progress`
   * `effect.tearDown()`, Clean up
   */
  createEffect (effectName, effectConfig = {}) {
    const effectDef = this._scrollEffects[effectName];
    if (typeof effectDef === undefined) {
      throw new ReferenceError(`Scroll effect ${ effectName } was not registered`)
    }
    const prop = this._boundEffect(effectDef, effectConfig);
    prop.setUp();
    return prop
  },

  /**
   * Returns an effect object bound to the current context.
   * @param  {Object} effectDef     The effect definition
   * @param  {Object} effectConfig  The effect config (optional)
   * @return {Object}
   */
  _boundEffect (effectDef, effectConfig = {}) {
    let startsAt = parseFloat(effectConfig.startsAt || 0);
    let endsAt = parseFloat(effectConfig.endsAt || 1);
    let deltaS = endsAt - startsAt;
    let noop = Function();
    let runFn = (startsAt === 0 && endsAt === 1) ? effectDef.run : function (progress, top) {
      effectDef.run.call(this, Math.max(0, (progress - startsAt) / deltaS), top);
    };
    return {
      setUp: effectDef.setUp ? effectDef.setUp.bind(this, effectConfig) : noop,
      run: effectDef.run ? runFn.bind(this) : noop,
      tearDown: effectDef.tearDown ? effectDef.tearDown.bind(this) : noop
    }
  },

  /**
   * Sets up the effects.
   */
  _setUpEffects () {
    this._tearDownEffects();
    
    this.effects.forEach((effectName) => {
      let effectDef;
      if ((effectDef = this._scrollEffects[effectName])) {
        this._effects.push(this._boundEffect(effectDef, this.effectsConfig[effectName]));
      }
    });

    this._effects.forEach((effectDef) => {
      if (effectDef.setUp() !== false) {
        this._effectsRunFn.push(effectDef.run);
      }
    });
  },

  /**
   * Tears down the effects.
   */
  _tearDownEffects () {
    this._effects.forEach((effectDef) => {
      effectDef.tearDown();
    });
    this._effectsRunFn = [];
    this._effects = [];
  },

  /**
   * Runs the effects.
   * @param  {number} progress The progress
   * @param  {number} top      The top position of the current element relative to the viewport
   */
  _runEffects (progress, top) {
    this._effectsRunFn.forEach(run => run(progress, top));
  },

  /**
   * Overrides `scrollTargetBehavior._scrollHandler`
   */
  _scrollHandler () {
    this._updateScrollState(this._clampedScrollTop);
    this._loop();
  },

  /**
   * Updates the scroll state. 
   * Should be overriden from the consumer of the behavior.
   * @param  {number} scrollTop
   */
  _updateScrollState (scrollTop) {},

  /**
   * Transform style
   * @param  {String} value       The transform value
   * @param  {HTMLElement} element  The element to apply transforms to (optional)
   */
  _transform (value, element) {
    element = element || this.element;
    util.transform(value, element);
  }
});

const mouseScrollEvents = ['DOMMouseScroll', 'mousewheel'];

const handleScroll = (evt, target, preventDefault, scrollMultiplier) => {
  if (preventDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      event.returnValue = false;
    }
  }

  var scrollAmount = evt.detail || (-evt.wheelDelta / 40); // convert wheelData to lines
  scrollAmount *= 19; // convert lines to pixels

  if (typeof scrollMultiplier === 'number' && !isNaN(scrollMultiplier))
    scrollAmount *= scrollMultiplier;

  if (evt.wheelDeltaX || ('axis' in evt && 'HORIZONTAL_AXIS' in evt && evt.axis == evt.HORIZONTAL_AXIS))
    // horizontal scroll
    if (target.scrollBy)
      target.scrollBy(scrollAmount, 0);
    else
      target.scrollLeft += scrollAmount;
  else // vertical scroll
    if (target.scrollBy)
      target.scrollBy(0, scrollAmount);
    else
      target.scrollTop += scrollAmount;
};

const RetargetMouseScroll = (elem, target, preventDefault, scrollMultiplier, preventRetarget) => {
  if (!elem)
    elem = document;

  if (!target)
    target = window;

  if (typeof preventDefault !== 'boolean')
    preventDefault = true;

  if (typeof preventRetarget !== 'function')
    preventRetarget = null;

  var addListener, removeListener, restoreFn,
  handler = function (evt) {
    evt = evt || window.event;
    if(preventRetarget && preventRetarget.call(this, evt)) return;
    handleScroll(evt, target, preventDefault, scrollMultiplier);
  };

  if (addListener = elem.addEventListener) {
    addListener.call(elem, mouseScrollEvents[0], handler, false);
    addListener.call(elem, mouseScrollEvents[1], handler, false);
  }
  else if (addListener = elem.attachEvent)
    addListener.call(elem, 'on'+mouseScrollEvents[1], handler);

  if (removeListener = elem.removeEventListener)
    restoreFn = function () {
      removeListener.call(elem, mouseScrollEvents[0], handler, false);
      removeListener.call(elem, mouseScrollEvents[1], handler, false);
    };
  else if (removeListener = elem.detachEvent)
    restoreFn = function () {
      removeListener.call(elem, 'on'+mouseScrollEvents[1], handler);
    };

  return {
    restore: restoreFn
  }
};

const FRONT_LAYER = '[class*="__bg-front"]';
const REAR_LAYER = '[class*="__bg-rear"]';

/**
 * blend-background effect
 */
const SCROLL_EFFECT_BLEND_BACKGROUND = {
  name: 'blend-background',
  setUp () {
    let frontLayer = this.element.querySelector(FRONT_LAYER);
    let rearLayer = this.element.querySelector(REAR_LAYER);
    const layers = [ frontLayer, rearLayer ];

    layers.map(layer => {
      if (layer) {
        if (layer.style.transform === '') {
          this._transform('translateZ(0)', layer);
          layer.style.willChange = 'opacity';
        }
      }
    });

    rearLayer.style.opacity = 0;
  },
  run (progress, top) {
    let frontLayer = this.element.querySelector(FRONT_LAYER);
    let rearLayer = this.element.querySelector(REAR_LAYER);

    frontLayer.style.opacity = (1 - progress).toFixed(5);
    rearLayer.style.opacity = progress.toFixed(5);
  }
};

const FRONT_LAYER$1 = '[class*="__bg-front"]';
const REAR_LAYER$1 = '[class*="__bg-rear"]';

/**
 * fade-background effect
 */
const SCROLL_EFFECT_FADE_BACKGROUND = {
  name: 'fade-background',
  setUp (config) {
    const duration = config.duration || '0.5s';
    const threshold = config.threshold || (this._isPositionedFixed ? 1 : 0.3);

    let frontLayer = this.element.querySelector(FRONT_LAYER$1);
    let rearLayer = this.element.querySelector(REAR_LAYER$1);
    const layers = [ frontLayer, rearLayer ];

    layers.map(layer => {
      if (layer) {
        let willChange = layer.style.willChange.split(',').map(c => c.trim()).filter(c => c.length);
        willChange.push('opacity', 'transform');
        layer.style.willChange = [...new Set(willChange)].join(', ');

        if (layer.style.transform === '') {
          this._transform('translateZ(0)', layer);
        }
        layer.style.transitionProperty = 'opacity';
        layer.style.transitionDuration = duration;
      }
    });

    this._fadeBackgroundThreshold = !this._isPositionedFixed 
      ? threshold + (this._progress * threshold) 
      : threshold;
  },
  tearDown () {
    delete this._fadeBackgroundThreshold;
  },
  run (progress, top) {
    let frontLayer = this.element.querySelector(FRONT_LAYER$1);
    let rearLayer = this.element.querySelector(REAR_LAYER$1);
    
    if (progress >= this._fadeBackgroundThreshold) {
      frontLayer.style.opacity = 0;
      rearLayer.style.opacity = 1;
    }
    else {
      frontLayer.style.opacity = 1;
      rearLayer.style.opacity = 0;
    }
  }
};

const FRONT_LAYER$2 = '[class*="__bg-front"]';
const REAR_LAYER$2 = '[class*="__bg-rear"]';
const BG = '[class$="__bg"]';

/**
 * parallax-background effect
 */
const SCROLL_EFFECT_PARALLAX_BACKGROUND = {
  name: 'parallax-background',
  setUp () {},
  tearDown () {
    let layers = [ 
      this.element.querySelector(FRONT_LAYER$2), 
      this.element.querySelector(REAR_LAYER$2)
    ];

    let props = ['marginTop', 'marginBottom'];

    layers.map(layer => {
      if (layer) {
        this._transform('translate3d(0, 0, 0)', layer);
        props.forEach((prop) => layer.style[prop] = '');
      }
    });
  },
  run (progress, top) {
    let unscrolledPercent = (this.scrollTarget.scrollHeight - this._scrollTargetHeight) / this.scrollTarget.scrollHeight;
    let distance = this.element.offsetHeight * unscrolledPercent;
    
    if (this._dHeight !== undefined) {
      unscrolledPercent = this._dHeight / this.element.offsetHeight;
      distance = this._dHeight * unscrolledPercent;
    }

    let scalar = 0.5;
    let delta = Math.abs(distance * scalar).toFixed(5);
    
    let max = this._isPositionedFixedEmulated ? 1000000 : distance;
    let deltaProgress = delta * progress;
    let transform = (Math.min(deltaProgress, max)).toFixed(5);

    let layers = [ 
      this.element.querySelector(FRONT_LAYER$2), 
      this.element.querySelector(REAR_LAYER$2)
    ];

    layers.map(layer => {
      if (layer) {
        layer.style['marginTop'] = `${ -1 * delta }px`;
        this._transform(`translate3d(0, ${ transform }px, 0)`, layer);
      }
    });

    let bgNode = this.element.querySelector(BG);
    if (!bgNode.style.visibility) {
      bgNode.style.visibility = 'visible';
    }
  }
};

// import effects

// export list
const SCROLL_EFFECTS = [
  SCROLL_EFFECT_BLEND_BACKGROUND,
  SCROLL_EFFECT_FADE_BACKGROUND,
  SCROLL_EFFECT_PARALLAX_BACKGROUND
];

/**
 * waterfall effect
 */
const HEADER_SCROLL_EFFECT_WATERFALL = {
  name: 'waterfall',
  setUp () {
    this._primary.classList.add('mdk-header--shadow');
  },
  run (progress, top) {
    this._primary.classList[this.isOnScreen() && this.isContentBelow() ? 'add' : 'remove']('mdk-header--shadow-show');
  },
  tearDown () {
    this._primary.classList.remove('mdk-header--shadow');
  }
};

const interpolate = (progress, points, fn, ctx) => {
  fn.apply(ctx, points.map(function (point) {
    return point[0] + (point[1] - point[0]) * progress
  }));
};

/**
 * fx-condenses effect
 * 
 * Transform properties of one or more designated header elements 
 * between two values based on the scroll position.
 */
const HEADER_SCROLL_EFFECT_FX_CONDENSES = {
  name: 'fx-condenses',
  setUp () {
    const elements = [ ...this.element.querySelectorAll('[data-fx-condenses]') ];
    const targets = [ ...this.element.querySelectorAll('[data-fx-id]') ];

    let bounds = {};

    elements.forEach(element => {
      if (element) {
        element.style.willChange = 'transform';
        this._transform('translateZ(0)', element);
        if (window.getComputedStyle(element).display === 'inline') {
          element.style.display = 'inline-block';
        }

        let id = element.getAttribute('id');
        if (!element.hasAttribute('id')) {
          id = 'rt' + (0 | Math.random() * 9e6).toString(36);
          element.setAttribute('id', id);
        }

        const bound = element.getBoundingClientRect();
        bounds[id] = bound;
      }
    });

    targets.forEach(target => {
      if (target) {
        let id = target.getAttribute('id');
        let fxId = target.getAttribute('data-fx-id');
        let fxEl = this.element.querySelector(`#${ fxId }`);

        let targetBounds = bounds[id];
        let fxBounds = bounds[fxId];

        const hasTextContent = target.textContent.trim().length > 0;
        let scale = 1;

        if (fxBounds !== undefined) {
          bounds[id].dx = targetBounds.left - fxBounds.left;
          bounds[id].dy = targetBounds.top - fxBounds.top;

          if (hasTextContent) {
            scale = parseInt(window.getComputedStyle(fxEl)['font-size'], 10) / 
            parseInt(window.getComputedStyle(target)['font-size'], 10);
          }
          else {
            scale = fxBounds.height / targetBounds.height;
          }
          bounds[id].scale = scale;
        }
      }
    });

    this._fxCondenses = {
      elements,
      targets,
      bounds
    };
  },
  run (progress, top) {
    let fx = this._fxCondenses;
    if (!this.condenses) {
      top = 0;
    }
    if (progress >= 1) {
      fx.elements.forEach(el => {
        if (el) {
          el.style.willChange = 'opacity';
          el.style.opacity = fx.targets.indexOf(el) !== -1 ? 0 : 1;
        }
      });
    }
    else {
      fx.elements.forEach(el => {
        if (el) {
          el.style.willChange = 'opacity';
          el.style.opacity = fx.targets.indexOf(el) !== -1 ? 1 : 0;
        }
      });
    }
    fx.targets.forEach(target => {
      if (target) {
        let id = target.getAttribute('id');
        interpolate(
          Math.min(1, progress), 
          [ [1, fx.bounds[id].scale], [0, -fx.bounds[id].dx], [top, top - fx.bounds[id].dy] ],
          (scale, translateX, translateY) => {
            target.style.willChange = 'transform';
            translateX = translateX.toFixed(5);
            translateY = translateY.toFixed(5);
            scale = scale.toFixed(5);
            this._transform(`translate(${ translateX }px, ${ translateY }px) scale3d(${ scale }, ${ scale }, 1)`, target);
          });  
      }
    });
  },
  tearDown () {
    delete this._fxCondenses;    
  }
};

// import effects

// export list
const HEADER_SCROLL_EFFECTS = [
  HEADER_SCROLL_EFFECT_WATERFALL,
  HEADER_SCROLL_EFFECT_FX_CONDENSES
];

const MODULE = 'mdk-header';
const CONTENT = `.${ MODULE }__content`;
const BG$1 = `.${ MODULE }__bg`;
const FRONT_LAYER$3 = `${ BG$1 }-front`;
const REAR_LAYER$3 = `${ BG$1 }-rear`;
const MODIFIER_FIXED = `${ MODULE }--fixed`;

/**
 * A container element for navigation and other content at the top 
 * of the screen with visual effects based on scroll position
 * 
 * @param  {HTMLElement} element
 * @return {Object}
 */
const headerComponent = (element) => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Collapse the header when scrolling down, leaving only the `[primary]` element visible.
     * If there is no `[primary]` element, the first child remains visibile.
     * @type {Object}
     */
    condenses: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * Slides back the header when scrolling back up.
     * @type {Object}
     */
    reveals: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * Mantains the header fixed at the top.
     * @type {Object}
     */
    fixed: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * Disables all scroll effects.
     * @type {Object}
     */
    disabled: {
      type: Boolean,
      reflectToAttribute: true
    },

    retargetMouseScroll: {
      type: Boolean,
      reflectToAttribute: true,
      value: true
    }
  },

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_handleFixedPositionedScroll(scrollTarget)',
    '_reset(condenses, reveals, fixed)'
  ],

  /**
   * Event listeners
   * @type {Array}
   */
  listeners: [
    'window._debounceResize(resize)'
  ],

  /**
   * Compose mixins
   * @type {Array}
   */
  mixins: [
    scrollTargetBehavior(),
    scrollEffectBehavior()
  ],

  // A cached offsetHeight of the element
  _height: 0,

  // The distance in pixels the header will be translated to when scrolling
  _dHeight: 0,

  // The offsetTop of `_primary`
  _primaryTop: 0,

  // The element that remains visibile when the header condenses
  _primary: null,

  // The header's top value used for the `transformY`
  _top: 0,

  // The current scroll progress
  _progress: 0,

  _wasScrollingDown: false,
  _initScrollTop: 0,
  _initTimestamp: 0,
  _lastTimestamp: 0,
  _lastScrollTop: 0,

  /**
   * Disables transform effects
   * @return {Boolean}
   */
  get transformDisabled () {
    return this.disabled || this.element.dataset.transformDisabled || !this._isPositionedFixedEmulated || !this.willCondense()
  },

  /**
   * Update `transform-disabled` attribute on `element`
   * @param  {Boolean}  value
   */
  set transformDisabled (value) {
    this.element[value ? 'setAttribute' : 'removeAttribute']('data-transform-disabled', 'data-transform-disabled');
  },

  /**
   * The distance the header is allowed to move away.
   * @return {number}
   */
  get _maxHeaderTop () {
    return this.fixed ? this._dHeight : this._height + 5
  },

  get _isPositionedFixedEmulated () {
    return this.fixed || this.condenses || this.reveals
  },

  get _isPositionedAbsolute () {
    return window.getComputedStyle(this.element).position === 'absolute'
  },

  get _primaryisPositionedFixed () {
    return window.getComputedStyle(this._primary).position === 'fixed'
  },

  /**
   * Returns true if the header will condense based on the size of the header
   * @return {Boolean}
   */
  willCondense () {
    return this._dHeight > 0 && this.condenses
  },

  /**
   * Returns true if the element is visible in the current viewport.
   * @return {Boolean}
   */
  isOnScreen () {
    return this._height !== 0 && this._top < this._height
  },

  /**
   * Returns true if there's content below the element.
   * @return {Boolean}
   */
  isContentBelow () {
    if (this._top === 0) {
      return this._clampedScrollTop > 0
    }
    return this._clampedScrollTop - this._maxHeaderTop >= 0
  },

  /**
   * Returns an object containing the progress value of the scroll
   * and the top position of the header.
   * @return {Object}
   */
  getScrollState () {
    return {
      progress: this._progress,
      top: this._top
    }
  },

  _setupBackgrounds () {
    let bgNode = this.element.querySelector(BG$1);
    if (!bgNode) {
      bgNode = document.createElement('DIV');
      this.element.insertBefore(bgNode, this.element.childNodes[0]);
      bgNode.classList.add(BG$1.substr(1));
    }

    [FRONT_LAYER$3, REAR_LAYER$3].map(className => {
      let bgNodeLayer = bgNode.querySelector(className);
      if (!bgNodeLayer) {
        bgNodeLayer = document.createElement('DIV');
        bgNode.appendChild(bgNodeLayer);
        bgNodeLayer.classList.add(className.substr(1));
      }
    });
  },

  _reset () {
    if (this.element.offsetWidth === 0 && this.element.offsetHeight === 0) {
      return
    }

    if (this._primaryisPositionedFixed) {
      this.element.style.paddingTop = this._primary.offsetHeight + 'px';
    }

    let scrollTop = this._clampedScrollTop;
    let firstSetup = this._height === 0 || scrollTop === 0;

    this._height = this.element.offsetHeight;
    this._primaryTop = this._primary ? this._primary.offsetTop : 0;
    this._dHeight = 0;
    
    if (this._mayMove()) {
      this._dHeight = this._primary ? this._height - this._primary.offsetHeight : 0;
    }
    
    this._setUpEffects();
    this._updateScrollState(firstSetup ? scrollTop : this._lastScrollTop, true);
  },

  /**
   * Pass MouseWheel events from the scroll target
   * when the header is fixed and the scroll target is not the document
   */
  _handleFixedPositionedScroll () {
    if (this._fixedPositionedScrollHandler !== undefined) {
      this._fixedPositionedScrollHandler.restore();
    }
    if (this._isValidScrollTarget() && this._isPositionedFixedEmulated && this.scrollTarget !== this._doc && this.retargetMouseScroll) {
      this._fixedPositionedScrollHandler = RetargetMouseScroll(this.element, this.scrollTarget);
    }
  },

  /**
   * Returns a reference to the element that remains visible when the header condenses.
   * @return {HTMLElement}
   */
  get _primary () {
    if (this._primaryElement) {
      return this._primaryElement
    }

    let primary;
    let nodes = this.element.querySelector(CONTENT).children;

    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        let node = nodes[i];
        if (node.dataset.primary !== undefined) {
          primary = node;
          break
        }
        else if (!primary) {
          primary = node;
        }
      }
    }

    this._primaryElement = primary;
    return this._primaryElement
  },

  /**
   * Updates the scroll state.
   * @param  {number} scrollTop
   * @param  {Boolean} forceUpdate
   */
  _updateScrollState (scrollTop, forceUpdate) {
    if (this._height === 0 || this.disabled) {
      return
    }

    if (!forceUpdate && scrollTop === this._lastScrollTop) {
      return
    }

    let progress = 0;
    let top = 0;
    let lastTop = this._top;
    let maxHeaderTop = this._maxHeaderTop;
    let dScrollTop = scrollTop - this._lastScrollTop;
    let absDScrollTop = Math.abs(dScrollTop);
    let isScrollingDown = scrollTop > this._lastScrollTop;
    let now = Date.now();

    if (this._mayMove()) {
      top = this._clamp(this.reveals ? lastTop + dScrollTop : scrollTop, 0, maxHeaderTop);
    }

    if (scrollTop >= this._dHeight) {
      top = this.condenses ? Math.max(this._dHeight, top) : top;
    }

    if (this.reveals && absDScrollTop < 100) {
      if (now - this._initTimestamp > 300 || this._wasScrollingDown !== isScrollingDown) {
        this._initScrollTop = scrollTop;
        this._initTimestamp = now;
      }
      if (scrollTop >= maxHeaderTop) {
        if (Math.abs(this._initScrollTop - scrollTop) > 30 || absDScrollTop > 10) {
          if (isScrollingDown && scrollTop >= maxHeaderTop) {
            top = maxHeaderTop;
          }
          else if (!isScrollingDown && scrollTop >= this._dHeight) {
            top = this.condenses ? this._dHeight : 0;
          }

          let scrollVelocity = dScrollTop / (now - this._lastTimestamp);
          this._revealTransitionDuration = this._clamp((top - lastTop) / scrollVelocity, 0, 300);
        }
        else {
          top = this._top;
        }
      }
    }

    if (this._dHeight === 0) {
      progress = scrollTop > 0 ? 1 : 0;
    }
    else {
      progress = top / this._dHeight;
    }

    if (!forceUpdate) {
      this._lastScrollTop = scrollTop;
      this._top = top;
      this._wasScrollingDown = isScrollingDown;
      this._lastTimestamp = now;
    }

    if (forceUpdate || progress !== this._progress || lastTop !== top || scrollTop === 0) {
      this._progress = progress;
      this._runEffects(progress, top);
      this._transformHeader(top);
    }
  },

  /**
   * Transforms the header.
   * @param  {number} top
   */
  _transformHeader (top) {
    if (this.transformDisabled) {
      return
    }

    if (this._isPositionedAbsolute) {
      let transform = top;
      if (this.scrollTarget === this._doc) {
        transform = 0;
      }

      if (top === transform) {
        this.element.style.willChange = 'transform';
        this._transform(`translate3d(0, ${ transform * -1 }px, 0)`);
      }

      if (top >= this._primaryTop) {
        this._primary.style.willChange = 'transform';
        this._transform(`translate3d(0, ${ Math.min(top, this._dHeight) - this._primaryTop }px, 0)`, this._primary);
      }
      return
    }

    if (this.fixed && this._isPositionedFixed) {
      let transform = top;

      this.element.style.willChange = 'transform';
      this._transform(`translate3d(0, ${ transform * -1 }px, 0)`);

      if (top >= this._primaryTop) {
        this._primary.style.willChange = 'transform';
        this._transform(`translate3d(0, ${ Math.min(top, this._dHeight) - this._primaryTop }px, 0)`, this._primary);
      }
      return
    }

    let transform = 0;
    let duration = `${ this._revealTransitionDuration }ms`;

    if (top > this._dHeight) {
      transform = -1 * (top - this._dHeight);

      if (this.reveals) {
        duration = '0ms';
      }
    }
    if (this.reveals) {
      this._primary.style.transitionDuration = duration;
    }
    this._primary.style.willChange = 'transform';
    this._transform(`translate3d(0, ${ transform }px, 0)`, this._primary);
  },

  _clamp (v, min, max) {
    return Math.min(max, Math.max(min, v))
  },

  /**
   * Returns true if the current header is allowed to move as the user scrolls.
   * @return {Boolean}
   */
  _mayMove () {
    return this.condenses || !this.fixed
  },

  /**
   * Handle the resize event every 50ms
   */
  _debounceResize () {
    clearTimeout(this._onResizeTimeout);
    if (this._resizeWidth !== window.innerWidth) {
      this._onResizeTimeout = setTimeout(() => {
        this._resizeWidth = window.innerWidth;
        this._reset();
      }, 50);
    }
  },

  /**
   * Initialize component
   */
  init () {
    this._resizeWidth = window.innerWidth;

    this.attachToScrollTarget();
    this._handleFixedPositionedScroll();
    this._setupBackgrounds();

    this._primary.setAttribute('data-primary', 'data-primary');
    this._primary.classList[(this.fixed || this.condenses) ? 'add' : 'remove'](MODIFIER_FIXED);

    SCROLL_EFFECTS.concat(HEADER_SCROLL_EFFECTS).map(effect => this.registerEffect(effect.name, effect));
  },

  /**
   * Destroy component
   */
  destroy () {
    clearTimeout(this._onResizeTimeout);
    this.detachFromScrollTarget();
  }
});

handler.register(MODULE, headerComponent);

/**
 * A wrapper element that positions a Header and other content.
 * @param  {HTMLElement} element
 * @return {Object}
 */
const headerLayoutComponent = () => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * If true, defines it's own scrolling region, otherwise uses the document scroll.
     * @type {Object}
     */
    hasScrollingRegion: {
      type: Boolean,
      reflectToAttribute: true
    },

    fullbleed: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_updateScroller(hasScrollingRegion)',
    '_updateContentPosition(hasScrollingRegion, header.fixed, header.condenses)',
    '_updateDocument(fullbleed)'
  ],

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    'window._debounceResize(resize)'
  ],

  /**
   * The header layout content wrapper HTMLElement
   * @return {HTMLElement}
   */
  get contentContainer () {
    return this.element.querySelector('.mdk-header-layout__content')
  },

  /**
   * A reference to the header component
   * @return {Object}
   */
  get header () {
    const headerNode = this.element.querySelector('.mdk-header');
    if (headerNode) {
      return headerNode.mdkHeader
    }
  },

  _updateScroller () {
    this.header.scrollTargetSelector = this.hasScrollingRegion ? this.contentContainer : null;
  },

  _updateContentPosition () {
    const headerHeight = this.header.element.offsetHeight;
    const gutter = parseInt(window.getComputedStyle(this.header.element).marginBottom, 10);
    const containerStyle = this.contentContainer.style;
    
    if (this.header.fixed || this.header.willCondense()) {
      containerStyle.paddingTop = `${ headerHeight + gutter }px`;
      containerStyle.marginTop = '';
    }
  },

  /**
   * Handle the resize event every 50ms
   */
  _debounceResize () {
    clearTimeout(this._onResizeTimeout);
    if (this._resizeWidth !== window.innerWidth) {
      this._onResizeTimeout = setTimeout(() => {
        this._resizeWidth = window.innerWidth;
        this._reset();
      }, 50);
    }
  },

  _updateDocument () {
    const docElements = [...document.querySelectorAll('html, body')];
    if (this.fullbleed) {
      docElements.forEach(el => {
        el.style.height = '100%';
      });
    }
  },

  _reset () {
    this._updateContentPosition();
  },

  /**
   * Initialize component
   */
  init () {
    this._resizeWidth = window.innerWidth;
    this._updateDocument();
    this._updateScroller();
  },

  /**
   * Destroy component
   */
  destroy () {
    clearTimeout(this._onResizeTimeout);

    const docElements = [...document.querySelectorAll('html, body')];
    docElements.forEach(el => {
      // fullbleed
      el.style.height = '';
    });
  }
});

handler.register('mdk-header-layout', headerLayoutComponent);

const MODULE$1 = 'mdk-box';
const BG$2 = `.${ MODULE$1 }__bg`;
const FRONT_LAYER$4 = `${ BG$2 }-front`;
const REAR_LAYER$4 = `${ BG$2 }-rear`;

/**
 * A container element for generic content with visual effects based on scroll position
 * @param  {HTMLElement} element
 * @return {Object}
 */
const boxComponent = (element) => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Disables effects
     */
    disabled: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    'window._debounceResize(resize)'
  ],

  /**
   * Compose mixins
   * @type {Array}
   */
  mixins: [
    scrollTargetBehavior(),
    scrollEffectBehavior()
  ],

  // The current scroll progress
  _progress: 0,

  /**
   * Returns true if the element is visible in the current viewport.
   * @return {Boolean}
   */
  isOnScreen () {
    return this._elementTop < this._scrollTop + this._scrollTargetHeight && 
      this._elementTop + this.element.offsetHeight > this._scrollTop
  },

  isVisible () {
    return this.element.offsetWidth > 0 && this.element.offsetHeight > 0
  },

  /**
   * Returns an object containing the progress value of the scroll effects.
   * @return {Object}
   */
  getScrollState () {
    return {
      progress: this._progress
    }
  },

  _setupBackgrounds () {
    let bgNode = this.element.querySelector(BG$2);
    if (!bgNode) {
      bgNode = document.createElement('DIV');
      this.element.insertBefore(bgNode, this.element.childNodes[0]);
      bgNode.classList.add(BG$2.substr(1));
    }

    [FRONT_LAYER$4, REAR_LAYER$4].map(className => {
      let bgNodeLayer = bgNode.querySelector(className);
      if (!bgNodeLayer) {
        bgNodeLayer = document.createElement('DIV');
        bgNode.appendChild(bgNodeLayer);
        bgNodeLayer.classList.add(className.substr(1));
      }
    });
  },

  _getElementTop () {
    let currentNode = this.element;
    let top = 0;

    while (currentNode && currentNode !== this.scrollTarget) {
      top += currentNode.offsetTop;
      currentNode = currentNode.offsetParent;
    }
    return top
  },

  /**
   * Updates the scroll state.
   * @param  {number} scrollTop
   */
  _updateScrollState (scrollTop) {
    if (this.disabled) {
      return
    }

    if (this.isOnScreen()) {
      let target = Math.min(this._scrollTargetHeight, this._elementTop + this.element.offsetHeight);
      let viewportTop = this._elementTop - scrollTop;
      let progress = 1 - (viewportTop + this.element.offsetHeight) / target;

      this._progress = progress;
      this._runEffects(this._progress, scrollTop);
    }
  },

  /**
   * Handle the resize event every 50ms
   */
  _debounceResize () {
    clearTimeout(this._onResizeTimeout);
    if (this._resizeWidth !== window.innerWidth) {
      this._onResizeTimeout = setTimeout(() => {
        this._resizeWidth = window.innerWidth;
        this._reset();
      }, 50);
    }
  },

  /**
   * Initialize component
   */
  init () {
    this._resizeWidth = window.innerWidth;

    this.attachToScrollTarget();
    this._setupBackgrounds();
    
    SCROLL_EFFECTS.map(effect => this.registerEffect(effect.name, effect));
  },

  _reset () {
    this._elementTop = this._getElementTop();
    this._setUpEffects();
    this._updateScrollState(this._clampedScrollTop);
  },

  /**
   * Destroy component
   */
  destroy () {
    clearTimeout(this._onResizeTimeout);
    this.detachFromScrollTarget();
  }
});

handler.register(MODULE$1, boxComponent);

/**
 * A navigation drawer that can slide in from the left or right
 * @param  {HTMLElement} element
 * @return {Object}
 */
const drawerComponent = () => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {
    
    /**
     * The opened state of the drawer.
     * @type {Object}
     */
    opened: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * The drawer does not have a scrim.
     * @type {Object}
     */
    persistent: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * The alignment of the drawer on the screen ('left', 'right', 'start' or 'end').
     * 'start' computes to left and 'end' to right in LTR and RTL layouts.
     * @type {Object}
     */
    align: {
      reflectToAttribute: true,
      value: 'start'
    },

    /**
     * The computed drawer position on the screen ('left' or 'right').
     * @type {Object}
     */
    position: {
      reflectToAttribute: true
    }
  },

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_resetPosition(align)',
    '_fireChange(opened, persistent, align, position)',
    '_onChangedState(_drawerState)',
    '_onClose(opened)'
  ],

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    '_onTransitionend(transitionend)',
    'scrim._onClickScrim(click)'
  ],

  // The current drawer state
  _drawerState: 0,

  // Possible drawer states
  _DRAWER_STATE: {
    INIT: 0,
    OPENED: 1,
    OPENED_PERSISTENT: 2,
    CLOSED: 3
  },

  /**
   * The drawer content HTMLElement
   * @return {HTMLElement}
   */
  get contentContainer () {
    return this.element.querySelector('.mdk-drawer__content')
  },

  /**
   * The drawer scrim HTMLElement
   * @return {HTMLElement}
   */
  get scrim () {
    let scrim = this.element.querySelector('.mdk-drawer__scrim');
    if (!scrim) {
      scrim = document.createElement('DIV');
      this.element.insertBefore(scrim, this.element.childNodes[0]);
      scrim.classList.add('mdk-drawer__scrim');
    }
    return scrim
  },

  /**
   * Get the width of the drawer.
   * @return {String}
   */
  getWidth () {
    return this.contentContainer.offsetWidth
  },

  /**
   * Toggles the drawer opened state.
   */
  toggle () {
    this.opened = !this.opened;
  },

  /**
   * Closes the drawer.
   */
  close () {
    this.opened = false;
  },

  /**
   * Opens the drawer.
   */
  open () {
    this.opened = true;
  },

  _onClose (opened) {
    if (!opened) {
      this.element.setAttribute('data-closing', true);
    }
  },

  _isRTL () {
    return window.getComputedStyle(this.element).direction === 'rtl'
  },

  _setTransitionDuration (duration) {
    this.contentContainer.style.transitionDuration = duration;
    this.scrim.style.transitionDuration = duration;
  },

  _resetDrawerState () {
    let oldState = this._drawerState;
    if (this.opened) {
      this._drawerState = this.persistent 
        ? this._DRAWER_STATE.OPENED_PERSISTENT : this._DRAWER_STATE.OPENED;
    }
    else {
      this._drawerState = this._DRAWER_STATE.CLOSED;
    }

    if (oldState !== this._drawerState) {
      if (!this.opened) {
        this.element.removeAttribute('data-closing');
      }
      if (this._drawerState === this._DRAWER_STATE.OPENED) {
        document.body.style.overflow = 'hidden';
      }
      else {
        document.body.style.overflow = '';
      }
    }
  },

  _resetPosition () {
    switch (this.align) {
      case 'start':
        this.position = this._isRTL() ? 'right' : 'left';
        return
      case 'end':
        this.position = this._isRTL() ? 'left' : 'right';
        return
    }
    this.position = this.align;
  },

  _fireChange () {
    this.fire('mdk-drawer-change');
  },

  _fireChanged () {
    this.fire('mdk-drawer-changed');
  },

  _onTransitionend (event) {
    let target = event.target;
    if (target === this.contentContainer || target === this.scrim) {
      this._resetDrawerState();
    }
  },

  _onClickScrim (event) {
    event.preventDefault();
    this.close();
  },

  _onChangedState (newState, oldState) {
    if (oldState !== this._DRAWER_STATE.INIT) {
      this._fireChanged();
    }
  },

  /**
   * Initialize component
   */
  init () {
    this._resetPosition();
    this._setTransitionDuration('0s');

    setTimeout(() => {
      this._setTransitionDuration('');
      this._resetDrawerState();
    }, 0);
  }
});

handler.register('mdk-drawer', drawerComponent);

/**
 * Bind to a CSS media query
 * @param  {String} query The CSS media query
 * @return {Object}
 */
const mediaQuery = (query) => {
  let mediaQuery = {

    // The CSS media query
    query,

    // CSS media query matches
    queryMatches: null,

    _reset () {
      this._removeListener();
      this.queryMatches = null;
      if (!this.query) {
        return
      }
      this._mq = window.matchMedia(this.query);
      this._addListener();
      this._handler(this._mq);
    },

    _handler (mq) {
      this.queryMatches = mq.matches;
    },

    _addListener () {
      if (this._mq) {
        this._mq.addListener(this._handler);
      }
    },

    _removeListener () {
      if (this._mq) {
        this._mq.removeListener(this._handler);
      }
      this._mq = null;
    },

    /**
     * Initialize mediaQuery
     */
    init () {
      watchObject.watch(this, 'query', this._reset);
      this._reset();
    },

    /**
     * Destroy mediaQuery
     * @return {[type]} [description]
     */
    destroy () {
      watchObject.unwatch(this, 'query', this._reset);
      this._removeListener();
    }
  };

  // Bind handlers
  mediaQuery._reset = mediaQuery._reset.bind(mediaQuery);
  mediaQuery._handler = mediaQuery._handler.bind(mediaQuery);

  // Initialize mediaQuery
  mediaQuery.init();

  return mediaQuery
};

// IE9+ Element.matches polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * A wrapper element that positions a Drawer and other content.
 * @param  {HTMLElement} element
 * @return {Object}
 */
const drawerLayoutComponent = () => ({
  
  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Ignore the `responsiveWidth` option and force the narrow layout on any screen size.
     * @type {Object}
     */
    forceNarrow: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * The maximum viewport width for which the narrow layout is enabled.
     * @type {Object}
     */
    responsiveWidth: {
      reflectToAttribute: true,
      value: '554px'
    },

    /**
     * If true, defines it's own scrolling region, otherwise uses the document scroll.
     * @type {Object}
     */
    hasScrollingRegion: {
      type: Boolean,
      reflectToAttribute: true
    },

    fullbleed: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_resetLayout(narrow, forceNarrow)',
    '_onQueryMatches(mediaQuery.queryMatches)',
    '_updateScroller(hasScrollingRegion)',
    '_updateDocument(fullbleed)'
  ],
  
  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    'drawer._onDrawerChange(mdk-drawer-change)'
  ],

  // The default `narrow` value
  _narrow: null,

  // The mediaQuery listener
  _mediaQuery: null,

  /**
   * The mediaQuery listener
   * @return {Object}
   */
  get mediaQuery () {
    if (!this._mediaQuery) {
      this._mediaQuery = mediaQuery(this.responsiveMediaQuery); 
    }
    return this._mediaQuery
  },

  /**
   * Returns true if the narrow layout is enabled.
   * @return {Boolean}
   */
  get narrow () {
    return this.forceNarrow ? true : this._narrow
  },

  /**
   * Toggle the narrow layout.
   * @param  {Boolean} value
   */
  set narrow (value) {
    this._narrow = !value && this.forceNarrow ? true : value;
  },

  /**
   * The HTMLElement for the layout content
   * @return {HTMLElement}
   */
  get contentContainer () {
    return this.element.querySelector('.mdk-drawer-layout__content')
  },

  get drawerNode () {
    let drawerNode;
    try {
      drawerNode = Array.from(this.element.children).find(e => e.matches('.mdk-drawer'));
    } catch(e) {
      console.error(e.message, e.stack);
    }
    if (drawerNode) {
      return drawerNode
    }
  },

  /**
   * The drawerComponent
   * @return {Object} A reference to the drawer component.
   */
  get drawer () {
    if (this.drawerNode) {
      return this.drawerNode.mdkDrawer
    }
  },

  /**
   * Computed media query value passed to the mediaQuery listener
   * @return {String}
   */
  get responsiveMediaQuery () {
    return this.forceNarrow ? '(min-width: 0px)' : `(max-width: ${ this.responsiveWidth })`
  },

  _updateDocument () {
    const docElements = [...document.querySelectorAll('html, body')];
    if (this.fullbleed) {
      docElements.forEach(el => {
        el.style.height = '100%';
      });
    }
  },

  _updateScroller () {
    const docElements = [...document.querySelectorAll('html, body')];
    if (this.hasScrollingRegion) {
      docElements.forEach(el => {
        el.style.overflow = 'hidden';
        el.style.position = 'relative';
      });
    }
  },

  _resetLayout () {
    this.drawer.opened = this.drawer.persistent = !this.narrow;
    this._onDrawerChange();
  },

  _resetPush () {
    let drawer = this.drawer;
    let drawerWidth = this.drawer.getWidth();
    let contentContainer = this.contentContainer;
    let isRTL = drawer._isRTL();

    if (drawer.opened) {
      util.transform('translate3d(0, 0, 0)', contentContainer);
      return
    }

    let transform = (this.element.offsetWidth - contentContainer.offsetWidth) / 2;
    transform = drawer.position === 'right' ? transform : transform * -1;

    util.transform(`translate3d(${ transform }px, 0, 0)`, contentContainer);
  },

  _setContentTransitionDuration (duration) {
    this.contentContainer.style.transitionDuration = duration;
  },

  _onDrawerChange () {
    this._resetPush();
  },

  _onQueryMatches (value) {
    this.narrow = value;
  },

  /**
   * Initialize component
   */
  init () {
    // Initial render
    this._setContentTransitionDuration('0s');
    setTimeout(() => this._setContentTransitionDuration(''), 0);

    this._updateDocument();
    this._updateScroller();

    if (this.drawerNode) {
      // Initialize mediaQuery
      this.mediaQuery.init();
    }
  },

  /**
   * Destroy component
   */
  destroy () {
    this.mediaQuery.destroy();

    const docElements = [...document.querySelectorAll('html, body')];
    docElements.forEach(el => {
      // fullbleed
      el.style.height = '';
      // has-scrolling-region
      el.style.overflow = '';
      el.style.position = '';
    });
  }
});

handler.register('mdk-drawer-layout', drawerLayoutComponent);

/**
 * A content area that reveals on user interaction.
 * @param  {HTMLElement} element
 * @return {Object}
 */
const revealComponent = () => ({
  
  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Partially revealed size.
     * @type {Object}
     */
    partialHeight: {
      reflectToAttribute: true,
      type: Number,
      value: 0
    },

    /**
     * Always revealed.
     * @type {Object}
     */
    forceReveal: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * Toggle reveal on click/mouseenter/mouseleave or touchstart/touchend.
     * click|hover
     * @type {Object}
     */
    trigger: {
      value: 'click',
      reflectToAttribute: true
    },

    /**
     * The opened state.
     * @type {Object}
     */
    opened: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_onChange(opened)'
  ],

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    '_onEnter(mouseenter, touchstart)',
    '_onLeave(mouseleave, touchend)',
    'window._debounceResize(resize)',
    '_onClick(click)',
  ],

  /**
   * Revealable element.
   * @return {HTMLElement}
   */
  get reveal () {
    return this.element.querySelector('.mdk-reveal__content')
  },

  /**
   * Partial mask element.
   * @return {HTMLElement}
   */
  get partial () {
    let partial = this.reveal.querySelector('.mdk-reveal__partial');
    if (!partial) {
      partial = document.createElement('DIV');
      partial.classList.add('mdk-reveal__partial');
      this.reveal.insertBefore(partial, this.reveal.childNodes[0]);
    }
    return partial
  },

  /**
   * Open the revealable element.
   */
  open () {
    this.opened = true;
  },

  /**
   * Close the revealable element.
   */
  close () {
    this.opened = false;
  },

  /**
   * Toggle the opened state.
   */
  toggle () {
    this.opened = !this.opened;
  },

  /**
   * Set the initial state.
   * Gets called automatically on `window.load`
   */
  _reset () {
    this._translate = 'translateY(' + (-1 * (this.reveal.offsetHeight - this.partialHeight)) + 'px)';
    
    if (this.partialHeight !== 0) {
      this.partial.style.height = this.partialHeight + 'px';
    }

    this.element.style.height = this.reveal.offsetTop + this.partialHeight + 'px';

    if (this.forceReveal && !this.opened) {
      this.open();
    }
  },

  _onChange () {
    util.transform(this.opened ? this._translate : 'translateY(0)', this.reveal);
  },

  /**
   * Handle `mouseenter` and `touchstart` events.
   * @param  {MouseEvent|TouchEvent} event
   */
  _onEnter () {
    if (this.trigger === 'hover' && !this.forceReveal) {
      this.open();
    }
  },

  /**
   * Handle `click` event.
   * @param  {MouseEvent|TouchEvent} event
   */
  _onClick () {
    if (this.trigger === 'click') {
      this.toggle();
    }
  },

  /**
   * Handle `mouseleave` and `touchend` events.
   * @param  {MouseEvent|TouchEvent} event
   */
  _onLeave () {
    if (this.trigger === 'hover' && !this.forceReveal) {
      this.close();
    }
  },

  /**
   * Debounce `window.resize` handler.
   */
  _debounceResize () {
    clearTimeout(this._debounceResizeTimer);
    this._debounceResizeTimer = setTimeout(() => {
      if (this._resizeWidth !== window.innerWidth) {
        this._resizeWidth = window.innerWidth;
        this._reset();
      }
    }, 50);
  },

  /**
   * Initialize component.
   */
  init () {
    this._resizeWidth = window.innerWidth;
  },

  /**
   * Destroy component.
   */
  destroy () {
    clearTimeout(this._debounceResizeTimer);
  }
});

handler.register('mdk-reveal', revealComponent);

const isTouch = () => ('ontouchstart' in window);

const matrixValues = (matrix) => {
  if (matrix === 'none') {
    matrix = 'matrix(0,0,0,0,0)';
  }
  var obj = {};
  var values = matrix.match(/([-+]?[\d\.]+)/g);
  obj.translate = {
    x: parseInt(values[4], 10) || 0,
    y: parseInt(values[5], 10) || 0
  };
  return obj
};

const transformMatrix = (el) => {
  var st = window.getComputedStyle(el, null);
  var matrix = st.getPropertyValue('-webkit-transform') ||
    st.getPropertyValue('-moz-transform') ||
    st.getPropertyValue('-ms-transform') ||
    st.getPropertyValue('-o-transform') ||
    st.getPropertyValue('transform');

  return matrixValues(matrix)
};

/**
 * Compute the pointer coordinates from multiple event types.
 * @param  {TouchEvent|MouseEvent} event
 */
const pointer = (event) => {
  event = event.originalEvent || event || window.event;
  event = event.touches && event.touches.length 
    ? event.touches[0] 
    : event.changedTouches && event.changedTouches.length
      ? event.changedTouches[0] 
      : event;

  return {
    x: event.pageX ? event.pageX : event.clientX,
    y: event.pageY ? event.pageY : event.clientY
  }
};

/**
 * Compute the difference between the properties of two objects.
 * @param  {Object} a
 * @param  {Object} b
 * @return {Object}
 */
const difference = (a, b) => {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  }
};

/**
 * A Carousel component for cycling through elements.
 * @param  {HTMLELement} element
 * @return {Object}
 */
const carouselComponent = () => ({

  properties: {
    autoStart: {
      type: Boolean,
      reflectToAttribute: true
    },
    interval: {
      type: Number,
      reflectToAttribute: true,
      value: 3000
    }
  },

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    '_onEnter(mouseenter)',
    '_onLeave(mouseleave)',
    '_onTransitionend(transitionend)',
    '_onDragStart(mousedown, touchstart)',
    '_onMouseDrag(dragstart, selectstart)',
    'document._onDragMove(mousemove, touchmove)',
    'document._onDragEnd(mouseup, touchend)',
    'window._debounceResize(resize)'
  ],

  // The carousel items
  _items: [],

  // The carousel moving state
  _isMoving: false,

  // A reference to the carousel content container
  _content: null,

  // A reference to the active item
  _current: null,

  // Drag and touch state
  _drag: {},

  /**
   * Set the initial state. 
   * Gets called automatically on `window.load`.
   */
  _reset () {
    this._content = this.element.querySelector('.mdk-carousel__content');
    this._items = [...this._content.children];

    this._content.style.width = '';
    this._items.forEach(function (item) {
      item.style.width = '';
    });

    var width = this.element.offsetWidth;
    var itemWidth = this._items[0].offsetWidth;
    var visible = width / itemWidth;
    
    this._itemWidth = itemWidth;
    this._visible = Math.round(visible);
    this._max = this._items.length - this._visible;

    this.element.style.overflow = 'hidden';
    this._content.style.width = (itemWidth * this._items.length) + 'px';
    
    this._items.forEach(function (item) {
      item.classList.add('mdk-carousel__item');
      item.style.width = itemWidth + 'px';
    });

    if (!this._current) {
      this._current = this._items[0];
    }

    if (this._items.length < 2) {
      return
    }

    var currentIndex = this._items.indexOf(this._current);

    this._transform(currentIndex * itemWidth * -1, 0);

    if (this.autoStart) {
      this.start();
    }
  },

  /**
   * Start sliding the carousel on a time interval.
   */
  start () {
    this.stop();

    if (this._items.length < 2 || this._items.length <= this._visible) {
      return
    }
    this._setContentTransitionDuration('');
    this._interval = setInterval(this.next.bind(this), this.interval);
  },

  /**
   * Stop sliding the carousel on a time interval.
   */
  stop () {
    clearInterval(this._interval);
    this._interval = null;
  },

  /**
   * Move the carousel forward by one item.
   */
  next () {
    if (this._items.length < 2 || this._isMoving || document.hidden || !this._isOnScreen()) {
      return
    }

    var currentIndex = this._items.indexOf(this._current);
    var nextIndex = this._items[currentIndex + 1] !== undefined 
      ? currentIndex + 1 : 0;
    var remaining = this._items.length - currentIndex;

    if (remaining === this._visible) {
      nextIndex = 0;
    }

    this._to(nextIndex);
  },

  /**
   * Move the carousel backward by one item.
   */
  prev () {
    if (this._items.length < 2 || this._isMoving) {
      return
    }

    var currentIndex = this._items.indexOf(this._current);
    var prevIndex = this._items[currentIndex - 1] !== undefined 
      ? currentIndex - 1 : this._items.length;
    this._to(prevIndex);
  },

  _transform (translate, duration, callback) {
    if (duration !== undefined) {
      this._setContentTransitionDuration(duration + 'ms');
    }
    var matrix = transformMatrix(this._content);
    if (matrix.translate.x === translate) {
      if (typeof callback === 'function') {
        callback.call(this);
      }
    }
    else {
      requestAnimationFrame(function () {
        if (duration !== 0) {
          this._isMoving = true;
        }
        util.transform('translate3d(' + translate + 'px, 0, 0)', this._content);

        if (typeof callback === 'function') {
          callback.call(this);
        }
      }.bind(this));
    }
  },

  /**
   * Slide to a specific item by index.
   * @param  {Number} index
   */
  _to (index) {
    if (this._items.length < 2 || this._isMoving) {
      return
    }

    if (index > this._max) {
      index = this._max;
    }
    if (index < 0) {
      index = 0;
    }

    var translate = index * this._itemWidth * -1;

    this._transform(translate, false, function () {
      this._current = this._items[index];
    });
  },

  /**
   * `window.resize` debounce handler.
   */
  _debounceResize () {
    clearTimeout(this._resizeTimer);
    if (this._resizeWidth !== window.innerWidth) {
      this._resizeTimer = setTimeout(function () {
        this._resizeWidth = window.innerWidth;
        this.stop();
        this._reset();
      }.bind(this), 50);
    }
  },

  _setContentTransitionDuration (duration) {
    this._content.style.transitionDuration = duration;
  },

  /**
   * Stop the carousel auto sliding on `mouseenter`.
   */
  _onEnter () {
    this.stop();
  },

  /**
   * (Re)start the carousel auto sliding on `mouseleave`.
   */
  _onLeave () {
    if (!this._drag.wasDragging && this.autoStart) {
      this.start();
    }
  },

  /**
   * Handle `transitionend` events
   * @param  {TransitionEvent} event
   */
  _onTransitionend () {
    this._isMoving = false;
  },

  /**
   * Handle `mousedown` and `touchstart` events
   * @param  {MouseEvent|TouchEvent} event
   */
  _onDragStart (event) {
    if (this._drag.isDragging || this._isMoving || event.which === 3) {
      return
    }

    this.stop();
    var stage = transformMatrix(this._content).translate;

    this._drag.isDragging = true;
    this._drag.isScrolling = false;
    this._drag.time = new Date().getTime();
    this._drag.start = stage;
    this._drag.current = stage;
    this._drag.delta = {
      x: 0,
      y: 0
    };

    this._drag.pointer = pointer(event);
    this._drag.target = event.target;
  },

  /**
   * Handle `mousemove` and `touchmove` events
   * @param  {MouseEvent|TouchEvent} event
   */
  _onDragMove (event) {
    if (!this._drag.isDragging) {
      return
    }

    var delta = difference(this._drag.pointer, pointer(event));
    var stage = difference(this._drag.start, delta);
    var isScrolling = isTouch() && Math.abs(delta.x) < Math.abs(delta.y);

    if (!isScrolling) {
      event.preventDefault();
      this._transform(stage.x, 0);
    }

    this._drag.delta = delta;
    this._drag.current = stage;
    this._drag.isScrolling = isScrolling;
    this._drag.target = event.target;
  },

  /**
   * Handle `mouseup` and `touchend` events
   * @param  {MouseEvent|TouchEvent} event
   */
  _onDragEnd (event) {
    if (!this._drag.isDragging) {
      return
    }

    this._setContentTransitionDuration('');
    
    this._drag.duration = new Date().getTime() - this._drag.time;

    var dx = Math.abs(this._drag.delta.x);
    var change = dx > 20 || dx > this._itemWidth / 3;
    var factor = Math.max(Math.round(dx / this._itemWidth), 1);
    var next = this._drag.delta.x > 0;

    if (change) {
      var currentIndex = this._items.indexOf(this._current);
      var index = next ? currentIndex + factor : currentIndex - factor;
      this._to(index);
    }
    else {
      this._transform(this._drag.start.x);
    }

    this._drag.isDragging = false;
    this._drag.wasDragging = true;
  },

  /**
   * Prevent and stop the default actions on text selection and dragging elements
   * @param  {Event|DragEvent} event
   */
  _onMouseDrag (event) {
    event.preventDefault();
    event.stopPropagation();
  },

  /**
   * Determine if the carousel is currently in the visibile viewport.
   * @return {Boolean}
   */
  _isOnScreen () {
    var rect = this.element.getBoundingClientRect();
    return rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
  },

  /**
   * Initialize the carousel.
   */
  init () {
    this._resizeWidth = window.innerWidth;
    this._reset();
  },

  /**
   * Destroy the carousel.
   */
  destroy () {
    this.stop();
    clearTimeout(this._resizeTimer);
  }
});

handler.register('mdk-carousel', carouselComponent);

/**
 * @param  {HTMLElement} element
 * @return {Object}
 */
const tooltipComponent = (element) => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Attaches the tooltip to an element.
     * @type {Object}
     */
    for: {
      readOnly: true,
      value () {
        var target = this.element.getAttribute('data-for');
        return document.querySelector('#' + target)
      }
    },

    position: {
      reflectToAttribute: true,
      value: 'bottom'
    },

    opened: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    'for.show(mouseenter, touchstart)',
    'for.hide(mouseleave, touchend)',
    'window._debounceResize(resize)'
  ],

  observers: [
    '_reset(position)'
  ],

  mixins: [
    scrollTargetBehavior()
  ],

  /**
   * A reference to the drawer layout.
   * @return {Object}
   */
  get drawerLayout () {
    const layoutNode = document.querySelector('.mdk-js-drawer-layout');
    if (layoutNode) {
      return layoutNode.mdkDrawerLayout
    }
  },

  _reset () {
    this.element.removeAttribute('style');

    var props = this.for.getBoundingClientRect();
    var left = props.left + (props.width / 2);
    var top = props.top + (props.height / 2);
    var marginLeft = -1 * (this.element.offsetWidth / 2);
    var marginTop = -1 * (this.element.offsetHeight / 2);

    if (this.position === 'left' || this.position === 'right') {
      if (top + marginTop < 0) {
        this.element.style.top = '0';
        this.element.style.marginTop = '0';
      } 
      else {
        this.element.style.top = top + 'px';
        this.element.style.marginTop = marginTop + 'px';
      }
    }
    else if (left + marginLeft < 0) {
      this.element.style.left = '0';
      this.element.style.marginLeft = '0';
    } 
    else {
      this.element.style.left = left + 'px';
      this.element.style.marginLeft = marginLeft + 'px';
    }

    if (this.position === 'top') {
      this.element.style.top = props.top - this.element.offsetHeight - 10 + 'px';
    } 
    else if (this.position === 'right') {
      this.element.style.left = props.left + props.width + 10 + 'px';
    } 
    else if (this.position === 'left') {
      this.element.style.left = props.left - this.element.offsetWidth - 10 + 'px';
    } 
    else {
      this.element.style.top = props.top + props.height + 10 + 'px';
    }
  },

  _debounceResize () {
    clearTimeout(this._debounceResizeTimer);
    this._debounceResizeTimer = setTimeout(() => {
      if (window.innerWidth !== this._debounceResizeWidth) {
        this._debounceResizeWidth = window.innerWidth;
        this._reset();
      }
    }, 50);
  },

  /**
   * Overrides `scrollTargetBehavior._scrollHandler`
   */
  _scrollHandler () {
    clearTimeout(this._debounceScrollTimer);
    this._debounceScrollTimer = setTimeout(this._reset.bind(this), 50);
  },

  show () {
    // this.element.style.transform = 'scale(1)'
    this.opened = true;
  },

  hide () {
    // this.element.style.transform = 'scale(0)'
    this.opened = false;
  },

  toggle () {
    this.opened = !this.opened;
  },

  /**
   * Initialize component.
   */
  init () {
    document.body.appendChild(this.element);
    this._debounceResizeWidth = window.innerWidth;

    this.attachToScrollTarget();
    this._reset();

    if (this.drawerLayout && this.drawerLayout.hasScrollingRegion) {
      this.scrollTargetSelector = this.drawerLayout.contentContainer;
    }
  },

  /**
   * Destroy component.
   */
  destroy () {
    clearTimeout(this._debounceResizeTimer);
    clearTimeout(this._debounceScrollTimer);

    this.detachFromScrollTarget();
  }
});

handler.register('mdk-tooltip', tooltipComponent);

if (!Array.isArray) {
  Array.isArray = arg =>
    Object.prototype.toString.call(arg) === '[object Array]';
}

const isArray = Array.isArray;

const BVRL = '__BV_root_listeners__';

var listenOnRootMixin = {
  methods: {
    /**
     * Safely register event listeners on the root Vue node.
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback.
     *
     * This adds a non-reactive prop to a vm on the fly
     * in order to avoid object observation and its performance costs
     * to something that needs no reactivity.
     * It should be highly unlikely there are any naming collisions.
     * @param {string} event
     * @param {function} callback
     * @chainable
     */
    listenOnRoot(event, callback) {
      if (!this[BVRL] || !isArray(this[BVRL])) {
        this[BVRL] = [];
      }
      this[BVRL].push({ event, callback });
      this.$root.$on(event, callback);
      return this
    },

    /**
     * Convenience method for calling vm.$emit on vm.$root.
     * @param {string} event
     * @param {*} args
     * @chainable
     */
    emitOnRoot(event, ...args) {
      this.$root.$emit(event, ...args);
      return this
    }
  },

  beforeDestroy() {
    if (this[BVRL] && isArray(this[BVRL])) {
      while (this[BVRL].length > 0) {
        // shift to process in order
        const { event, callback } = this[BVRL].shift();
        this.$root.$off(event, callback);
      }
    }
  }
};

const drawerProps = {
  id: {
    type: String,
    default: () => 'default-drawer'
  },
  align: {
    type: String,
    default: 'start',
    validator: val => ['start', 'end', 'left', 'right'].includes(val)
  },
  persistent: {
    type: Boolean,
    default: false
  },
  opened: {
    type: Boolean,
    default: false
  },
  classes: {
    type: String,
    default: null
  },
  contentClass: {
    type: String,
    default: null
  }
};

//
handler.register('mdk-drawer', drawerComponent);

// Events we emit on $root
const EVENT_STATE = 'fm::drawer::state';

// Events we listen to on $root
const EVENT_TOGGLE = 'fm::toggle::drawer';
const EVENT_CLOSE = 'fm::close::drawer';

var script = {
  mixins: [listenOnRootMixin],
  props: drawerProps,
  data() {
    return {
      show: null
    }
  },
  computed: {
    state() {
      return {
        id: this.id,
        show: this.show,
        align: this.align,
        persistent: this.persistent
      }
    }
  },
  watch: {
    show(newVal, oldVal) {
      this.try(() => {
        this.$el.mdkDrawer[newVal ? 'open' : 'close']();
        this.emitState();
      });
    },
    opened(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.show = newVal;
      }
    },
    align(newVal, oldVal) {
      this.try(() => {
        this.$el.mdkDrawer.align = newVal;
        this.emitState();
      });
    }
  },
  created() {
    // Listen for toggle events to open/close us
    this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt);
    this.listenOnRoot(EVENT_CLOSE, this.handleCloseEvt);
  },
  mounted() {
    this.$el.addEventListener('mdk-drawer-change', () => this.onChangeHandler());
    this.$el.addEventListener('domfactory-component-upgraded', () =>
      this.onInitHandler()
    );
    this.$nextTick(() => {
      handler.upgradeElement(this.$el, 'mdk-drawer');
    });
  },
  beforeDestroy() {
    handler.downgradeElement(this.$el, 'mdk-drawer');
    this.$el.removeEventListener('mdk-drawer-change', () =>
      this.onChangeHandler()
    );
    this.$el.removeEventListener('domfactory-component-upgraded', () =>
      this.onInitHandler()
    );
  },
  methods: {
    onInitHandler() {
      if (this.opened) {
        this.open();
      }
    },
    onChangeHandler() {
      if (this.$el.mdkDrawer) {
        this.show = this.$el.mdkDrawer.opened;
      }
    },
    try(callback) {
      try {
        callback();
      } catch (e) {
        this.$el.addEventListener(
          'domfactory-component-upgraded',
          callback.bind(this)
        );
      }
    },
    toggle() {
      this.show = !this.show;
    },
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    emitState() {
      this.$emit('input', this.show);
      // Let toggle know the state of this drawer
      this.$root.$emit(EVENT_STATE, this.id, this.state);
    },
    handleToggleEvt(target) {
      if (!!target && target !== this.id) {
        return
      }
      this.toggle();
    },
    handleCloseEvt(target) {
      if (!!target && target !== this.id) {
        return
      }
      this.close();
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdk-drawer js-mdk-drawer",attrs:{"id":_vm.id,"data-align":_vm.align}},[_c('div',{staticClass:"mdk-drawer__content",class:_vm.contentClass},[_vm._t("default")],2)])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

//

var script$1 = {
  props: {
    settings: {
      type: Object,
      default() {
        return {}
      }
    },
    tag: {
      type: String,
      default: 'div'
    },
    wheelPropagation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ps: null
    }
  },
  computed: {
    localSettings() {
      return Object.assign(
        {
          wheelPropagation: this.wheelPropagation
        },
        this.settings
      )
    }
  },
  watch: {
    $route() {
      this.update();
    }
  },
  mounted() {
    this.init();
  },
  updated() {
    this.$nextTick(this.update);
  },
  activated() {
    this.init();
  },
  deactivated() {
    this.destroy();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    scrollHandle(evt) {
      this.$emit(evt.type, evt);
    },
    update() {
      if (this.ps) {
        this.ps.update();
        this.$emit('update');
      }
    },
    init() {
      if (!this.ps) {
        this.ps = new PerfectScrollbar(this.$el, this.localSettings);
      } else {
        this.update();
      }
    },
    destroy() {
      this.ps.destroy();
      this.ps = null;
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.$props.tag,{tag:"div",staticClass:"ps-container",on:{"~mouseover":function($event){return _vm.update($event)},"ps-scroll-y":_vm.scrollHandle,"ps-scroll-x":_vm.scrollHandle,"ps-scroll-up":_vm.scrollHandle,"ps-scroll-down":_vm.scrollHandle,"ps-scroll-left":_vm.scrollHandle,"ps-scroll-right":_vm.scrollHandle,"ps-y-reach-start":_vm.scrollHandle,"ps-y-reach-end":_vm.scrollHandle,"ps-x-reach-start":_vm.scrollHandle,"ps-x-reach-end":_vm.scrollHandle}},[_vm._t("default")],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

const isObject = value => typeof value === 'object' && value !== null;

// Customized for this use-case
const isObjectCustom = value =>
	isObject(value) &&
	!(value instanceof RegExp) &&
	!(value instanceof Error) &&
	!(value instanceof Date);

const mapObject = (object, mapper, options, isSeen = new WeakMap()) => {
	options = {
		deep: false,
		target: {},
		...options
	};

	if (isSeen.has(object)) {
		return isSeen.get(object);
	}

	isSeen.set(object, options.target);

	const {target} = options;
	delete options.target;

	const mapArray = array => array.map(element => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
	if (Array.isArray(object)) {
		return mapArray(object);
	}

	for (const [key, value] of Object.entries(object)) {
		let [newKey, newValue] = mapper(key, value, object);

		if (options.deep && isObjectCustom(newValue)) {
			newValue = Array.isArray(newValue) ?
				mapArray(newValue) :
				mapObject(newValue, mapper, options, isSeen);
		}

		target[newKey] = newValue;
	}

	return target;
};

var mapObj = (object, mapper, options) => {
	if (!isObject(object)) {
		throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
	}

	return mapObject(object, mapper, options);
};

const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

var camelcase = camelCase;
// TODO: Remove this for the next major release
var _default = camelCase;
camelcase.default = _default;

class QuickLRU {
	constructor(options = {}) {
		if (!(options.maxSize && options.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		this.maxSize = options.maxSize;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}

	_set(key, value) {
		this.cache.set(key, value);
		this._size++;

		if (this._size >= this.maxSize) {
			this._size = 0;
			this.oldCache = this.cache;
			this.cache = new Map();
		}
	}

	get(key) {
		if (this.cache.has(key)) {
			return this.cache.get(key);
		}

		if (this.oldCache.has(key)) {
			const value = this.oldCache.get(key);
			this.oldCache.delete(key);
			this._set(key, value);
			return value;
		}
	}

	set(key, value) {
		if (this.cache.has(key)) {
			this.cache.set(key, value);
		} else {
			this._set(key, value);
		}

		return this;
	}

	has(key) {
		return this.cache.has(key) || this.oldCache.has(key);
	}

	peek(key) {
		if (this.cache.has(key)) {
			return this.cache.get(key);
		}

		if (this.oldCache.has(key)) {
			return this.oldCache.get(key);
		}
	}

	delete(key) {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}

		return this.oldCache.delete(key) || deleted;
	}

	clear() {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
	}

	* keys() {
		for (const [key] of this) {
			yield key;
		}
	}

	* values() {
		for (const [, value] of this) {
			yield value;
		}
	}

	* [Symbol.iterator]() {
		for (const item of this.cache) {
			yield item;
		}

		for (const item of this.oldCache) {
			const [key] = item;
			if (!this.cache.has(key)) {
				yield item;
			}
		}
	}

	get size() {
		let oldCacheSize = 0;
		for (const key of this.oldCache.keys()) {
			if (!this.cache.has(key)) {
				oldCacheSize++;
			}
		}

		return this._size + oldCacheSize;
	}
}

var quickLru = QuickLRU;

const has = (array, key) => array.some(x => {
	if (typeof x === 'string') {
		return x === key;
	}

	x.lastIndex = 0;
	return x.test(key);
});

const cache = new quickLru({maxSize: 100000});

// Reproduces behavior from `map-obj`
const isObject$1 = value =>
	typeof value === 'object' &&
	value !== null &&
	!(value instanceof RegExp) &&
	!(value instanceof Error) &&
	!(value instanceof Date);

const camelCaseConvert = (input, options) => {
	if (!isObject$1(input)) {
		return input;
	}

	options = {
		deep: false,
		pascalCase: false,
		...options
	};

	const {exclude, pascalCase, stopPaths, deep} = options;

	const stopPathsSet = new Set(stopPaths);

	const makeMapper = parentPath => (key, value) => {
		if (deep && isObject$1(value)) {
			const path = parentPath === undefined ? key : `${parentPath}.${key}`;

			if (!stopPathsSet.has(path)) {
				value = mapObj(value, makeMapper(path));
			}
		}

		if (!(exclude && has(exclude, key))) {
			const cacheKey = pascalCase ? `${key}_` : key;

			if (cache.has(cacheKey)) {
				key = cache.get(cacheKey);
			} else {
				const ret = camelcase(key, {pascalCase});

				if (key.length < 100) { // Prevent abuse
					cache.set(cacheKey, ret);
				}

				key = ret;
			}
		}

		return [key, value];
	};

	return mapObj(input, makeMapper(undefined));
};

var camelcaseKeys = (input, options) => {
	if (Array.isArray(input)) {
		return Object.keys(input).map(key => camelCaseConvert(input[key], options));
	}

	return camelCaseConvert(input, options);
};

const prefixProps = (props, prefix) => {
  let newProps = {};
  Object.keys(props).forEach(prop => {
    newProps[`${prefix}-${prop}`] = props[prop];
  });

  return camelcaseKeys(newProps)
};

//
handler.register('mdk-drawer-layout', drawerLayoutComponent);

var script$2 = {
  components: {
    Drawer: __vue_component__,
    PerfectScrollbar: __vue_component__$1
  },
  props: {
    push: {
      type: Boolean,
      default: true
    },
    fullbleed: {
      type: Boolean
    },
    hasScrollingRegion: {
      type: Boolean
    },
    responsiveWidth: {
      type: String,
      default: '992px'
    },
    contentClass: {
      type: [String, Array, Object],
      default: null
    },
    contentId: {
      type: String,
      default: null
    },
    ...prefixProps(drawerProps, 'drawer')
  },
  mounted() {
    this.$el.addEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-drawer-layout'));
  },
  beforeDestroy() {
    this.$el.removeEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
    handler.downgradeElement(this.$el, 'mdk-drawer-layout');
  },
  methods: {
    init() {
['push', 'responsiveWidth', 'fullbleed', 'hasScrollingRegion'].map(prop => {
        this.$el.mdkDrawerLayout[prop] = this[prop];
        this.$watch(prop, val => (this.$el.mdkDrawerLayout[prop] = val));
      });
    }
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdk-drawer-layout js-mdk-drawer-layout",attrs:{"data-push":_vm.push,"data-responsive-width":_vm.responsiveWidth,"fullbleed":_vm.fullbleed}},[_c('div',{staticClass:"mdk-drawer-layout__content",class:_vm.contentClass,attrs:{"id":_vm.contentId}},[(_vm.hasScrollingRegion)?_c('perfect-scrollbar',{staticStyle:{"height":"100%"},on:{"ps-scroll-y":function($event){return _vm.$emit($event.type, $event)}}},[_vm._t("default")],2):_vm._t("default")],2),_vm._v(" "),_c('drawer',{class:_vm.drawerClasses,attrs:{"id":_vm.drawerId,"align":_vm.drawerAlign,"content-class":_vm.drawerContentClass}},[_vm._t("drawer",[_vm._v("\n      // drawer\n    ")])],2)],1)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

//
handler.register('mdk-header', headerComponent);

var script$3 = {
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    reveals: {
      type: Boolean,
      default: false
    },
    condenses: {
      type: Boolean,
      default: false
    },
    effects: {
      type: [String, Array],
      default: null
    },
    headerImage: {
      type: String,
      default: null
    },
    headerContentClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    props() {
      return ['fixed', 'disabled', 'reveals', 'condenses']
    },
    headerEffects() {
      if (this.effects) {
        let effects = isArray(this.effects) ? this.effects : [this.effects];
        return effects.join(' ')
      }
    }
  },
  mounted() {
    this.$el.addEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-header'));
  },
  beforeDestroy() {
    this.$el.mdkHeader.eventTarget.removeEventListener('scroll', () => this.onScroll());

    handler.downgradeElement(this.$el, 'mdk-header');
    this.$el.removeEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
  },
  methods: {
    onScroll() {
      const state = this.$el.mdkHeader.getScrollState();
      this.$emit('header-target-scroll', state);
    },
    init() {
      this.props.map(prop => {
        this.$el.mdkHeader[prop] = this[prop];
        this.$watch(prop, val => (this.$el.mdkHeader[prop] = val));
      });

      this.$el.mdkHeader.eventTarget.addEventListener('scroll', () => this.onScroll());
      this.$nextTick(() => this.$el.mdkHeader._reset());
    }
  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdk-header js-mdk-header",attrs:{"data-effects":_vm.headerEffects}},[_c('div',{staticClass:"mdk-header__bg"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.headerImage),expression:"headerImage"}],staticClass:"mdk-header__bg-front",style:(("background-image: url(" + _vm.headerImage + ");"))})]),_vm._v(" "),_c('div',{staticClass:"mdk-header__content",class:_vm.headerContentClass},[_vm._t("default",[_c('div',{attrs:{"data-primary":""}},[_vm._v("\n        // header\n      ")])])],2)])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

//
handler.register('mdk-box', boxComponent);

var script$4 = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    effects: {
      type: [String, Array],
      default: null
    },
    boxImage: {
      type: String,
      default: null
    },
    boxContentClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    props() {
      return ['disabled']
    },
    boxEffects() {
      if (this.effects) {
        let effects = isArray(this.effects) ? this.effects : [this.effects];
        return effects.join(' ')
      }
    }
  },
  mounted() {
    this.$el.addEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-box'));
  },
  beforeDestroy() {
    if (this.$el.mdkBox) {
      this.$el.mdkBox.eventTarget.removeEventListener('scroll', () => this.onScroll());
    }

    handler.downgradeElement(this.$el, 'mdk-box');
    this.$el.removeEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
  },
  methods: {
    onScroll() {
      const state = this.$el.mdkBox.getScrollState();
      this.$emit('header-target-scroll', state);
    },
    init() {
      this.props.map(prop => {
        this.$el.mdkBox[prop] = this[prop];
        this.$watch(prop, val => (this.$el.mdkBox[prop] = val));
      });

      this.$el.mdkBox.eventTarget.addEventListener('scroll', () => this.onScroll());
      this.$nextTick(() => this.$el.mdkBox._reset());
    }
  }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdk-box",attrs:{"data-effects":_vm.boxEffects}},[_c('div',{staticClass:"mdk-box__bg"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.boxImage),expression:"boxImage"}],staticClass:"mdk-box__bg-front",style:(("background-image: url(" + _vm.boxImage + ");"))})]),_vm._v(" "),_c('div',{staticClass:"mdk-box__content",class:_vm.boxContentClass},[_vm._t("default",[_c('div',[_vm._v("\n        // box content\n      ")])])],2)])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

//
handler.register('mdk-header-layout', headerLayoutComponent);

var script$5 = {
  components: {
    AppHeader: __vue_component__$3
  },
  props: {
    fullbleed: {
      type: Boolean
    },
    headerFixed: {
      type: Boolean,
      default: true
    },
    headerDisabled: {
      type: Boolean,
      default: false
    },
    headerReveals: {
      type: Boolean,
      default: false
    },
    headerCondenses: {
      type: Boolean,
      default: false
    },
    headerEffects: {
      type: [String, Array],
      default: null
    },
    headerClass: {
      type: [String, Array, Object],
      default: null
    },
    headerContentClass: {
      type: [String, Array, Object],
      default: null
    },
    contentClass: {
      type: [String, Array, Object],
      default: null
    },
    contentId: {
      type: String,
      default: null
    },
    headerImage: {
      type: String,
      default: null
    }
  },
  watch: {
    headerClass: 'reset'
  },
  mounted() {
    this.$el.addEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-header-layout'));
  },
  beforeDestroy() {
    this.$el.removeEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    );
    handler.downgradeElement(this.$el, 'mdk-header-layout');
  },
  methods: {
    init() {
      this.$nextTick(this.reset);
      setTimeout(this.reset.bind(this), 200);
      setTimeout(this.reset.bind(this), 1000);
      this.$el.mdkHeaderLayout.fullbleed = this.fullbleed;
      this.$root.$on('reset::header-layout', this.reset);

      this.$watch('$route', this.reset)

      ;['fullbleed'].map(prop => {
        this.$el.mdkHeaderLayout[prop] = this[prop];
        this.$watch(prop, val => (this.$el.mdkHeaderLayout[prop] = val));
      });
    },
    reset() {
      this.$nextTick(() => this.$el.mdkHeaderLayout._reset());
    },
    handleEmit(type, e) {
      this.$emit(type, e);
    }
  }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdk-header-layout js-mdk-header-layout"},[_c('app-header',{class:_vm.headerClass,attrs:{"fixed":_vm.headerFixed,"reveals":_vm.headerReveals,"condenses":_vm.headerCondenses,"disabled":_vm.headerDisabled,"effects":_vm.headerEffects,"header-image":_vm.headerImage,"header-content-class":_vm.headerContentClass},on:{"header-target-scroll":function($event){return _vm.handleEmit('header-target-scroll', $event)}}},[_vm._t("header",[_vm._v("\n      // header\n    ")])],2),_vm._v(" "),_c('div',{staticClass:"mdk-header-layout__content",class:_vm.contentClass,style:({ height: _vm.fullbleed ? '100%' : '' }),attrs:{"id":_vm.contentId}},[_vm._t("default")],2)],1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

var sidebarProps = {
  props: {
    type: {
      type: String,
      default: 'light'
    },
    variant: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: 'start',
      validator: val => ['start', 'end', 'left', 'right'].includes(val)
    }
  }
};

//

var script$6 = {
  components: {
    PerfectScrollbar: __vue_component__$1
  },
  mixins: [sidebarProps],
  computed: {
    isRTL() {
      if (!process.server && this.$el) {
        return window.getComputedStyle(this.$el).direction === 'rtl'
      }
    },
    position() {
      let position = this.align;
      let isRTL = this.isRTL;

      if (isRTL && ['left', 'right'].includes(position)) {
        if (position === 'left') {
          position = 'right';
        } else if (position === 'right') {
          position = 'left';
        }
      }

      if (this.align === 'start') {
        position = isRTL ? 'right' : 'left';
      }
      if (this.align === 'end') {
        position = isRTL ? 'left' : 'right';
      }

      return position
    },
    classes() {
      let classes = {};
      classes[`sidebar-${this.type}`] = true;
      classes[`sidebar-${this.position}`] = true;

      if (this.variant) {
        this.variant.split(' ').map(variant => (classes[variant] = true));
      }

      return classes
    }
  },
  methods: {
    update() {
      this.$nextTick(() => {
        if (this.$refs.ps) {
          this.$refs.ps.update();
        }
      });
    }
  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('perfect-scrollbar',{ref:"ps",staticClass:"sidebar o-hidden",class:_vm.classes},[_vm._t("default")],2)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
  name: 'FmvSidebarMenu',
  props: {
    menu: {
      type: Array,
      default() {
        return []
      }
    },
    menuClass: {
      type: [Array, String, Object],
      default: null
    }
  },
  data() {
    return {
      localMenu: []
    }
  },
  watch: {
    '$route': {
      deep: true,
      handler() {
        this.matchRoute();
      }
    },
    '$root.$i18n.locale': {
      handler(val, oldVal) {
        if (val !== oldVal) {
          this.setMenu(this.menu);
        }
      }
    }
  },
  created() {
    this.setMenu(this.menu);
    this.$root.$on('fmv::sidebar-menu::reload', () => this.setMenu(this.menu));
    this.$root.$on('bv::collapse::state', (collapseId, open) => {
      this.emitState(collapseId, false, open);
    });
  },
  methods: {
    setMenu(menu) {
      try {
        this.localMenu = menu.map(item => {
          return {
            id: item.id,
            label: item.label,
            icon: !!item.icon ? {
              id: item.icon.id,
              type: item.icon.type,
            } : null,
            open: item.open,
            click: item.click,
            route: item.route,
            exact: item.exact,
            children: item.children
          }
        });
        this.matchRoute();
      } catch(e) {
        console.warn(`
          Invalid sidebar menu structure. Valid example:
          [
            {
              id: <String> 'auth',
              label: <String> 'Auth',
              icon: <Object> {
                id: 'md-icon',
                type: 'tune',
              },
              open: <Boolean> false,
              click: <Function> function(event){},
              route: <String|Object>,
              exact: <Boolean> true,
              children: <Array> [
                {
                  label: <String> 'Sign up',
                  route: <String|Object> '/signup'
                }
              ]
            }
          ]
        `);
      }
    },
    matchRoute() {
      this.$nextTick(() => {
        this.localMenu.map(item => {
          const open = this.routeMatches(item);
          this[
            open ? 'open' : 'close'
          ](item);
        });
      });
    },
    open(target) {
      if (target.open !== true) {
        const targetId = this.getId(target);
        this.$set(target, 'open', true);
        this.$emit('open', targetId);
        this.$root.$emit('bv::toggle::collapse', targetId);
      }
    },
    close(target) {
      this.$set(target, 'open', false);
      this.$emit('close', this.getId(target));
    },
    emitState(targetId, opened, open) {
      const state = {
        targetId,
        open,
        opened
      };
      this.$emit('state', state);
      this.$root.$emit('fmv::sidebar-menu::state', state);
    },
    getId(item) {
      return `sm${item.id}`
    },
    routeMatches(item) {
      let route;
      if (process.server) {
        return false
      }
      try {
        item.children.map(child => {
          if (typeof child.route === 'string') {
            route = route || this.$route.name === child.route;
            route = route || this.$route.path === child.route;

            if (this.$i18n) {
              this.$i18n.locales.map(locale => {
                const localeRoute = `${child.route}__${locale.code}`;

                route = route || this.$route.name === localeRoute;
                route = route || this.$route.path === localeRoute;
              });
            }
          }
          
          route = route || this.$route.name === child.route.name;
          route = route || this.$route.path === child.route.path;
        });
      } catch(e) {}

      return route
    },
    onClick(e, callback) {
      if (callback) {
        e.preventDefault();
        callback(e);
      }
    }
  }
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.menu)?_c('ul',{staticClass:"sidebar-menu",class:_vm.menuClass},[_vm._l((_vm.localMenu),function(item,itemIdx){return [(item.children !== undefined && item.children.length)?[_c('li',{key:("smi-collapse-" + itemIdx),staticClass:"sidebar-menu-item",class:{ 'open': item.open }},[_c('a',{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:(_vm.getId(item)),expression:"getId(item)"}],staticClass:"sidebar-menu-button",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();}}},[(!!item.icon)?_c(item.icon.type,{tag:"component",staticClass:"sidebar-menu-icon",class:{ 
                'sidebar-menu-icon--left': item.icon.align === undefined || item.icon.align === 'left',
                'sidebar-menu-icon--right': item.icon.align === 'right',
              },domProps:{"textContent":_vm._s(item.icon.id)}}):_vm._e(),_vm._v("\n            "+_vm._s(item.label)+"\n            "),_c('span',{staticClass:"ml-auto sidebar-menu-toggle-icon"})],1),_vm._v(" "),_c('b-collapse',{staticClass:"sidebar-submenu sm-indent",attrs:{"id":_vm.getId(item),"tag":"ul"},on:{"shown":function($event){_vm.emitState(_vm.getId(item), true);},"hidden":function($event){_vm.emitState(_vm.getId(item), false);}},model:{value:(item.open),callback:function ($$v) {_vm.$set(item, "open", $$v);},expression:"item.open"}},_vm._l((item.children),function(child,idx){return _c('router-link',{key:("smi-" + idx + "-" + (_vm.$store.state.locale)),staticClass:"sidebar-menu-item",attrs:{"to":child.route,"tag":"li","exact":child.exact}},[_c('a',{staticClass:"sidebar-menu-button"},[_c('span',{staticClass:"sidebar-menu-text"},[_vm._v(_vm._s(child.label))])])])}),1)],1)]:_c(item.route ? 'router-link' : 'li',{key:("smi-" + itemIdx + "-" + (_vm.$store.state.locale)),tag:"component",staticClass:"sidebar-menu-item",attrs:{"to":item.route ? item.route : {},"tag":"li","exact":item.exact},on:{"click":function($event){return _vm.onClick($event, item.click)}}},[_c('a',{staticClass:"sidebar-menu-button"},[(!!item.icon)?_c(item.icon.type,{tag:"component",staticClass:"sidebar-menu-icon sidebar-menu-icon--left",domProps:{"textContent":_vm._s(item.icon.id)}}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"sidebar-menu-text",domProps:{"textContent":_vm._s(item.label)}}),_vm._v(" "),(item.badge)?_c('b-badge',{staticClass:"sidebar-menu-badge ml-auto",attrs:{"variant":item.badge.variant},domProps:{"textContent":_vm._s(item.badge.label)}}):_vm._e()],1)])]})],2):_vm._e()])};
var __vue_staticRenderFns__$7 = [];

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * Note object could be a complex type like array, date, etc.
 */

var isObject$2 = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};

// Normalize event options based on support of passive option
// Exported only for testing purposes

var parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  {
    // Need to translate to actual Boolean value
    return !!(isObject$2(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, evtName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element

var allListenTypes = {
  hover: true,
  click: true,
  focus: true
};
var BVBoundListeners = '__BV_boundEventListeners__';

var getTargets = function getTargets(binding) {
  var targets = keys(binding.modifiers || {}).filter(function (t) {
    return !allListenTypes[t];
  });

  if (binding.value) {
    targets.push(binding.value);
  }

  return targets;
};

var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
  var targets = getTargets(binding);

  var listener = function listener() {
    fn({
      targets: targets,
      vnode: vnode
    });
  };

  keys(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      eventOn(vnode.elm, type, listener);
      var boundListeners = vnode.elm[BVBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[BVBoundListeners] = boundListeners;
    }
  }); // Return the list of targets

  return targets;
};

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Determine if an HTML element is visible - Faster than CSS check

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var setAttr = function setAttr(el, attr, val) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, val);
  }
}; // Remove an attribute from an element

// Are we client side?
const inBrowser = typeof window !== 'undefined';

// target listen types
const listenTypes = { click: true };

// Property key for handler storage
const BVT = '__BV_toggle__';

// Emitted Control Event for collapse (emitted to collapse)
const EVENT_TOGGLE$1 = 'fm::toggle::drawer';

// Listen to Event for toggle state update (Emited by collapse)
const EVENT_STATE$1 = 'fm::drawer::state';

var toggle = {
  bind(el, binding, vnode) {
    const targets = bindTargets(
      vnode,
      binding,
      listenTypes,
      ({ targets, vnode }) => {
        targets.forEach(target => {
          vnode.context.$root.$emit(EVENT_TOGGLE$1, target);
        });
      }
    );

    if (inBrowser && vnode.context && targets.length > 0) {
      // Add aria attributes to element
      setAttr(el, 'aria-controls', targets.join(' '));
      setAttr(el, 'aria-expanded', 'false');
      if (el.tagName !== 'BUTTON') {
        // If element is not a button, we add `role="button"` for accessibility
        setAttr(el, 'role', 'button');
      }

      // Toggle state hadnler, stored on element
      el[BVT] = function toggleDirectiveHandler(id, state) {
        if (targets.indexOf(id) !== -1) {
          // Set aria-expanded state
          setAttr(el, 'aria-expanded', state.show ? 'true' : 'false');
          // Set/Clear 'active' class state
          if (state.show) {
            addClass(el, 'active');
          } else {
            removeClass(el, 'active');
          }
        }
      };

      // Listen for toggle state changes
      vnode.context.$root.$on(EVENT_STATE$1, el[BVT]);
    }
  },
  unbind(el, binding, vnode) {
    if (el[BVT]) {
      // Remove our $root listener
      vnode.context.$root.$off(EVENT_STATE$1, el[BVT]);
      el[BVT] = null;
    }
  }
};

const utils = {
  isArray,
  prefixProps,
  drawerProps,
  sidebarProps: sidebarProps.props
};

const mixins = {
  listenOnRootMixin
};

export { __vue_component__$4 as FmvBox, __vue_component__ as FmvDrawer, __vue_component__$2 as FmvDrawerLayout, __vue_component__$3 as FmvHeader, __vue_component__$5 as FmvHeaderLayout, __vue_component__$1 as FmvPerfectScrollbar, __vue_component__$6 as FmvSidebar, __vue_component__$7 as FmvSidebarMenu, toggle as FmvToggle, mixins, utils };
