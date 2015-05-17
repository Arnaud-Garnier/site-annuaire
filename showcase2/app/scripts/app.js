'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */

// fonction pour déplacer le curseur de navigation

$('.nav.navbar-nav > li').on('click', function () {
  $('.nav.navbar-nav > li').removeClass('active');
  $(this).addClass('active');
});

angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/projects', {
        templateUrl: '../views/Projects/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: '../views/Projects/detail.html',
        controller: 'ProjectsCtrl'
      })
      .when('/create', {
        templateUrl: '../views/Projects/create.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });
