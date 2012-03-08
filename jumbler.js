/**
 * Jumbler.js
 *
 * Jumble up an array of items into a grid with those items where
 * the item does not repeat in a column or row.
 *
 * To use it, call the global Jumbler object and pass in the array of items.
 * This will return a function that you retrieve the item at a location
 * by passing in the x and y coords. The coords will work beyond the length
 * of the number of items by repeating the grid. It even works with negative
 * numbers.
 *
 *   var items = ['a', 'b', 'c', 'd', 'e']; 
 *   var jumble = Jumbler();
 *
 *   for(var y=0; y<items.length; ++y) {
 *     var row = [];
 *     for(var x=0; x<items.length; ++x) {
 *       row.push(jumble(x,y));
 *     }
 *     console.log(row);
 *   }
 * 
 * (c) copyright 2012 Seamus P. H. Leahy
 *
 * Licensed under the BSD License <http://www.opensource.org/licenses/bsd-license.php>
 */

(function(undefined) {
  var root = this;
  
  root.Jumbler = function(items) {
    var length = items.length
      , grid = populateGrid(generateGrid(length));
    
    return function(x, y) {
      x = x >= 0  ? x % length : x % length + length;
      y = y >= 0  ? y % length : y % length + length;
      
      return items[grid[x][y]];
    };      
  };
  
  // Create an empty grid
  function generateGrid(length) {
    var grid = [];

    for(var i=0; i<length; ++i) {
      grid.push([]);
    }
  
    return grid;
  }
    
  // Populate the grid with items and then jumble
  function populateGrid(grid) {
    var length = grid.length
      , xOccupied = generateGrid(length)
      , yOccupied = generateGrid(length)
      , x
      , y
      , indexes
      , n
      , i
      , j
      , rx0
      , rx1
      , ry0
      , ry1
      , t;
    
    // populate without duplicates in each row and column
    for(x=0; x<length; ++x) {
      for(y=0; y<length; ++y) {
        grid[x][y] = (y+x) % length
      }
    }
    
    // now shuffle
    for(i=0; i<length; ++i) {
      // swap column
      rx0 = Math.floor(Math.random()*length);
      rx1 = Math.floor(Math.random()*length);
      
      t = grid[rx0];
      grid[rx0] = grid[rx1];
      grid[rx1] = t;
      
      // swap rows
      ry0 = Math.floor(Math.random()*length);
      ry1 = Math.floor(Math.random()*length);
      
      for(j=0; j<length; ++j) {
      	t = grid[j][ry0];
      	grid[j][ry0] = grid[j][ry1];
      	grid[j][ry1] = t;
      }
    }
    
    return grid;          
  }
  
  function numberSeq(length) {
    var s = [];
    for(var i=0; i<length; ++i) {
      s.push(i);
    }
    return s;
  }
})();
         
​