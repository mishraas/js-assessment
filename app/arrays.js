exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var i, matchedIndex=-1;
    for(i=0; i<arr.length; i++){
      if(arr[i]===item) {
        matchedIndex = i;
      }
    }
    return matchedIndex;
  },

  sum : function(arr) {
    var i=0, sum=0;
    for(; i<arr.length; i++){
      sum=sum+arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var index = arr.indexOf(item);
    for(;index!=-1;){
      index = del(arr, item);
    }
    return arr;

    function del(arr, item){
      var index = arr.indexOf(item);
      if(index>0){
        arr.splice(index, 1);
      }
      return index;
    }
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);
    for(;index!=-1;){
      index = del(arr, item);
    }
    return arr;

    function del(arr, item){
      var index = arr.indexOf(item);
      if(index>0){
        arr.splice(index, 1);
      }
      return index;
    }
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop(arr);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter=0;
    for(var i=0; i<arr.length;i++) {
      if(arr[i]===item){
        counter++;
      }
    }
    return counter;
  },

  duplicates : function(arr) {
    var mapper={};
    for(var i=0; i<arr.length; i++){
      if(mapper[arr[i]] !== undefined){
        mapper[arr[i]] +=1;
      }
      else {
        mapper[arr[i]] = 1;
      }
    }

    var duplicatesArr = [];
    for(var key in mapper) {
      if(mapper.hasOwnProperty(key)) {
        if(mapper[key]>1){
          duplicatesArr.push(parseInt(key,10));
        }
      }
    }
    return duplicatesArr;
  },

  square : function(arr) {
    return arr.map(function(x){ return x*x;})
  },

  findAllOccurrences : function(arr, target) {
    var matches = [];
    for(var i=0; i<arr.length;i++) {
      if(arr[i]===target) {
        matches.push(i);
      }
    }
    return matches;
  }
};
