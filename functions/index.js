"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _fs = _interopRequireDefault(require("fs"));

var _App = _interopRequireDefault(require("./src/App"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var index = _fs["default"].readFileSync(__dirname + "/index.html", "utf8");

var app = (0, _express["default"])();
app.get("**", function (req, res) {
  var _req$query$name = req.query.name,
      name = _req$query$name === void 0 ? "Praveen" : _req$query$name;
  console.log("\n name value \n", name);
  console.log(">>", finalHtml);
  var html = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    name: name
  }));
  var finalHtml = index.replace("<!-- ::APP:: -->", html);
  res.set("Cache-Control", "public, max-age=600, s-maxage=1200");
  res.send(finalHtml);
});
var ssrapp = functions.https.onRequest(app);
exports.ssrapp = ssrapp;