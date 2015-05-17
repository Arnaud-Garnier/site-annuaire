angular
  .module('pooIhmExemplesApp')
  .service('Users', ['$http', function Users($http) {

    this.get = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    this.getAll = function (successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    this.post = function (userData, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', userData)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    this.update = function (userId, userData, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId, userData)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    this.remove = function (userId, successCB, errorCB) {
      if (window.confirm("Etes vous sûr de vouloir supprimer cet utilisateur ?")) {
        $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId)
          .success(function (data) {
            if (data.status === 'success') {
              successCB(data.data);
            } else {
              errorCB(data.data);
            }
          });
      }
    };

    this.getProjects = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Projects')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    this.addProjectToUser = function (userId, projectId, projectData, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Projects/' + projectId, projectData)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        })
    };

    this.removeProjectFromUser = function (userId, projectId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Projects/' + projectId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        })
    };

    this.getRoles = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        })
    };

    this.updateRole = function (roleId, roleData, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + roleId, roleData)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

  }]);
