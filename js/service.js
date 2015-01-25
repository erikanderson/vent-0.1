var app = angular.module('vent');

app.service('dataService', function($http, $q){
  this.getData = function() {
    return $http({
      method: 'GET', 
      url: 'https://api.parse.com/1/classes/vent'
    })
  };
  this.postData = function() {
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/vent',
      data: {'itemName': newItemName}
    })
  };
  this.removeData = function(objectId) {
    return $http({
      method: 'DELETE',
      url: 'https://api.parse.com/1/classes/vent/' + objectId
    })
  };
})