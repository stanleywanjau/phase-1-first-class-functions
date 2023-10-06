function receivesAFunction(callback){
console.log(callback());
}
receivesAFunction(function(){
  return callback(spy)
})
 function returnsANamedFunction(){
  return greeting
 }

 function greeting(){
  return "Hello World"
 }
function returnsAnAnonymousFunction(){
  return function(){
    return "Hello world"
  }
}