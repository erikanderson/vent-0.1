var app = angular.module('vent');

app.controller('mainController', function($scope, dataService){
  $scope.getParseData = function() {
    dataservice.getData().then(function(response){
      $scope.items = response.data.results;
    })
  }
  $scope.postParseData = function() {
    dataService.postData($scope.newItemName).then(function(response){
      console.log(response);
      $scope.getParseData();
    })
    $scope.newItemName = '';
  }
  $scope.removeParseData = function(objectId) {
    dataService.removeData(objectId).then(function(response){
      console.log(response);
      $scope.getParseData();
    })
  }

  $scope.getParseData();

})