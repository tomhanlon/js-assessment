if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },

    sum: function(arr) {
      var counter = 0;
      for (var i = 0; i < arr.length; i++) {
        counter += arr[i];
      }
      return counter;
    },

    remove: function(arr, item) {
      // Find all indices of element in array
      for (var i = 0; i < arr.length; i++) {
        // If item in array is equal to the item we want to remove
        if (arr[i] === item) {
          // Remove that element from array
          arr.splice(i, 1);
        }
      }
      return arr;
    },

    removeWithoutCopy: function(arr, item) {
      var length = arr.length;
      // Iterate over array backwards
      for (var i = length; i >= 0; i--) {
        if (arr[i] === item) {
          arr.splice(i, 1);
        }
      }
      return arr;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function(arr) {
      arr.shift();
      return arr;
    },

    concat: function(arr1, arr2) {
      var combinedArray = [];
      combinedArray = arr1.concat(arr2);
      return combinedArray;
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates: function(arr) {
      var duplicates = [];
      // loop over array to grab first element
      for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        // compare element to each element in array
        for (var j = 0; j < arr.length; j++) {
          // if the elements of each array are the same, are at different indices
          // and are unique to duplicates array
          if (arr[i] === arr[j] && i !== j && duplicates.indexOf(arr[i]) === -1) {
            duplicates.push(arr[i]);
          }
        }
      }
      return duplicates;
    },

    square: function(arr) {
      var squares = [];
      for (var i = 0; i < arr.length; i++) {
        squares.push(arr[i] * arr[i]);
      }
      return squares;
    },

    findAllOccurrences: function(arr, target) {
      // Find all indices of element in array
      var indices = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          indices.push(i);
        }
      }
      return indices;
    }
  };
});