function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ModAdmin-Estado-Estado-module~ModAdmin-Proyectos-Proyectos-module"], {
  /***/
  "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
  /*!***********************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserBytesToUuidJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */


    var byteToHex = [];

    for (var i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 0x100).toString(16).substr(1);
    }

    function bytesToUuid(buf, offset) {
      var i = offset || 0;
      var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

      return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
    }
    /* harmony default export */


    __webpack_exports__["default"] = bytesToUuid;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
    \*****************************************************/

  /*! exports provided: v1, v3, v4, v5 */

  /***/
  function node_modulesUuidDistEsmBrowserIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v1.js */
    "./node_modules/uuid/dist/esm-browser/v1.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v1", function () {
      return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./v3.js */
    "./node_modules/uuid/dist/esm-browser/v3.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v3", function () {
      return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./v4.js */
    "./node_modules/uuid/dist/esm-browser/v4.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v4", function () {
      return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    });
    /* harmony import */


    var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./v5.js */
    "./node_modules/uuid/dist/esm-browser/v5.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v5", function () {
      return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/md5.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserMd5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*
     * Browser-compatible JavaScript MD5
     *
     * Modification of JavaScript MD5
     * https://github.com/blueimp/JavaScript-MD5
     *
     * Copyright 2011, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * https://opensource.org/licenses/MIT
     *
     * Based on
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */


    function md5(bytes) {
      if (typeof bytes == 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = new Array(msg.length);

        for (var i = 0; i < msg.length; i++) {
          bytes[i] = msg.charCodeAt(i);
        }
      }

      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    /*
     * Convert an array of little-endian words to an array of bytes
     */


    function md5ToHexEncodedArray(input) {
      var i;
      var x;
      var output = [];
      var length32 = input.length * 32;
      var hexTab = '0123456789abcdef';
      var hex;

      for (i = 0; i < length32; i += 8) {
        x = input[i >> 5] >>> i % 32 & 0xff;
        hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
      }

      return output;
    }
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */


    function wordsToMd5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << len % 32;
      x[(len + 64 >>> 9 << 4) + 14] = len;
      var i;
      var olda;
      var oldb;
      var oldc;
      var oldd;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }

      return [a, b, c, d];
    }
    /*
     * Convert an array bytes to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */


    function bytesToWords(input) {
      var i;
      var output = [];
      output[(input.length >> 2) - 1] = undefined;

      for (i = 0; i < output.length; i += 1) {
        output[i] = 0;
      }

      var length8 = input.length * 8;

      for (i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
      }

      return output;
    }
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */


    function safeAdd(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xffff;
    }
    /*
     * Bitwise rotate a 32-bit number to the left.
     */


    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    /*
     * These functions implement the four basic operations the algorithm uses.
     */


    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }

    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    /* harmony default export */


    __webpack_exports__["default"] = md5;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/rng.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserRngJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return rng;
    }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
    // require the crypto API and do not support built-in fallback to lower quality random number
    // generators (like Math.random()).
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.


    var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

    function rng() {
      if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }

      return getRandomValues(rnds8);
    }
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/sha1.js":
  /*!****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserSha1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); // Adapted from Chris Veness' SHA1 code at
    // http://www.movable-type.co.uk/scripts/sha1.html


    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;

        case 1:
          return x ^ y ^ z;

        case 2:
          return x & y ^ x & z ^ y & z;

        case 3:
          return x ^ y ^ z;
      }
    }

    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }

    function sha1(bytes) {
      var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

      if (typeof bytes == 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = new Array(msg.length);

        for (var i = 0; i < msg.length; i++) {
          bytes[i] = msg.charCodeAt(i);
        }
      }

      bytes.push(0x80);
      var l = bytes.length / 4 + 2;
      var N = Math.ceil(l / 16);
      var M = new Array(N);

      for (var i = 0; i < N; i++) {
        M[i] = new Array(16);

        for (var j = 0; j < 16; j++) {
          M[i][j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }
      }

      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

      for (var i = 0; i < N; i++) {
        var W = new Array(80);

        for (var t = 0; t < 16; t++) {
          W[t] = M[i][t];
        }

        for (var t = 16; t < 80; t++) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];

        for (var t = 0; t < 80; t++) {
          var s = Math.floor(t / 20);
          var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }

        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }

      return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
    }
    /* harmony default export */


    __webpack_exports__["default"] = sha1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v1.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js"); // **`v1()` - Generate time-based UUID**
    //
    // Inspired by https://github.com/LiosK/UUID.js
    // and http://docs.python.org/library/uuid.html


    var _nodeId;

    var _clockseq; // Previous uuid creation time


    var _lastMSecs = 0;
    var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || [];
      options = options || {};
      var node = options.node || _nodeId;
      var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
      // specified.  We do this lazily to minimize issues related to insufficient
      // system entropy.  See #189

      if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

        if (node == null) {
          // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
          node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }

        if (clockseq == null) {
          // Per 4.2.2, randomize (14 bit) clockseq
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
      } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
      // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
      // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
      // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


      var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
      // cycle to simulate higher resolution clock

      var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

      if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
      } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
      // time interval


      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
      } // Per 4.2.1.2 Throw error if too many uuids are requested


      if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }

      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

      msecs += 12219292800000; // `time_low`

      var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
      b[i++] = tl >>> 24 & 0xff;
      b[i++] = tl >>> 16 & 0xff;
      b[i++] = tl >>> 8 & 0xff;
      b[i++] = tl & 0xff; // `time_mid`

      var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
      b[i++] = tmh >>> 8 & 0xff;
      b[i++] = tmh & 0xff; // `time_high_and_version`

      b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

      b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

      b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

      b[i++] = clockseq & 0xff; // `node`

      for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }

      return buf ? buf : Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v3.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./md5.js */
    "./node_modules/uuid/dist/esm-browser/md5.js");

    var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v3;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v35.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
    \***************************************************/

  /*! exports provided: DNS, URL, default */

  /***/
  function node_modulesUuidDistEsmBrowserV35Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DNS", function () {
      return DNS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL", function () {
      return URL;
    });
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

    function uuidToBytes(uuid) {
      // Note: We assume we're being passed a valid uuid string
      var bytes = [];
      uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
        bytes.push(parseInt(hex, 16));
      });
      return bytes;
    }

    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str)); // UTF8 escape

      var bytes = new Array(str.length);

      for (var i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
      }

      return bytes;
    }

    var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    /* harmony default export */

    __webpack_exports__["default"] = function (name, version, hashfunc) {
      var generateUUID = function generateUUID(value, namespace, buf, offset) {
        var off = buf && offset || 0;
        if (typeof value == 'string') value = stringToBytes(value);
        if (typeof namespace == 'string') namespace = uuidToBytes(namespace);
        if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');
        if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3

        var bytes = hashfunc(namespace.concat(value));
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;

        if (buf) {
          for (var idx = 0; idx < 16; ++idx) {
            buf[off + idx] = bytes[idx];
          }
        }

        return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
      }; // Function#name is not settable on some platforms (#270)


      try {
        generateUUID.name = name;
      } catch (err) {} // For CommonJS default export support


      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    };
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v4.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

    function v4(options, buf, offset) {
      var i = buf && offset || 0;

      if (typeof options == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
      }

      options = options || {};

      var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }

      return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v4;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v5.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sha1.js */
    "./node_modules/uuid/dist/esm-browser/sha1.js");

    var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v5;
    /***/
  },

  /***/
  "./src/Conection/HttpAPI/HttpAPI.service.ts":
  /*!**************************************************!*\
    !*** ./src/Conection/HttpAPI/HttpAPI.service.ts ***!
    \**************************************************/

  /*! exports provided: HttpAPIService */

  /***/
  function srcConectionHttpAPIHttpAPIServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpAPIService", function () {
      return HttpAPIService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _HttpAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./HttpAPI */
    "./src/Conection/HttpAPI/HttpAPI.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpAPIService = /*#__PURE__*/function () {
      function HttpAPIService(http) {
        _classCallCheck(this, HttpAPIService);

        this.http = http; //this.CSRF_TOKEN();
      }

      _createClass(HttpAPIService, [{
        key: "Get",
        value: function Get(HttpAPI) {
          var headers = HttpAPI.getHeaders();
          var Url = HttpAPI.UrlAPI();
          return this.http.get(Url, {
            headers: headers
          });
        }
      }, {
        key: "Post",
        value: function Post(HttpAPI) {
          var _headers = HttpAPI.getHeaders();

          var options = {
            headers: _headers
          };
          var Body = HttpAPI.getObject();
          var Url = HttpAPI.UrlAPI();

          if (Body === undefined) {
            return this.http.post(Url, options).subscribe();
          } else {
            return this.http.post(Url, JSON.stringify(Body), options).subscribe();
          }
        }
      }, {
        key: "Put",
        value: function Put(HttpAPI) {
          var _headers = HttpAPI.getHeaders();

          var options = {
            headers: _headers
          };
          var Url = HttpAPI.UrlAPI();
          var Body = HttpAPI.getObject;

          if (Body === undefined) {
            return this.http.put(Url, options);
          } else {
            return this.http.put(Url, Body, options);
          }
        }
      }, {
        key: "Delete",
        value: function Delete(HttpAPI) {
          var _headers = HttpAPI.getHeaders();

          var options = {
            headers: _headers
          };
          var Url = HttpAPI.UrlAPI();
          return this.http["delete"](Url, options);
        }
      }, {
        key: "Patch",
        value: function Patch(HttpAPI) {
          var _headers = HttpAPI.getHeaders();

          var options = {
            headers: _headers
          };
          var Url = HttpAPI.UrlAPI();
          var Body = HttpAPI.getObject;

          if (Body === undefined) {
            return this.http.patch(Url, options);
          } else {
            return this.http.patch(Url, Body, options);
          }
        }
      }, {
        key: "CSRF_TOKEN",
        value: function CSRF_TOKEN() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var conexion, _HttpAPI, _headers, options, Url;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    conexion = {
                      UrlRoute: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Url_API,
                      Controller: 'api',
                      Action: 'csrf'
                    };
                    _HttpAPI = new _HttpAPI__WEBPACK_IMPORTED_MODULE_3__["HttpAPI"](conexion);
                    _headers = _HttpAPI.getHeaders();
                    options = {
                      headers: _headers
                    };
                    Url = _HttpAPI.UrlAPI();
                    _context.next = 7;
                    return this.http.get(Url, options).toPromise().then(function (data) {
                      console.log(data.toString()); //this.csrf = data.toString();
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return HttpAPIService;
    }();

    HttpAPIService.ɵfac = function HttpAPIService_Factory(t) {
      return new (t || HttpAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    HttpAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpAPIService,
      factory: HttpAPIService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/Conection/HttpAPI/HttpAPI.ts":
  /*!******************************************!*\
    !*** ./src/Conection/HttpAPI/HttpAPI.ts ***!
    \******************************************/

  /*! exports provided: HttpAPI */

  /***/
  function srcConectionHttpAPIHttpAPITs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpAPI", function () {
      return HttpAPI;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    ;

    var HttpAPI = /*#__PURE__*/function () {
      function HttpAPI(httpAPI) {
        _classCallCheck(this, HttpAPI);

        this.RutaDeAcceso = httpAPI;
      }

      _createClass(HttpAPI, [{
        key: "getObject",
        value: function getObject() {
          return this.RutaDeAcceso.Param;
        }
      }, {
        key: "UrlAPI",
        value: function UrlAPI() {
          return this.RutaDeAcceso.UrlRoute + '/' + 'api/' + this.RutaDeAcceso.Controller + '/' + this.RutaDeAcceso.Action;
        }
      }, {
        key: "getHeaders",
        value: function getHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
          headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Token-Auth, Authorization');
          headers.append('content-type', 'application/json; charset=utf-8');
          return headers;
        }
      }]);

      return HttpAPI;
    }();
    /***/

  },

  /***/
  "./src/ModAdmin/Estado/Estado.service.ts":
  /*!***********************************************!*\
    !*** ./src/ModAdmin/Estado/Estado.service.ts ***!
    \***********************************************/

  /*! exports provided: EstadoService */

  /***/
  function srcModAdminEstadoEstadoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadoService", function () {
      return EstadoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Services_MainHttp_MainHttp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @Services/MainHttp/MainHttp.service */
    "./src/Services/MainHttp/MainHttp.service.ts");
    /* harmony import */


    var _Connect_HttpAPI_HttpAPI_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @Connect/HttpAPI/HttpAPI.service */
    "./src/Conection/HttpAPI/HttpAPI.service.ts");

    var EstadoService = /*#__PURE__*/function (_Services_MainHttp_Ma) {
      _inherits(EstadoService, _Services_MainHttp_Ma);

      var _super = _createSuper(EstadoService);

      function EstadoService(_HttpAPIService) {
        var _this;

        _classCallCheck(this, EstadoService);

        _this = _super.call(this, _HttpAPIService);
        _this.conexion = {
          UrlRoute: _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Url_API,
          Controller: 'estado'
        };
        return _this;
      }

      return EstadoService;
    }(_Services_MainHttp_MainHttp_service__WEBPACK_IMPORTED_MODULE_2__["MainHttpService"]);

    EstadoService.ɵfac = function EstadoService_Factory(t) {
      return new (t || EstadoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Connect_HttpAPI_HttpAPI_service__WEBPACK_IMPORTED_MODULE_3__["HttpAPIService"]));
    };

    EstadoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EstadoService,
      factory: EstadoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _Connect_HttpAPI_HttpAPI_service__WEBPACK_IMPORTED_MODULE_3__["HttpAPIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/Services/MainHttp/MainHttp.service.ts":
  /*!***************************************************!*\
    !*** ./src/Services/MainHttp/MainHttp.service.ts ***!
    \***************************************************/

  /*! exports provided: MainHttpService */

  /***/
  function srcServicesMainHttpMainHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHttpService", function () {
      return MainHttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Connect_HttpAPI_HttpAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @Connect/HttpAPI/HttpAPI */
    "./src/Conection/HttpAPI/HttpAPI.ts");
    /* harmony import */


    var _Connect_HttpAPI_HttpAPI_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @Connect/HttpAPI/HttpAPI.service */
    "./src/Conection/HttpAPI/HttpAPI.service.ts");

    var MainHttpService = /*#__PURE__*/function () {
      function MainHttpService(_HttpAPIService) {
        _classCallCheck(this, MainHttpService);

        this._HttpAPIService = _HttpAPIService;
      }

      _createClass(MainHttpService, [{
        key: "Mostrar",
        value: function Mostrar() {
          this.conexion.Action = 'mostrar';

          var _HttpAPI = new _Connect_HttpAPI_HttpAPI__WEBPACK_IMPORTED_MODULE_1__["HttpAPI"](this.conexion);

          return this._HttpAPIService.Get(_HttpAPI);
        }
      }, {
        key: "Crear",
        value: function Crear(Obj) {
          this.conexion.Action = 'guardar';
          this.conexion.Param = Obj;

          var _HttpAPI = new _Connect_HttpAPI_HttpAPI__WEBPACK_IMPORTED_MODULE_1__["HttpAPI"](this.conexion);

          return this._HttpAPIService.Post(_HttpAPI);
        }
      }, {
        key: "Editar",
        value: function Editar(Obj) {
          this.conexion.Action = 'editar';
          this.conexion.Param = Obj;

          var _HttpAPI = new _Connect_HttpAPI_HttpAPI__WEBPACK_IMPORTED_MODULE_1__["HttpAPI"](this.conexion);

          this._HttpAPIService.Post(_HttpAPI);
        }
      }, {
        key: "Eliminar",
        value: function Eliminar(id) {
          this.conexion.Action = 'eliminar/' + id; //this.conexion.Param = Obj

          console.log(this.conexion);

          var _HttpAPI = new _Connect_HttpAPI_HttpAPI__WEBPACK_IMPORTED_MODULE_1__["HttpAPI"](this.conexion);

          this._HttpAPIService.Post(_HttpAPI);
        }
      }, {
        key: "Buscar",
        value: function Buscar(Obj) {
          this.conexion.Action = 'Guardar';
          this.conexion.Param = Obj;

          var _HttpAPI = new _Connect_HttpAPI_HttpAPI__WEBPACK_IMPORTED_MODULE_1__["HttpAPI"](this.conexion);

          this._HttpAPIService.Post(_HttpAPI);
        }
      }]);

      return MainHttpService;
    }();

    MainHttpService.ɵfac = function MainHttpService_Factory(t) {
      return new (t || MainHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Connect_HttpAPI_HttpAPI_service__WEBPACK_IMPORTED_MODULE_2__["HttpAPIService"]));
    };

    MainHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MainHttpService,
      factory: MainHttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _Connect_HttpAPI_HttpAPI_service__WEBPACK_IMPORTED_MODULE_2__["HttpAPIService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~ModAdmin-Estado-Estado-module~ModAdmin-Proyectos-Proyectos-module-es5.js.map