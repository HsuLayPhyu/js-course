/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\ASUS\\\\Documents\\\\GitHub\\\\js-course\\\\firebase9\\\\node_modules\\\\firebase\\\\app\\\\dist\\\\index.esm.js'\");\n\n//# sourceURL=webpack://firebase/./node_modules/firebase/app/dist/index.esm.js?");

/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\ASUS\\\\Documents\\\\GitHub\\\\js-course\\\\firebase9\\\\node_modules\\\\firebase\\\\auth\\\\dist\\\\index.esm.js'\");\n\n//# sourceURL=webpack://firebase/./node_modules/firebase/auth/dist/index.esm.js?");

/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\ASUS\\\\Documents\\\\GitHub\\\\js-course\\\\firebase9\\\\node_modules\\\\firebase\\\\firestore\\\\dist\\\\index.esm.js'\");\n\n//# sourceURL=webpack://firebase/./node_modules/firebase/firestore/dist/index.esm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyAOpDfrpjC_mgoL1Tt56UAIQXFN2k7Asmk\",\r\n  authDomain: \"fir-9-85eb3.firebaseapp.com\",\r\n  projectId: \"fir-9-85eb3\",\r\n  storageBucket: \"fir-9-85eb3.appspot.com\",\r\n  messagingSenderId: \"821099746960\",\r\n  appId: \"1:821099746960:web:05f2114ed5d08fe00aea15\",\r\n  measurementId: \"G-T669WWX1N7\"\r\n};\r\n\r\n// init firebase\r\n(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig)\r\n\r\n// init services\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)()\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)()\r\n\r\n// collection ref\r\nconst colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'books')\r\n\r\n// queries\r\nconst q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(colRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('createdAt'))\r\n\r\n// realtime collection data\r\nconst unsubCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(q, (snapshot) => {\r\n  let books = []\r\n  snapshot.docs.forEach(doc => {\r\n    books.push({ ...doc.data(), id: doc.id })\r\n  })\r\n  console.log(books)\r\n})\r\n\r\n// adding docs\r\nconst addBookForm = document.querySelector('.add')\r\naddBookForm.addEventListener('submit', (e) => {\r\n  e.preventDefault()\r\n\r\n  ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(colRef, {\r\n    title: addBookForm.title.value,\r\n    author: addBookForm.author.value,\r\n    createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)()\r\n  })\r\n  .then(() => {\r\n    addBookForm.reset()\r\n  })\r\n})\r\n\r\n// deleting docs\r\nconst deleteBookForm = document.querySelector('.delete')\r\ndeleteBookForm.addEventListener('submit', (e) => {\r\n  e.preventDefault()\r\n\r\n  const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'books', deleteBookForm.id.value)\r\n\r\n  ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(docRef)\r\n    .then(() => {\r\n      deleteBookForm.reset()\r\n    })\r\n})\r\n\r\n//get a single document\r\n\r\nconst docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db,'books','vUZRDMvspYC7PQZS1Xbl')\r\n\r\nconst unsubDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(docRef, (doc) => {\r\n  console.log(doc.data(),doc.id)\r\n})\r\n\r\n//updating a document\r\nconst updateForm = document.querySelector('.update')\r\nupdateForm.addEventListener('submit',(e) => {\r\n  e.preventDefault()\r\n\r\n  const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'books', updateForm.id.value)\r\n\r\n  ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, {\r\n    title: 'updated title'\r\n  })\r\n  .then(() => {\r\n    updateForm.reset()\r\n  })\r\n})\r\n\r\n//signing users up\r\nconst signupForm = document.querySelector('.signup')\r\nsignupForm.addEventListener('submit',(e) => {\r\n  e.preventDefault()\r\n\r\n  const email = signupForm.email.value\r\n  const password =signupForm.password.value\r\n\r\n  ;(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth,email,password)\r\n    .then((cred) => {\r\n      console.log('user created:', cred.user)\r\n      signupForm.reset()\r\n  })\r\n  .catch((err) => {\r\n    console.log(err.message)\r\n  })\r\n}) \r\n\r\n//logging in and out\r\nconst logoutButton = document.querySelector('.logout')\r\nlogoutButton.addEventListener('click', () => {\r\n  ;(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth)\r\n  .then(() => {\r\n    //console.log('the user signed out')\r\n  })\r\n  .catch((err) => {\r\n    console.log(err.message)\r\n  })\r\n})\r\n\r\nconst loginForm = document.querySelector('.login')\r\nloginForm.addEventListener('submit', (e) => {\r\n  e.preventDefault()\r\n\r\n  const email = loginForm.email.value\r\n  const password = loginForm.password.value\r\n\r\n  ;(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth,email, password)\r\n    .then((cred) => {\r\n      //console.log('user logged in', cred.user)\r\n    })\r\n    .catch((err) => {\r\n      console.log(err.message)\r\n    })\r\n})\r\n\r\n//subscribing to auth changes\r\n const unsubAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth,(user) => {\r\n  console.log('user status changed:', user)\r\n})\r\n\r\n//unsubscribing from changes (auth & db)\r\nconst unsubButton = document.querySelector('.unsub')\r\nunsubButton.addEventListener('click', () => {\r\n  console.log('unscribing')\r\n  unsubCol()\r\n  unsubDoc()\r\n  unsubAuth()\r\n})\n\n//# sourceURL=webpack://firebase/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;