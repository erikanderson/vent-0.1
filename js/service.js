var app = angular.module('vent');

app.service('dataService', function($http, $q){
  this.getData = function() {
    return $http({
      method: 'GET', 
      url: 'https://api.parse.com/1/classes/vent'
    })
  }
  this.postData = function(newItemName) {
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/vent',
      data: {'itemName': newItemName, qtyOnHand: 0}
    })
  }
  this.removeData = function(objectId) {
    return $http({
      method: 'DELETE',
      url: 'https://api.parse.com/1/classes/vent/' + objectId
    })
  }
  this.addOne = function(objectId) {
    return $http({
      method: 'PUT',
      url: "https://api.parse.com/1/classes/vent/" + objectId,
      data: {"qtyOnHand":{"__op":"Increment","amount":1}}
    })
  }
  this.addUser = function(userName, password) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'https://api.parse.com/1/users',
      data: {"username": userName, "password": password}
    }).success(function(data, status){
      data.messageToAlert = "User successfully created at " + data.createdAt;
      deferred.resolve(data); 
    }).error(function(data, status){
      data.messageToAlert = "User not created due to this reason: " + data.error;
      deferred.resolve(data);
    })
    return deferred.promise;
  }
  this.authenticateUser = function(sessionToken) {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/users/me',
      headers: {'X-Parse-Session-Token': sessionToken}
    })
  }

})