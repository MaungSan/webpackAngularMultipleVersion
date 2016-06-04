/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	const angularlocal   = __webpack_require__(1);
	angularlocal.module('psMovies', []);

	__webpack_require__(2);


	// angular.module('dashboard', []);
	// require('./directives');
	// require('./services');
	// require('./controllers');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	$(function () {
	      (function (angular) {
	            //var angularComponentVersion = require('angular');
	            var angularComponentVersion = angular;
	            // var _angular = window.angular;// closure
	            // var version = _angular.version.full;

	            angularComponentVersion.module("psMovies").component("movieList", __webpack_require__(3));
	            angularComponentVersion.module("psMovies").component("movieRating", __webpack_require__(4));
	            angularComponentVersion.element(document).ready(function () {
	                  angular.bootstrap(document.querySelector('[name="psMovies"]'), ['psMovies']);

	            });
	      })(angularVersions['1.5.1']);
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	    "use strict";

	function movieList(){
	    return {
	        template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ps-movies/movie-list.component.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	        controllerAs: "model",
	        controller: ["$http", function ($http) {

	        var model = this;
	        model.movies = [];
	        function fetchMovies($http) {
	                return $http.get("./data/movies.json")
	                            .then(function(response) {
	                                return response.data;
	                            });
	            }
	        model.$onInit = function() {
	            fetchMovies($http).then(function(movies) {
	                model.movies = movies;    
	            });
	        };
	        
	        model.upRating = function(movie) {
	            if(movie.rating < 5) {
	                movie.rating += 1;
	            }
	        };
	        
	        model.downRating = function(movie) {
	            if(movie.rating > 1) {
	                movie.rating -= 1;
	            }
	        };
	    }]};}
	module.exports = movieList();



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	function movieRating(){
	    return {
	        template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ps-movies/movie-rating.component.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	        bindings: {
	            value: "<"
	        },
	        transclude: true, 
	        controllerAs: "model",
	        controller: function() {
	            var model = this;
	            
	            model.$onInit = function() {
	                model.entries = new Array(model.value);  
	            };
	            
	            model.$onChanges = function() {
	                model.entries = new Array(model.value);
	            };
	        }        
	    };}
	module.exports = movieRating();
	 

/***/ }
/******/ ]);