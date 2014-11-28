// Write your tests here!
// Here is an example.
Tinytest.addAsync('Meteor.call result BY VALUE', function (test, done) {
  Meteor.call('getArray', function(error, firstResult){
    Meteor.call('pushToArray', 'Hello', function(error, result){
      Meteor.call('getArray', function(error, secondResult){
        test.equal(firstResult.length + 1, secondResult.length);
        done();
      });
    });

  });
});
