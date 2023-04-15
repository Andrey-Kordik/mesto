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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TVUsZUFBZSxHQUFHLElBQUkvRCw4REFBTyxDQUFDO0VBQ2xDMUgsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNSNEgsUUFBUSxFQUFFLFNBQUFBLFNBQUM1SCxJQUFJLEVBQUs7SUFDbEIsSUFBTW1JLElBQUksR0FBR2tELFVBQVUsQ0FBQ3JMLElBQUksRUFBRUMsTUFBTSxDQUFDO0lBQ3JDd0wsZUFBZSxDQUFDMUQsT0FBTyxDQUFDSSxJQUFJLENBQUM7RUFDL0I7QUFDRixDQUFDLEVBQUUsV0FBVyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9vcHVwRGVsZXRlQ29uZmlybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBjbGFzcyBBcGkge1xyXG4gICAgY29uc3RydWN0b3Ioe3VybCwgaGVhZGVyc30pIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gaGVhZGVyc1snYXV0aG9yaXphdGlvbiddXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrUmVzdWx0KHJlcykge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LAgJHtyZXMuc3RhdHVzfWApXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2FyZCh7cGxhY2VuYW1lLCBsaW5rfSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBwbGFjZW5hbWUsIGxpbms6IGxpbmsgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L3VzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRVc2VyRGF0YSh7bmFtZSwgam9ifSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogbmFtZSwgYWJvdXQ6IGpvYiB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRBdmF0YXIgKHthdmF0YXJ9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS91c2Vycy9tZS9hdmF0YXJgLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6YXZhdGFyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHV0TGlrZShpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcmVtb3ZlTGlrZShpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBuZXcgQXBpICh7XHJcbiAgICB1cmw6IGBodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTYzYCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogJzE0ZDE2ZWM3LWM3ZTgtNDA3MC1iZDQwLTMxNTkxY2FkYjE2OScsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIFxyXG4gIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgdXNlcklkLCB0ZW1wbGF0ZVNlbGVjdG9yLCBwb3B1cE9wZW5lciwgaGFuZGxlTGlrZUNsaWNrLCBoYW5kbGVUcmFzaENsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XG4gICAgdGhpcy5pZCA9IGRhdGEuX2lkO1xuICAgIHRoaXMuX215SWQgPSB1c2VySWQ7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3JcbiAgICB0aGlzLl9wb3B1cE9wZW5lciA9IHBvcHVwT3BlbmVyXG4gICAgdGhpcy5oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlVHJhc2hDbGljayA9IGhhbmRsZVRyYXNoQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2l0ZW0nKS5jbG9uZU5vZGUodHJ1ZSlcbiAgICByZXR1cm4gY2FyZEVsZW1lbnRcbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKVxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuc3JjID0gdGhpcy5fbGlua1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuYWx0ID0gdGhpcy5fbmFtZVxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX25hbWUnKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWVcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19kZWxldGUtYnV0dG9uJyk7XG4gICAgdGhpcy5fbGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UnKTtcbiAgICB0aGlzLl9saWtlQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2Vjb3VudGVyJyk7XG5cbiAgICBpZiAodGhpcy5fbXlJZCAhPT0gdGhpcy5fb3duZXJJZCkge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLnNldExpa2VzKHRoaXMuX2xpa2VzKVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIGFkZExpa2UoKSB7XG4gICAgdGhpcy5fbGlrZS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50X19saWtlX2FjdGl2ZScpO1xuICB9XG5cbiAgX2NoZWNrTGlrZSgpIHtcbiAgICBpZiAodGhpcy5fbGlrZXMuc29tZSgobGlrZSkgPT4gbGlrZS5faWQgPT09IHRoaXMuX215SWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlLmNsYXNzTGlzdC5yZW1vdmUoJ2VsZW1lbnRfX2xpa2VfYWN0aXZlJyk7ICAgICAgXG4gIH1cblxuICBzZXRMaWtlcyhhcnIpIHtcbiAgICB0aGlzLl9saWtlQ291bnRlci50ZXh0Q29udGVudCA9IGFyci5sZW5ndGg7XG4gICAgdGhpcy5fbGlrZXMgPSBhcnI7XG4gICAgaWYgKHRoaXMuX2NoZWNrTGlrZSgpKSB7XG4gICAgICB0aGlzLmFkZExpa2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUxpa2UoKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljaygpXG4gICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUxpa2VDbGljayh0aGlzLmlkLCB0aGlzLl9jaGVja0xpa2UoKSx0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZVRyYXNoQ2xpY2sodGhpcy5pZCwgdGhpcyk7XG4gICAgfSlcbiAgfVxuXG4gIF9oYW5kbGVJbWFnZUNsaWNrKCkge1xuICAgIHRoaXMuX3BvcHVwT3BlbmVyKHRoaXMuX2xpbmssIHRoaXMuX25hbWUpXG4gIH1cblxuICByZW1vdmVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtU2VsZWN0b3IsIHN1Ym1pdEJ1dHRvblNlbGVjdG9yLCBpbnB1dExpc3QpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGZvcm1TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gaW5wdXRMaXN0O1xuICAgIH1cblxuICAgIF9zaG93RXJyb3IoaW5wdXRTZWxlY3RvciwgZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRTZWxlY3Rvci5pZH0tZXJyb3JgKTtcbiAgICAgICAgaW5wdXRTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yQ2xhc3MudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgfTtcblxuICAgIF9oaWRlRXJyb3IoaW5wdXRTZWxlY3Rvcikge1xuICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZm9ybVNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0U2VsZWN0b3IuaWR9LWVycm9yYCk7XG4gICAgICAgIGlucHV0U2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvckNsYXNzLnRleHRDb250ZW50ID0gJydcbiAgICB9O1xuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghaW5wdXRTZWxlY3Rvci52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd0Vycm9yKGlucHV0U2VsZWN0b3IsIGlucHV0U2VsZWN0b3IudmFsaWRhdGlvbk1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXRTZWxlY3RvcilcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvcilcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5pbnB1dFNlbGVjdG9yKSk7XG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1Jc1ZhbGlkID0gdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KChpdGVtKSA9PiBpdGVtLnZhbGlkaXR5LnZhbGlkKTtcblxuICAgICAgICBpZiAoZm9ybUlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU3VibWl0QnV0dG9uKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU3VibWl0QnV0dG9uKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgIH1cblxuICAgIGRpc2FibGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcylcblxuICAgIH1cblxuXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybVNlbGVjdG9yLCB0aGlzLmNvbmZpZylcbiAgICB9XG5cbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERlbGV0ZUNvbmZpcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLnBvcHVwU2VsZWN0b3IgPSBwb3B1cFNlbGVjdG9yXHJcbiAgICB0aGlzLl9idXR0b25Db25maXJtID0gdGhpcy5wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc2F2ZWJ1dHRvbicpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0RGVsZXRlIChzdWJtaXREZWxldGUpIHtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdERlbGV0ZSA9IHN1Ym1pdERlbGV0ZTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fYnV0dG9uQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0RGVsZXRlKGV2dClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cCkge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBwb3B1cDtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXHJcbiAgfVxyXG5cclxuICBfY2xvc2VQb3B1cEJ5QXJlYSgpIHtcclxuICAgICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IHRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBfY2xvc2VQb3B1cEJ5Q2xvc2luZ0ljb24oKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NpbmctaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgfSlcclxuICB9XHJcbiAgXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9jbG9zZVBvcHVwQnlBcmVhKClcclxuICAgIHRoaXMuX2Nsb3NlUG9wdXBCeUNsb3NpbmdJY29uKClcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXAsc3VibWl0Rm9ybSkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRGb3JtID0gc3VibWl0Rm9ybTtcclxuICAgICAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250YWluZXInKVxyXG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3NhdmVidXR0b24nKTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5mbycpXHJcbiAgICAgICAgdGhpcy5fdGV4dEJ1dHRvbiA9IHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIHRoaXMuX2lucHV0VmFsdWVzID0ge31cclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+XHJcbiAgICAgICAgICAgICh0aGlzLl9pbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0VmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKClcclxuICAgICAgICB0aGlzLl9mb3JtLnJlc2V0KClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTYXZpbmcoc3RhdHVzKXtcclxuICAgICAgICBpZihzdGF0dXMpe1xyXG4gICAgICAgICAgdGhpcy5fYnV0dG9uQ29uZmlybS50ZXh0Q29udGVudCA9IGBD0L7RhdGA0LDQvdC10L3QuNC1Li4uYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fYnV0dG9uQ29uZmlybS50ZXh0Q29udGVudCA9IHRoaXMuX3RleHRCdXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB0aGlzLl9zdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwKSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXApO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gcG9wdXBcclxuICAgICAgICB0aGlzLl9waWN0dXJlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlLW5hbWUnKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4ocGljdHVyZSwgdGl0bGUpIHtcclxuICAgICAgICBzdXBlci5vcGVuKClcclxuICAgICAgICB0aGlzLl9waWN0dXJlLnNyYyA9IHBpY3R1cmVcclxuICAgICAgICB0aGlzLl9waWN0dXJlLmFsdCA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVxyXG4gICAgfVxyXG5cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHtyZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0gKGl0ZW0pICB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJJdGVtcyAoY2FyZHMpIHtcclxuICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyKGNhcmQpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3IodXNlckluZm8pIHtcclxuICAgICAgICB0aGlzLl91c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckluZm8ubmFtZSlcclxuICAgICAgICB0aGlzLl91c2Vyam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VySW5mby5qb2IpXHJcbiAgICAgICAgdGhpcy5fYXZhdGFyID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJJbmZvLmF2YXRhcilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX3VzZXJuYW1lLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBqb2I6IHRoaXMuX3VzZXJqb2IudGV4dENvbnRlbnQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlckRhdGFcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fdXNlcmpvYi50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyLnNyYyA9IGRhdGEuYXZhdGFyXHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGltYWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfaW1hZ2UnKTtcbmV4cG9ydCBjb25zdCAgaW1hZ2VOYW1lID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlLW5hbWUnKTtcbmV4cG9ydCBjb25zdCAgaW1hZ2VQaWN0dXJlID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlJylcbmV4cG9ydCBjb25zdCBwbGFjZVBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJylcbmV4cG9ydCBjb25zdCBwaG90b05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmVsZW1lbnRfX25hbWUnKVxuZXhwb3J0IGNvbnN0IGJ1dHRvbnNDbG9zZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zaW5nLWljb24nKTtcbmV4cG9ydCBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIilcbmV4cG9ydCBjb25zdCBwbGFjZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbmFtZScpO1xuZXhwb3J0IGNvbnN0IHBsYWNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluaycpO1xuZXhwb3J0IGNvbnN0IGZvcm1DcmVhdGVDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1mb3JtJylcbmV4cG9ydCBjb25zdCBidXR0b25PcGVuQWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZC1idXR0b24nKVxuZXhwb3J0IGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzJylcbmV4cG9ydCBjb25zdCBzdWJtaXRCdXR0b25BZGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgKCdhZGRjYXJkJylcbmV4cG9ydCBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyJylcbmV4cG9ydCBjb25zdCBwb3B1cERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9kZWxldGUtY2FyZCcpXG5leHBvcnQgY29uc3QgcG9wdXBBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfYXZhdGFyJylcbmV4cG9ydCBjb25zdCBlZGl0QXZhdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhci1lZGl0YnV0dG9uJylcbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhcmZvcm0nKVxuXG5leHBvcnQgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05hbWUnKVxuZXhwb3J0IGNvbnN0IGpvYklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pvYicpXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9faGVhZGluZycpXG5leHBvcnQgY29uc3QgcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19zdWJoZWFkaW5nJylcbmV4cG9ydCBjb25zdCBjYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfYWRkLWNhcmQnKVxuXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fY29udGFpbmVyJyxcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5mbycsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zYXZlYnV0dG9uJyxcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zYXZlYnV0dG9uX2luYWN0aXZlJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2luZm9fdHlwZV9lcnJvcicsXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5mby1lcnJvcicsXG59XG5cblxuZXhwb3J0IGNvbnN0IHBvcHVwRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZWRpdC1wcm9maWxlJyk7XG5leHBvcnQgY29uc3QgYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlRm9ybScpXG5leHBvcnQgY29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAoJy5wb3B1cF9faW5mbycpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vcGFnZXMvaW5kZXguY3NzJztcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgaW1hZ2VQb3B1cCwgaW5pdGlhbENhcmRzLCBmb3JtQ3JlYXRlQ2FyZCwgYnV0dG9uT3BlbkFkZENhcmRQb3B1cCwgZWxlbWVudHMsIGltYWdlUGljdHVyZSwgaW1hZ2VOYW1lLCBjb25maWcsIHBvcHVwRWRpdFByb2ZpbGUsXHJcbiAgYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAsIG5hbWVJbnB1dCwgam9iSW5wdXQsIHByb2ZpbGVGb3JtLCBwbGFjZVRpdGxlLCBwbGFjZUltYWdlLCBpbnB1dExpc3QsIHByb2ZpbGVOYW1lLCBcclxuICBwcm9maWxlSm9iLCBwb3B1cERlbGV0ZSwgcG9wdXBBdmF0YXIsIGVkaXRBdmF0YXJCdXR0b24sY2FyZFBvcHVwLCBmb3JtQ2hhbmdlQXZhdGFyfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy9jb25zdGFudHMuanNcIlxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCJcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCB7YXBpfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcclxuaW1wb3J0IFBvcHVwRGVsZXRlQ29uZmlybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvb3B1cERlbGV0ZUNvbmZpcm0nO1xyXG5cclxuY29uc3QgZWRpdFByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHByb2ZpbGVGb3JtKVxyXG5lZGl0UHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKClcclxuY29uc3QgY3JlYXRlQ2FyZFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUNyZWF0ZUNhcmQpXHJcbmNyZWF0ZUNhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpXHJcblxyXG5jb25zdCBwaWN0dXJlT3BlbmVkID0gbmV3IFBvcHVwV2l0aEltYWdlKGltYWdlUG9wdXApXHJcbnBpY3R1cmVPcGVuZWQuc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKHBpY3R1cmUsIG5hbWUpID0+IHtcclxuICBwaWN0dXJlT3BlbmVkLm9wZW4ocGljdHVyZSwgbmFtZSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVHJhc2hDbGljayhpZCwgY2FyZCkge1xyXG4gIHBvcHVwRGVsZXRlQ29uZmlybS5zdWJtaXREZWxldGUoKCkgPT4gaGFuZGxlRGVsZXRlQ29uZmlybShpZCwgY2FyZCkpXHJcbiAgcG9wdXBEZWxldGVDb25maXJtLm9wZW4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQ29uZmlybShpZCwgY2FyZCkge1xyXG4gIGFwaS5kZWxldGVDYXJkKGlkKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjYXJkLnJlbW92ZUNhcmQoKTtcclxuICAgICAgcG9wdXBEZWxldGVDb25maXJtLmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBvcHVwQ2hhbmdlQXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBBdmF0YXIsIGhhbmRsZUNoYW5nZUF2YXRhcik7XHJcblxyXG5wb3B1cENoYW5nZUF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgdmFsaWRpdHlQb3B1cEF2YXRhcj0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtQ2hhbmdlQXZhdGFyKTtcclxudmFsaWRpdHlQb3B1cEF2YXRhci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VBdmF0YXIoaW5wdXRWYWx1ZXMpIHtcclxuICBwb3B1cENoYW5nZUF2YXRhci5yZW5kZXJTYXZpbmcodHJ1ZSlcclxuICBhcGkuZWRpdEF2YXRhcihpbnB1dFZhbHVlcylcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhkYXRhKTtcclxuICAgICAgcG9wdXBDaGFuZ2VBdmF0YXIuY2xvc2UoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgICB9KVxyXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBwb3B1cENoYW5nZUF2YXRhci5yZW5kZXJTYXZpbmcoZmFsc2UpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZWRpdEF2YXRhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cENoYW5nZUF2YXRhci5vcGVuKCk7XHJcbiAgdmFsaWRpdHlQb3B1cEF2YXRhci5kaXNhYmxlU3VibWl0QnV0dG9uKClcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cERlbGV0ZUNvbmZpcm0gPSBuZXcgUG9wdXBEZWxldGVDb25maXJtKHBvcHVwRGVsZXRlKTtcclxucG9wdXBEZWxldGVDb25maXJtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsIHVzZXJJZCkge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChkYXRhLCB1c2VySWQsICcuZWxlbWVudCcsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlTGlrZUNsaWNrLCBoYW5kbGVUcmFzaENsaWNrKVxyXG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKVxyXG4gIHJldHVybiBjYXJkRWxlbWVudFxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUxpa2VDbGljayhpZCwgaXNMaWtlZCwgY2FyZCkge1xyXG4gIGlmIChpc0xpa2VkKSB7XHJcbiAgICBhcGkucmVtb3ZlTGlrZShpZClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgIGNhcmQuc2V0TGlrZXMoZGF0YS5saWtlcyk7ICAgICAgICAgICAgXHJcbiAgICB9KVxyXG5cclxufSBlbHNlIHtcclxuIGFwaS5wdXRMaWtlKGNhcmQuaWQpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjYXJkLnNldExpa2VzKGRhdGEubGlrZXMpO1xyXG4gICAgfSlcclxufVxyXG59XHJcblxyXG5sZXQgdXNlcklkID0gbnVsbFxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZEZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBwb3B1cEFkZEZvcm0ucmVuZGVyU2F2aW5nKHRydWUpXHJcbiAgYXBpLmFkZENhcmQoe3BsYWNlbmFtZTogaW5wdXRWYWx1ZXMucGxhY2VuYW1lLCBsaW5rOmlucHV0VmFsdWVzLmxpbmt9KVxyXG4gIC50aGVuICgoZGF0YSkgPT4gIHsgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSwgdXNlcklkKVxyXG4gIGRlZmF1bHRDYXJkTGlzdC5hZGRJdGVtKGNhcmQpLFxyXG4gIHBvcHVwQWRkRm9ybS5jbG9zZSgpXHJcbn0pXHJcbiAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICB9KVxyXG4gIC5maW5hbGx5KCgpID0+IHtcclxuICAgIHBvcHVwQWRkRm9ybS5yZW5kZXJTYXZpbmcoZmFsc2UpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9maWxlZm9ybVN1Ym1pdChpbnB1dFZhbHVlcykge1xyXG4gIHBvcHVwUHJvZmlsZS5yZW5kZXJTYXZpbmcodHJ1ZSlcclxuICBhcGkuZWRpdFVzZXJEYXRhKHtuYW1lOiBpbnB1dFZhbHVlcy5uYW1lLCBqb2I6IGlucHV0VmFsdWVzLmpvYn0pXHJcbiAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhkYXRhKVxyXG4gICAgcG9wdXBQcm9maWxlLmNsb3NlKClcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgfSlcclxuICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICBwb3B1cFByb2ZpbGUucmVuZGVyU2F2aW5nKGZhbHNlKTtcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBwb3B1cEFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfYWRkLWNhcmQnKTtcclxuY29uc3QgcG9wdXBBZGRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBBZGRDYXJkLCBjcmVhdGVDYXJkRm9ybVN1Ym1pdClcclxuXHJcbmJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBBZGRGb3JtLm9wZW4oKVxyXG4gIGNyZWF0ZUNhcmRWYWxpZGF0b3IuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpXHJcbn0pXHJcbnBvcHVwQWRkRm9ybS5zZXRFdmVudExpc3RlbmVycygpXHJcblxyXG5jb25zdCB1c2VySW5mb3JtYXRpb24gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWU6ICcucHJvZmlsZV9faGVhZGluZycsXHJcbiAgam9iOiAnLnByb2ZpbGVfX3N1YmhlYWRpbmcnLFxyXG4gIGF2YXRhcjogJy5wcm9maWxlX19hdmF0YXInXHJcbn0pXHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGUgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEVkaXRQcm9maWxlLCBlZGl0UHJvZmlsZWZvcm1TdWJtaXQpXHJcblxyXG5idXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCB1c2VyT3JpZ2luVmFsdWUgPSB1c2VySW5mb3JtYXRpb24uZ2V0VXNlckluZm8oKVxyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJPcmlnaW5WYWx1ZS5uYW1lXHJcbiAgam9iSW5wdXQudmFsdWUgPSB1c2VyT3JpZ2luVmFsdWUuam9iXHJcblxyXG4gIHBvcHVwUHJvZmlsZS5vcGVuKClcclxuXHJcbn0pO1xyXG5cclxucG9wdXBQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcblByb21pc2UuYWxsKFsgYXBpLmdldFVzZXJEYXRhKCksIGFwaS5nZXRDYXJkcygpXSlcclxuICAudGhlbigoWyByZXNVc2VyLCByZXNDYXJkcyBdKSA9PiB7XHJcbiAgICB1c2VySWQgPSByZXNVc2VyLl9pZFxyXG4gICAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJJbmZvKHJlc1VzZXIpXHJcbiAgICBkZWZhdWx0Q2FyZExpc3QucmVuZGVySXRlbXMocmVzQ2FyZHMucmV2ZXJzZSgpKVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICB9KVxyXG5cclxuICBjb25zdCBkZWZhdWx0Q2FyZExpc3QgPSBuZXcgU2VjdGlvbih7XHJcbiAgICBkYXRhOiB7fSxcclxuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChkYXRhLCB1c2VySWQpXHJcbiAgICAgIGRlZmF1bHRDYXJkTGlzdC5hZGRJdGVtKGNhcmQpXHJcbiAgICB9XHJcbiAgfSwgJy5lbGVtZW50cycpOyJdLCJuYW1lcyI6WyJBcGkiLCJfcmVmIiwidXJsIiwiaGVhZGVycyIsIl9jbGFzc0NhbGxDaGVjayIsIl90b2tlbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0Q2FyZHMiLCJfdGhpcyIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlcyIsIl9jaGVja1Jlc3VsdCIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJhZGRDYXJkIiwiX3JlZjIiLCJfdGhpczIiLCJwbGFjZW5hbWUiLCJsaW5rIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiZ2V0VXNlckRhdGEiLCJfdGhpczMiLCJlZGl0VXNlckRhdGEiLCJfcmVmMyIsIl90aGlzNCIsImpvYiIsImFib3V0IiwiZWRpdEF2YXRhciIsIl9yZWY0IiwiX3RoaXM1IiwiYXZhdGFyIiwicHV0TGlrZSIsImlkIiwiX3RoaXM2IiwicmVtb3ZlTGlrZSIsIl90aGlzNyIsImRlbGV0ZUNhcmQiLCJfdGhpczgiLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiQ2FyZCIsImRhdGEiLCJ1c2VySWQiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwicG9wdXBPcGVuZXIiLCJoYW5kbGVMaWtlQ2xpY2siLCJoYW5kbGVUcmFzaENsaWNrIiwiX25hbWUiLCJfbGluayIsIl9vd25lcklkIiwib3duZXIiLCJfaWQiLCJfbGlrZXMiLCJsaWtlcyIsIl9teUlkIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfcG9wdXBPcGVuZXIiLCJfaGFuZGxlVHJhc2hDbGljayIsIl9nZXRUZW1wbGF0ZSIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsImdlbmVyYXRlQ2FyZCIsIl9lbGVtZW50IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfZGVsZXRlQnV0dG9uIiwiX2xpa2UiLCJfbGlrZUNvdW50ZXIiLCJyZW1vdmUiLCJzZXRMaWtlcyIsImFkZExpa2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJfY2hlY2tMaWtlIiwic29tZSIsImxpa2UiLCJhcnIiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUltYWdlQ2xpY2siLCJyZW1vdmVDYXJkIiwiZGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0TGlzdCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJfZm9ybVNlbGVjdG9yIiwiX2lucHV0TGlzdCIsIl9zaG93RXJyb3IiLCJpbnB1dFNlbGVjdG9yIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9oaWRlRXJyb3IiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvcm1Jc1ZhbGlkIiwiZXZlcnkiLCJpdGVtIiwiZW5hYmxlU3VibWl0QnV0dG9uIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJQb3B1cCIsIlBvcHVwRGVsZXRlQ29uZmlybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInBvcHVwU2VsZWN0b3IiLCJjYWxsIiwiX2J1dHRvbkNvbmZpcm0iLCJzdWJtaXREZWxldGUiLCJfaGFuZGxlU3VibWl0RGVsZXRlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJwb3B1cCIsIl9wb3B1cCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJvcGVuIiwiZXZlbnQiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfY2xvc2VQb3B1cEJ5QXJlYSIsInRhcmdldCIsIl9jbG9zZVBvcHVwQnlDbG9zaW5nSWNvbiIsIlBvcHVwV2l0aEZvcm0iLCJzdWJtaXRGb3JtIiwiX3N1Ym1pdEZvcm0iLCJfZm9ybSIsIl90ZXh0QnV0dG9uIiwiX2dldElucHV0VmFsdWVzIiwiX2lucHV0VmFsdWVzIiwicmVzZXQiLCJyZW5kZXJTYXZpbmciLCJQb3B1cFdpdGhJbWFnZSIsIl9waWN0dXJlIiwiX3RpdGxlIiwicGljdHVyZSIsInRpdGxlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfY29udGFpbmVyIiwiX3JlbmRlcmVyIiwiYWRkSXRlbSIsInByZXBlbmQiLCJyZW5kZXJJdGVtcyIsImNhcmRzIiwiY2FyZCIsIlVzZXJJbmZvIiwidXNlckluZm8iLCJfdXNlcm5hbWUiLCJfdXNlcmpvYiIsIl9hdmF0YXIiLCJnZXRVc2VySW5mbyIsInVzZXJEYXRhIiwic2V0VXNlckluZm8iLCJpbWFnZVBvcHVwIiwiaW1hZ2VOYW1lIiwiaW1hZ2VQaWN0dXJlIiwicGxhY2VQaG90byIsInBob3RvTmFtZSIsImJ1dHRvbnNDbG9zZVBvcHVwIiwicGxhY2VUaXRsZSIsImdldEVsZW1lbnRCeUlkIiwicGxhY2VJbWFnZSIsImZvcm1DcmVhdGVDYXJkIiwiYnV0dG9uT3BlbkFkZENhcmRQb3B1cCIsImVsZW1lbnRzIiwic3VibWl0QnV0dG9uQWRkRm9ybSIsInBvcHVwRGVsZXRlIiwicG9wdXBBdmF0YXIiLCJlZGl0QXZhdGFyQnV0dG9uIiwiZm9ybUNoYW5nZUF2YXRhciIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicHJvZmlsZU5hbWUiLCJwcm9maWxlSm9iIiwiY2FyZFBvcHVwIiwicG9wdXBFZGl0UHJvZmlsZSIsImJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwIiwicHJvZmlsZUZvcm0iLCJpbml0aWFsQ2FyZHMiLCJlZGl0UHJvZmlsZVZhbGlkYXRvciIsImNyZWF0ZUNhcmRWYWxpZGF0b3IiLCJwaWN0dXJlT3BlbmVkIiwiaGFuZGxlQ2FyZENsaWNrIiwicG9wdXBEZWxldGVDb25maXJtIiwiaGFuZGxlRGVsZXRlQ29uZmlybSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicG9wdXBDaGFuZ2VBdmF0YXIiLCJoYW5kbGVDaGFuZ2VBdmF0YXIiLCJ2YWxpZGl0eVBvcHVwQXZhdGFyIiwiaW5wdXRWYWx1ZXMiLCJ1c2VySW5mb3JtYXRpb24iLCJjcmVhdGVDYXJkIiwiaXNMaWtlZCIsImNyZWF0ZUNhcmRGb3JtU3VibWl0IiwicG9wdXBBZGRGb3JtIiwiZGVmYXVsdENhcmRMaXN0IiwiZWRpdFByb2ZpbGVmb3JtU3VibWl0IiwicG9wdXBQcm9maWxlIiwicG9wdXBBZGRDYXJkIiwidXNlck9yaWdpblZhbHVlIiwiYWxsIiwiX3NsaWNlZFRvQXJyYXkiLCJyZXNVc2VyIiwicmVzQ2FyZHMiLCJyZXZlcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==