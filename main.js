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
  function Popup(popup, form, title, picture) {
    _classCallCheck(this, Popup);
    this._popup = popup;
    this._form = form;
    this._picture = picture;
    this._title = title;
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
  function PopupWithForm(popup, form, submitForm) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popup, form);
    _this._popup = popup;
    _this._submitForm = submitForm;
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
var popupChangeAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupAvatar, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formChangeAvatar, handleChangeAvatar);
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
var popupAddForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](popupAddCard, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.formCreateCard, createCardFormSubmit);
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
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](_components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.popupEditProfile, _components_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.profileForm, editProfileformSubmit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hELFdBQVcsQ0FBQ2dFLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBdEIsR0FBRyxFQUFJO0VBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQztBQUMxQixDQUFDLENBQUM7QUFFRixJQUFNVSxlQUFlLEdBQUcsSUFBSS9ELDhEQUFPLENBQUM7RUFDbEMzSCxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQ1I2SCxRQUFRLEVBQUUsU0FBQUEsU0FBQzdILElBQUksRUFBSztJQUNsQixJQUFNb0ksSUFBSSxHQUFHa0QsVUFBVSxDQUFDdEwsSUFBSSxFQUFFQyxNQUFNLENBQUM7SUFDckN5TCxlQUFlLENBQUMxRCxPQUFPLENBQUNJLElBQUksQ0FBQztFQUMvQjtBQUNGLENBQUMsRUFBRSxXQUFXLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb29wdXBEZWxldGVDb25maXJtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIGNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7dXJsLCBoZWFkZXJzfSkge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSBoZWFkZXJzWydhdXRob3JpemF0aW9uJ11cclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkcygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L2NhcmRzYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tSZXN1bHQocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsCAke3Jlcy5zdGF0dXN9YClcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXJkKHtwbGFjZW5hbWUsIGxpbmt9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IHBsYWNlbmFtZSwgbGluazogbGluayB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFVzZXJEYXRhKHtuYW1lLCBqb2J9KSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBuYW1lLCBhYm91dDogam9iIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEF2YXRhciAoe2F2YXRhcn0pIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L3VzZXJzL21lL2F2YXRhcmAse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkgKHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcjphdmF0YXJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdXRMaWtlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkcy8ke2lkfS9saWtlc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLCAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZW1vdmVMaWtlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkcy8ke2lkfS9saWtlc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLCAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDYXJkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLCAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH0gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IG5ldyBBcGkgKHtcclxuICAgIHVybDogYGh0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNjNgLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhdXRob3JpemF0aW9uOiAnMTRkMTZlYzctYzdlOC00MDcwLWJkNDAtMzE1OTFjYWRiMTY5JyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgXHJcbiAgXHJcbiAiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB1c2VySWQsIHRlbXBsYXRlU2VsZWN0b3IsIHBvcHVwT3BlbmVyLCBoYW5kbGVMaWtlQ2xpY2ssIGhhbmRsZVRyYXNoQ2xpY2spIHtcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XG4gICAgdGhpcy5fb3duZXJJZCA9IGRhdGEub3duZXIuX2lkO1xuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcbiAgICB0aGlzLmlkID0gZGF0YS5faWQ7XG4gICAgdGhpcy5fbXlJZCA9IHVzZXJJZDtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvclxuICAgIHRoaXMuX3BvcHVwT3BlbmVyID0gcG9wdXBPcGVuZXJcbiAgICB0aGlzLmhhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcbiAgICB0aGlzLl9oYW5kbGVUcmFzaENsaWNrID0gaGFuZGxlVHJhc2hDbGljaztcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50JykuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9faXRlbScpLmNsb25lTm9kZSh0cnVlKVxuICAgIHJldHVybiBjYXJkRWxlbWVudFxuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fcGhvdG8nKS5zcmMgPSB0aGlzLl9saW5rXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fcGhvdG8nKS5hbHQgPSB0aGlzLl9uYW1lXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbmFtZScpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZVxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZS1idXR0b24nKTtcbiAgICB0aGlzLl9saWtlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbGlrZScpO1xuICAgIHRoaXMuX2xpa2VDb3VudGVyID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbGlrZWNvdW50ZXInKTtcblxuICAgIGlmICh0aGlzLl9teUlkICE9PSB0aGlzLl9vd25lcklkKSB7XG4gICAgICB0aGlzLl9kZWxldGVCdXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0TGlrZXModGhpcy5fbGlrZXMpXG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgYWRkTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRfX2xpa2VfYWN0aXZlJyk7XG4gIH1cblxuICBfY2hlY2tMaWtlKCkge1xuICAgIGlmICh0aGlzLl9saWtlcy5zb21lKChsaWtlKSA9PiBsaWtlLl9pZCA9PT0gdGhpcy5fbXlJZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW1vdmVMaWtlKCkge1xuICAgIHRoaXMuX2xpa2UuY2xhc3NMaXN0LnJlbW92ZSgnZWxlbWVudF9fbGlrZV9hY3RpdmUnKTsgICAgICBcbiAgfVxuXG4gIHNldExpa2VzKGFycikge1xuICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gYXJyLmxlbmd0aDtcbiAgICB0aGlzLl9saWtlcyA9IGFycjtcbiAgICBpZiAodGhpcy5fY2hlY2tMaWtlKCkpIHtcbiAgICAgIHRoaXMuYWRkTGlrZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlrZSgpXG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKClcbiAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTGlrZUNsaWNrKHRoaXMuaWQsIHRoaXMuX2NoZWNrTGlrZSgpLHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fZGVsZXRlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlVHJhc2hDbGljayh0aGlzLmlkLCB0aGlzKTtcbiAgICB9KVxuICB9XG5cbiAgX2hhbmRsZUltYWdlQ2xpY2soKSB7XG4gICAgdGhpcy5fcG9wdXBPcGVuZXIodGhpcy5fbGluaywgdGhpcy5fbmFtZSlcbiAgfVxuXG4gIHJlbW92ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cbn1cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1TZWxlY3Rvciwgc3VibWl0QnV0dG9uU2VsZWN0b3IsIGlucHV0TGlzdCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gZm9ybVNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBpbnB1dExpc3Q7XG4gICAgfVxuXG4gICAgX3Nob3dFcnJvcihpbnB1dFNlbGVjdG9yLCBlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZXJyb3JDbGFzcyA9IHRoaXMuX2Zvcm1TZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dFNlbGVjdG9yLmlkfS1lcnJvcmApO1xuICAgICAgICBpbnB1dFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JDbGFzcy50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICB9O1xuXG4gICAgX2hpZGVFcnJvcihpbnB1dFNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9mb3JtU2VsZWN0b3IucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRTZWxlY3Rvci5pZH0tZXJyb3JgKTtcbiAgICAgICAgaW5wdXRTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yQ2xhc3MudGV4dENvbnRlbnQgPSAnJ1xuICAgIH07XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCFpbnB1dFNlbGVjdG9yLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93RXJyb3IoaW5wdXRTZWxlY3RvciwgaW5wdXRTZWxlY3Rvci52YWxpZGF0aW9uTWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVFcnJvcihpbnB1dFNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcblxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHRoaXMuX2Zvcm1TZWxlY3Rvci5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1TZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLmlucHV0U2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZm9ybUlzVmFsaWQgPSB0aGlzLl9pbnB1dExpc3QuZXZlcnkoKGl0ZW0pID0+IGl0ZW0udmFsaWRpdHkudmFsaWQpO1xuXG4gICAgICAgIGlmIChmb3JtSXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVTdWJtaXRCdXR0b24odGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24odGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpXG4gICAgfVxuXG4gICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcblxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuXG4gICAgfVxuXG5cbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9mb3JtU2VsZWN0b3IsIHRoaXMuY29uZmlnKVxuICAgIH1cblxufSIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwRGVsZXRlQ29uZmlybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMucG9wdXBTZWxlY3RvciA9IHBvcHVwU2VsZWN0b3JcclxuICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0gPSB0aGlzLnBvcHVwU2VsZWN0b3IucXVlcnlTZWxlY3RvcignLnBvcHVwX19zYXZlYnV0dG9uJyk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXREZWxldGUgKHN1Ym1pdERlbGV0ZSkge1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0RGVsZXRlID0gc3VibWl0RGVsZXRlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9idXR0b25Db25maXJtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXREZWxldGUoZXZ0KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwLCBmb3JtLCB0aXRsZSwgcGljdHVyZSkge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBwb3B1cDtcclxuICAgIHRoaXMuX2Zvcm0gPSBmb3JtXHJcbiAgICB0aGlzLl9waWN0dXJlID0gcGljdHVyZVxyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJylcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSlcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSlcclxuICB9XHJcblxyXG4gIF9jbG9zZVBvcHVwQnlBcmVhKCkge1xyXG4gICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gdGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIF9jbG9zZVBvcHVwQnlDbG9zaW5nSWNvbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2luZy1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gIH1cclxuICBcclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Nsb3NlUG9wdXBCeUFyZWEoKVxyXG4gICAgdGhpcy5fY2xvc2VQb3B1cEJ5Q2xvc2luZ0ljb24oKVxyXG5cclxuICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cCwgZm9ybSwgc3VibWl0Rm9ybSkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwLGZvcm0pO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gcG9wdXBcclxuICAgICAgICB0aGlzLl9zdWJtaXRGb3JtID0gc3VibWl0Rm9ybTtcclxuICAgICAgICB0aGlzLl9idXR0b25Db25maXJtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19zYXZlYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2luZm8nKVxyXG4gICAgICAgIHRoaXMuX3RleHRCdXR0b24gPSB0aGlzLl9idXR0b25Db25maXJtLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlcyA9IHt9XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PlxyXG4gICAgICAgICAgICAodGhpcy5faW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSkpXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpXHJcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2F2aW5nKHN0YXR1cyl7XHJcbiAgICAgICAgaWYoc3RhdHVzKXtcclxuICAgICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSBgQ9C+0YXRgNCw0L3QtdC90LjQtS4uLmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0QnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cCkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwKTtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IHBvcHVwXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1hZ2UnKVxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZS1uYW1lJylcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHBpY3R1cmUsIHRpdGxlKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5zcmMgPSBwaWN0dXJlXHJcbiAgICAgICAgdGhpcy5fcGljdHVyZS5hbHQgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7cmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtIChpdGVtKSAge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVySXRlbXMgKGNhcmRzKSB7XHJcbiAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlcihjYXJkKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJJbmZvLm5hbWUpXHJcbiAgICAgICAgdGhpcy5fdXNlcmpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckluZm8uam9iKVxyXG4gICAgICAgIHRoaXMuX2F2YXRhciA9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VySW5mby5hdmF0YXIpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl91c2VybmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgam9iOiB0aGlzLl91c2Vyam9iLnRleHRDb250ZW50LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXJEYXRhXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJuYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuX3VzZXJqb2IudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xyXG4gICAgICAgIHRoaXMuX2F2YXRhci5zcmMgPSBkYXRhLmF2YXRhclxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2ltYWdlJyk7XG5leHBvcnQgY29uc3QgIGltYWdlTmFtZSA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZS1uYW1lJyk7XG5leHBvcnQgY29uc3QgIGltYWdlUGljdHVyZSA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpXG5leHBvcnQgY29uc3QgcGxhY2VQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19waG90bycpXG5leHBvcnQgY29uc3QgcGhvdG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5lbGVtZW50X19uYW1lJylcbmV4cG9ydCBjb25zdCBidXR0b25zQ2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2luZy1pY29uJyk7XG5leHBvcnQgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpXG5leHBvcnQgY29uc3QgcGxhY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW5hbWUnKTtcbmV4cG9ydCBjb25zdCBwbGFjZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmsnKTtcbmV4cG9ydCBjb25zdCBmb3JtQ3JlYXRlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZm9ybScpXG5leHBvcnQgY29uc3QgYnV0dG9uT3BlbkFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJylcbmV4cG9ydCBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50cycpXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uQWRkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICgnYWRkY2FyZCcpXG5leHBvcnQgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhcicpXG5leHBvcnQgY29uc3QgcG9wdXBEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZGVsZXRlLWNhcmQnKVxuZXhwb3J0IGNvbnN0IHBvcHVwQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2F2YXRhcicpXG5leHBvcnQgY29uc3QgZWRpdEF2YXRhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hdmF0YXItZWRpdGJ1dHRvbicpXG5leHBvcnQgY29uc3QgZm9ybUNoYW5nZUF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXJmb3JtJylcblxuZXhwb3J0IGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYW1lJylcbmV4cG9ydCBjb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKb2InKVxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2hlYWRpbmcnKVxuZXhwb3J0IGNvbnN0IHByb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fc3ViaGVhZGluZycpXG5leHBvcnQgY29uc3QgY2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZC1jYXJkJylcblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2NvbnRhaW5lcicsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2luZm8nLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc2F2ZWJ1dHRvbicsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fc2F2ZWJ1dHRvbl9pbmFjdGl2ZScsXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbmZvX3R5cGVfZXJyb3InLFxuICBlcnJvckNsYXNzOiAncG9wdXBfX2luZm8tZXJyb3InLFxufVxuXG5cbmV4cG9ydCBjb25zdCBwb3B1cEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2VkaXQtcHJvZmlsZScpO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZUZvcm0nKVxuZXhwb3J0IGNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKCcucG9wdXBfX2luZm8nKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGltYWdlUG9wdXAsIGluaXRpYWxDYXJkcywgZm9ybUNyZWF0ZUNhcmQsIGJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAsIGVsZW1lbnRzLCBpbWFnZVBpY3R1cmUsIGltYWdlTmFtZSwgY29uZmlnLCBwb3B1cEVkaXRQcm9maWxlLFxyXG4gIGJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwLCBuYW1lSW5wdXQsIGpvYklucHV0LCBwcm9maWxlRm9ybSwgcGxhY2VUaXRsZSwgcGxhY2VJbWFnZSwgaW5wdXRMaXN0LCBwcm9maWxlTmFtZSwgXHJcbiAgcHJvZmlsZUpvYiwgcG9wdXBEZWxldGUsIHBvcHVwQXZhdGFyLCBlZGl0QXZhdGFyQnV0dG9uLGNhcmRQb3B1cCwgZm9ybUNoYW5nZUF2YXRhcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzLmpzXCJcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiXHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQge2FwaX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XHJcbmltcG9ydCBQb3B1cERlbGV0ZUNvbmZpcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb29wdXBEZWxldGVDb25maXJtJztcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwcm9maWxlRm9ybSlcclxuZWRpdFByb2ZpbGVWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpXHJcbmNvbnN0IGNyZWF0ZUNhcmRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1DcmVhdGVDYXJkKVxyXG5jcmVhdGVDYXJkVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKVxyXG5cclxuY29uc3QgcGljdHVyZU9wZW5lZCA9IG5ldyBQb3B1cFdpdGhJbWFnZShpbWFnZVBvcHVwKVxyXG5waWN0dXJlT3BlbmVkLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcbmNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChwaWN0dXJlLCBuYW1lKSA9PiB7XHJcbiAgcGljdHVyZU9wZW5lZC5vcGVuKHBpY3R1cmUsIG5hbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRyYXNoQ2xpY2soaWQsIGNhcmQpIHtcclxuICBwb3B1cERlbGV0ZUNvbmZpcm0uc3VibWl0RGVsZXRlKCgpID0+IGhhbmRsZURlbGV0ZUNvbmZpcm0oaWQsIGNhcmQpKVxyXG4gIHBvcHVwRGVsZXRlQ29uZmlybS5vcGVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNvbmZpcm0oaWQsIGNhcmQpIHtcclxuICBhcGkuZGVsZXRlQ2FyZChpZClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY2FyZC5yZW1vdmVDYXJkKCk7XHJcbiAgICAgIHBvcHVwRGVsZXRlQ29uZmlybS5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwb3B1cENoYW5nZUF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQXZhdGFyLCBmb3JtQ2hhbmdlQXZhdGFyLCBoYW5kbGVDaGFuZ2VBdmF0YXIpO1xyXG5cclxucG9wdXBDaGFuZ2VBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHZhbGlkaXR5UG9wdXBBdmF0YXI9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUNoYW5nZUF2YXRhcik7XHJcbnZhbGlkaXR5UG9wdXBBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQXZhdGFyKGlucHV0VmFsdWVzKSB7XHJcbiAgcG9wdXBDaGFuZ2VBdmF0YXIucmVuZGVyU2F2aW5nKHRydWUpXHJcbiAgYXBpLmVkaXRBdmF0YXIoaW5wdXRWYWx1ZXMpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB1c2VySW5mb3JtYXRpb24uc2V0VXNlckluZm8oZGF0YSk7XHJcbiAgICAgIHBvcHVwQ2hhbmdlQXZhdGFyLmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgcG9wdXBDaGFuZ2VBdmF0YXIucmVuZGVyU2F2aW5nKGZhbHNlKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmVkaXRBdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBDaGFuZ2VBdmF0YXIub3BlbigpO1xyXG4gIHZhbGlkaXR5UG9wdXBBdmF0YXIuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpXHJcbn0pO1xyXG5cclxuY29uc3QgcG9wdXBEZWxldGVDb25maXJtID0gbmV3IFBvcHVwRGVsZXRlQ29uZmlybShwb3B1cERlbGV0ZSk7XHJcbnBvcHVwRGVsZXRlQ29uZmlybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhLCB1c2VySWQpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoZGF0YSwgdXNlcklkLCAnLmVsZW1lbnQnLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZUxpa2VDbGljaywgaGFuZGxlVHJhc2hDbGljaylcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKClcclxuICByZXR1cm4gY2FyZEVsZW1lbnRcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVMaWtlQ2xpY2soaWQsIGlzTGlrZWQsIGNhcmQpIHtcclxuICBpZiAoaXNMaWtlZCkge1xyXG4gICAgYXBpLnJlbW92ZUxpa2UoaWQpXHJcbiAgICAudGhlbigoZGF0YSkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICBjYXJkLnNldExpa2VzKGRhdGEubGlrZXMpOyAgICAgICAgICAgIFxyXG4gICAgfSlcclxuXHJcbn0gZWxzZSB7XHJcbiBhcGkucHV0TGlrZShjYXJkLmlkKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY2FyZC5zZXRMaWtlcyhkYXRhLmxpa2VzKTtcclxuICAgIH0pXHJcbn1cclxufVxyXG5cclxubGV0IHVzZXJJZCA9IG51bGxcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRGb3JtU3VibWl0KGlucHV0VmFsdWVzKSB7XHJcbiAgcG9wdXBBZGRGb3JtLnJlbmRlclNhdmluZyh0cnVlKVxyXG4gIGFwaS5hZGRDYXJkKHtwbGFjZW5hbWU6IGlucHV0VmFsdWVzLnBsYWNlbmFtZSwgbGluazppbnB1dFZhbHVlcy5saW5rfSlcclxuICAudGhlbiAoKGRhdGEpID0+ICB7IGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGRhdGEsIHVzZXJJZClcclxuICBkZWZhdWx0Q2FyZExpc3QuYWRkSXRlbShjYXJkKSxcclxuICBwb3B1cEFkZEZvcm0uY2xvc2UoKVxyXG59KVxyXG4gIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgfSlcclxuICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICBwb3B1cEFkZEZvcm0ucmVuZGVyU2F2aW5nKGZhbHNlKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvZmlsZWZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBwb3B1cFByb2ZpbGUucmVuZGVyU2F2aW5nKHRydWUpXHJcbiAgYXBpLmVkaXRVc2VyRGF0YSh7bmFtZTogaW5wdXRWYWx1ZXMubmFtZSwgam9iOiBpbnB1dFZhbHVlcy5qb2J9KVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICB1c2VySW5mb3JtYXRpb24uc2V0VXNlckluZm8oZGF0YSlcclxuICAgIHBvcHVwUHJvZmlsZS5jbG9zZSgpXHJcbiAgfSlcclxuICAuY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gIH0pXHJcbiAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgcG9wdXBQcm9maWxlLnJlbmRlclNhdmluZyhmYWxzZSk7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgcG9wdXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZC1jYXJkJyk7XHJcbmNvbnN0IHBvcHVwQWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQWRkQ2FyZCwgZm9ybUNyZWF0ZUNhcmQsIGNyZWF0ZUNhcmRGb3JtU3VibWl0KVxyXG5cclxuYnV0dG9uT3BlbkFkZENhcmRQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cEFkZEZvcm0ub3BlbigpXHJcbiAgY3JlYXRlQ2FyZFZhbGlkYXRvci5kaXNhYmxlU3VibWl0QnV0dG9uKClcclxufSlcclxucG9wdXBBZGRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcbmNvbnN0IHVzZXJJbmZvcm1hdGlvbiA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZTogJy5wcm9maWxlX19oZWFkaW5nJyxcclxuICBqb2I6ICcucHJvZmlsZV9fc3ViaGVhZGluZycsXHJcbiAgYXZhdGFyOiAnLnByb2ZpbGVfX2F2YXRhcidcclxufSlcclxuXHJcbmNvbnN0IHBvcHVwUHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwRWRpdFByb2ZpbGUsIHByb2ZpbGVGb3JtLCBlZGl0UHJvZmlsZWZvcm1TdWJtaXQpXHJcblxyXG5idXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCB1c2VyT3JpZ2luVmFsdWUgPSB1c2VySW5mb3JtYXRpb24uZ2V0VXNlckluZm8oKVxyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJPcmlnaW5WYWx1ZS5uYW1lXHJcbiAgam9iSW5wdXQudmFsdWUgPSB1c2VyT3JpZ2luVmFsdWUuam9iXHJcblxyXG4gIHBvcHVwUHJvZmlsZS5vcGVuKClcclxuXHJcbn0pO1xyXG5cclxucG9wdXBQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKClcclxuXHJcblByb21pc2UuYWxsKFsgYXBpLmdldFVzZXJEYXRhKCksIGFwaS5nZXRDYXJkcygpXSlcclxuICAudGhlbigoWyByZXNVc2VyLCByZXNDYXJkcyBdKSA9PiB7XHJcbiAgICB1c2VySWQgPSByZXNVc2VyLl9pZFxyXG4gICAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJJbmZvKHJlc1VzZXIpXHJcbiAgICBkZWZhdWx0Q2FyZExpc3QucmVuZGVySXRlbXMocmVzQ2FyZHMucmV2ZXJzZSgpKVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICB9KVxyXG5cclxuICBjb25zdCBkZWZhdWx0Q2FyZExpc3QgPSBuZXcgU2VjdGlvbih7XHJcbiAgICBkYXRhOiB7fSxcclxuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChkYXRhLCB1c2VySWQpXHJcbiAgICAgIGRlZmF1bHRDYXJkTGlzdC5hZGRJdGVtKGNhcmQpXHJcbiAgICB9XHJcbiAgfSwgJy5lbGVtZW50cycpOyJdLCJuYW1lcyI6WyJBcGkiLCJfcmVmIiwidXJsIiwiaGVhZGVycyIsIl9jbGFzc0NhbGxDaGVjayIsIl90b2tlbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0Q2FyZHMiLCJfdGhpcyIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlcyIsIl9jaGVja1Jlc3VsdCIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJhZGRDYXJkIiwiX3JlZjIiLCJfdGhpczIiLCJwbGFjZW5hbWUiLCJsaW5rIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiZ2V0VXNlckRhdGEiLCJfdGhpczMiLCJlZGl0VXNlckRhdGEiLCJfcmVmMyIsIl90aGlzNCIsImpvYiIsImFib3V0IiwiZWRpdEF2YXRhciIsIl9yZWY0IiwiX3RoaXM1IiwiYXZhdGFyIiwicHV0TGlrZSIsImlkIiwiX3RoaXM2IiwicmVtb3ZlTGlrZSIsIl90aGlzNyIsImRlbGV0ZUNhcmQiLCJfdGhpczgiLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiQ2FyZCIsImRhdGEiLCJ1c2VySWQiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwicG9wdXBPcGVuZXIiLCJoYW5kbGVMaWtlQ2xpY2siLCJoYW5kbGVUcmFzaENsaWNrIiwiX25hbWUiLCJfbGluayIsIl9vd25lcklkIiwib3duZXIiLCJfaWQiLCJfbGlrZXMiLCJsaWtlcyIsIl9teUlkIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfcG9wdXBPcGVuZXIiLCJfaGFuZGxlVHJhc2hDbGljayIsIl9nZXRUZW1wbGF0ZSIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsImdlbmVyYXRlQ2FyZCIsIl9lbGVtZW50IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfZGVsZXRlQnV0dG9uIiwiX2xpa2UiLCJfbGlrZUNvdW50ZXIiLCJyZW1vdmUiLCJzZXRMaWtlcyIsImFkZExpa2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJfY2hlY2tMaWtlIiwic29tZSIsImxpa2UiLCJhcnIiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUltYWdlQ2xpY2siLCJyZW1vdmVDYXJkIiwiZGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0TGlzdCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJfZm9ybVNlbGVjdG9yIiwiX2lucHV0TGlzdCIsIl9zaG93RXJyb3IiLCJpbnB1dFNlbGVjdG9yIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9oaWRlRXJyb3IiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvcm1Jc1ZhbGlkIiwiZXZlcnkiLCJpdGVtIiwiZW5hYmxlU3VibWl0QnV0dG9uIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJQb3B1cCIsIlBvcHVwRGVsZXRlQ29uZmlybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInBvcHVwU2VsZWN0b3IiLCJjYWxsIiwiX2J1dHRvbkNvbmZpcm0iLCJzdWJtaXREZWxldGUiLCJfaGFuZGxlU3VibWl0RGVsZXRlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJwb3B1cCIsImZvcm0iLCJ0aXRsZSIsInBpY3R1cmUiLCJfcG9wdXAiLCJfZm9ybSIsIl9waWN0dXJlIiwiX3RpdGxlIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIm9wZW4iLCJldmVudCIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9jbG9zZVBvcHVwQnlBcmVhIiwidGFyZ2V0IiwiX2Nsb3NlUG9wdXBCeUNsb3NpbmdJY29uIiwiUG9wdXBXaXRoRm9ybSIsInN1Ym1pdEZvcm0iLCJfc3VibWl0Rm9ybSIsIl90ZXh0QnV0dG9uIiwiX2dldElucHV0VmFsdWVzIiwiX2lucHV0VmFsdWVzIiwicmVzZXQiLCJyZW5kZXJTYXZpbmciLCJQb3B1cFdpdGhJbWFnZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX2NvbnRhaW5lciIsIl9yZW5kZXJlciIsImFkZEl0ZW0iLCJwcmVwZW5kIiwicmVuZGVySXRlbXMiLCJjYXJkcyIsImNhcmQiLCJVc2VySW5mbyIsInVzZXJJbmZvIiwiX3VzZXJuYW1lIiwiX3VzZXJqb2IiLCJfYXZhdGFyIiwiZ2V0VXNlckluZm8iLCJ1c2VyRGF0YSIsInNldFVzZXJJbmZvIiwiaW1hZ2VQb3B1cCIsImltYWdlTmFtZSIsImltYWdlUGljdHVyZSIsInBsYWNlUGhvdG8iLCJwaG90b05hbWUiLCJidXR0b25zQ2xvc2VQb3B1cCIsInBsYWNlVGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsInBsYWNlSW1hZ2UiLCJmb3JtQ3JlYXRlQ2FyZCIsImJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAiLCJlbGVtZW50cyIsInN1Ym1pdEJ1dHRvbkFkZEZvcm0iLCJwb3B1cERlbGV0ZSIsInBvcHVwQXZhdGFyIiwiZWRpdEF2YXRhckJ1dHRvbiIsImZvcm1DaGFuZ2VBdmF0YXIiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInByb2ZpbGVOYW1lIiwicHJvZmlsZUpvYiIsImNhcmRQb3B1cCIsInBvcHVwRWRpdFByb2ZpbGUiLCJidXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cCIsInByb2ZpbGVGb3JtIiwiaW5pdGlhbENhcmRzIiwiZWRpdFByb2ZpbGVWYWxpZGF0b3IiLCJjcmVhdGVDYXJkVmFsaWRhdG9yIiwicGljdHVyZU9wZW5lZCIsImhhbmRsZUNhcmRDbGljayIsInBvcHVwRGVsZXRlQ29uZmlybSIsImhhbmRsZURlbGV0ZUNvbmZpcm0iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInBvcHVwQ2hhbmdlQXZhdGFyIiwiaGFuZGxlQ2hhbmdlQXZhdGFyIiwidmFsaWRpdHlQb3B1cEF2YXRhciIsImlucHV0VmFsdWVzIiwidXNlckluZm9ybWF0aW9uIiwiY3JlYXRlQ2FyZCIsImlzTGlrZWQiLCJjcmVhdGVDYXJkRm9ybVN1Ym1pdCIsInBvcHVwQWRkRm9ybSIsImRlZmF1bHRDYXJkTGlzdCIsImVkaXRQcm9maWxlZm9ybVN1Ym1pdCIsInBvcHVwUHJvZmlsZSIsInBvcHVwQWRkQ2FyZCIsInVzZXJPcmlnaW5WYWx1ZSIsImFsbCIsIl9zbGljZWRUb0FycmF5IiwicmVzVXNlciIsInJlc0NhcmRzIiwicmV2ZXJzZSJdLCJzb3VyY2VSb290IjoiIn0=