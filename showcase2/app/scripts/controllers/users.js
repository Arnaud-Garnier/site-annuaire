'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', 'Users', 'Projects', function ($scope, $http, $routeParams, Users, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var showed = false;

    var b = false;

    $scope.show = function () {
      return showed;
    };

    $scope.showOnClick = function () {
      showed = true;
      return showed;
    };

    $scope.cancel = function () {
      showed = false;
      return showed;
    };

    $scope.showAllProjects = function () {
      b = !b;
      return b;
    };

    $scope.showProjects = function () {
      return b;
    };

    $scope.unshow = function () {
      b = !b;
      return b;
    };

    // ------------ fonctions de gestion des utilisateurs

    Users.getAll(function (data) {
        $scope.users = data;
      },
      function (data) {
        $scope.error = data;
      });

    if ($routeParams.userId) {
      Users.get($routeParams.userId, function (data) {
          $scope.currentUser = data;
        },
        function (data) {
          $scope.error = data;
        });
    }

    $scope.addUser = function () {

      var dataObj = {
        name: $scope.name,
        surname: $scope.surname,
        email: $scope.email,
        website: $scope.website
      };

      Users.post(dataObj, function () {
          alert('Utilisateur bien ajouté !');
          window.location.reload();
        },
        function () {
          alert('Erreur !')
        });

      // champs vides
      $scope.name = '';
      $scope.surname = '';

    };

    $scope.deleteUsr = function () {
      Users.remove($routeParams.userId, function () {
          window.location.href = '#/users';
          alert('Utilisateur supprimé !');
        },
        function () {
          alert('Erreur !');
        })
    };

    $scope.updateUsr = function () {

      var dataObj = {
        name: $scope.name,
        surname: $scope.surname,
        email: $scope.email,
        website: $scope.website
      };

      Users.update($routeParams.userId, dataObj, function () {
          window.location.reload();
          alert('Utilisateur mis à jour !');
        },
        function () {
          alert('Erreur !');
        })
    };

    // projects for a user

    Projects.getAll(function (data) {
        $scope.allProjects = data;
      },
      function (data) {
        $scope.error = data;
      });

    Users.getProjects($routeParams.userId, function (data) {
        $scope.projects = data;
      },
      function (data) {
        $scope.error = data;
      });

    $scope.addProject = function (projectId) {
      var projectData = {};

      Users.addProjectToUser($routeParams.userId, projectId, projectData, function () {
          window.location.reload();
          alert('Projet ajouté !');
        },
        function () {
          alert('Erreur !');
        })
    };

    $scope.removeProj = function (projectId) {
      Users.removeProjectFromUser($routeParams.userId, projectId, function () {
          window.location.reload();
          alert('Projet retiré !');
        },
        function () {
          alert('Erreur !');
        })
    };

    Users.getRoles($routeParams.userId, function (data) {
        $scope.roles = data;
      },
      function (data) {
        $scope.error = data;
      });

    $scope.showRole = function (roleProjectId, projectId) {
      return roleProjectId === projectId;
    };

  }]);
