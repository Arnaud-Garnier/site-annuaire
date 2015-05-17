'use strict';

angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', 'Projects', 'Users', function ($scope, $http, $routeParams, Projects, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var showed = false;
    var bool = false;

    $scope.showOnClick = function () {
      showed = true;
      return showed;
    };

    $scope.cancel = function () {
      showed = false;
      return showed;
    };

    $scope.show = function () {
      return showed;
    };

    Projects.getAll(function (data) {
        $scope.projects = data;
      },
      function (data) {
        $scope.error = data;
      });

    $scope.showUsers = function () {
      bool = !bool;
      Users.getAll(function (data) {
          $scope.allUsers = data;
        },
        function (data) {
          $scope.error = data;
        });
      return !bool;
    };

    $scope.switching = function () {
      bool = !bool;
      return bool;
    };

    // ------------- fonctions de gestion de projets

    if ($routeParams.projectId) {
      Projects.get($routeParams.projectId, function (data) {
          $scope.currentProject = data;
        },
        function (data) {
          $scope.error = data;
        });
    }

    Projects.getAllUsers($routeParams.projectId, function (data) {
        $scope.users = data;
      },
      function (data) {
        $scope.error = data;
      });

    $scope.addProject = function () {

      var myProj = {
        title: $scope.title,
        year: $scope.year,
        description: $scope.description
      };
      Projects.post(myProj, function () {
          alert('Projet ajouté !');
          window.location.href = '#/projects';
        },
        function () {
          alert('Erreur !')
        });

      $scope.title = '';
      $scope.year = '';
      $scope.description = '';

    };

    $scope.deleteProj = function () {
      Projects.remove($routeParams.projectId, function () {
          window.location.href = '#/projects';
          alert('Projet supprimé !');
        },
        function () {
          alert('Erreur !');
        })
    };

    $scope.updateProj = function () {

      var myProj = {
        title: $scope.title,
        year: $scope.year,
        description: $scope.description
      };

      Projects.update($routeParams.projectId, myProj, function () {
          window.location.reload();
          alert('Projet mis à jour !');
        },
        function () {
          alert('Erreur !');
        })
    };

    // add et remove des utilisateurs

    $scope.addUserToProject = function (userId) {
      var userData = {};

      Projects.addUsr($routeParams.projectId, userId, userData, function () {
          window.location.reload();
          alert('Utilisateur ajouté !');
        },
        function () {
          alert('Erreur !');
        })
    };

    $scope.deleteUserFromProject = function (userId) {
      Projects.deleteUsr($routeParams.projectId, userId, function () {
          window.location.reload();
          alert('Utilisateur retiré !');
        },
        function () {
          alert('Erreur !');
        })
    };

    Projects.getRoles($routeParams.projectId, function (data) {
        $scope.roles = data;
      },
      function (data) {
        $scope.error = data;
      });

    $scope.showRole = function (roleUserId, userId) {
      return roleUserId === userId;
    }

  }]);

