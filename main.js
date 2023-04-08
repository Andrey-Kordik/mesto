/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(config) {
    _classCallCheck(this, Api);
    this.url = config.url;
    this.headers = config.headers;
  }
  _createClass(Api, [{
    key: "getCards",
    value: function getCards() {
      return fetch(this.url, {
        headers: this.headers
      }).then(function (res) {
        console.log("res");
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Произошла ошибка");
      });
    }
  }]);
  return Api;
}();

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(_ref, templateSelector, popupOpener) {
    var title = _ref.title,
      link = _ref.link;
    _classCallCheck(this, Card);
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._popupOpener = popupOpener;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector('.element').content.querySelector('.element__item').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.element__photo').src = this._link;
      this._element.querySelector('.element__photo').alt = this._title;
      this._element.querySelector('.element__name').textContent = this._title;
      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._element.querySelector('.element__photo').addEventListener('click', function () {
        _this._handleImageClick();
      });
      this._toggleLikebutton();
      this._element.querySelector('.element__delete-button').addEventListener('click', function () {
        _this._removeCard();
      });
    }
  }, {
    key: "_handleImageClick",
    value: function _handleImageClick() {
      this._popupOpener(this._link, this._title);
    }
  }, {
    key: "_toggleLikebutton",
    value: function _toggleLikebutton() {
      var _this2 = this;
      this._element.querySelector('.element__like').addEventListener('click', function (evt) {
        _this2._toggleLike(evt);
      });
    }
  }, {
    key: "_toggleLike",
    value: function _toggleLike(evt) {
      evt.target.classList.toggle('element__like_active');
    }
  }, {
    key: "_removeCard",
    value: function _removeCard() {
      this._element.remove();
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formSelector, submitButtonSelector, inputList) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "enableSubmitButton", function () {
      _this._submitButtonSelector.removeAttribute('disabled');
      _this._submitButtonSelector.classList.remove(_this.config.inactiveButtonClass);
    });
    _defineProperty(this, "disableSubmitButton", function () {
      _this._submitButtonSelector.setAttribute('disabled', 'disabled');
      _this._submitButtonSelector.classList.add(_this.config.inactiveButtonClass);
    });
    this.config = config;
    this._formSelector = formSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inputList = inputList;
  }
  _createClass(FormValidator, [{
    key: "_showError",
    value: function _showError(inputSelector, errorMessage) {
      var errorClass = this._formSelector.querySelector(".".concat(inputSelector.id, "-error"));
      inputSelector.classList.add(this.config.inputErrorClass);
      errorClass.textContent = errorMessage;
    }
  }, {
    key: "_hideError",
    value: function _hideError(inputSelector) {
      var errorClass = this._formSelector.querySelector(".".concat(inputSelector.id, "-error"));
      inputSelector.classList.remove(this.config.inputErrorClass);
      errorClass.textContent = '';
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputSelector) {
      if (!inputSelector.validity.valid) {
        this._showError(inputSelector, inputSelector.validationMessage);
      } else {
        this._hideError(inputSelector);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._submitButtonSelector = this._formSelector.querySelector(this.config.submitButtonSelector);
      this._inputList = Array.from(this._formSelector.querySelectorAll(this.config.inputSelector));
      this._inputList.forEach(function (input) {
        input.addEventListener('input', function () {
          _this2._checkInputValidity(input);
          _this2._toggleButtonState(_this2._inputList, _this2._submitButtonSelector);
        });
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      var formIsValid = this._inputList.every(function (item) {
        return item.validity.valid;
      });
      if (formIsValid) {
        this.enableSubmitButton(this._submitButtonSelector);
      } else {
        this.disableSubmitButton(this._submitButtonSelector);
      }
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners(this._formSelector, this.config);
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(event) {
      if (event.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_closePopupByArea",
    value: function _closePopupByArea() {
      var _this = this;
      this._popup.addEventListener('click', function (evt) {
        if (evt.target === _this._popup) {
          _this.close();
        }
      });
    }
  }, {
    key: "_closePopupByClosingIcon",
    value: function _closePopupByClosingIcon() {
      var _this2 = this;
      this._popup.querySelector('.popup__closing-icon').addEventListener('click', function () {
        _this2.close();
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._closePopupByArea();
      this._closePopupByClosingIcon();
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, form, submitForm, inputList) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._popup = popupSelector;
    _this._submitForm = submitForm;
    _this._form = form;
    _this._inputList = inputList;
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._inputValues = {};
      this._inputList.forEach(function (input) {
        return _this2._inputValues[input.name] = input.value;
      });
      return this._inputValues;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this3._submitForm(_this3._getInputValues());
        _this3.close();
      });
    }
  }]);
  return PopupWithForm;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector, picture, title) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._popup = popupSelector;
    _this._picture = picture;
    _this._title = title;
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(picture, title) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      this._picture.src = picture;
      this._picture.alt = title;
      this._title.textContent = title;
    }
  }]);
  return PopupWithImage;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var data = _ref.data,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(item) {
      this._container.prepend(item);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(userInfo) {
    _classCallCheck(this, UserInfo);
    this._username = document.querySelector(userInfo.name);
    this._userjob = document.querySelector(userInfo.job);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userData = {
        name: this._username.textContent,
        job: this._userjob.textContent
      };
      return userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(name, job) {
      this._username.textContent = name;
      this._userjob.textContent = job;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/components/utils/constants.js":
/*!*******************************************!*\
  !*** ./src/components/utils/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonOpenAddCardPopup": () => (/* binding */ buttonOpenAddCardPopup),
/* harmony export */   "buttonOpenEditProfilePopup": () => (/* binding */ buttonOpenEditProfilePopup),
/* harmony export */   "buttonsClosePopup": () => (/* binding */ buttonsClosePopup),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "formCreateCard": () => (/* binding */ formCreateCard),
/* harmony export */   "imageName": () => (/* binding */ imageName),
/* harmony export */   "imagePicture": () => (/* binding */ imagePicture),
/* harmony export */   "imagePopup": () => (/* binding */ imagePopup),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "inputList": () => (/* binding */ inputList),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "photoName": () => (/* binding */ photoName),
/* harmony export */   "placeImage": () => (/* binding */ placeImage),
/* harmony export */   "placePhoto": () => (/* binding */ placePhoto),
/* harmony export */   "placeTitle": () => (/* binding */ placeTitle),
/* harmony export */   "popup": () => (/* binding */ popup),
/* harmony export */   "popupEditProfile": () => (/* binding */ popupEditProfile),
/* harmony export */   "profileForm": () => (/* binding */ profileForm),
/* harmony export */   "profileJob": () => (/* binding */ profileJob),
/* harmony export */   "profileName": () => (/* binding */ profileName),
/* harmony export */   "submitButtonAddForm": () => (/* binding */ submitButtonAddForm)
/* harmony export */ });
var imagePopup = document.querySelector('.popup_image');
var imageName = imagePopup.querySelector('.popup__image-name');
var imagePicture = imagePopup.querySelector('.popup__image');
var placePhoto = document.querySelector('.element__photo');
var photoName = document.querySelector('.element__name');
var initialCards = [{
  title: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  title: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  title: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  title: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  title: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  title: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var buttonsClosePopup = document.querySelector('.popup__closing-icon');
var popup = document.querySelector(".popup");
var placeTitle = document.getElementById('placename');
var placeImage = document.getElementById('link');
var formCreateCard = document.getElementById('create-form');
var buttonOpenAddCardPopup = document.querySelector('.profile__add-button');
var elements = document.querySelector('.elements');
var submitButtonAddForm = document.getElementById('addcard');
var nameInput = document.getElementById('Name');
var jobInput = document.getElementById('Job');
var profileName = document.querySelector('.profile__heading');
var profileJob = document.querySelector('.profile__subheading');
var config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__savebutton',
  inactiveButtonClass: 'popup__savebutton_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error'
};
var popupEditProfile = document.querySelector('.popup_edit-profile');
var buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
var profileForm = document.getElementById('profileForm');
var inputList = document.querySelectorAll('.popup__info');

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils/constants.js */ "./src/components/utils/constants.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Api_js__WEBPACK_IMPORTED_MODULE_8__);









var editProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.config, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileForm);
editProfileValidator.enableValidation();
var createCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.config, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formCreateCard);
createCardValidator.enableValidation();
var pictureOpened = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.imagePopup, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.imagePicture, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.imageName);
pictureOpened.setEventListeners();
var handleCardClick = function handleCardClick(picture, title) {
  pictureOpened.open(picture, title);
};
var defaultCardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  data: _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.initialCards,
  renderer: function renderer(item) {
    var card = createCard(item.title, item.link);
    defaultCardList.addItem(card);
  }
}, '.elements');
defaultCardList.renderItems();
var popupAddCard = document.querySelector('.popup_add-card');
var popupAddForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](popupAddCard, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formCreateCard, createCardFormSubmit, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.inputList);
_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.buttonOpenAddCardPopup.addEventListener('click', function () {
  popupAddForm.open();
  createCardValidator.disableSubmitButton();
});
popupAddForm.setEventListeners();
function createCard(title, link) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    title: title,
    link: link
  }, '.element', handleCardClick);
  var cardElement = card.generateCard();
  return cardElement;
}
function createCardFormSubmit(inputValues) {
  var card = createCard(inputValues['placename'], inputValues['link']);
  defaultCardList.addItem(card);
}
var userInformation = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  name: '.profile__heading',
  job: '.profile__subheading'
});
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupEditProfile, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileForm, editProdileformSubmit, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.inputList);
function editProdileformSubmit(inputValues) {
  userInformation.setUserInfo(inputValues['Name'], inputValues['Job']);
}
_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.buttonOpenEditProfilePopup.addEventListener('click', function () {
  var userOriginValue = userInformation.getUserInfo();
  _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.nameInput.value = userOriginValue.name;
  _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.jobInput.value = userOriginValue.job;
  popupProfile.open();
});
popupProfile.setEventListeners();
var configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-63/cards',
  headers: {
    authorization: '14d16ec7-c7e8-4070-bd40-31591cadb169',
    'Content-Type': 'application/json'
  }
};
var api = new (_components_Api_js__WEBPACK_IMPORTED_MODULE_8___default())(configApi);
api.getCards().then(function (res) {
  console.log(res);
})["catch"](function (err) {});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsWUFBTTtFQUN6RCxJQUFNZ0IsZUFBZSxHQUFHSCxlQUFlLENBQUNwQyxXQUFXLEVBQUU7RUFDckRrQiwyRUFBZSxHQUFHcUIsZUFBZSxDQUFDaEUsSUFBSTtFQUN0QzRDLDBFQUFjLEdBQUdvQixlQUFlLENBQUN4QyxHQUFHO0VBRXBDc0MsWUFBWSxDQUFDakYsSUFBSSxFQUFFO0FBRXJCLENBQUMsQ0FBQztBQUVGaUYsWUFBWSxDQUFDM0UsaUJBQWlCLEVBQUU7QUFLaEMsSUFBTThFLFNBQVMsR0FBRztFQUNsQi9LLEdBQUcsRUFBRSxtREFBbUQ7RUFDeERDLE9BQU8sRUFBRTtJQUNQK0ssYUFBYSxFQUFFLHNDQUFzQztJQUNyRCxjQUFjLEVBQUU7RUFDbEI7QUFDQSxDQUFDO0FBRUQsSUFBTUMsR0FBRyxHQUFHLElBQUlwTCwyREFBRyxDQUFDa0wsU0FBUyxDQUFDO0FBRTlCRSxHQUFHLENBQUM1SyxRQUFRLEVBQUcsQ0FDZEUsSUFBSSxDQUFFLFVBQUFDLEdBQUcsRUFBSTtFQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxTQUNJLENBQUUsVUFBQTBLLEdBQUcsRUFBSSxDQUVmLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IGNvbmZpZy51cmxcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBjb25maWcuaGVhZGVyc1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcmRzICgpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2ggKHRoaXMudXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNcIilcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcItCf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LBcIilcclxuICAgIH0pXHJcbn1cclxufSAiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKHt0aXRsZSwgbGlua30sIHRlbXBsYXRlU2VsZWN0b3IsIHBvcHVwT3BlbmVyKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvclxuICAgICAgdGhpcy5fcG9wdXBPcGVuZXIgPSBwb3B1cE9wZW5lclxuICAgIH1cbiAgXG4gICAgX2dldFRlbXBsYXRlKCkge1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2l0ZW0nKS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIHJldHVybiBjYXJkRWxlbWVudFxuICAgIH1cbiAgXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKClcbiAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKClcbiAgXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpLnNyYyA9IHRoaXMuX2xpbmtcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuYWx0ID0gdGhpcy5fdGl0bGVcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX25hbWUnKS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlXG5cbiAgXG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fcGhvdG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayAoKVxuICAgICAgfSk7XG4gIFxuICAgICAgdGhpcy5fdG9nZ2xlTGlrZWJ1dHRvbigpO1xuICBcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2FyZCAoKSBcbiAgICAgIH0pXG4gICAgIH1cbiAgICBcbiAgXG4gICBfaGFuZGxlSW1hZ2VDbGljayAoKSB7XG4gICAgdGhpcy5fcG9wdXBPcGVuZXIoIHRoaXMuX2xpbmssIHRoaXMuX3RpdGxlKVxuICB9XG5cbiAgICBfdG9nZ2xlTGlrZWJ1dHRvbigpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUxpa2UoZXZ0KVxuICAgICAgfSlcbiAgICB9XG4gIFxuXG4gICAgX3RvZ2dsZUxpa2UoZXZ0KXtcbiAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZWxlbWVudF9fbGlrZV9hY3RpdmUnKTsgXG59IFxuXG4gICAgX3JlbW92ZUNhcmQgKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgICAgfVxuICAgIH1cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1TZWxlY3Rvciwgc3VibWl0QnV0dG9uU2VsZWN0b3IsIGlucHV0TGlzdCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gZm9ybVNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBpbnB1dExpc3Q7XG4gICAgfVxuXG4gICAgX3Nob3dFcnJvcihpbnB1dFNlbGVjdG9yLCBlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZXJyb3JDbGFzcyA9IHRoaXMuX2Zvcm1TZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dFNlbGVjdG9yLmlkfS1lcnJvcmApO1xuICAgICAgICBpbnB1dFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JDbGFzcy50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICB9O1xuXG4gICAgX2hpZGVFcnJvcihpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRTZWxlY3Rvci5pZH0tZXJyb3JgKTtcbiAgICAgICAgaW5wdXRTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yQ2xhc3MudGV4dENvbnRlbnQgPSAnJ1xuICAgIH07XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCFpbnB1dFNlbGVjdG9yLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93RXJyb3IoaW5wdXRTZWxlY3RvciwgaW5wdXRTZWxlY3Rvci52YWxpZGF0aW9uTWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVFcnJvcihpbnB1dFNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcblxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHRoaXMuX2Zvcm1TZWxlY3Rvci5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1TZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLmlucHV0U2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZm9ybUlzVmFsaWQgPSB0aGlzLl9pbnB1dExpc3QuZXZlcnkoKGl0ZW0pID0+IGl0ZW0udmFsaWRpdHkudmFsaWQpO1xuXG4gICAgICAgIGlmIChmb3JtSXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVTdWJtaXRCdXR0b24odGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24odGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpXG4gICAgfVxuXG4gICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcblxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuXG4gICAgfVxuXG5cbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtU2VsZWN0b3IsIHRoaXMuY29uZmlnKVxuICAgIH1cblxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBwb3B1cFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJylcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSlcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSlcclxuICB9XHJcblxyXG4gIF9jbG9zZVBvcHVwQnlBcmVhKCkge1xyXG4gICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gdGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIF9jbG9zZVBvcHVwQnlDbG9zaW5nSWNvbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2luZy1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gIH1cclxuICBcclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Nsb3NlUG9wdXBCeUFyZWEoKVxyXG4gICAgdGhpcy5fY2xvc2VQb3B1cEJ5Q2xvc2luZ0ljb24oKVxyXG5cclxuICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBmb3JtLCBzdWJtaXRGb3JtLCBpbnB1dExpc3QpIHtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IHBvcHVwU2VsZWN0b3JcclxuICAgICAgICB0aGlzLl9zdWJtaXRGb3JtID0gc3VibWl0Rm9ybTtcclxuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybVxyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IGlucHV0TGlzdFxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlcyA9IHt9XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PlxyXG4gICAgICAgICAgICAodGhpcy5faW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSkpXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpXHJcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgcGljdHVyZSwgdGl0bGUpIHtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IHBvcHVwU2VsZWN0b3JcclxuICAgICAgICB0aGlzLl9waWN0dXJlID0gcGljdHVyZVxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHBpY3R1cmUsIHRpdGxlKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5zcmMgPSBwaWN0dXJlXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5hbHQgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7ZGF0YSwgcmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLl9pdGVtcyA9IGRhdGE7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0gKGl0ZW0pICB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zICgpIHtcclxuICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3IodXNlckluZm8pIHtcclxuICAgICAgICB0aGlzLl91c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckluZm8ubmFtZSlcclxuICAgICAgICB0aGlzLl91c2Vyam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VySW5mby5qb2IpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8gKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgbmFtZTogdGhpcy5fdXNlcm5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgICAgam9iOiB0aGlzLl91c2Vyam9iLnRleHRDb250ZW50XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlckRhdGFcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0VXNlckluZm8obmFtZSwgam9iKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3VzZXJqb2IudGV4dENvbnRlbnQgPSBqb2JcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2ltYWdlJyk7XG5leHBvcnQgY29uc3QgIGltYWdlTmFtZSA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZS1uYW1lJyk7XG5leHBvcnQgY29uc3QgIGltYWdlUGljdHVyZSA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpXG5leHBvcnQgY29uc3QgcGxhY2VQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpXG5leHBvcnQgY29uc3QgcGhvdG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5lbGVtZW50X19uYW1lJylcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICfQkNGA0YXRi9C3JyxcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2NoZWx5YWJpbnNrLW9ibGFzdC5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9CY0LLQsNC90L7QstC+JyxcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Ca0LDQvNGH0LDRgtC60LAnLFxuICAgICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvScsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9CR0LDQudC60LDQuycsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGcnXG4gIFxuICAgIH1cbiAgXTtcbmV4cG9ydCBjb25zdCBidXR0b25zQ2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2luZy1pY29uJyk7XG5leHBvcnQgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpXG5leHBvcnQgY29uc3QgcGxhY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW5hbWUnKTtcbmV4cG9ydCBjb25zdCBwbGFjZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmsnKTtcbmV4cG9ydCBjb25zdCBmb3JtQ3JlYXRlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZm9ybScpXG5leHBvcnQgY29uc3QgYnV0dG9uT3BlbkFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJylcbmV4cG9ydCBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50cycpXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uQWRkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICgnYWRkY2FyZCcpXG5cblxuZXhwb3J0IGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYW1lJylcbmV4cG9ydCBjb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKb2InKVxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2hlYWRpbmcnKVxuZXhwb3J0IGNvbnN0IHByb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fc3ViaGVhZGluZycpXG5cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19jb250YWluZXInLFxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbmZvJyxcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3NhdmVidXR0b24nLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3NhdmVidXR0b25faW5hY3RpdmUnLFxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5mb190eXBlX2Vycm9yJyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19pbmZvLWVycm9yJyxcbn1cblxuXG5leHBvcnQgY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9lZGl0LXByb2ZpbGUnKTtcbmV4cG9ydCBjb25zdCBidXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGVGb3JtJylcbmV4cG9ydCBjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsICgnLnBvcHVwX19pbmZvJylcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGltYWdlUG9wdXAsIGluaXRpYWxDYXJkcywgZm9ybUNyZWF0ZUNhcmQsIGJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAsIGVsZW1lbnRzLCBpbWFnZVBpY3R1cmUsIGltYWdlTmFtZSwgY29uZmlnLCBwb3B1cEVkaXRQcm9maWxlLFxyXG4gIGJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwLCBuYW1lSW5wdXQsIGpvYklucHV0LCBwcm9maWxlRm9ybSwgcGxhY2VUaXRsZSwgcGxhY2VJbWFnZSwgaW5wdXRMaXN0LFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzL2NvbnN0YW50cy5qc1wiXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIlxyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwcm9maWxlRm9ybSlcclxuZWRpdFByb2ZpbGVWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpXHJcbmNvbnN0IGNyZWF0ZUNhcmRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1DcmVhdGVDYXJkKVxyXG5jcmVhdGVDYXJkVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKVxyXG5cclxuY29uc3QgcGljdHVyZU9wZW5lZCA9IG5ldyBQb3B1cFdpdGhJbWFnZShpbWFnZVBvcHVwLCBpbWFnZVBpY3R1cmUsIGltYWdlTmFtZSlcclxucGljdHVyZU9wZW5lZC5zZXRFdmVudExpc3RlbmVycygpXHJcblxyXG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAocGljdHVyZSwgdGl0bGUpID0+IHtcclxuICBwaWN0dXJlT3BlbmVkLm9wZW4ocGljdHVyZSwgdGl0bGUpXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRDYXJkTGlzdCA9IG5ldyBTZWN0aW9uKHtcclxuICBkYXRhOiBpbml0aWFsQ2FyZHMsXHJcbiAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChpdGVtLnRpdGxlLCBpdGVtLmxpbmspXHJcbiAgICBkZWZhdWx0Q2FyZExpc3QuYWRkSXRlbShjYXJkKVxyXG4gIH1cclxufSwgJy5lbGVtZW50cycpO1xyXG5cclxuZGVmYXVsdENhcmRMaXN0LnJlbmRlckl0ZW1zKClcclxuY29uc3QgcG9wdXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZC1jYXJkJyk7XHJcbmNvbnN0IHBvcHVwQWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQWRkQ2FyZCwgZm9ybUNyZWF0ZUNhcmQsIGNyZWF0ZUNhcmRGb3JtU3VibWl0LCBpbnB1dExpc3QpXHJcblxyXG5idXR0b25PcGVuQWRkQ2FyZFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBvcHVwQWRkRm9ybS5vcGVuKClcclxuICBjcmVhdGVDYXJkVmFsaWRhdG9yLmRpc2FibGVTdWJtaXRCdXR0b24oKVxyXG59KVxyXG5wb3B1cEFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0aXRsZSwgbGluaykge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7IHRpdGxlOiB0aXRsZSwgbGluazogbGluayB9LCAnLmVsZW1lbnQnLCBoYW5kbGVDYXJkQ2xpY2spXHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpXHJcbiAgcmV0dXJuIGNhcmRFbGVtZW50XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkRm9ybVN1Ym1pdChpbnB1dFZhbHVlcykge1xyXG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGlucHV0VmFsdWVzWydwbGFjZW5hbWUnXSwgaW5wdXRWYWx1ZXNbJ2xpbmsnXSlcclxuICBkZWZhdWx0Q2FyZExpc3QuYWRkSXRlbShjYXJkKVxyXG59XHJcblxyXG5jb25zdCB1c2VySW5mb3JtYXRpb24gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWU6ICcucHJvZmlsZV9faGVhZGluZycsXHJcbiAgam9iOiAnLnByb2ZpbGVfX3N1YmhlYWRpbmcnXHJcbn0pXHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGUgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEVkaXRQcm9maWxlLCBwcm9maWxlRm9ybSwgZWRpdFByb2RpbGVmb3JtU3VibWl0LCBpbnB1dExpc3QpXHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvZGlsZWZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICB1c2VySW5mb3JtYXRpb24uc2V0VXNlckluZm8oaW5wdXRWYWx1ZXNbJ05hbWUnXSwgaW5wdXRWYWx1ZXNbJ0pvYiddKVxyXG59XHJcblxyXG5idXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCB1c2VyT3JpZ2luVmFsdWUgPSB1c2VySW5mb3JtYXRpb24uZ2V0VXNlckluZm8oKVxyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJPcmlnaW5WYWx1ZS5uYW1lXHJcbiAgam9iSW5wdXQudmFsdWUgPSB1c2VyT3JpZ2luVmFsdWUuam9iXHJcblxyXG4gIHBvcHVwUHJvZmlsZS5vcGVuKClcclxuXHJcbn0pO1xyXG5cclxucG9wdXBQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ0FwaSA9IHtcclxudXJsOiAnaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC02My9jYXJkcycsIFxyXG5oZWFkZXJzOiB7XHJcbiAgYXV0aG9yaXphdGlvbjogJzE0ZDE2ZWM3LWM3ZTgtNDA3MC1iZDQwLTMxNTkxY2FkYjE2OScsXHJcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyBcclxufVxyXG59XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKGNvbmZpZ0FwaSlcclxuXHJcbmFwaS5nZXRDYXJkcyAoKVxyXG4udGhlbiAocmVzID0+IHtcclxuICBjb25zb2xlLmxvZyhyZXMpXHJcbn0pXHJcbi5jYXRjaCAoZXJyID0+IHtcclxuICBcclxufSlcclxuIl0sIm5hbWVzIjpbIkFwaSIsImNvbmZpZyIsIl9jbGFzc0NhbGxDaGVjayIsInVybCIsImhlYWRlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldENhcmRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJDYXJkIiwiX3JlZiIsInRlbXBsYXRlU2VsZWN0b3IiLCJwb3B1cE9wZW5lciIsInRpdGxlIiwibGluayIsIl90aXRsZSIsIl9saW5rIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfcG9wdXBPcGVuZXIiLCJfZ2V0VGVtcGxhdGUiLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZW5lcmF0ZUNhcmQiLCJfZWxlbWVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUltYWdlQ2xpY2siLCJfdG9nZ2xlTGlrZWJ1dHRvbiIsIl9yZW1vdmVDYXJkIiwiX3RoaXMyIiwiZXZ0IiwiX3RvZ2dsZUxpa2UiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJkZWZhdWx0IiwiRm9ybVZhbGlkYXRvciIsImZvcm1TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5wdXRMaXN0IiwiX2RlZmluZVByb3BlcnR5IiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsInNldEF0dHJpYnV0ZSIsImFkZCIsIl9mb3JtU2VsZWN0b3IiLCJfaW5wdXRMaXN0IiwiX3Nob3dFcnJvciIsImlucHV0U2VsZWN0b3IiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckNsYXNzIiwiY29uY2F0IiwiaWQiLCJpbnB1dEVycm9yQ2xhc3MiLCJfaGlkZUVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5wdXQiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JtSXNWYWxpZCIsImV2ZXJ5IiwiaXRlbSIsImVuYWJsZVN1Ym1pdEJ1dHRvbiIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJlbmFibGVWYWxpZGF0aW9uIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIm9wZW4iLCJldmVudCIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9jbG9zZVBvcHVwQnlBcmVhIiwiX2Nsb3NlUG9wdXBCeUNsb3NpbmdJY29uIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJQb3B1cFdpdGhGb3JtIiwiX1BvcHVwIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiZm9ybSIsInN1Ym1pdEZvcm0iLCJjYWxsIiwiX3N1Ym1pdEZvcm0iLCJfZm9ybSIsIl9nZXRJbnB1dFZhbHVlcyIsIl9pbnB1dFZhbHVlcyIsIm5hbWUiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwicmVzZXQiLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwV2l0aEltYWdlIiwicGljdHVyZSIsIl9waWN0dXJlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiZGF0YSIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX2NvbnRhaW5lciIsIl9yZW5kZXJlciIsImFkZEl0ZW0iLCJwcmVwZW5kIiwicmVuZGVySXRlbXMiLCJVc2VySW5mbyIsInVzZXJJbmZvIiwiX3VzZXJuYW1lIiwiX3VzZXJqb2IiLCJqb2IiLCJnZXRVc2VySW5mbyIsInVzZXJEYXRhIiwic2V0VXNlckluZm8iLCJpbWFnZVBvcHVwIiwiaW1hZ2VOYW1lIiwiaW1hZ2VQaWN0dXJlIiwicGxhY2VQaG90byIsInBob3RvTmFtZSIsImluaXRpYWxDYXJkcyIsImJ1dHRvbnNDbG9zZVBvcHVwIiwicG9wdXAiLCJwbGFjZVRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGFjZUltYWdlIiwiZm9ybUNyZWF0ZUNhcmQiLCJidXR0b25PcGVuQWRkQ2FyZFBvcHVwIiwiZWxlbWVudHMiLCJzdWJtaXRCdXR0b25BZGRGb3JtIiwibmFtZUlucHV0Iiwiam9iSW5wdXQiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVKb2IiLCJwb3B1cEVkaXRQcm9maWxlIiwiYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAiLCJwcm9maWxlRm9ybSIsImVkaXRQcm9maWxlVmFsaWRhdG9yIiwiY3JlYXRlQ2FyZFZhbGlkYXRvciIsInBpY3R1cmVPcGVuZWQiLCJoYW5kbGVDYXJkQ2xpY2siLCJkZWZhdWx0Q2FyZExpc3QiLCJjYXJkIiwiY3JlYXRlQ2FyZCIsInBvcHVwQWRkQ2FyZCIsInBvcHVwQWRkRm9ybSIsImNyZWF0ZUNhcmRGb3JtU3VibWl0IiwiaW5wdXRWYWx1ZXMiLCJ1c2VySW5mb3JtYXRpb24iLCJwb3B1cFByb2ZpbGUiLCJlZGl0UHJvZGlsZWZvcm1TdWJtaXQiLCJ1c2VyT3JpZ2luVmFsdWUiLCJjb25maWdBcGkiLCJhdXRob3JpemF0aW9uIiwiYXBpIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==