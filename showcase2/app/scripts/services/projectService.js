angular
  .module('pooIhmExemplesApp')
.service('Projects', ['$http', function Projects($http) {

  this.get = function (projectId, successCB, errorCB) {
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId)
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      });
  };

  this.getAll = function (successCB, errorCB) {
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      });
  };

  this.getAllUsers = function (projectId, successCB, errorCB) {
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Users')
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      });
  };

  this.post = function (projectData, successCB, errorCB) {
    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects', projectData)
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      });
  };

  this.update = function (projectId, projectData, successCB, errorCB) {
    $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId, projectData)
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      });
  };

  this.remove = function (projectId, successCB, errorCB) {
    if (window.confirm("Etes vous sûr de vouloir supprimer ce projet ?")) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
  };

  this.addUsr = function (projectId, userId, userData, successCB, errorCB) {
    $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Users/' + userId, userData)
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      })
  };

  this.deleteUsr = function (projectId, userId, successCB, errorCB) {
    $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Users/' + userId)
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      })
  };

  this.getRoles = function (projectId, successCB, errorCB) {
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Roles')
      .success(function (data) {
        if (data.status === 'success') {
          successCB(data.data);
        } else {
          errorCB(data.data);
        }
      });
  };

}]);
