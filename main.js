/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this.url = url;
    this.headers = headers;
    this._token = headers['authorization'];
  }
  _createClass(Api, [{
    key: "getCards",
    value: function getCards() {
      var _this = this;
      return fetch("".concat(this.url, "/cards"), {
        headers: this.headers
      }).then(function (res) {
        return _this._checkResult(res);
      });
    }
  }, {
    key: "_checkResult",
    value: function _checkResult(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(res.status));
    }
  }, {
    key: "addCard",
    value: function addCard(_ref2) {
      var _this2 = this;
      var placename = _ref2.placename,
        link = _ref2.link;
      return fetch("".concat(this.url, "/cards"), {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: placename,
          link: link
        })
      }).then(function (res) {
        return _this2._checkResult(res);
      });
    }
  }, {
    key: "getUserData",
    value: function getUserData() {
      var _this3 = this;
      return fetch("".concat(this.url, "/users/me"), {
        method: "GET",
        headers: this.headers
      }).then(function (res) {
        return _this3._checkResult(res);
      });
    }
  }, {
    key: "editUserData",
    value: function editUserData(_ref3) {
      var _this4 = this;
      var name = _ref3.name,
        job = _ref3.job;
      return fetch("".concat(this.url, "/users/me"), {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: job
        })
      }).then(function (res) {
        return _this4._checkResult(res);
      });
    }
  }, {
    key: "editAvatar",
    value: function editAvatar(_ref4) {
      var _this5 = this;
      var avatar = _ref4.avatar;
      return fetch("".concat(this.url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        return _this5._checkResult(res);
      });
    }
  }, {
    key: "putLike",
    value: function putLike(id) {
      var _this6 = this;
      return fetch("".concat(this.url, "/cards/").concat(id, "/likes"), {
        method: 'PUT',
        headers: this.headers
      }).then(function (res) {
        return _this6._checkResult(res);
      });
    }
  }, {
    key: "removeLike",
    value: function removeLike(id) {
      var _this7 = this;
      return fetch("".concat(this.url, "/cards/").concat(id, "/likes"), {
        method: 'DELETE',
        headers: this.headers
      }).then(function (res) {
        return _this7._checkResult(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      var _this8 = this;
      return fetch("".concat(this.url, "/cards/").concat(id), {
        method: 'DELETE',
        headers: this.headers
      }).then(function (res) {
        return _this8._checkResult(res);
      });
    }
  }]);
  return Api;
}();
var api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    authorization: '14d16ec7-c7e8-4070-bd40-31591cadb169',
    'Content-Type': 'application/json'
  }
});

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  function Card(data, userId, templateSelector, popupOpener, handleLikeClick, handleTrashClick) {
    _classCallCheck(this, Card);
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this.id = data._id;
    this._myId = userId;
    this._templateSelector = templateSelector;
    this._popupOpener = popupOpener;
    this.handleLikeClick = handleLikeClick;
    this._handleTrashClick = handleTrashClick;
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
      this._element.querySelector('.element__photo').alt = this._name;
      this._element.querySelector('.element__name').textContent = this._name;
      this._deleteButton = this._element.querySelector('.element__delete-button');
      this._like = this._element.querySelector('.element__like');
      this._likeCounter = this._element.querySelector('.element__likecounter');
      if (this._myId !== this._ownerId) {
        this._deleteButton.remove();
      }
      this.setLikes(this._likes);
      return this._element;
    }
  }, {
    key: "addLike",
    value: function addLike() {
      this._like.classList.add('element__like_active');
    }
  }, {
    key: "_checkLike",
    value: function _checkLike() {
      var _this = this;
      if (this._likes.some(function (like) {
        return like._id === _this._myId;
      })) {
        return true;
      }
      return false;
    }
  }, {
    key: "removeLike",
    value: function removeLike() {
      this._like.classList.remove('element__like_active');
    }
  }, {
    key: "setLikes",
    value: function setLikes(arr) {
      this._likeCounter.textContent = arr.length;
      this._likes = arr;
      if (this._checkLike()) {
        this.addLike();
      } else {
        this.removeLike();
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._element.querySelector('.element__photo').addEventListener('click', function () {
        _this2._handleImageClick();
      });
      this._element.querySelector('.element__like').addEventListener('click', function () {
        _this2.handleLikeClick(_this2.id, _this2._checkLike(), _this2);
      });
      this._element.querySelector('.element__delete-button').addEventListener('click', function () {
        _this2._handleTrashClick(_this2.id, _this2);
      });
    }
  }, {
    key: "_handleImageClick",
    value: function _handleImageClick() {
      this._popupOpener(this._link, this._name);
    }
  }, {
    key: "removeCard",
    value: function removeCard() {
      this._element.remove();
      this._element = null;
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

/***/ "./src/components/PoopupDeleteConfirm.js":
/*!***********************************************!*\
  !*** ./src/components/PoopupDeleteConfirm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupDeleteConfirm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
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

var PopupDeleteConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupDeleteConfirm, _Popup);
  var _super = _createSuper(PopupDeleteConfirm);
  function PopupDeleteConfirm(popupSelector) {
    var _this;
    _classCallCheck(this, PopupDeleteConfirm);
    _this = _super.call(this, popupSelector);
    _this.popupSelector = popupSelector;
    _this._buttonConfirm = _this.popupSelector.querySelector('.popup__savebutton');
    return _this;
  }
  _createClass(PopupDeleteConfirm, [{
    key: "submitDelete",
    value: function submitDelete(_submitDelete) {
      this._handleSubmitDelete = _submitDelete;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupDeleteConfirm.prototype), "setEventListeners", this).call(this);
      this._buttonConfirm.addEventListener("click", function (evt) {
        evt.preventDefault();
        _this2._handleSubmitDelete(evt);
      });
    }
  }]);
  return PopupDeleteConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  function Popup(popup) {
    _classCallCheck(this, Popup);
    this._popup = popup;
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
  function PopupWithForm(popup, submitForm) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popup);
    _this._popup = popup;
    _this._submitForm = submitForm;
    _this._form = _this._popup.querySelector('.popup__container');
    _this._buttonConfirm = _this._popup.querySelector('.popup__savebutton');
    _this._inputList = _this._form.querySelectorAll('.popup__info');
    _this._textButton = _this._buttonConfirm.textContent;
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
    key: "renderSaving",
    value: function renderSaving(status) {
      if (status) {
        this._buttonConfirm.textContent = "C\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...";
      } else {
        this._buttonConfirm.textContent = this._textButton;
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this3._submitForm(_this3._getInputValues());
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
  function PopupWithImage(popup) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popup);
    _this._popup = popup;
    _this._picture = _this._popup.querySelector('.popup__image');
    _this._title = _this._popup.querySelector('.popup__image-name');
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
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
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
    value: function renderItems(cards) {
      var _this = this;
      cards.forEach(function (card) {
        _this._renderer(card);
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
    this._avatar = document.querySelector(userInfo.avatar);
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
    value: function setUserInfo(data) {
      this._username.textContent = data.name;
      this._userjob.textContent = data.about;
      this._avatar.src = data.avatar;
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatar": () => (/* binding */ avatar),
/* harmony export */   "buttonOpenAddCardPopup": () => (/* binding */ buttonOpenAddCardPopup),
/* harmony export */   "buttonOpenEditProfilePopup": () => (/* binding */ buttonOpenEditProfilePopup),
/* harmony export */   "buttonsClosePopup": () => (/* binding */ buttonsClosePopup),
/* harmony export */   "cardPopup": () => (/* binding */ cardPopup),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "editAvatarButton": () => (/* binding */ editAvatarButton),
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "formChangeAvatar": () => (/* binding */ formChangeAvatar),
/* harmony export */   "formCreateCard": () => (/* binding */ formCreateCard),
/* harmony export */   "imageName": () => (/* binding */ imageName),
/* harmony export */   "imagePicture": () => (/* binding */ imagePicture),
/* harmony export */   "imagePopup": () => (/* binding */ imagePopup),
/* harmony export */   "inputList": () => (/* binding */ inputList),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "photoName": () => (/* binding */ photoName),
/* harmony export */   "placeImage": () => (/* binding */ placeImage),
/* harmony export */   "placePhoto": () => (/* binding */ placePhoto),
/* harmony export */   "placeTitle": () => (/* binding */ placeTitle),
/* harmony export */   "popup": () => (/* binding */ popup),
/* harmony export */   "popupAvatar": () => (/* binding */ popupAvatar),
/* harmony export */   "popupDelete": () => (/* binding */ popupDelete),
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
var buttonsClosePopup = document.querySelector('.popup__closing-icon');
var popup = document.querySelector(".popup");
var placeTitle = document.getElementById('placename');
var placeImage = document.getElementById('link');
var formCreateCard = document.getElementById('create-form');
var buttonOpenAddCardPopup = document.querySelector('.profile__add-button');
var elements = document.querySelector('.elements');
var submitButtonAddForm = document.getElementById('addcard');
var avatar = document.querySelector('.profile__avatar');
var popupDelete = document.querySelector('.popup_delete-card');
var popupAvatar = document.querySelector('.popup_avatar');
var editAvatarButton = document.querySelector('.profile__avatar-editbutton');
var formChangeAvatar = document.getElementById('avatarform');
var nameInput = document.getElementById('Name');
var jobInput = document.getElementById('Job');
var profileName = document.querySelector('.profile__heading');
var profileJob = document.querySelector('.profile__subheading');
var cardPopup = document.querySelector('.popup_add-card');
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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
/* harmony import */ var _components_PoopupDeleteConfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PoopupDeleteConfirm */ "./src/components/PoopupDeleteConfirm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var editProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.config, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileForm);
editProfileValidator.enableValidation();
var createCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.config, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formCreateCard);
createCardValidator.enableValidation();
var pictureOpened = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.imagePopup);
pictureOpened.setEventListeners();
var handleCardClick = function handleCardClick(picture, name) {
  pictureOpened.open(picture, name);
};
function handleTrashClick(id, card) {
  popupDeleteConfirm.submitDelete(function () {
    return handleDeleteConfirm(id, card);
  });
  popupDeleteConfirm.open();
}
function handleDeleteConfirm(id, card) {
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.deleteCard(id).then(function () {
    card.removeCard();
    popupDeleteConfirm.close();
  })["catch"](function (err) {
    console.log(err.message);
  });
}
var popupChangeAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar, handleChangeAvatar);
popupChangeAvatar.setEventListeners();
var validityPopupAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.config, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formChangeAvatar);
validityPopupAvatar.enableValidation();
function handleChangeAvatar(inputValues) {
  popupChangeAvatar.renderSaving(true);
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.editAvatar(inputValues).then(function (data) {
    console.log(data);
    userInformation.setUserInfo(data);
    popupChangeAvatar.close();
  })["catch"](function (err) {
    console.log(err.message);
  })["finally"](function () {
    popupChangeAvatar.renderSaving(false);
  });
}
_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.editAvatarButton.addEventListener('click', function () {
  popupChangeAvatar.open();
  validityPopupAvatar.disableSubmitButton();
});
var popupDeleteConfirm = new _components_PoopupDeleteConfirm__WEBPACK_IMPORTED_MODULE_9__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupDelete);
popupDeleteConfirm.setEventListeners();
function createCard(data, userId) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](data, userId, '.element', handleCardClick, handleLikeClick, handleTrashClick);
  var cardElement = card.generateCard();
  return cardElement;
}
function handleLikeClick(id, isLiked, card) {
  if (isLiked) {
    _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.removeLike(id).then(function (data) {
      card.setLikes(data.likes);
    });
  } else {
    _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.putLike(card.id).then(function (data) {
      card.setLikes(data.likes);
    });
  }
}
var userId = null;
function createCardFormSubmit(inputValues) {
  popupAddForm.renderSaving(true);
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.addCard({
    placename: inputValues.placename,
    link: inputValues.link
  }).then(function (data) {
    var card = createCard(data, userId);
    defaultCardList.addItem(card), popupAddForm.close();
  })["catch"](function (err) {
    console.log(err.message);
  })["finally"](function () {
    popupAddForm.renderSaving(false);
  });
}
function editProfileformSubmit(inputValues) {
  popupProfile.renderSaving(true);
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.editUserData({
    name: inputValues.name,
    job: inputValues.job
  }).then(function (data) {
    userInformation.setUserInfo(data);
    popupProfile.close();
  })["catch"](function (err) {
    console.log(err.message);
  })["finally"](function () {
    popupProfile.renderSaving(false);
  });
}
var popupAddCard = document.querySelector('.popup_add-card');
var popupAddForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](popupAddCard, createCardFormSubmit);
_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.buttonOpenAddCardPopup.addEventListener('click', function () {
  popupAddForm.open();
  createCardValidator.disableSubmitButton();
});
popupAddForm.setEventListeners();
var userInformation = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  name: '.profile__heading',
  job: '.profile__subheading',
  avatar: '.profile__avatar'
});
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupEditProfile, editProfileformSubmit);
_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.buttonOpenEditProfilePopup.addEventListener('click', function () {
  var userOriginValue = userInformation.getUserInfo();
  _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.nameInput.value = userOriginValue.name;
  _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.jobInput.value = userOriginValue.job;
  popupProfile.open();
});
popupProfile.setEventListeners();
Promise.all([_components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.getUserData(), _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.getCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    resUser = _ref2[0],
    resCards = _ref2[1];
  userId = resUser._id;
  userInformation.setUserInfo(resUser);
  defaultCardList.renderItems(resCards.reverse());
})["catch"](function (err) {
  console.log(err.message);
});
var defaultCardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  data: {},
  renderer: function renderer(data) {
    var card = createCard(data, userId);
    defaultCardList.addItem(card);
  }
}, '.elements');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFPQSxHQUFHO0VBQ04sU0FBQUEsSUFBQUMsSUFBQSxFQUE0QjtJQUFBLElBQWZDLEdBQUcsR0FBQUQsSUFBQSxDQUFIQyxHQUFHO01BQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0lBQUFDLGVBQUEsT0FBQUosR0FBQTtJQUNyQixJQUFJLENBQUNFLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsTUFBTSxHQUFHRixPQUFPLENBQUMsZUFBZSxDQUFDO0VBQzFDO0VBQUNHLFlBQUEsQ0FBQU4sR0FBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxTQUFBLEVBQVc7TUFBQSxJQUFBQyxLQUFBO01BQ1AsT0FBT0MsS0FBSyxJQUFBQyxNQUFBLENBQUksSUFBSSxDQUFDVixHQUFHLGFBQVU7UUFDOUJDLE9BQU8sRUFBRSxJQUFJLENBQUNBO01BQ2xCLENBQUMsQ0FBQyxDQUNHVSxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ1QsT0FBT0osS0FBSSxDQUFDSyxZQUFZLENBQUNELEdBQUcsQ0FBQztNQUNqQyxDQUFDLENBQUM7SUFDVjtFQUFDO0lBQUFQLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFPLGFBQWFELEdBQUcsRUFBRTtNQUNkLElBQUlBLEdBQUcsQ0FBQ0UsRUFBRSxFQUFFO1FBQ1IsT0FBT0YsR0FBRyxDQUFDRyxJQUFJLEVBQUU7TUFDckI7TUFDQSxPQUFPQyxPQUFPLENBQUNDLE1BQU0seUNBQUFQLE1BQUEsQ0FBV0UsR0FBRyxDQUFDTSxNQUFNLEVBQUc7SUFDakQ7RUFBQztJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBYSxRQUFBQyxLQUFBLEVBQTJCO01BQUEsSUFBQUMsTUFBQTtNQUFBLElBQWxCQyxTQUFTLEdBQUFGLEtBQUEsQ0FBVEUsU0FBUztRQUFFQyxJQUFJLEdBQUFILEtBQUEsQ0FBSkcsSUFBSTtNQUNwQixPQUFPZCxLQUFLLElBQUFDLE1BQUEsQ0FBSSxJQUFJLENBQUNWLEdBQUcsYUFBVTtRQUM5QndCLE1BQU0sRUFBRSxNQUFNO1FBQ2R2QixPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO1FBQ3JCd0IsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUFFQyxJQUFJLEVBQUVOLFNBQVM7VUFBRUMsSUFBSSxFQUFFQTtRQUFLLENBQUM7TUFDeEQsQ0FBQyxDQUFDLENBQ0RaLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7UUFDVCxPQUFPUyxNQUFJLENBQUNSLFlBQVksQ0FBQ0QsR0FBRyxDQUFDO01BQ2pDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVCLFlBQUEsRUFBYztNQUFBLElBQUFDLE1BQUE7TUFDVixPQUFPckIsS0FBSyxJQUFBQyxNQUFBLENBQUksSUFBSSxDQUFDVixHQUFHLGdCQUFhO1FBQ2pDd0IsTUFBTSxFQUFFLEtBQUs7UUFDYnZCLE9BQU8sRUFBRSxJQUFJLENBQUNBO01BQ2xCLENBQUMsQ0FBQyxDQUNEVSxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ1QsT0FBT2tCLE1BQUksQ0FBQ2pCLFlBQVksQ0FBQ0QsR0FBRyxDQUFDO01BQ2pDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlCLGFBQUFDLEtBQUEsRUFBMEI7TUFBQSxJQUFBQyxNQUFBO01BQUEsSUFBWkwsSUFBSSxHQUFBSSxLQUFBLENBQUpKLElBQUk7UUFBRU0sR0FBRyxHQUFBRixLQUFBLENBQUhFLEdBQUc7TUFDbkIsT0FBT3pCLEtBQUssSUFBQUMsTUFBQSxDQUFJLElBQUksQ0FBQ1YsR0FBRyxnQkFBYTtRQUNqQ3dCLE1BQU0sRUFBRSxPQUFPO1FBQ2Z2QixPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO1FBQ3JCd0IsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUFFQyxJQUFJLEVBQUVBLElBQUk7VUFBRU8sS0FBSyxFQUFFRDtRQUFJLENBQUM7TUFDbkQsQ0FBQyxDQUFDLENBQ0R2QixJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ1QsT0FBT3FCLE1BQUksQ0FBQ3BCLFlBQVksQ0FBQ0QsR0FBRyxDQUFDO01BQ2pDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThCLFdBQUFDLEtBQUEsRUFBc0I7TUFBQSxJQUFBQyxNQUFBO01BQUEsSUFBVEMsTUFBTSxHQUFBRixLQUFBLENBQU5FLE1BQU07TUFDZixPQUFPOUIsS0FBSyxJQUFBQyxNQUFBLENBQUksSUFBSSxDQUFDVixHQUFHLHVCQUFtQjtRQUN2Q3dCLE1BQU0sRUFBRSxPQUFPO1FBQ2Z2QixPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO1FBQ3JCd0IsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBRTtVQUNsQlksTUFBTSxFQUFDQTtRQUNYLENBQUM7TUFDTCxDQUFDLENBQUMsQ0FDRDVCLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7UUFDVCxPQUFPMEIsTUFBSSxDQUFDekIsWUFBWSxDQUFDRCxHQUFHLENBQUM7TUFDakMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBUCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0MsUUFBUUMsRUFBRSxFQUFFO01BQUEsSUFBQUMsTUFBQTtNQUNSLE9BQU9qQyxLQUFLLElBQUFDLE1BQUEsQ0FBSSxJQUFJLENBQUNWLEdBQUcsYUFBQVUsTUFBQSxDQUFVK0IsRUFBRSxhQUFVO1FBQzFDakIsTUFBTSxFQUFFLEtBQUs7UUFDYnZCLE9BQU8sRUFBRSxJQUFJLENBQUNBO01BQ2xCLENBQUMsQ0FBQyxDQUNEVSxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ1QsT0FBTzhCLE1BQUksQ0FBQzdCLFlBQVksQ0FBQ0QsR0FBRyxDQUFDO01BQ2pDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBR0QsU0FBQXFDLFdBQVdGLEVBQUUsRUFBRTtNQUFBLElBQUFHLE1BQUE7TUFDWCxPQUFPbkMsS0FBSyxJQUFBQyxNQUFBLENBQUksSUFBSSxDQUFDVixHQUFHLGFBQUFVLE1BQUEsQ0FBVStCLEVBQUUsYUFBVTtRQUMxQ2pCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCdkIsT0FBTyxFQUFFLElBQUksQ0FBQ0E7TUFDbEIsQ0FBQyxDQUFDLENBQ0RVLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7UUFDVCxPQUFPZ0MsTUFBSSxDQUFDL0IsWUFBWSxDQUFDRCxHQUFHLENBQUM7TUFDakMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBUCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUMsV0FBV0osRUFBRSxFQUFFO01BQUEsSUFBQUssTUFBQTtNQUNYLE9BQU9yQyxLQUFLLElBQUFDLE1BQUEsQ0FBSSxJQUFJLENBQUNWLEdBQUcsYUFBQVUsTUFBQSxDQUFVK0IsRUFBRSxHQUFJO1FBQ3BDakIsTUFBTSxFQUFFLFFBQVE7UUFDaEJ2QixPQUFPLEVBQUUsSUFBSSxDQUFDQTtNQUNsQixDQUFDLENBQUMsQ0FDRFUsSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtRQUNULE9BQU9rQyxNQUFJLENBQUNqQyxZQUFZLENBQUNELEdBQUcsQ0FBQztNQUNqQyxDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUEsT0FBQWQsR0FBQTtBQUFBO0FBR0UsSUFBTWlELEdBQUcsR0FBRyxJQUFJakQsR0FBRyxDQUFFO0VBQ3hCRSxHQUFHLCtDQUErQztFQUNsREMsT0FBTyxFQUFFO0lBQ1ArQyxhQUFhLEVBQUUsc0NBQXNDO0lBQ3JELGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN6R2lCQyxJQUFJO0VBQ3ZCLFNBQUFBLEtBQVlDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFO0lBQUFyRCxlQUFBLE9BQUErQyxJQUFBO0lBQzFGLElBQUksQ0FBQ08sS0FBSyxHQUFHTixJQUFJLENBQUN0QixJQUFJO0lBQ3RCLElBQUksQ0FBQzZCLEtBQUssR0FBR1AsSUFBSSxDQUFDM0IsSUFBSTtJQUN0QixJQUFJLENBQUNtQyxRQUFRLEdBQUdSLElBQUksQ0FBQ1MsS0FBSyxDQUFDQyxHQUFHO0lBQzlCLElBQUksQ0FBQ0MsTUFBTSxHQUFHWCxJQUFJLENBQUNZLEtBQUs7SUFDeEIsSUFBSSxDQUFDckIsRUFBRSxHQUFHUyxJQUFJLENBQUNVLEdBQUc7SUFDbEIsSUFBSSxDQUFDRyxLQUFLLEdBQUdaLE1BQU07SUFDbkIsSUFBSSxDQUFDYSxpQkFBaUIsR0FBR1osZ0JBQWdCO0lBQ3pDLElBQUksQ0FBQ2EsWUFBWSxHQUFHWixXQUFXO0lBQy9CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSxlQUFlO0lBQ3RDLElBQUksQ0FBQ1ksaUJBQWlCLEdBQUdYLGdCQUFnQjtFQUMzQztFQUFDbkQsWUFBQSxDQUFBNkMsSUFBQTtJQUFBNUMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZELGFBQUEsRUFBZTtNQUNiLElBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNFLFNBQVMsQ0FBQyxJQUFJLENBQUM7TUFDOUcsT0FBT0osV0FBVztJQUNwQjtFQUFDO0lBQUEvRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUUsYUFBQSxFQUFlO01BQ2IsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDUCxZQUFZLEVBQUU7TUFDbkMsSUFBSSxDQUFDUSxrQkFBa0IsRUFBRTtNQUV6QixJQUFJLENBQUNELFFBQVEsQ0FBQ0osYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNNLEdBQUcsR0FBRyxJQUFJLENBQUNuQixLQUFLO01BQy9ELElBQUksQ0FBQ2lCLFFBQVEsQ0FBQ0osYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNPLEdBQUcsR0FBRyxJQUFJLENBQUNyQixLQUFLO01BQy9ELElBQUksQ0FBQ2tCLFFBQVEsQ0FBQ0osYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNRLFdBQVcsR0FBRyxJQUFJLENBQUN0QixLQUFLO01BQ3RFLElBQUksQ0FBQ3VCLGFBQWEsR0FBRyxJQUFJLENBQUNMLFFBQVEsQ0FBQ0osYUFBYSxDQUFDLHlCQUF5QixDQUFDO01BQzNFLElBQUksQ0FBQ1UsS0FBSyxHQUFHLElBQUksQ0FBQ04sUUFBUSxDQUFDSixhQUFhLENBQUMsZ0JBQWdCLENBQUM7TUFDMUQsSUFBSSxDQUFDVyxZQUFZLEdBQUcsSUFBSSxDQUFDUCxRQUFRLENBQUNKLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztNQUV4RSxJQUFJLElBQUksQ0FBQ1AsS0FBSyxLQUFLLElBQUksQ0FBQ0wsUUFBUSxFQUFFO1FBQ2hDLElBQUksQ0FBQ3FCLGFBQWEsQ0FBQ0csTUFBTSxFQUFFO01BQzdCO01BQ0EsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDdEIsTUFBTSxDQUFDO01BRTFCLE9BQU8sSUFBSSxDQUFDYSxRQUFRO0lBQ3RCO0VBQUM7SUFBQXJFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4RSxRQUFBLEVBQVU7TUFDUixJQUFJLENBQUNKLEtBQUssQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7SUFDbEQ7RUFBQztJQUFBakYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlGLFdBQUEsRUFBYTtNQUFBLElBQUEvRSxLQUFBO01BQ1gsSUFBSSxJQUFJLENBQUNxRCxNQUFNLENBQUMyQixJQUFJLENBQUMsVUFBQ0MsSUFBSTtRQUFBLE9BQUtBLElBQUksQ0FBQzdCLEdBQUcsS0FBS3BELEtBQUksQ0FBQ3VELEtBQUs7TUFBQSxFQUFDLEVBQUU7UUFDdkQsT0FBTyxJQUFJO01BQ2I7TUFDQSxPQUFPLEtBQUs7SUFDZDtFQUFDO0lBQUExRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcUMsV0FBQSxFQUFhO01BQ1gsSUFBSSxDQUFDcUMsS0FBSyxDQUFDSyxTQUFTLENBQUNILE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztJQUNyRDtFQUFDO0lBQUE3RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkUsU0FBU08sR0FBRyxFQUFFO01BQ1osSUFBSSxDQUFDVCxZQUFZLENBQUNILFdBQVcsR0FBR1ksR0FBRyxDQUFDQyxNQUFNO01BQzFDLElBQUksQ0FBQzlCLE1BQU0sR0FBRzZCLEdBQUc7TUFDakIsSUFBSSxJQUFJLENBQUNILFVBQVUsRUFBRSxFQUFFO1FBQ3JCLElBQUksQ0FBQ0gsT0FBTyxFQUFFO01BQ2hCLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ3pDLFVBQVUsRUFBRTtNQUNuQjtJQUNGO0VBQUM7SUFBQXRDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxRSxtQkFBQSxFQUFxQjtNQUFBLElBQUF0RCxNQUFBO01BQ25CLElBQUksQ0FBQ3FELFFBQVEsQ0FBQ0osYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUM3RXZFLE1BQUksQ0FBQ3dFLGlCQUFpQixFQUFFO01BQzFCLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ0osYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUM1RXZFLE1BQUksQ0FBQ2lDLGVBQWUsQ0FBQ2pDLE1BQUksQ0FBQ29CLEVBQUUsRUFBRXBCLE1BQUksQ0FBQ2tFLFVBQVUsRUFBRSxFQUFDbEUsTUFBSSxDQUFDO01BQ3ZELENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ3FELFFBQVEsQ0FBQ0osYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUNzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNyRnZFLE1BQUksQ0FBQzZDLGlCQUFpQixDQUFDN0MsTUFBSSxDQUFDb0IsRUFBRSxFQUFFcEIsTUFBSSxDQUFDO01BQ3ZDLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQWhCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1RixrQkFBQSxFQUFvQjtNQUNsQixJQUFJLENBQUM1QixZQUFZLENBQUMsSUFBSSxDQUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDRCxLQUFLLENBQUM7SUFDM0M7RUFBQztJQUFBbkQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdGLFdBQUEsRUFBYTtNQUNYLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFO01BQ3RCLElBQUksQ0FBQ1IsUUFBUSxHQUFHLElBQUk7SUFDdEI7RUFBQztFQUFBLE9BQUF6QixJQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwRmtCK0MsYUFBYTtFQUM5QixTQUFBQSxjQUFZQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsb0JBQW9CLEVBQUVDLFNBQVMsRUFBRTtJQUFBLElBQUE1RixLQUFBO0lBQUFOLGVBQUEsT0FBQThGLGFBQUE7SUFBQUssZUFBQSw2QkFrRDlDLFlBQU07TUFDdkI3RixLQUFJLENBQUM4RixxQkFBcUIsQ0FBQ0MsZUFBZSxDQUFDLFVBQVUsQ0FBQztNQUN0RC9GLEtBQUksQ0FBQzhGLHFCQUFxQixDQUFDakIsU0FBUyxDQUFDSCxNQUFNLENBQUMxRSxLQUFJLENBQUN5RixNQUFNLENBQUNPLG1CQUFtQixDQUFDO0lBQ2hGLENBQUM7SUFBQUgsZUFBQSw4QkFFcUIsWUFBTTtNQUV4QjdGLEtBQUksQ0FBQzhGLHFCQUFxQixDQUFDRyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztNQUMvRGpHLEtBQUksQ0FBQzhGLHFCQUFxQixDQUFDakIsU0FBUyxDQUFDQyxHQUFHLENBQUM5RSxLQUFJLENBQUN5RixNQUFNLENBQUNPLG1CQUFtQixDQUFDO0lBRTdFLENBQUM7SUEzREcsSUFBSSxDQUFDUCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDUyxhQUFhLEdBQUdSLFlBQVk7SUFDakMsSUFBSSxDQUFDSSxxQkFBcUIsR0FBR0gsb0JBQW9CO0lBQ2pELElBQUksQ0FBQ1EsVUFBVSxHQUFHUCxTQUFTO0VBQy9CO0VBQUNoRyxZQUFBLENBQUE0RixhQUFBO0lBQUEzRixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0csV0FBV0MsYUFBYSxFQUFFQyxZQUFZLEVBQUU7TUFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0wsYUFBYSxDQUFDcEMsYUFBYSxLQUFBNUQsTUFBQSxDQUFLbUcsYUFBYSxDQUFDcEUsRUFBRSxZQUFTO01BQ2pGb0UsYUFBYSxDQUFDeEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDVyxNQUFNLENBQUNlLGVBQWUsQ0FBQztNQUN4REQsVUFBVSxDQUFDakMsV0FBVyxHQUFHZ0MsWUFBWTtJQUN6QztFQUFDO0lBQUF6RyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkcsV0FBV0osYUFBYSxFQUFFO01BQ3RCLElBQU1FLFVBQVUsR0FBRyxJQUFJLENBQUNMLGFBQWEsQ0FBQ3BDLGFBQWEsS0FBQTVELE1BQUEsQ0FBS21HLGFBQWEsQ0FBQ3BFLEVBQUUsWUFBUztNQUNqRm9FLGFBQWEsQ0FBQ3hCLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQ2UsTUFBTSxDQUFDZSxlQUFlLENBQUM7TUFDM0RELFVBQVUsQ0FBQ2pDLFdBQVcsR0FBRyxFQUFFO0lBQy9CO0VBQUM7SUFBQXpFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0RyxvQkFBb0JMLGFBQWEsRUFBRTtNQUMvQixJQUFJLENBQUNBLGFBQWEsQ0FBQ00sUUFBUSxDQUFDQyxLQUFLLEVBQUU7UUFDL0IsSUFBSSxDQUFDUixVQUFVLENBQUNDLGFBQWEsRUFBRUEsYUFBYSxDQUFDUSxpQkFBaUIsQ0FBQztNQUNuRSxDQUFDLE1BQ0k7UUFDRCxJQUFJLENBQUNKLFVBQVUsQ0FBQ0osYUFBYSxDQUFDO01BQ2xDO0lBQ0o7RUFBQztJQUFBeEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFFLG1CQUFBLEVBQXFCO01BQUEsSUFBQXRELE1BQUE7TUFFakIsSUFBSSxDQUFDaUYscUJBQXFCLEdBQUcsSUFBSSxDQUFDSSxhQUFhLENBQUNwQyxhQUFhLENBQUMsSUFBSSxDQUFDMkIsTUFBTSxDQUFDRSxvQkFBb0IsQ0FBQztNQUMvRixJQUFJLENBQUNRLFVBQVUsR0FBR1csS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDYixhQUFhLENBQUNjLGdCQUFnQixDQUFDLElBQUksQ0FBQ3ZCLE1BQU0sQ0FBQ1ksYUFBYSxDQUFDLENBQUM7TUFDNUYsSUFBSSxDQUFDRixVQUFVLENBQUNjLE9BQU8sQ0FBQyxVQUFDQyxLQUFLLEVBQUs7UUFDL0JBLEtBQUssQ0FBQzlCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1VBQ2xDdkUsTUFBSSxDQUFDNkYsbUJBQW1CLENBQUNRLEtBQUssQ0FBQztVQUMvQnJHLE1BQUksQ0FBQ3NHLGtCQUFrQixDQUFDdEcsTUFBSSxDQUFDc0YsVUFBVSxFQUFFdEYsTUFBSSxDQUFDaUYscUJBQXFCLENBQUM7UUFDeEUsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBakcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFILG1CQUFBLEVBQXFCO01BQ2pCLElBQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNqQixVQUFVLENBQUNrQixLQUFLLENBQUMsVUFBQ0MsSUFBSTtRQUFBLE9BQUtBLElBQUksQ0FBQ1gsUUFBUSxDQUFDQyxLQUFLO01BQUEsRUFBQztNQUV4RSxJQUFJUSxXQUFXLEVBQUU7UUFDYixJQUFJLENBQUNHLGtCQUFrQixDQUFDLElBQUksQ0FBQ3pCLHFCQUFxQixDQUFDO01BQ3ZELENBQUMsTUFBTTtRQUNILElBQUksQ0FBQzBCLG1CQUFtQixDQUFDLElBQUksQ0FBQzFCLHFCQUFxQixDQUFDO01BQ3hEO0lBQ0o7RUFBQztJQUFBakcsR0FBQTtJQUFBQyxLQUFBLEVBZUQsU0FBQTJILGlCQUFBLEVBQW1CO01BQ2YsSUFBSSxDQUFDdEQsa0JBQWtCLENBQUMsSUFBSSxDQUFDK0IsYUFBYSxFQUFFLElBQUksQ0FBQ1QsTUFBTSxDQUFDO0lBQzVEO0VBQUM7RUFBQSxPQUFBRCxhQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRTBCO0FBQUEsSUFFVm1DLGtCQUFrQiwwQkFBQUMsTUFBQTtFQUFBQyxTQUFBLENBQUFGLGtCQUFBLEVBQUFDLE1BQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosa0JBQUE7RUFDckMsU0FBQUEsbUJBQVlLLGFBQWEsRUFBRTtJQUFBLElBQUFoSSxLQUFBO0lBQUFOLGVBQUEsT0FBQWlJLGtCQUFBO0lBQ3pCM0gsS0FBQSxHQUFBOEgsTUFBQSxDQUFBRyxJQUFBLE9BQU1ELGFBQWE7SUFDbkJoSSxLQUFBLENBQUtnSSxhQUFhLEdBQUdBLGFBQWE7SUFDbENoSSxLQUFBLENBQUtrSSxjQUFjLEdBQUdsSSxLQUFBLENBQUtnSSxhQUFhLENBQUNsRSxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFBQyxPQUFBOUQsS0FBQTtFQUMvRTtFQUFDSixZQUFBLENBQUErSCxrQkFBQTtJQUFBOUgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFJLGFBQWNBLGFBQVksRUFBRTtNQUMxQixJQUFJLENBQUNDLG1CQUFtQixHQUFHRCxhQUFZO0lBQ3pDO0VBQUM7SUFBQXRJLEdBQUE7SUFBQUMsS0FBQSxFQUlELFNBQUF1SSxrQkFBQSxFQUFvQjtNQUFBLElBQUF4SCxNQUFBO01BQ2xCeUgsSUFBQSxDQUFBQyxlQUFBLENBQUFaLGtCQUFBLENBQUFhLFNBQUEsOEJBQUFQLElBQUE7TUFDQSxJQUFJLENBQUNDLGNBQWMsQ0FBQzlDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDcUQsR0FBRyxFQUFLO1FBQ3JEQSxHQUFHLENBQUNDLGNBQWMsRUFBRTtRQUNwQjdILE1BQUksQ0FBQ3VILG1CQUFtQixDQUFDSyxHQUFHLENBQUM7TUFDL0IsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFkLGtCQUFBO0FBQUEsRUFuQjZDRCxpREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRGhDQSxLQUFLO0VBQ3hCLFNBQUFBLE1BQVlpQixLQUFLLEVBQUU7SUFBQWpKLGVBQUEsT0FBQWdJLEtBQUE7SUFDakIsSUFBSSxDQUFDa0IsTUFBTSxHQUFHRCxLQUFLO0lBQ25CLElBQUksQ0FBQ0UsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3hEO0VBQUNsSixZQUFBLENBQUE4SCxLQUFBO0lBQUE3SCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUosS0FBQSxFQUFPO01BQ0wsSUFBSSxDQUFDSCxNQUFNLENBQUMvRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDekNqQixRQUFRLENBQUN1QixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDeUQsZUFBZSxDQUFDO0lBQzVEO0VBQUM7SUFBQWhKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErSSxnQkFBZ0JHLEtBQUssRUFBRTtNQUNyQixJQUFJQSxLQUFLLENBQUNuSixHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzFCLElBQUksQ0FBQ29KLEtBQUssRUFBRTtNQUNkO0lBQ0Y7RUFBQztJQUFBcEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1KLE1BQUEsRUFBUTtNQUNOLElBQUksQ0FBQ0wsTUFBTSxDQUFDL0QsU0FBUyxDQUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDO01BQzVDYixRQUFRLENBQUNxRixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDTCxlQUFlLENBQUM7SUFDL0Q7RUFBQztJQUFBaEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFKLGtCQUFBLEVBQW9CO01BQUEsSUFBQW5KLEtBQUE7TUFDaEIsSUFBSSxDQUFDNEksTUFBTSxDQUFDeEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNxRCxHQUFHLEVBQUs7UUFDN0MsSUFBSUEsR0FBRyxDQUFDVyxNQUFNLEtBQUtwSixLQUFJLENBQUM0SSxNQUFNLEVBQUU7VUFDOUI1SSxLQUFJLENBQUNpSixLQUFLLEVBQUU7UUFDZDtNQUNGLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXBKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1Six5QkFBQSxFQUEyQjtNQUFBLElBQUF4SSxNQUFBO01BQ3pCLElBQUksQ0FBQytILE1BQU0sQ0FBQzlFLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDc0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDNUV2RSxNQUFJLENBQUNvSSxLQUFLLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDUjtFQUFDO0lBQUFwSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUksa0JBQUEsRUFBb0I7TUFDbEIsSUFBSSxDQUFDYyxpQkFBaUIsRUFBRTtNQUN4QixJQUFJLENBQUNFLHdCQUF3QixFQUFFO0lBRWpDO0VBQUM7RUFBQSxPQUFBM0IsS0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekN3QztBQUFBLElBRXRCNEIsYUFBYSwwQkFBQTFCLE1BQUE7RUFBQUMsU0FBQSxDQUFBeUIsYUFBQSxFQUFBMUIsTUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBdUIsYUFBQTtFQUM5QixTQUFBQSxjQUFZWCxLQUFLLEVBQUNZLFVBQVUsRUFBRTtJQUFBLElBQUF2SixLQUFBO0lBQUFOLGVBQUEsT0FBQTRKLGFBQUE7SUFDMUJ0SixLQUFBLEdBQUE4SCxNQUFBLENBQUFHLElBQUEsT0FBTVUsS0FBSztJQUNYM0ksS0FBQSxDQUFLNEksTUFBTSxHQUFHRCxLQUFLO0lBQ25CM0ksS0FBQSxDQUFLd0osV0FBVyxHQUFHRCxVQUFVO0lBQzdCdkosS0FBQSxDQUFLeUosS0FBSyxHQUFHekosS0FBQSxDQUFLNEksTUFBTSxDQUFDOUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQzNEOUQsS0FBQSxDQUFLa0ksY0FBYyxHQUFHbEksS0FBQSxDQUFLNEksTUFBTSxDQUFDOUUsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQ3JFOUQsS0FBQSxDQUFLbUcsVUFBVSxHQUFHbkcsS0FBQSxDQUFLeUosS0FBSyxDQUFDekMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0lBQzdEaEgsS0FBQSxDQUFLMEosV0FBVyxHQUFHMUosS0FBQSxDQUFLa0ksY0FBYyxDQUFDNUQsV0FBVztJQUFDLE9BQUF0RSxLQUFBO0VBQ3ZEO0VBQUNKLFlBQUEsQ0FBQTBKLGFBQUE7SUFBQXpKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2SixnQkFBQSxFQUFrQjtNQUFBLElBQUE5SSxNQUFBO01BQ2QsSUFBSSxDQUFDK0ksWUFBWSxHQUFHLENBQUMsQ0FBQztNQUN0QixJQUFJLENBQUN6RCxVQUFVLENBQUNjLE9BQU8sQ0FBQyxVQUFDQyxLQUFLO1FBQUEsT0FDekJyRyxNQUFJLENBQUMrSSxZQUFZLENBQUMxQyxLQUFLLENBQUM5RixJQUFJLENBQUMsR0FBRzhGLEtBQUssQ0FBQ3BILEtBQUs7TUFBQSxDQUFDLENBQUM7TUFFbEQsT0FBTyxJQUFJLENBQUM4SixZQUFZO0lBQzVCO0VBQUM7SUFBQS9KLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtSixNQUFBLEVBQVE7TUFDSlgsSUFBQSxDQUFBQyxlQUFBLENBQUFlLGFBQUEsQ0FBQWQsU0FBQSxrQkFBQVAsSUFBQTtNQUNBLElBQUksQ0FBQ3dCLEtBQUssQ0FBQ0ksS0FBSyxFQUFFO0lBQ3RCO0VBQUM7SUFBQWhLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnSyxhQUFhcEosTUFBTSxFQUFDO01BQ2hCLElBQUdBLE1BQU0sRUFBQztRQUNSLElBQUksQ0FBQ3dILGNBQWMsQ0FBQzVELFdBQVcsK0RBQWtCO01BQ25ELENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQzRELGNBQWMsQ0FBQzVELFdBQVcsR0FBRyxJQUFJLENBQUNvRixXQUFXO01BQ3BEO0lBQ0Y7RUFBQztJQUFBN0osR0FBQTtJQUFBQyxLQUFBLEVBRUgsU0FBQXVJLGtCQUFBLEVBQW9CO01BQUEsSUFBQS9HLE1BQUE7TUFDaEJnSCxJQUFBLENBQUFDLGVBQUEsQ0FBQWUsYUFBQSxDQUFBZCxTQUFBLDhCQUFBUCxJQUFBO01BQ0EsSUFBSSxDQUFDd0IsS0FBSyxDQUFDckUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUNxRCxHQUFHLEVBQUs7UUFDM0NBLEdBQUcsQ0FBQ0MsY0FBYyxFQUFFO1FBQ3BCcEgsTUFBSSxDQUFDa0ksV0FBVyxDQUFDbEksTUFBSSxDQUFDcUksZUFBZSxFQUFFLENBQUM7TUFDNUMsQ0FBQyxDQUFDO0lBQ047RUFBQztFQUFBLE9BQUFMLGFBQUE7QUFBQSxFQXRDc0M1Qiw0REFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZMO0FBQUEsSUFFdEJxQyxjQUFjLDBCQUFBbkMsTUFBQTtFQUFBQyxTQUFBLENBQUFrQyxjQUFBLEVBQUFuQyxNQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFnQyxjQUFBO0VBQy9CLFNBQUFBLGVBQVlwQixLQUFLLEVBQUU7SUFBQSxJQUFBM0ksS0FBQTtJQUFBTixlQUFBLE9BQUFxSyxjQUFBO0lBQ2YvSixLQUFBLEdBQUE4SCxNQUFBLENBQUFHLElBQUEsT0FBTVUsS0FBSztJQUNYM0ksS0FBQSxDQUFLNEksTUFBTSxHQUFHRCxLQUFLO0lBQ25CM0ksS0FBQSxDQUFLZ0ssUUFBUSxHQUFHaEssS0FBQSxDQUFLNEksTUFBTSxDQUFDOUUsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUMxRDlELEtBQUEsQ0FBS2lLLE1BQU0sR0FBR2pLLEtBQUEsQ0FBSzRJLE1BQU0sQ0FBQzlFLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztJQUFBLE9BQUE5RCxLQUFBO0VBRWpFO0VBQUNKLFlBQUEsQ0FBQW1LLGNBQUE7SUFBQWxLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpSixLQUFLbUIsT0FBTyxFQUFFQyxLQUFLLEVBQUU7TUFDakI3QixJQUFBLENBQUFDLGVBQUEsQ0FBQXdCLGNBQUEsQ0FBQXZCLFNBQUEsaUJBQUFQLElBQUE7TUFDQSxJQUFJLENBQUMrQixRQUFRLENBQUM1RixHQUFHLEdBQUc4RixPQUFPO01BQzNCLElBQUksQ0FBQ0YsUUFBUSxDQUFDM0YsR0FBRyxHQUFHOEYsS0FBSztNQUN6QixJQUFJLENBQUNGLE1BQU0sQ0FBQzNGLFdBQVcsR0FBRzZGLEtBQUs7SUFDbkM7RUFBQztFQUFBLE9BQUFKLGNBQUE7QUFBQSxFQWR1Q3JDLDREQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNENUIwQyxPQUFPO0VBQ3hCLFNBQUFBLFFBQUE3SyxJQUFBLEVBQXdCOEssaUJBQWlCLEVBQUU7SUFBQSxJQUE5QkMsUUFBUSxHQUFBL0ssSUFBQSxDQUFSK0ssUUFBUTtJQUFBNUssZUFBQSxPQUFBMEssT0FBQTtJQUNuQixJQUFJLENBQUNHLFVBQVUsR0FBRzFHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDdUcsaUJBQWlCLENBQUM7SUFDM0QsSUFBSSxDQUFDRyxTQUFTLEdBQUdGLFFBQVE7RUFDM0I7RUFBQzFLLFlBQUEsQ0FBQXdLLE9BQUE7SUFBQXZLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEySyxRQUFTbkQsSUFBSSxFQUFHO01BQ2QsSUFBSSxDQUFDaUQsVUFBVSxDQUFDRyxPQUFPLENBQUNwRCxJQUFJLENBQUM7SUFDL0I7RUFBQztJQUFBekgsR0FBQTtJQUFBQyxLQUFBLEVBR0QsU0FBQTZLLFlBQWFDLEtBQUssRUFBRTtNQUFBLElBQUE1SyxLQUFBO01BQ2xCNEssS0FBSyxDQUFDM0QsT0FBTyxDQUFDLFVBQUM0RCxJQUFJLEVBQUs7UUFDdEI3SyxLQUFJLENBQUN3SyxTQUFTLENBQUNLLElBQUksQ0FBQztNQUN0QixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQVQsT0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNmZ0JVLFFBQVE7RUFDekIsU0FBQUEsU0FBWUMsUUFBUSxFQUFFO0lBQUFyTCxlQUFBLE9BQUFvTCxRQUFBO0lBQ2xCLElBQUksQ0FBQ0UsU0FBUyxHQUFHbkgsUUFBUSxDQUFDQyxhQUFhLENBQUNpSCxRQUFRLENBQUMzSixJQUFJLENBQUM7SUFDdEQsSUFBSSxDQUFDNkosUUFBUSxHQUFHcEgsUUFBUSxDQUFDQyxhQUFhLENBQUNpSCxRQUFRLENBQUNySixHQUFHLENBQUM7SUFDcEQsSUFBSSxDQUFDd0osT0FBTyxHQUFFckgsUUFBUSxDQUFDQyxhQUFhLENBQUNpSCxRQUFRLENBQUNoSixNQUFNLENBQUM7RUFFekQ7RUFBQ25DLFlBQUEsQ0FBQWtMLFFBQUE7SUFBQWpMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxTCxZQUFBLEVBQWM7TUFDVixJQUFNQyxRQUFRLEdBQUc7UUFDYmhLLElBQUksRUFBRSxJQUFJLENBQUM0SixTQUFTLENBQUMxRyxXQUFXO1FBQ2hDNUMsR0FBRyxFQUFFLElBQUksQ0FBQ3VKLFFBQVEsQ0FBQzNHO01BQ3ZCLENBQUM7TUFFRCxPQUFPOEcsUUFBUTtJQUNuQjtFQUFDO0lBQUF2TCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUwsWUFBWTNJLElBQUksRUFBRTtNQUNkLElBQUksQ0FBQ3NJLFNBQVMsQ0FBQzFHLFdBQVcsR0FBRzVCLElBQUksQ0FBQ3RCLElBQUk7TUFDdEMsSUFBSSxDQUFDNkosUUFBUSxDQUFDM0csV0FBVyxHQUFHNUIsSUFBSSxDQUFDZixLQUFLO01BQ3RDLElBQUksQ0FBQ3VKLE9BQU8sQ0FBQzlHLEdBQUcsR0FBRzFCLElBQUksQ0FBQ1gsTUFBTTtJQUVsQztFQUFDO0VBQUEsT0FBQStJLFFBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJFLElBQU1RLFVBQVUsR0FBR3pILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN6RCxJQUFPeUgsU0FBUyxHQUFHRCxVQUFVLENBQUN4SCxhQUFhLENBQUMsb0JBQW9CLENBQUM7QUFDakUsSUFBTzBILFlBQVksR0FBR0YsVUFBVSxDQUFDeEgsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUMvRCxJQUFNMkgsVUFBVSxHQUFHNUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDNUQsSUFBTTRILFNBQVMsR0FBRzdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLGdCQUFnQixDQUFDO0FBQzNELElBQU02SCxpQkFBaUIsR0FBRzlILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBQ3hFLElBQU02RSxLQUFLLEdBQUc5RSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsSUFBTThILFVBQVUsR0FBRy9ILFFBQVEsQ0FBQ2dJLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDdkQsSUFBTUMsVUFBVSxHQUFHakksUUFBUSxDQUFDZ0ksY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUNsRCxJQUFNRSxjQUFjLEdBQUdsSSxRQUFRLENBQUNnSSxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQzdELElBQU1HLHNCQUFzQixHQUFHbkksUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7QUFDN0UsSUFBTW1JLFFBQVEsR0FBR3BJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxJQUFNb0ksbUJBQW1CLEdBQUdySSxRQUFRLENBQUNnSSxjQUFjLENBQUUsU0FBUyxDQUFDO0FBQy9ELElBQU05SixNQUFNLEdBQUc4QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUN6RCxJQUFNcUksV0FBVyxHQUFHdEksUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7QUFDaEUsSUFBTXNJLFdBQVcsR0FBR3ZJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUMzRCxJQUFNdUksZ0JBQWdCLEdBQUd4SSxRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUM5RSxJQUFNd0ksZ0JBQWdCLEdBQUd6SSxRQUFRLENBQUNnSSxjQUFjLENBQUMsWUFBWSxDQUFDO0FBRTlELElBQU1VLFNBQVMsR0FBRzFJLFFBQVEsQ0FBQ2dJLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDakQsSUFBTVcsUUFBUSxHQUFHM0ksUUFBUSxDQUFDZ0ksY0FBYyxDQUFDLEtBQUssQ0FBQztBQUMvQyxJQUFNWSxXQUFXLEdBQUc1SSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUMvRCxJQUFNNEksVUFBVSxHQUFHN0ksUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7QUFDakUsSUFBTTZJLFNBQVMsR0FBRzlJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBRzNELElBQU0yQixNQUFNLEdBQUc7RUFDcEJDLFlBQVksRUFBRSxtQkFBbUI7RUFDakNXLGFBQWEsRUFBRSxjQUFjO0VBQzdCVixvQkFBb0IsRUFBRSxvQkFBb0I7RUFDMUNLLG1CQUFtQixFQUFFLDRCQUE0QjtFQUNqRFEsZUFBZSxFQUFFLHdCQUF3QjtFQUN6Q0QsVUFBVSxFQUFFO0FBQ2QsQ0FBQztBQUdNLElBQU1xRyxnQkFBZ0IsR0FBRy9JLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ3RFLElBQU0rSSwwQkFBMEIsR0FBR2hKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQ2xGLElBQU1nSixXQUFXLEdBQUdqSixRQUFRLENBQUNnSSxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQzFELElBQU1qRyxTQUFTLEdBQUcvQixRQUFRLENBQUNtRCxnQkFBZ0IsQ0FBRSxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0FDdkNuRTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDYTtBQUNrQjtBQUlrRTtBQUMvRTtBQUNhO0FBQ0U7QUFDWjtBQUNSO0FBQzBCO0FBRW5FLElBQU1nRyxvQkFBb0IsR0FBRyxJQUFJeEgsb0VBQWEsQ0FBQ0Msa0VBQU0sRUFBRXFILHVFQUFXLENBQUM7QUFDbkVFLG9CQUFvQixDQUFDdkYsZ0JBQWdCLEVBQUU7QUFDdkMsSUFBTXdGLG1CQUFtQixHQUFHLElBQUl6SCxvRUFBYSxDQUFDQyxrRUFBTSxFQUFFc0csMEVBQWMsQ0FBQztBQUNyRWtCLG1CQUFtQixDQUFDeEYsZ0JBQWdCLEVBQUU7QUFFdEMsSUFBTXlGLGFBQWEsR0FBRyxJQUFJbkQscUVBQWMsQ0FBQ3VCLHNFQUFVLENBQUM7QUFDcEQ0QixhQUFhLENBQUM3RSxpQkFBaUIsRUFBRTtBQUVqQyxJQUFNOEUsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJakQsT0FBTyxFQUFFOUksSUFBSSxFQUFLO0VBQ3pDOEwsYUFBYSxDQUFDbkUsSUFBSSxDQUFDbUIsT0FBTyxFQUFFOUksSUFBSSxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTMkIsZ0JBQWdCQSxDQUFDZCxFQUFFLEVBQUU0SSxJQUFJLEVBQUU7RUFDbEN1QyxrQkFBa0IsQ0FBQ2pGLFlBQVksQ0FBQztJQUFBLE9BQU1rRixtQkFBbUIsQ0FBQ3BMLEVBQUUsRUFBRTRJLElBQUksQ0FBQztFQUFBLEVBQUM7RUFDcEV1QyxrQkFBa0IsQ0FBQ3JFLElBQUksRUFBRTtBQUMzQjtBQUVBLFNBQVNzRSxtQkFBbUJBLENBQUNwTCxFQUFFLEVBQUU0SSxJQUFJLEVBQUU7RUFDckN0SSw4REFBYyxDQUFDTixFQUFFLENBQUMsQ0FDZjlCLElBQUksQ0FBQyxZQUFNO0lBQ1YwSyxJQUFJLENBQUN2RixVQUFVLEVBQUU7SUFDakI4SCxrQkFBa0IsQ0FBQ25FLEtBQUssRUFBRTtFQUM1QixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFxRSxHQUFHLEVBQUk7SUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDO0VBQzFCLENBQUMsQ0FBQztBQUNOO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSXBFLG9FQUFhLENBQUM4Qyx1RUFBVyxFQUFFdUIsa0JBQWtCLENBQUM7QUFFNUVELGlCQUFpQixDQUFDckYsaUJBQWlCLEVBQUU7QUFFckMsSUFBTXVGLG1CQUFtQixHQUFFLElBQUlwSSxvRUFBYSxDQUFDQyxrRUFBTSxFQUFFNkcsNEVBQWdCLENBQUM7QUFDdEVzQixtQkFBbUIsQ0FBQ25HLGdCQUFnQixFQUFFO0FBRXRDLFNBQVNrRyxrQkFBa0JBLENBQUNFLFdBQVcsRUFBRTtFQUN2Q0gsaUJBQWlCLENBQUM1RCxZQUFZLENBQUMsSUFBSSxDQUFDO0VBQ3BDdkgsOERBQWMsQ0FBQ3NMLFdBQVcsQ0FBQyxDQUN4QjFOLElBQUksQ0FBQyxVQUFDdUMsSUFBSSxFQUFLO0lBQ2Q2SyxPQUFPLENBQUNDLEdBQUcsQ0FBQzlLLElBQUksQ0FBQztJQUNqQm9MLGVBQWUsQ0FBQ3pDLFdBQVcsQ0FBQzNJLElBQUksQ0FBQztJQUNqQ2dMLGlCQUFpQixDQUFDekUsS0FBSyxFQUFFO0VBQzNCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQXFFLEdBQUcsRUFBSTtJQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxPQUFPLENBQUM7RUFDMUIsQ0FBQyxDQUFDLFdBQ00sQ0FBQyxZQUFNO0lBQ2JDLGlCQUFpQixDQUFDNUQsWUFBWSxDQUFDLEtBQUssQ0FBQztFQUN2QyxDQUFDLENBQUM7QUFDTjtBQUVBdUMsNkZBQWlDLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDL0NxQixpQkFBaUIsQ0FBQzNFLElBQUksRUFBRTtFQUN4QjZFLG1CQUFtQixDQUFDcEcsbUJBQW1CLEVBQUU7QUFDM0MsQ0FBQyxDQUFDO0FBRUYsSUFBTTRGLGtCQUFrQixHQUFHLElBQUl6Rix1RUFBa0IsQ0FBQ3dFLHVFQUFXLENBQUM7QUFDOURpQixrQkFBa0IsQ0FBQy9FLGlCQUFpQixFQUFFO0FBRXRDLFNBQVMwRixVQUFVQSxDQUFDckwsSUFBSSxFQUFFQyxNQUFNLEVBQUU7RUFDaEMsSUFBTWtJLElBQUksR0FBRyxJQUFJcEksMkRBQUksQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUUsVUFBVSxFQUFFd0ssZUFBZSxFQUFFckssZUFBZSxFQUFFQyxnQkFBZ0IsQ0FBQztFQUNuRyxJQUFNYSxXQUFXLEdBQUdpSCxJQUFJLENBQUM1RyxZQUFZLEVBQUU7RUFDdkMsT0FBT0wsV0FBVztBQUNwQjtBQUNBLFNBQVNkLGVBQWVBLENBQUNiLEVBQUUsRUFBRStMLE9BQU8sRUFBRW5ELElBQUksRUFBRTtFQUMxQyxJQUFJbUQsT0FBTyxFQUFFO0lBQ1h6TCw4REFBYyxDQUFDTixFQUFFLENBQUMsQ0FDakI5QixJQUFJLENBQUMsVUFBQ3VDLElBQUksRUFBSztNQUNkbUksSUFBSSxDQUFDbEcsUUFBUSxDQUFDakMsSUFBSSxDQUFDWSxLQUFLLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBRU4sQ0FBQyxNQUFNO0lBQ05mLDJEQUFXLENBQUNzSSxJQUFJLENBQUM1SSxFQUFFLENBQUMsQ0FDaEI5QixJQUFJLENBQUMsVUFBQ3VDLElBQUksRUFBSztNQUNkbUksSUFBSSxDQUFDbEcsUUFBUSxDQUFDakMsSUFBSSxDQUFDWSxLQUFLLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ047QUFDQTtBQUVBLElBQUlYLE1BQU0sR0FBRyxJQUFJO0FBRWpCLFNBQVNzTCxvQkFBb0JBLENBQUNKLFdBQVcsRUFBRTtFQUN6Q0ssWUFBWSxDQUFDcEUsWUFBWSxDQUFDLElBQUksQ0FBQztFQUMvQnZILDJEQUFXLENBQUM7SUFBQ3pCLFNBQVMsRUFBRStNLFdBQVcsQ0FBQy9NLFNBQVM7SUFBRUMsSUFBSSxFQUFDOE0sV0FBVyxDQUFDOU07RUFBSSxDQUFDLENBQUMsQ0FDckVaLElBQUksQ0FBRSxVQUFDdUMsSUFBSSxFQUFNO0lBQUUsSUFBTW1JLElBQUksR0FBR2tELFVBQVUsQ0FBQ3JMLElBQUksRUFBRUMsTUFBTSxDQUFDO0lBQ3pEd0wsZUFBZSxDQUFDMUQsT0FBTyxDQUFDSSxJQUFJLENBQUMsRUFDN0JxRCxZQUFZLENBQUNqRixLQUFLLEVBQUU7RUFDdEIsQ0FBQyxDQUFDLFNBQ00sQ0FBQyxVQUFBcUUsR0FBRyxFQUFJO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQztFQUMxQixDQUFDLENBQUMsV0FDTSxDQUFDLFlBQU07SUFDYlMsWUFBWSxDQUFDcEUsWUFBWSxDQUFDLEtBQUssQ0FBQztFQUNsQyxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNzRSxxQkFBcUJBLENBQUNQLFdBQVcsRUFBRTtFQUMxQ1EsWUFBWSxDQUFDdkUsWUFBWSxDQUFDLElBQUksQ0FBQztFQUMvQnZILGdFQUFnQixDQUFDO0lBQUNuQixJQUFJLEVBQUV5TSxXQUFXLENBQUN6TSxJQUFJO0lBQUVNLEdBQUcsRUFBRW1NLFdBQVcsQ0FBQ25NO0VBQUcsQ0FBQyxDQUFDLENBQy9EdkIsSUFBSSxDQUFDLFVBQUN1QyxJQUFJLEVBQUs7SUFDZG9MLGVBQWUsQ0FBQ3pDLFdBQVcsQ0FBQzNJLElBQUksQ0FBQztJQUNqQzJMLFlBQVksQ0FBQ3BGLEtBQUssRUFBRTtFQUN0QixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFxRSxHQUFHLEVBQUk7SUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDO0VBQzFCLENBQUMsQ0FBQyxXQUNNLENBQUMsWUFBTTtJQUNiWSxZQUFZLENBQUN2RSxZQUFZLENBQUMsS0FBSyxDQUFDO0VBQ2xDLENBQUMsQ0FBQztBQUNKO0FBRUEsSUFBTXdFLFlBQVksR0FBR3pLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzlELElBQU1vSyxZQUFZLEdBQUcsSUFBSTVFLG9FQUFhLENBQUNnRixZQUFZLEVBQUVMLG9CQUFvQixDQUFDO0FBRTFFakMsbUdBQXVDLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDckRrQyxZQUFZLENBQUNuRixJQUFJLEVBQUU7RUFDbkJrRSxtQkFBbUIsQ0FBQ3pGLG1CQUFtQixFQUFFO0FBQzNDLENBQUMsQ0FBQztBQUNGMEcsWUFBWSxDQUFDN0YsaUJBQWlCLEVBQUU7QUFFaEMsSUFBTXlGLGVBQWUsR0FBRyxJQUFJaEQsK0RBQVEsQ0FBQztFQUNuQzFKLElBQUksRUFBRSxtQkFBbUI7RUFDekJNLEdBQUcsRUFBRSxzQkFBc0I7RUFDM0JLLE1BQU0sRUFBRTtBQUNWLENBQUMsQ0FBQztBQUVGLElBQU1zTSxZQUFZLEdBQUcsSUFBSS9FLG9FQUFhLENBQUNzRCw0RUFBZ0IsRUFBRXdCLHFCQUFxQixDQUFDO0FBRS9FdkIsdUdBQTJDLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDekQsSUFBTTBCLGVBQWUsR0FBR1QsZUFBZSxDQUFDM0MsV0FBVyxFQUFFO0VBQ3JEb0IsMkVBQWUsR0FBR2dDLGVBQWUsQ0FBQ25OLElBQUk7RUFDdENvTCwwRUFBYyxHQUFHK0IsZUFBZSxDQUFDN00sR0FBRztFQUVwQzJNLFlBQVksQ0FBQ3RGLElBQUksRUFBRTtBQUVyQixDQUFDLENBQUM7QUFFRnNGLFlBQVksQ0FBQ2hHLGlCQUFpQixFQUFFO0FBRWhDN0gsT0FBTyxDQUFDZ08sR0FBRyxDQUFDLENBQUVqTSwrREFBZSxFQUFFLEVBQUVBLDREQUFZLEVBQUUsQ0FBQyxDQUFDLENBQzlDcEMsSUFBSSxDQUFDLFVBQUFaLElBQUEsRUFBMkI7RUFBQSxJQUFBcUIsS0FBQSxHQUFBNk4sY0FBQSxDQUFBbFAsSUFBQTtJQUF4Qm1QLE9BQU8sR0FBQTlOLEtBQUE7SUFBRStOLFFBQVEsR0FBQS9OLEtBQUE7RUFDeEIrQixNQUFNLEdBQUcrTCxPQUFPLENBQUN0TCxHQUFHO0VBQ3BCMEssZUFBZSxDQUFDekMsV0FBVyxDQUFDcUQsT0FBTyxDQUFDO0VBQ3BDUCxlQUFlLENBQUN4RCxXQUFXLENBQUNnRSxRQUFRLENBQUNDLE9BQU8sRUFBRSxDQUFDO0FBQ2pELENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQXRCLEdBQUcsRUFBSTtFQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxPQUFPLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUYsSUFBTVUsZUFBZSxHQUFHLElBQUkvRCw4REFBTyxDQUFDO0VBQ2xDMUgsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNSNEgsUUFBUSxFQUFFLFNBQUFBLFNBQUM1SCxJQUFJLEVBQUs7SUFDbEIsSUFBTW1JLElBQUksR0FBR2tELFVBQVUsQ0FBQ3JMLElBQUksRUFBRUMsTUFBTSxDQUFDO0lBQ3JDd0wsZUFBZSxDQUFDMUQsT0FBTyxDQUFDSSxJQUFJLENBQUM7RUFDL0I7QUFDRixDQUFDLEVBQUUsV0FBVyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9vcHVwRGVsZXRlQ29uZmlybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBjbGFzcyBBcGkge1xyXG4gICAgY29uc3RydWN0b3Ioe3VybCwgaGVhZGVyc30pIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gaGVhZGVyc1snYXV0aG9yaXphdGlvbiddXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrUmVzdWx0KHJlcykge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LAgJHtyZXMuc3RhdHVzfWApXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2FyZCh7cGxhY2VuYW1lLCBsaW5rfSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBwbGFjZW5hbWUsIGxpbms6IGxpbmsgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L3VzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRVc2VyRGF0YSh7bmFtZSwgam9ifSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogbmFtZSwgYWJvdXQ6IGpvYiB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRBdmF0YXIgKHthdmF0YXJ9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS91c2Vycy9tZS9hdmF0YXJgLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6YXZhdGFyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHV0TGlrZShpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcmVtb3ZlTGlrZShpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBuZXcgQXBpICh7XHJcbiAgICB1cmw6IGBodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTYzYCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogJzE0ZDE2ZWM3LWM3ZTgtNDA3MC1iZDQwLTMxNTkxY2FkYjE2OScsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIFxyXG4gIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgdXNlcklkLCB0ZW1wbGF0ZVNlbGVjdG9yLCBwb3B1cE9wZW5lciwgaGFuZGxlTGlrZUNsaWNrLCBoYW5kbGVUcmFzaENsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XG4gICAgdGhpcy5pZCA9IGRhdGEuX2lkO1xuICAgIHRoaXMuX215SWQgPSB1c2VySWQ7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3JcbiAgICB0aGlzLl9wb3B1cE9wZW5lciA9IHBvcHVwT3BlbmVyXG4gICAgdGhpcy5oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlVHJhc2hDbGljayA9IGhhbmRsZVRyYXNoQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2l0ZW0nKS5jbG9uZU5vZGUodHJ1ZSlcbiAgICByZXR1cm4gY2FyZEVsZW1lbnRcbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKVxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuc3JjID0gdGhpcy5fbGlua1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuYWx0ID0gdGhpcy5fbmFtZVxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX25hbWUnKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWVcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19kZWxldGUtYnV0dG9uJyk7XG4gICAgdGhpcy5fbGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UnKTtcbiAgICB0aGlzLl9saWtlQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2Vjb3VudGVyJyk7XG5cbiAgICBpZiAodGhpcy5fbXlJZCAhPT0gdGhpcy5fb3duZXJJZCkge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLnNldExpa2VzKHRoaXMuX2xpa2VzKVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIGFkZExpa2UoKSB7XG4gICAgdGhpcy5fbGlrZS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50X19saWtlX2FjdGl2ZScpO1xuICB9XG5cbiAgX2NoZWNrTGlrZSgpIHtcbiAgICBpZiAodGhpcy5fbGlrZXMuc29tZSgobGlrZSkgPT4gbGlrZS5faWQgPT09IHRoaXMuX215SWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlLmNsYXNzTGlzdC5yZW1vdmUoJ2VsZW1lbnRfX2xpa2VfYWN0aXZlJyk7ICAgICAgXG4gIH1cblxuICBzZXRMaWtlcyhhcnIpIHtcbiAgICB0aGlzLl9saWtlQ291bnRlci50ZXh0Q29udGVudCA9IGFyci5sZW5ndGg7XG4gICAgdGhpcy5fbGlrZXMgPSBhcnI7XG4gICAgaWYgKHRoaXMuX2NoZWNrTGlrZSgpKSB7XG4gICAgICB0aGlzLmFkZExpa2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUxpa2UoKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljaygpXG4gICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUxpa2VDbGljayh0aGlzLmlkLCB0aGlzLl9jaGVja0xpa2UoKSx0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZVRyYXNoQ2xpY2sodGhpcy5pZCwgdGhpcyk7XG4gICAgfSlcbiAgfVxuXG4gIF9oYW5kbGVJbWFnZUNsaWNrKCkge1xuICAgIHRoaXMuX3BvcHVwT3BlbmVyKHRoaXMuX2xpbmssIHRoaXMuX25hbWUpXG4gIH1cblxuICByZW1vdmVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtU2VsZWN0b3IsIHN1Ym1pdEJ1dHRvblNlbGVjdG9yLCBpbnB1dExpc3QpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGZvcm1TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gaW5wdXRMaXN0O1xuICAgIH1cblxuICAgIF9zaG93RXJyb3IoaW5wdXRTZWxlY3RvciwgZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRTZWxlY3Rvci5pZH0tZXJyb3JgKTtcbiAgICAgICAgaW5wdXRTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yQ2xhc3MudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgfTtcblxuICAgIF9oaWRlRXJyb3IoaW5wdXRTZWxlY3Rvcikge1xuICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZm9ybVNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0U2VsZWN0b3IuaWR9LWVycm9yYCk7XG4gICAgICAgIGlucHV0U2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvckNsYXNzLnRleHRDb250ZW50ID0gJydcbiAgICB9O1xuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghaW5wdXRTZWxlY3Rvci52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd0Vycm9yKGlucHV0U2VsZWN0b3IsIGlucHV0U2VsZWN0b3IudmFsaWRhdGlvbk1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXRTZWxlY3RvcilcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvcilcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5pbnB1dFNlbGVjdG9yKSk7XG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1Jc1ZhbGlkID0gdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KChpdGVtKSA9PiBpdGVtLnZhbGlkaXR5LnZhbGlkKTtcblxuICAgICAgICBpZiAoZm9ybUlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU3VibWl0QnV0dG9uKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU3VibWl0QnV0dG9uKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgIH1cblxuICAgIGRpc2FibGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcylcblxuICAgIH1cblxuXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybVNlbGVjdG9yLCB0aGlzLmNvbmZpZylcbiAgICB9XG5cbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERlbGV0ZUNvbmZpcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLnBvcHVwU2VsZWN0b3IgPSBwb3B1cFNlbGVjdG9yXHJcbiAgICB0aGlzLl9idXR0b25Db25maXJtID0gdGhpcy5wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc2F2ZWJ1dHRvbicpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0RGVsZXRlIChzdWJtaXREZWxldGUpIHtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdERlbGV0ZSA9IHN1Ym1pdERlbGV0ZTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fYnV0dG9uQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0RGVsZXRlKGV2dClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cCkge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBwb3B1cDtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXHJcbiAgfVxyXG5cclxuICBfY2xvc2VQb3B1cEJ5QXJlYSgpIHtcclxuICAgICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IHRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBfY2xvc2VQb3B1cEJ5Q2xvc2luZ0ljb24oKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NpbmctaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgfSlcclxuICB9XHJcbiAgXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9jbG9zZVBvcHVwQnlBcmVhKClcclxuICAgIHRoaXMuX2Nsb3NlUG9wdXBCeUNsb3NpbmdJY29uKClcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXAsc3VibWl0Rm9ybSkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwKTtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IHBvcHVwXHJcbiAgICAgICAgdGhpcy5fc3VibWl0Rm9ybSA9IHN1Ym1pdEZvcm07XHJcbiAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGFpbmVyJylcclxuICAgICAgICB0aGlzLl9idXR0b25Db25maXJtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19zYXZlYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2luZm8nKVxyXG4gICAgICAgIHRoaXMuX3RleHRCdXR0b24gPSB0aGlzLl9idXR0b25Db25maXJtLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlcyA9IHt9XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PlxyXG4gICAgICAgICAgICAodGhpcy5faW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSkpXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpXHJcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2F2aW5nKHN0YXR1cyl7XHJcbiAgICAgICAgaWYoc3RhdHVzKXtcclxuICAgICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSBgQ9C+0YXRgNCw0L3QtdC90LjQtS4uLmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0QnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cCkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwKTtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IHBvcHVwXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1hZ2UnKVxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZS1uYW1lJylcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHBpY3R1cmUsIHRpdGxlKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5zcmMgPSBwaWN0dXJlXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5hbHQgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7cmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtIChpdGVtKSAge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVySXRlbXMgKGNhcmRzKSB7XHJcbiAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlcihjYXJkKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJJbmZvLm5hbWUpXHJcbiAgICAgICAgdGhpcy5fdXNlcmpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckluZm8uam9iKVxyXG4gICAgICAgIHRoaXMuX2F2YXRhciA9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VySW5mby5hdmF0YXIpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl91c2VybmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgam9iOiB0aGlzLl91c2Vyam9iLnRleHRDb250ZW50LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXJEYXRhXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJuYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuX3VzZXJqb2IudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xyXG4gICAgICAgIHRoaXMuX2F2YXRhci5zcmMgPSBkYXRhLmF2YXRhclxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2ltYWdlJyk7XG5leHBvcnQgY29uc3QgIGltYWdlTmFtZSA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZS1uYW1lJyk7XG5leHBvcnQgY29uc3QgIGltYWdlUGljdHVyZSA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpXG5leHBvcnQgY29uc3QgcGxhY2VQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpXG5leHBvcnQgY29uc3QgcGhvdG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5lbGVtZW50X19uYW1lJylcbmV4cG9ydCBjb25zdCBidXR0b25zQ2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2luZy1pY29uJyk7XG5leHBvcnQgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpXG5leHBvcnQgY29uc3QgcGxhY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW5hbWUnKTtcbmV4cG9ydCBjb25zdCBwbGFjZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmsnKTtcbmV4cG9ydCBjb25zdCBmb3JtQ3JlYXRlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZm9ybScpXG5leHBvcnQgY29uc3QgYnV0dG9uT3BlbkFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJylcbmV4cG9ydCBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50cycpXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uQWRkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICgnYWRkY2FyZCcpXG5leHBvcnQgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhcicpXG5leHBvcnQgY29uc3QgcG9wdXBEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZGVsZXRlLWNhcmQnKVxuZXhwb3J0IGNvbnN0IHBvcHVwQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2F2YXRhcicpXG5leHBvcnQgY29uc3QgZWRpdEF2YXRhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hdmF0YXItZWRpdGJ1dHRvbicpXG5leHBvcnQgY29uc3QgZm9ybUNoYW5nZUF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXJmb3JtJylcblxuZXhwb3J0IGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYW1lJylcbmV4cG9ydCBjb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKb2InKVxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2hlYWRpbmcnKVxuZXhwb3J0IGNvbnN0IHByb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fc3ViaGVhZGluZycpXG5leHBvcnQgY29uc3QgY2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZC1jYXJkJylcblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2NvbnRhaW5lcicsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2luZm8nLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc2F2ZWJ1dHRvbicsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fc2F2ZWJ1dHRvbl9pbmFjdGl2ZScsXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbmZvX3R5cGVfZXJyb3InLFxuICBlcnJvckNsYXNzOiAncG9wdXBfX2luZm8tZXJyb3InLFxufVxuXG5cbmV4cG9ydCBjb25zdCBwb3B1cEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2VkaXQtcHJvZmlsZScpO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZUZvcm0nKVxuZXhwb3J0IGNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKCcucG9wdXBfX2luZm8nKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGltYWdlUG9wdXAsIGluaXRpYWxDYXJkcywgZm9ybUNyZWF0ZUNhcmQsIGJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAsIGVsZW1lbnRzLCBpbWFnZVBpY3R1cmUsIGltYWdlTmFtZSwgY29uZmlnLCBwb3B1cEVkaXRQcm9maWxlLFxyXG4gIGJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwLCBuYW1lSW5wdXQsIGpvYklucHV0LCBwcm9maWxlRm9ybSwgcGxhY2VUaXRsZSwgcGxhY2VJbWFnZSwgaW5wdXRMaXN0LCBwcm9maWxlTmFtZSwgXHJcbiAgcHJvZmlsZUpvYiwgcG9wdXBEZWxldGUsIHBvcHVwQXZhdGFyLCBlZGl0QXZhdGFyQnV0dG9uLGNhcmRQb3B1cCwgZm9ybUNoYW5nZUF2YXRhcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzLmpzXCJcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiXHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQge2FwaX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XHJcbmltcG9ydCBQb3B1cERlbGV0ZUNvbmZpcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb29wdXBEZWxldGVDb25maXJtJztcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwcm9maWxlRm9ybSlcclxuZWRpdFByb2ZpbGVWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpXHJcbmNvbnN0IGNyZWF0ZUNhcmRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1DcmVhdGVDYXJkKVxyXG5jcmVhdGVDYXJkVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKVxyXG5cclxuY29uc3QgcGljdHVyZU9wZW5lZCA9IG5ldyBQb3B1cFdpdGhJbWFnZShpbWFnZVBvcHVwKVxyXG5waWN0dXJlT3BlbmVkLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcbmNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChwaWN0dXJlLCBuYW1lKSA9PiB7XHJcbiAgcGljdHVyZU9wZW5lZC5vcGVuKHBpY3R1cmUsIG5hbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRyYXNoQ2xpY2soaWQsIGNhcmQpIHtcclxuICBwb3B1cERlbGV0ZUNvbmZpcm0uc3VibWl0RGVsZXRlKCgpID0+IGhhbmRsZURlbGV0ZUNvbmZpcm0oaWQsIGNhcmQpKVxyXG4gIHBvcHVwRGVsZXRlQ29uZmlybS5vcGVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNvbmZpcm0oaWQsIGNhcmQpIHtcclxuICBhcGkuZGVsZXRlQ2FyZChpZClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY2FyZC5yZW1vdmVDYXJkKCk7XHJcbiAgICAgIHBvcHVwRGVsZXRlQ29uZmlybS5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwb3B1cENoYW5nZUF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQXZhdGFyLCBoYW5kbGVDaGFuZ2VBdmF0YXIpO1xyXG5cclxucG9wdXBDaGFuZ2VBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHZhbGlkaXR5UG9wdXBBdmF0YXI9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUNoYW5nZUF2YXRhcik7XHJcbnZhbGlkaXR5UG9wdXBBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQXZhdGFyKGlucHV0VmFsdWVzKSB7XHJcbiAgcG9wdXBDaGFuZ2VBdmF0YXIucmVuZGVyU2F2aW5nKHRydWUpXHJcbiAgYXBpLmVkaXRBdmF0YXIoaW5wdXRWYWx1ZXMpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB1c2VySW5mb3JtYXRpb24uc2V0VXNlckluZm8oZGF0YSk7XHJcbiAgICAgIHBvcHVwQ2hhbmdlQXZhdGFyLmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgcG9wdXBDaGFuZ2VBdmF0YXIucmVuZGVyU2F2aW5nKGZhbHNlKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmVkaXRBdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBDaGFuZ2VBdmF0YXIub3BlbigpO1xyXG4gIHZhbGlkaXR5UG9wdXBBdmF0YXIuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpXHJcbn0pO1xyXG5cclxuY29uc3QgcG9wdXBEZWxldGVDb25maXJtID0gbmV3IFBvcHVwRGVsZXRlQ29uZmlybShwb3B1cERlbGV0ZSk7XHJcbnBvcHVwRGVsZXRlQ29uZmlybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhLCB1c2VySWQpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoZGF0YSwgdXNlcklkLCAnLmVsZW1lbnQnLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZUxpa2VDbGljaywgaGFuZGxlVHJhc2hDbGljaylcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKClcclxuICByZXR1cm4gY2FyZEVsZW1lbnRcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVMaWtlQ2xpY2soaWQsIGlzTGlrZWQsIGNhcmQpIHtcclxuICBpZiAoaXNMaWtlZCkge1xyXG4gICAgYXBpLnJlbW92ZUxpa2UoaWQpXHJcbiAgICAudGhlbigoZGF0YSkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICBjYXJkLnNldExpa2VzKGRhdGEubGlrZXMpOyAgICAgICAgICAgIFxyXG4gICAgfSlcclxuXHJcbn0gZWxzZSB7XHJcbiBhcGkucHV0TGlrZShjYXJkLmlkKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY2FyZC5zZXRMaWtlcyhkYXRhLmxpa2VzKTtcclxuICAgIH0pXHJcbn1cclxufVxyXG5cclxubGV0IHVzZXJJZCA9IG51bGxcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRGb3JtU3VibWl0KGlucHV0VmFsdWVzKSB7XHJcbiAgcG9wdXBBZGRGb3JtLnJlbmRlclNhdmluZyh0cnVlKVxyXG4gIGFwaS5hZGRDYXJkKHtwbGFjZW5hbWU6IGlucHV0VmFsdWVzLnBsYWNlbmFtZSwgbGluazppbnB1dFZhbHVlcy5saW5rfSlcclxuICAudGhlbiAoKGRhdGEpID0+ICB7IGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGRhdGEsIHVzZXJJZClcclxuICBkZWZhdWx0Q2FyZExpc3QuYWRkSXRlbShjYXJkKSxcclxuICBwb3B1cEFkZEZvcm0uY2xvc2UoKVxyXG59KVxyXG4gIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgfSlcclxuICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICBwb3B1cEFkZEZvcm0ucmVuZGVyU2F2aW5nKGZhbHNlKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvZmlsZWZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBwb3B1cFByb2ZpbGUucmVuZGVyU2F2aW5nKHRydWUpXHJcbiAgYXBpLmVkaXRVc2VyRGF0YSh7bmFtZTogaW5wdXRWYWx1ZXMubmFtZSwgam9iOiBpbnB1dFZhbHVlcy5qb2J9KVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICB1c2VySW5mb3JtYXRpb24uc2V0VXNlckluZm8oZGF0YSlcclxuICAgIHBvcHVwUHJvZmlsZS5jbG9zZSgpXHJcbiAgfSlcclxuICAuY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gIH0pXHJcbiAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgcG9wdXBQcm9maWxlLnJlbmRlclNhdmluZyhmYWxzZSk7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgcG9wdXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZC1jYXJkJyk7XHJcbmNvbnN0IHBvcHVwQWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQWRkQ2FyZCwgY3JlYXRlQ2FyZEZvcm1TdWJtaXQpXHJcblxyXG5idXR0b25PcGVuQWRkQ2FyZFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBvcHVwQWRkRm9ybS5vcGVuKClcclxuICBjcmVhdGVDYXJkVmFsaWRhdG9yLmRpc2FibGVTdWJtaXRCdXR0b24oKVxyXG59KVxyXG5wb3B1cEFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuY29uc3QgdXNlckluZm9ybWF0aW9uID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiAnLnByb2ZpbGVfX2hlYWRpbmcnLFxyXG4gIGpvYjogJy5wcm9maWxlX19zdWJoZWFkaW5nJyxcclxuICBhdmF0YXI6ICcucHJvZmlsZV9fYXZhdGFyJ1xyXG59KVxyXG5cclxuY29uc3QgcG9wdXBQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBFZGl0UHJvZmlsZSwgZWRpdFByb2ZpbGVmb3JtU3VibWl0KVxyXG5cclxuYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgdXNlck9yaWdpblZhbHVlID0gdXNlckluZm9ybWF0aW9uLmdldFVzZXJJbmZvKClcclxuICBuYW1lSW5wdXQudmFsdWUgPSB1c2VyT3JpZ2luVmFsdWUubmFtZVxyXG4gIGpvYklucHV0LnZhbHVlID0gdXNlck9yaWdpblZhbHVlLmpvYlxyXG5cclxuICBwb3B1cFByb2ZpbGUub3BlbigpXHJcblxyXG59KTtcclxuXHJcbnBvcHVwUHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpXHJcblxyXG5Qcm9taXNlLmFsbChbIGFwaS5nZXRVc2VyRGF0YSgpLCBhcGkuZ2V0Q2FyZHMoKV0pXHJcbiAgLnRoZW4oKFsgcmVzVXNlciwgcmVzQ2FyZHMgXSkgPT4ge1xyXG4gICAgdXNlcklkID0gcmVzVXNlci5faWRcclxuICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhyZXNVc2VyKVxyXG4gICAgZGVmYXVsdENhcmRMaXN0LnJlbmRlckl0ZW1zKHJlc0NhcmRzLnJldmVyc2UoKSlcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZGVmYXVsdENhcmRMaXN0ID0gbmV3IFNlY3Rpb24oe1xyXG4gICAgZGF0YToge30sXHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSwgdXNlcklkKVxyXG4gICAgICBkZWZhdWx0Q2FyZExpc3QuYWRkSXRlbShjYXJkKVxyXG4gICAgfVxyXG4gIH0sICcuZWxlbWVudHMnKTsiXSwibmFtZXMiOlsiQXBpIiwiX3JlZiIsInVybCIsImhlYWRlcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdG9rZW4iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldENhcmRzIiwiX3RoaXMiLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXMiLCJfY2hlY2tSZXN1bHQiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiYWRkQ2FyZCIsIl9yZWYyIiwiX3RoaXMyIiwicGxhY2VuYW1lIiwibGluayIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImdldFVzZXJEYXRhIiwiX3RoaXMzIiwiZWRpdFVzZXJEYXRhIiwiX3JlZjMiLCJfdGhpczQiLCJqb2IiLCJhYm91dCIsImVkaXRBdmF0YXIiLCJfcmVmNCIsIl90aGlzNSIsImF2YXRhciIsInB1dExpa2UiLCJpZCIsIl90aGlzNiIsInJlbW92ZUxpa2UiLCJfdGhpczciLCJkZWxldGVDYXJkIiwiX3RoaXM4IiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsIkNhcmQiLCJkYXRhIiwidXNlcklkIiwidGVtcGxhdGVTZWxlY3RvciIsInBvcHVwT3BlbmVyIiwiaGFuZGxlTGlrZUNsaWNrIiwiaGFuZGxlVHJhc2hDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2xpa2VzIiwibGlrZXMiLCJfbXlJZCIsIl90ZW1wbGF0ZVNlbGVjdG9yIiwiX3BvcHVwT3BlbmVyIiwiX2hhbmRsZVRyYXNoQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZW5lcmF0ZUNhcmQiLCJfZWxlbWVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiX2RlbGV0ZUJ1dHRvbiIsIl9saWtlIiwiX2xpa2VDb3VudGVyIiwicmVtb3ZlIiwic2V0TGlrZXMiLCJhZGRMaWtlIiwiY2xhc3NMaXN0IiwiYWRkIiwiX2NoZWNrTGlrZSIsInNvbWUiLCJsaWtlIiwiYXJyIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVJbWFnZUNsaWNrIiwicmVtb3ZlQ2FyZCIsImRlZmF1bHQiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybVNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbnB1dExpc3QiLCJfZGVmaW5lUHJvcGVydHkiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwiX2Zvcm1TZWxlY3RvciIsIl9pbnB1dExpc3QiLCJfc2hvd0Vycm9yIiwiaW5wdXRTZWxlY3RvciIsImVycm9yTWVzc2FnZSIsImVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfaGlkZUVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5wdXQiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JtSXNWYWxpZCIsImV2ZXJ5IiwiaXRlbSIsImVuYWJsZVN1Ym1pdEJ1dHRvbiIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJlbmFibGVWYWxpZGF0aW9uIiwiUG9wdXAiLCJQb3B1cERlbGV0ZUNvbmZpcm0iLCJfUG9wdXAiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwb3B1cFNlbGVjdG9yIiwiY2FsbCIsIl9idXR0b25Db25maXJtIiwic3VibWl0RGVsZXRlIiwiX2hhbmRsZVN1Ym1pdERlbGV0ZSIsInNldEV2ZW50TGlzdGVuZXJzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwicG9wdXAiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwib3BlbiIsImV2ZW50IiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2Nsb3NlUG9wdXBCeUFyZWEiLCJ0YXJnZXQiLCJfY2xvc2VQb3B1cEJ5Q2xvc2luZ0ljb24iLCJQb3B1cFdpdGhGb3JtIiwic3VibWl0Rm9ybSIsIl9zdWJtaXRGb3JtIiwiX2Zvcm0iLCJfdGV4dEJ1dHRvbiIsIl9nZXRJbnB1dFZhbHVlcyIsIl9pbnB1dFZhbHVlcyIsInJlc2V0IiwicmVuZGVyU2F2aW5nIiwiUG9wdXBXaXRoSW1hZ2UiLCJfcGljdHVyZSIsIl90aXRsZSIsInBpY3R1cmUiLCJ0aXRsZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX2NvbnRhaW5lciIsIl9yZW5kZXJlciIsImFkZEl0ZW0iLCJwcmVwZW5kIiwicmVuZGVySXRlbXMiLCJjYXJkcyIsImNhcmQiLCJVc2VySW5mbyIsInVzZXJJbmZvIiwiX3VzZXJuYW1lIiwiX3VzZXJqb2IiLCJfYXZhdGFyIiwiZ2V0VXNlckluZm8iLCJ1c2VyRGF0YSIsInNldFVzZXJJbmZvIiwiaW1hZ2VQb3B1cCIsImltYWdlTmFtZSIsImltYWdlUGljdHVyZSIsInBsYWNlUGhvdG8iLCJwaG90b05hbWUiLCJidXR0b25zQ2xvc2VQb3B1cCIsInBsYWNlVGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsInBsYWNlSW1hZ2UiLCJmb3JtQ3JlYXRlQ2FyZCIsImJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAiLCJlbGVtZW50cyIsInN1Ym1pdEJ1dHRvbkFkZEZvcm0iLCJwb3B1cERlbGV0ZSIsInBvcHVwQXZhdGFyIiwiZWRpdEF2YXRhckJ1dHRvbiIsImZvcm1DaGFuZ2VBdmF0YXIiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInByb2ZpbGVOYW1lIiwicHJvZmlsZUpvYiIsImNhcmRQb3B1cCIsInBvcHVwRWRpdFByb2ZpbGUiLCJidXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cCIsInByb2ZpbGVGb3JtIiwiaW5pdGlhbENhcmRzIiwiZWRpdFByb2ZpbGVWYWxpZGF0b3IiLCJjcmVhdGVDYXJkVmFsaWRhdG9yIiwicGljdHVyZU9wZW5lZCIsImhhbmRsZUNhcmRDbGljayIsInBvcHVwRGVsZXRlQ29uZmlybSIsImhhbmRsZURlbGV0ZUNvbmZpcm0iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInBvcHVwQ2hhbmdlQXZhdGFyIiwiaGFuZGxlQ2hhbmdlQXZhdGFyIiwidmFsaWRpdHlQb3B1cEF2YXRhciIsImlucHV0VmFsdWVzIiwidXNlckluZm9ybWF0aW9uIiwiY3JlYXRlQ2FyZCIsImlzTGlrZWQiLCJjcmVhdGVDYXJkRm9ybVN1Ym1pdCIsInBvcHVwQWRkRm9ybSIsImRlZmF1bHRDYXJkTGlzdCIsImVkaXRQcm9maWxlZm9ybVN1Ym1pdCIsInBvcHVwUHJvZmlsZSIsInBvcHVwQWRkQ2FyZCIsInVzZXJPcmlnaW5WYWx1ZSIsImFsbCIsIl9zbGljZWRUb0FycmF5IiwicmVzVXNlciIsInJlc0NhcmRzIiwicmV2ZXJzZSJdLCJzb3VyY2VSb290IjoiIn0=