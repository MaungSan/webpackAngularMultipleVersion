'use strict';
$(function () {
      (function (angular) {
            //var angularComponentVersion = require('angular');
            var angularComponentVersion = angular;
            // var _angular = window.angular;// closure
            // var version = _angular.version.full;

            angularComponentVersion.module("psMovies").component("movieList", require('./movie-list.component.js'));
            angularComponentVersion.module("psMovies").component("movieRating", require('./movie-rating.component.js'));
            angularComponentVersion.element(document).ready(function () {
                  angular.bootstrap(document.querySelector('[name="psMovies"]'), ['psMovies']);

            });
      })(angularVersions['1.5.1']);
});