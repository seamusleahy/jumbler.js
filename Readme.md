# Jumbler.js #

Jumble up a list of items in a grid with items not repeating in row or column

```javascript
var items = ['a', 'b', 'c', 'd', 'e']; 
var jumble = Jumbler();

for(var y=0; y<items.length; ++y) {
  var row = [];
  for(var x=0; x<items.length; ++x) {
    row.push(jumble(x,y));
  }
  console.log(row);
}
```