var cols = 10;
var rows = 10;

var colors = [];

// 我们要创建一个 2D 的集合，为10*10，集合为空
function make2Darray(cols, rows) {
  //Array 是一个function， 后面加数字（没有引号），表示这个array的长度 
  //且这个 array 是一个空的集合
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

// colors 也是指这同一个集合，要给每个空赋值：使用两次循环
function setup() {
  createCanvas(300, 300);
  colors = make2Darray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      colors[i][j] = random(255);
    }
  }
}

function draw() {
  background(51);


  // 30 是矩阵的一个单位，长度和宽度。使用两次循环，画出平面矩阵
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var x = i * 30;
      var y = j * 30;
      fill(colors[i][j]);
      stroke(0);
      rect(x, y, 30, 30);
    }
  }
}
