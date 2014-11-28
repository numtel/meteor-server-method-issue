// Write your package code here!
var myArray = [];

Meteor.methods({
  'getArray': function(){
    return myArray;
  },
  'pushToArray': function(value){
    myArray.push(value);
  }
});
