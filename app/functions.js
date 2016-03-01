
exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str1) {
      return str+", "+str1;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(x){
      return function() {
        return fn(x);
      }
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var sum=0;
    for(var i=0; i<arguments.length; i++){
      sum+=arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0,1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0,1);
    return function(){
      var params = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, params);
    }


  },

  curryIt : function(fn) {
    return function(a) {
      return function(b){
        return function(c){
          return fn(a,b,c);
        }
      }
    }
  }
};
