var expect = function(val) {
    return {
        toBe: function(a){
          if(val === a){
            return true;
          }
          throw new Error("Not Equal");
        },
        notToBe: function(a){
          if(val !== a){
            return true;
          }
          throw new Error("Equal");
        },
    }
};