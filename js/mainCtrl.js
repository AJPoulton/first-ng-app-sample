var app = angular.module('listApp');

app.controller('mainCtrl', function($scope, dataService){
  $scope.showConfirmation = false;
  $scope.addNewItem = function(){
    var person = {};
    person.name = $scope.newTask;
    person.age = 30;
    dataService.addItem(person);
  }

  $scope.removeItem = function(){
    dataService.removeItem($scope.newTask);
    $scope.showConfirmation = false;
  }

  $scope.getItems = function(){
    $scope.list = dataService.getList();
  }

  $scope.no = function(){
    $scope.showConfirmation = false;
  }

  $scope.areYouSure = function(){
    $scope.showConfirmation = true;
  }

  $scope.getItems();
});