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
        headers: {
          authorization: '14d16ec7-c7e8-4070-bd40-31591cadb169',
          'Content-Type': 'application/json'
        },
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
      console.log(this._likes);
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
    _this._buttonConfirm = _this._popup.querySelector('.popup__savebutton');
    _this._form = form;
    _this._inputList = inputList;
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
var pictureOpened = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.imagePopup, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.imagePicture, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.imageName);
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
  console.log(id);
  _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.deleteCard(id).then(function () {
    card.removeCard();
    popupDeleteConfirm.close();
  })["catch"](function (err) {
    console.log(err.message);
  });
}
var popupChangeAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formChangeAvatar, handleChangeAvatar, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.inputList);
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
    defaultCardList.addItem(card);
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
  })["catch"](function (err) {
    console.log(err.message);
  })["finally"](function () {
    popupProfile.renderSaving(false);
  });
}
var popupAddCard = document.querySelector('.popup_add-card');
var popupAddForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](popupAddCard, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formCreateCard, createCardFormSubmit, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.inputList);
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
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupEditProfile, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileForm, editProfileformSubmit, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.inputList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEMsV0FBVyxDQUFDb0QsT0FBTyxDQUFDO0VBQ3BDUCxlQUFlLENBQUN2RCxXQUFXLENBQUMrRCxRQUFRLENBQUNDLE9BQU8sRUFBRSxDQUFDO0FBQ2pELENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQXBCLEdBQUcsRUFBSTtFQUNadEksT0FBTyxDQUFDQyxHQUFHLENBQUNxSSxHQUFHLENBQUNDLE9BQU8sQ0FBQztBQUMxQixDQUFDLENBQUM7QUFFRixJQUFNVSxlQUFlLEdBQUcsSUFBSS9ELDhEQUFPLENBQUM7RUFDbEM1SCxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQ1I4SCxRQUFRLEVBQUUsU0FBQUEsU0FBQzlILElBQUksRUFBSztJQUNsQixJQUFNc0ksSUFBSSxHQUFHaUQsVUFBVSxDQUFDdkwsSUFBSSxFQUFFQyxNQUFNLENBQUM7SUFDckMwTCxlQUFlLENBQUN6RCxPQUFPLENBQUNJLElBQUksQ0FBQztFQUMvQjtBQUNGLENBQUMsRUFBRSxXQUFXLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb29wdXBEZWxldGVDb25maXJtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIGNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7dXJsLCBoZWFkZXJzfSkge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSBoZWFkZXJzWydhdXRob3JpemF0aW9uJ11cclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkcygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L2NhcmRzYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tSZXN1bHQocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsCAke3Jlcy5zdGF0dXN9YClcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXJkKHtwbGFjZW5hbWUsIGxpbmt9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IHBsYWNlbmFtZSwgbGluazogbGluayB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFVzZXJEYXRhKHtuYW1lLCBqb2J9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBuYW1lLCBhYm91dDogam9iIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEF2YXRhciAoe2F2YXRhcn0pIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L3VzZXJzL21lL2F2YXRhcmAse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246ICcxNGQxNmVjNy1jN2U4LTQwNzAtYmQ0MC0zMTU5MWNhZGIxNjknLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6YXZhdGFyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHV0TGlrZShpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcmVtb3ZlTGlrZShpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBuZXcgQXBpICh7XHJcbiAgICB1cmw6IGBodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTYzYCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogJzE0ZDE2ZWM3LWM3ZTgtNDA3MC1iZDQwLTMxNTkxY2FkYjE2OScsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIFxyXG4gIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgdXNlcklkLCB0ZW1wbGF0ZVNlbGVjdG9yLCBwb3B1cE9wZW5lciwgaGFuZGxlTGlrZUNsaWNrLCBoYW5kbGVUcmFzaENsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XG4gICAgdGhpcy5pZCA9IGRhdGEuX2lkO1xuICAgIHRoaXMuX215SWQgPSB1c2VySWQ7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3JcbiAgICB0aGlzLl9wb3B1cE9wZW5lciA9IHBvcHVwT3BlbmVyXG4gICAgdGhpcy5oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlVHJhc2hDbGljayA9IGhhbmRsZVRyYXNoQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2l0ZW0nKS5jbG9uZU5vZGUodHJ1ZSlcbiAgICByZXR1cm4gY2FyZEVsZW1lbnRcbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKVxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuc3JjID0gdGhpcy5fbGlua1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuYWx0ID0gdGhpcy5fbmFtZVxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX25hbWUnKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWVcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19kZWxldGUtYnV0dG9uJyk7XG4gICAgdGhpcy5fbGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UnKTtcbiAgICB0aGlzLl9saWtlQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2Vjb3VudGVyJyk7XG5cbiAgICBpZiAodGhpcy5fbXlJZCAhPT0gdGhpcy5fb3duZXJJZCkge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLnNldExpa2VzKHRoaXMuX2xpa2VzKVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIGFkZExpa2UoKSB7XG4gICAgdGhpcy5fbGlrZS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50X19saWtlX2FjdGl2ZScpO1xuICB9XG5cbiAgX2NoZWNrTGlrZSgpIHtcbiAgICBpZiAodGhpcy5fbGlrZXMuc29tZSgobGlrZSkgPT4gbGlrZS5faWQgPT09IHRoaXMuX215SWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlLmNsYXNzTGlzdC5yZW1vdmUoJ2VsZW1lbnRfX2xpa2VfYWN0aXZlJyk7ICAgICAgXG4gIH1cblxuICBzZXRMaWtlcyhhcnIpIHtcbiAgICB0aGlzLl9saWtlQ291bnRlci50ZXh0Q29udGVudCA9IGFyci5sZW5ndGg7XG4gICAgdGhpcy5fbGlrZXMgPSBhcnI7XG4gICAgY29uc29sZS5sb2codGhpcy5fbGlrZXMpXG4gICAgaWYgKHRoaXMuX2NoZWNrTGlrZSgpKSB7XG4gICAgICB0aGlzLmFkZExpa2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUxpa2UoKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljaygpXG4gICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUxpa2VDbGljayh0aGlzLmlkLCB0aGlzLl9jaGVja0xpa2UoKSx0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZVRyYXNoQ2xpY2sodGhpcy5pZCwgdGhpcyk7XG4gICAgfSlcbiAgfVxuXG4gIF9oYW5kbGVJbWFnZUNsaWNrKCkge1xuICAgIHRoaXMuX3BvcHVwT3BlbmVyKHRoaXMuX2xpbmssIHRoaXMuX25hbWUpXG4gIH1cblxuICByZW1vdmVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtU2VsZWN0b3IsIHN1Ym1pdEJ1dHRvblNlbGVjdG9yLCBpbnB1dExpc3QpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGZvcm1TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gaW5wdXRMaXN0O1xuICAgIH1cblxuICAgIF9zaG93RXJyb3IoaW5wdXRTZWxlY3RvciwgZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRTZWxlY3Rvci5pZH0tZXJyb3JgKTtcbiAgICAgICAgaW5wdXRTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yQ2xhc3MudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgfTtcblxuICAgIF9oaWRlRXJyb3IoaW5wdXRTZWxlY3Rvcikge1xuICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZm9ybVNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0U2VsZWN0b3IuaWR9LWVycm9yYCk7XG4gICAgICAgIGlucHV0U2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvckNsYXNzLnRleHRDb250ZW50ID0gJydcbiAgICB9O1xuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghaW5wdXRTZWxlY3Rvci52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd0Vycm9yKGlucHV0U2VsZWN0b3IsIGlucHV0U2VsZWN0b3IudmFsaWRhdGlvbk1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXRTZWxlY3RvcilcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvcilcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5pbnB1dFNlbGVjdG9yKSk7XG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1Jc1ZhbGlkID0gdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KChpdGVtKSA9PiBpdGVtLnZhbGlkaXR5LnZhbGlkKTtcblxuICAgICAgICBpZiAoZm9ybUlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU3VibWl0QnV0dG9uKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU3VibWl0QnV0dG9uKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgIH1cblxuICAgIGRpc2FibGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcylcblxuICAgIH1cblxuXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybVNlbGVjdG9yLCB0aGlzLmNvbmZpZylcbiAgICB9XG5cbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERlbGV0ZUNvbmZpcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLnBvcHVwU2VsZWN0b3IgPSBwb3B1cFNlbGVjdG9yXHJcbiAgICB0aGlzLl9idXR0b25Db25maXJtID0gdGhpcy5wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc2F2ZWJ1dHRvbicpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0RGVsZXRlIChzdWJtaXREZWxldGUpIHtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdERlbGV0ZSA9IHN1Ym1pdERlbGV0ZTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fYnV0dG9uQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0RGVsZXRlKGV2dClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IHBvcHVwU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKVxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICB0aGlzLmNsb3NlKClcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKVxyXG4gIH1cclxuXHJcbiAgX2Nsb3NlUG9wdXBCeUFyZWEoKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ID09PSB0aGlzLl9wb3B1cCkge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2Nsb3NlUG9wdXBCeUNsb3NpbmdJY29uKCkge1xyXG4gICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zaW5nLWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fY2xvc2VQb3B1cEJ5QXJlYSgpXHJcbiAgICB0aGlzLl9jbG9zZVBvcHVwQnlDbG9zaW5nSWNvbigpXHJcblxyXG4gIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGZvcm0sIHN1Ym1pdEZvcm0sIGlucHV0TGlzdCkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gcG9wdXBTZWxlY3RvclxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEZvcm0gPSBzdWJtaXRGb3JtO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3NhdmVidXR0b24nKTtcclxuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybVxyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IGlucHV0TGlzdFxyXG4gICAgICAgIHRoaXMuX3RleHRCdXR0b24gPSB0aGlzLl9idXR0b25Db25maXJtLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlcyA9IHt9XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PlxyXG4gICAgICAgICAgICAodGhpcy5faW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSkpXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpXHJcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2F2aW5nKHN0YXR1cyl7XHJcbiAgICAgICAgaWYoc3RhdHVzKXtcclxuICAgICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSBgQ9C+0YXRgNCw0L3QtdC90LjQtS4uLmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0QnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgcGljdHVyZSwgdGl0bGUpIHtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IHBvcHVwU2VsZWN0b3JcclxuICAgICAgICB0aGlzLl9waWN0dXJlID0gcGljdHVyZVxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHBpY3R1cmUsIHRpdGxlKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5zcmMgPSBwaWN0dXJlXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5hbHQgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7ZGF0YSwgcmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLl9pdGVtcyA9IGRhdGE7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0gKGl0ZW0pICB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJJdGVtcyAoY2FyZHMpIHtcclxuICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyKGNhcmQpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3IodXNlckluZm8pIHtcclxuICAgICAgICB0aGlzLl91c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckluZm8ubmFtZSlcclxuICAgICAgICB0aGlzLl91c2Vyam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VySW5mby5qb2IpXHJcbiAgICAgICAgdGhpcy5fYXZhdGFyID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJJbmZvLmF2YXRhcilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX3VzZXJuYW1lLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBqb2I6IHRoaXMuX3VzZXJqb2IudGV4dENvbnRlbnQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlckRhdGFcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fdXNlcmpvYi50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyLnNyYyA9IGRhdGEuYXZhdGFyXHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGltYWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfaW1hZ2UnKTtcbmV4cG9ydCBjb25zdCAgaW1hZ2VOYW1lID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlLW5hbWUnKTtcbmV4cG9ydCBjb25zdCAgaW1hZ2VQaWN0dXJlID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlJylcbmV4cG9ydCBjb25zdCBwbGFjZVBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJylcbmV4cG9ydCBjb25zdCBwaG90b05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmVsZW1lbnRfX25hbWUnKVxuZXhwb3J0IGNvbnN0IGJ1dHRvbnNDbG9zZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zaW5nLWljb24nKTtcbmV4cG9ydCBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIilcbmV4cG9ydCBjb25zdCBwbGFjZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbmFtZScpO1xuZXhwb3J0IGNvbnN0IHBsYWNlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluaycpO1xuZXhwb3J0IGNvbnN0IGZvcm1DcmVhdGVDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1mb3JtJylcbmV4cG9ydCBjb25zdCBidXR0b25PcGVuQWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZC1idXR0b24nKVxuZXhwb3J0IGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzJylcbmV4cG9ydCBjb25zdCBzdWJtaXRCdXR0b25BZGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgKCdhZGRjYXJkJylcbmV4cG9ydCBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyJylcbmV4cG9ydCBjb25zdCBwb3B1cERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9kZWxldGUtY2FyZCcpXG5leHBvcnQgY29uc3QgcG9wdXBBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfYXZhdGFyJylcbmV4cG9ydCBjb25zdCBlZGl0QXZhdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhci1lZGl0YnV0dG9uJylcbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhcmZvcm0nKVxuXG5leHBvcnQgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05hbWUnKVxuZXhwb3J0IGNvbnN0IGpvYklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pvYicpXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9faGVhZGluZycpXG5leHBvcnQgY29uc3QgcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19zdWJoZWFkaW5nJylcbmV4cG9ydCBjb25zdCBjYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfYWRkLWNhcmQnKVxuXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fY29udGFpbmVyJyxcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5mbycsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zYXZlYnV0dG9uJyxcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zYXZlYnV0dG9uX2luYWN0aXZlJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2luZm9fdHlwZV9lcnJvcicsXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5mby1lcnJvcicsXG59XG5cblxuZXhwb3J0IGNvbnN0IHBvcHVwRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZWRpdC1wcm9maWxlJyk7XG5leHBvcnQgY29uc3QgYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlRm9ybScpXG5leHBvcnQgY29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAoJy5wb3B1cF9faW5mbycpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vcGFnZXMvaW5kZXguY3NzJztcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgaW1hZ2VQb3B1cCwgaW5pdGlhbENhcmRzLCBmb3JtQ3JlYXRlQ2FyZCwgYnV0dG9uT3BlbkFkZENhcmRQb3B1cCwgZWxlbWVudHMsIGltYWdlUGljdHVyZSwgaW1hZ2VOYW1lLCBjb25maWcsIHBvcHVwRWRpdFByb2ZpbGUsXHJcbiAgYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAsIG5hbWVJbnB1dCwgam9iSW5wdXQsIHByb2ZpbGVGb3JtLCBwbGFjZVRpdGxlLCBwbGFjZUltYWdlLCBpbnB1dExpc3QsIHByb2ZpbGVOYW1lLCBcclxuICBwcm9maWxlSm9iLCBwb3B1cERlbGV0ZSwgcG9wdXBBdmF0YXIsIGVkaXRBdmF0YXJCdXR0b24sY2FyZFBvcHVwLCBmb3JtQ2hhbmdlQXZhdGFyfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy9jb25zdGFudHMuanNcIlxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCJcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCB7YXBpfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcclxuaW1wb3J0IFBvcHVwRGVsZXRlQ29uZmlybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvb3B1cERlbGV0ZUNvbmZpcm0nO1xyXG5cclxuY29uc3QgZWRpdFByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHByb2ZpbGVGb3JtKVxyXG5lZGl0UHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKClcclxuY29uc3QgY3JlYXRlQ2FyZFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUNyZWF0ZUNhcmQpXHJcbmNyZWF0ZUNhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpXHJcblxyXG5jb25zdCBwaWN0dXJlT3BlbmVkID0gbmV3IFBvcHVwV2l0aEltYWdlKGltYWdlUG9wdXAsIGltYWdlUGljdHVyZSwgaW1hZ2VOYW1lKVxyXG5waWN0dXJlT3BlbmVkLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcbmNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChwaWN0dXJlLCBuYW1lKSA9PiB7XHJcbiAgcGljdHVyZU9wZW5lZC5vcGVuKHBpY3R1cmUsIG5hbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRyYXNoQ2xpY2soaWQsIGNhcmQpIHtcclxuICBwb3B1cERlbGV0ZUNvbmZpcm0uc3VibWl0RGVsZXRlKCgpID0+IGhhbmRsZURlbGV0ZUNvbmZpcm0oaWQsIGNhcmQpKVxyXG4gIHBvcHVwRGVsZXRlQ29uZmlybS5vcGVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNvbmZpcm0oaWQsIGNhcmQpIHtcclxuICBjb25zb2xlLmxvZyhpZClcclxuICBhcGkuZGVsZXRlQ2FyZChpZClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY2FyZC5yZW1vdmVDYXJkKCk7XHJcbiAgICAgIHBvcHVwRGVsZXRlQ29uZmlybS5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwb3B1cENoYW5nZUF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQXZhdGFyLCBmb3JtQ2hhbmdlQXZhdGFyLCBoYW5kbGVDaGFuZ2VBdmF0YXIsIGlucHV0TGlzdCk7XHJcblxyXG5wb3B1cENoYW5nZUF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgdmFsaWRpdHlQb3B1cEF2YXRhcj0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtQ2hhbmdlQXZhdGFyKTtcclxudmFsaWRpdHlQb3B1cEF2YXRhci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VBdmF0YXIoaW5wdXRWYWx1ZXMpIHtcclxuICBwb3B1cENoYW5nZUF2YXRhci5yZW5kZXJTYXZpbmcodHJ1ZSlcclxuICBhcGkuZWRpdEF2YXRhcihpbnB1dFZhbHVlcylcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhkYXRhKTtcclxuICAgICAgcG9wdXBDaGFuZ2VBdmF0YXIuY2xvc2UoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgICB9KVxyXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBwb3B1cENoYW5nZUF2YXRhci5yZW5kZXJTYXZpbmcoZmFsc2UpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZWRpdEF2YXRhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cENoYW5nZUF2YXRhci5vcGVuKCk7XHJcbiAgdmFsaWRpdHlQb3B1cEF2YXRhci5kaXNhYmxlU3VibWl0QnV0dG9uKClcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cERlbGV0ZUNvbmZpcm0gPSBuZXcgUG9wdXBEZWxldGVDb25maXJtKHBvcHVwRGVsZXRlKTtcclxucG9wdXBEZWxldGVDb25maXJtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsIHVzZXJJZCkge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChkYXRhLCB1c2VySWQsICcuZWxlbWVudCcsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlTGlrZUNsaWNrLCBoYW5kbGVUcmFzaENsaWNrKVxyXG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKVxyXG4gIHJldHVybiBjYXJkRWxlbWVudFxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUxpa2VDbGljayhpZCwgaXNMaWtlZCwgY2FyZCkge1xyXG4gIGlmIChpc0xpa2VkKSB7XHJcbiAgICBhcGkucmVtb3ZlTGlrZShpZClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgIGNhcmQuc2V0TGlrZXMoZGF0YS5saWtlcyk7ICAgICAgICAgICAgXHJcbiAgICB9KVxyXG5cclxufSBlbHNlIHtcclxuIGFwaS5wdXRMaWtlKGNhcmQuaWQpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjYXJkLnNldExpa2VzKGRhdGEubGlrZXMpO1xyXG4gICAgfSlcclxufVxyXG59XHJcblxyXG5sZXQgdXNlcklkID0gbnVsbFxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZEZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBwb3B1cEFkZEZvcm0ucmVuZGVyU2F2aW5nKHRydWUpXHJcbiAgYXBpLmFkZENhcmQoe3BsYWNlbmFtZTogaW5wdXRWYWx1ZXMucGxhY2VuYW1lLCBsaW5rOmlucHV0VmFsdWVzLmxpbmt9KVxyXG4gIC50aGVuICgoZGF0YSkgPT4gIHsgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSwgdXNlcklkKVxyXG4gIGRlZmF1bHRDYXJkTGlzdC5hZGRJdGVtKGNhcmQpfSlcclxuICAuY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gIH0pXHJcbiAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgcG9wdXBBZGRGb3JtLnJlbmRlclNhdmluZyhmYWxzZSk7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFByb2ZpbGVmb3JtU3VibWl0KGlucHV0VmFsdWVzKSB7XHJcbiAgcG9wdXBQcm9maWxlLnJlbmRlclNhdmluZyh0cnVlKVxyXG4gIGFwaS5lZGl0VXNlckRhdGEoe25hbWU6IGlucHV0VmFsdWVzLm5hbWUsIGpvYjogaW5wdXRWYWx1ZXMuam9ifSlcclxuICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJJbmZvKGRhdGEpXHJcbiAgfSlcclxuICAuY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gIH0pXHJcbiAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgcG9wdXBQcm9maWxlLnJlbmRlclNhdmluZyhmYWxzZSk7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgcG9wdXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZC1jYXJkJyk7XHJcbmNvbnN0IHBvcHVwQWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQWRkQ2FyZCwgZm9ybUNyZWF0ZUNhcmQsIGNyZWF0ZUNhcmRGb3JtU3VibWl0LCBpbnB1dExpc3QpXHJcblxyXG5idXR0b25PcGVuQWRkQ2FyZFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBvcHVwQWRkRm9ybS5vcGVuKClcclxuICBjcmVhdGVDYXJkVmFsaWRhdG9yLmRpc2FibGVTdWJtaXRCdXR0b24oKVxyXG59KVxyXG5wb3B1cEFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuY29uc3QgdXNlckluZm9ybWF0aW9uID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiAnLnByb2ZpbGVfX2hlYWRpbmcnLFxyXG4gIGpvYjogJy5wcm9maWxlX19zdWJoZWFkaW5nJyxcclxuICBhdmF0YXI6ICcucHJvZmlsZV9fYXZhdGFyJ1xyXG59KVxyXG5cclxuY29uc3QgcG9wdXBQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBFZGl0UHJvZmlsZSwgcHJvZmlsZUZvcm0sIGVkaXRQcm9maWxlZm9ybVN1Ym1pdCwgaW5wdXRMaXN0KVxyXG5cclxuYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgdXNlck9yaWdpblZhbHVlID0gdXNlckluZm9ybWF0aW9uLmdldFVzZXJJbmZvKClcclxuICBuYW1lSW5wdXQudmFsdWUgPSB1c2VyT3JpZ2luVmFsdWUubmFtZVxyXG4gIGpvYklucHV0LnZhbHVlID0gdXNlck9yaWdpblZhbHVlLmpvYlxyXG5cclxuICBwb3B1cFByb2ZpbGUub3BlbigpXHJcblxyXG59KTtcclxuXHJcbnBvcHVwUHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpXHJcblxyXG5Qcm9taXNlLmFsbChbIGFwaS5nZXRVc2VyRGF0YSgpLCBhcGkuZ2V0Q2FyZHMoKV0pXHJcbiAgLnRoZW4oKFsgcmVzVXNlciwgcmVzQ2FyZHMgXSkgPT4ge1xyXG4gICAgdXNlcklkID0gcmVzVXNlci5faWRcclxuICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhyZXNVc2VyKVxyXG4gICAgZGVmYXVsdENhcmRMaXN0LnJlbmRlckl0ZW1zKHJlc0NhcmRzLnJldmVyc2UoKSlcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZGVmYXVsdENhcmRMaXN0ID0gbmV3IFNlY3Rpb24oe1xyXG4gICAgZGF0YToge30sXHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSwgdXNlcklkKVxyXG4gICAgICBkZWZhdWx0Q2FyZExpc3QuYWRkSXRlbShjYXJkKVxyXG4gICAgfVxyXG4gIH0sICcuZWxlbWVudHMnKTsiXSwibmFtZXMiOlsiQXBpIiwiX3JlZiIsInVybCIsImhlYWRlcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdG9rZW4iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldENhcmRzIiwiX3RoaXMiLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXMiLCJfY2hlY2tSZXN1bHQiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiYWRkQ2FyZCIsIl9yZWYyIiwiX3RoaXMyIiwicGxhY2VuYW1lIiwibGluayIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImdldFVzZXJEYXRhIiwiX3RoaXMzIiwiZWRpdFVzZXJEYXRhIiwiX3JlZjMiLCJfdGhpczQiLCJqb2IiLCJhYm91dCIsImVkaXRBdmF0YXIiLCJfcmVmNCIsIl90aGlzNSIsImF2YXRhciIsImF1dGhvcml6YXRpb24iLCJwdXRMaWtlIiwiaWQiLCJfdGhpczYiLCJyZW1vdmVMaWtlIiwiX3RoaXM3IiwiZGVsZXRlQ2FyZCIsIl90aGlzOCIsImFwaSIsIkNhcmQiLCJkYXRhIiwidXNlcklkIiwidGVtcGxhdGVTZWxlY3RvciIsInBvcHVwT3BlbmVyIiwiaGFuZGxlTGlrZUNsaWNrIiwiaGFuZGxlVHJhc2hDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2xpa2VzIiwibGlrZXMiLCJfbXlJZCIsIl90ZW1wbGF0ZVNlbGVjdG9yIiwiX3BvcHVwT3BlbmVyIiwiX2hhbmRsZVRyYXNoQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZW5lcmF0ZUNhcmQiLCJfZWxlbWVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiX2RlbGV0ZUJ1dHRvbiIsIl9saWtlIiwiX2xpa2VDb3VudGVyIiwicmVtb3ZlIiwic2V0TGlrZXMiLCJhZGRMaWtlIiwiY2xhc3NMaXN0IiwiYWRkIiwiX2NoZWNrTGlrZSIsInNvbWUiLCJsaWtlIiwiYXJyIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlSW1hZ2VDbGljayIsInJlbW92ZUNhcmQiLCJkZWZhdWx0IiwiRm9ybVZhbGlkYXRvciIsImNvbmZpZyIsImZvcm1TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5wdXRMaXN0IiwiX2RlZmluZVByb3BlcnR5IiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsInNldEF0dHJpYnV0ZSIsIl9mb3JtU2VsZWN0b3IiLCJfaW5wdXRMaXN0IiwiX3Nob3dFcnJvciIsImlucHV0U2VsZWN0b3IiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2hpZGVFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImlucHV0IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZm9ybUlzVmFsaWQiLCJldmVyeSIsIml0ZW0iLCJlbmFibGVTdWJtaXRCdXR0b24iLCJkaXNhYmxlU3VibWl0QnV0dG9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsIlBvcHVwIiwiUG9wdXBEZWxldGVDb25maXJtIiwiX1BvcHVwIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicG9wdXBTZWxlY3RvciIsImNhbGwiLCJfYnV0dG9uQ29uZmlybSIsInN1Ym1pdERlbGV0ZSIsIl9oYW5kbGVTdWJtaXREZWxldGUiLCJzZXRFdmVudExpc3RlbmVycyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9wb3B1cCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJvcGVuIiwiZXZlbnQiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfY2xvc2VQb3B1cEJ5QXJlYSIsInRhcmdldCIsIl9jbG9zZVBvcHVwQnlDbG9zaW5nSWNvbiIsIlBvcHVwV2l0aEZvcm0iLCJmb3JtIiwic3VibWl0Rm9ybSIsIl9zdWJtaXRGb3JtIiwiX2Zvcm0iLCJfdGV4dEJ1dHRvbiIsIl9nZXRJbnB1dFZhbHVlcyIsIl9pbnB1dFZhbHVlcyIsInJlc2V0IiwicmVuZGVyU2F2aW5nIiwiUG9wdXBXaXRoSW1hZ2UiLCJwaWN0dXJlIiwidGl0bGUiLCJfcGljdHVyZSIsIl90aXRsZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX2NvbnRhaW5lciIsIl9yZW5kZXJlciIsImFkZEl0ZW0iLCJwcmVwZW5kIiwicmVuZGVySXRlbXMiLCJjYXJkcyIsImNhcmQiLCJVc2VySW5mbyIsInVzZXJJbmZvIiwiX3VzZXJuYW1lIiwiX3VzZXJqb2IiLCJfYXZhdGFyIiwiZ2V0VXNlckluZm8iLCJ1c2VyRGF0YSIsInNldFVzZXJJbmZvIiwiaW1hZ2VQb3B1cCIsImltYWdlTmFtZSIsImltYWdlUGljdHVyZSIsInBsYWNlUGhvdG8iLCJwaG90b05hbWUiLCJidXR0b25zQ2xvc2VQb3B1cCIsInBvcHVwIiwicGxhY2VUaXRsZSIsImdldEVsZW1lbnRCeUlkIiwicGxhY2VJbWFnZSIsImZvcm1DcmVhdGVDYXJkIiwiYnV0dG9uT3BlbkFkZENhcmRQb3B1cCIsImVsZW1lbnRzIiwic3VibWl0QnV0dG9uQWRkRm9ybSIsInBvcHVwRGVsZXRlIiwicG9wdXBBdmF0YXIiLCJlZGl0QXZhdGFyQnV0dG9uIiwiZm9ybUNoYW5nZUF2YXRhciIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicHJvZmlsZU5hbWUiLCJwcm9maWxlSm9iIiwiY2FyZFBvcHVwIiwicG9wdXBFZGl0UHJvZmlsZSIsImJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwIiwicHJvZmlsZUZvcm0iLCJpbml0aWFsQ2FyZHMiLCJlZGl0UHJvZmlsZVZhbGlkYXRvciIsImNyZWF0ZUNhcmRWYWxpZGF0b3IiLCJwaWN0dXJlT3BlbmVkIiwiaGFuZGxlQ2FyZENsaWNrIiwicG9wdXBEZWxldGVDb25maXJtIiwiaGFuZGxlRGVsZXRlQ29uZmlybSIsImVyciIsIm1lc3NhZ2UiLCJwb3B1cENoYW5nZUF2YXRhciIsImhhbmRsZUNoYW5nZUF2YXRhciIsInZhbGlkaXR5UG9wdXBBdmF0YXIiLCJpbnB1dFZhbHVlcyIsInVzZXJJbmZvcm1hdGlvbiIsImNyZWF0ZUNhcmQiLCJpc0xpa2VkIiwiY3JlYXRlQ2FyZEZvcm1TdWJtaXQiLCJwb3B1cEFkZEZvcm0iLCJkZWZhdWx0Q2FyZExpc3QiLCJlZGl0UHJvZmlsZWZvcm1TdWJtaXQiLCJwb3B1cFByb2ZpbGUiLCJwb3B1cEFkZENhcmQiLCJ1c2VyT3JpZ2luVmFsdWUiLCJhbGwiLCJfc2xpY2VkVG9BcnJheSIsInJlc1VzZXIiLCJyZXNDYXJkcyIsInJldmVyc2UiXSwic291cmNlUm9vdCI6IiJ9