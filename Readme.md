# Jumbler.js #

Jumble up a list of items in a grid with items not repeating in row or column. 

Take a list of items that you want to make a grid where each item only appears once in a column and a row.

```javascript
var items = ['a', 'b', 'c', 'd', 'e']; 
var jumble = Jumbler(items);

for(var y=0; y<items.length; ++y) {
  var row = [];
  for(var x=0; x<items.length; ++x) {
    row.push(jumble(x,y));
  }
  printRow(row);
}
```

Output:

```
c a b e d
b e a d c
e c d b a
a d e c b
d b c a e
```
