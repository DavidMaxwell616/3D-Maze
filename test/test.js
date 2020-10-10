
var game = new Phaser.Game(800, 800, Phaser.CANVAS, 'container', {
  preload: preload,
  create: create,
});

var mapArray = [];
var mapLength = 25;
var mapWidth = 25;
var brickSize = 32;

function preload(){
  this.load.path = '../assets/images/';
  this.load.image('redbrick', 'redbrick.png');

};

function create(){
 var array = [];

  for (var y = 0; y < mapLength; y++) {
    array[y] = [];
    mapArray[y] = [];
    for (var x = 0; x < mapWidth; x++) {
      array[y][x] = 1;
      if (array[y][x] < 0) {
        array[y][x] = 0;
      }
      mapArray[y].push(array[y][x]);
    }
  } 
 
  makemaze(1, 1,1);
  mapArray[0][1] = 0;
  mapArray[mapWidth - 1][mapLength - 2] = 0;
  for (var x = 0; x < mapWidth; x++) {
    for (var y = 0; y < mapLength; y++) {
      if(mapArray[y][x]!='0')
      var brick = game.add.sprite(x*brickSize, y*brickSize, 'redbrick');
      brick.height=brickSize;
      brick.width=brickSize;
    }
  }  

};

