var app = angular.module('listApp');

app.service('dataService', function(){
  var list = [
    {name: 'Tyler', age: 24},
    {name: 'Cahlan', age: 34},
    {name: 'Ean', age: 24}
  ];

  this.getList = function(){
    return list;
  };

  this.addItem = function(item){
    list.push(item);
  };

  this.removeItem = function(item){
    for(var i = 0; i < list.length; i++){
      if(list[i].name === item){
        list.splice(i, 1);
      }
    }
  }
});