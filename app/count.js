exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeoutId;
    var increment = function(){
      if(start <= end) {
        start++;
        console.log(start);
        timeoutId = setTimeout(increment, 100);
      }

    };

    timeoutId = setTimeout(increment, 0);

    return {
      cancel : function() {
        clearTimeout(timeoutId);
      }
    };
  }
};
