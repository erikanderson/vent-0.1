var app = angular.module('vent');

app.controller('mainController', function($scope, dataService){
  $scope.getParseData = function() {
    dataService.getData().then(function(response){
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
  $scope.addOneToQty = function(objectId) {
    dataService.addOne(objectId).then(function(response){
      console.log(response);
      $scope.getParseData();
    })
  }

  $scope.addParseUser = function() {
    dataService.addUser($scope.newUserName, $scope.newUserPassword).then(function(response){
      console.log(response);
      $scope.alerts.push({msg: response.messageToAlert});
      console.log(response.sessionToken);
      dataService.authenticateUser(response.sessionToken).then(function(responseAuth){
        console.log('response for authentication request is ' + responseAuth);
      })
    })
  }


  $scope.alerts = [];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };


  $scope.getParseData();

})