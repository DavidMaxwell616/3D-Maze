
var game = new Phaser.Game(800, 800, Phaser.CANVAS, 'container', {
  preload: preload,
  create: create,
});

var mapArray = [];
var mapHeight = 25;
var mapWidth = 25;
var brickSize = 32;

function preload(){
  this.load.path = '../assets/images/';
  this.load.image('redbrick', 'redbrick.png');

};

function create(){
 mapArray = makemaze(1,1,mapWidth,mapHeight,1);
  for (var x = 0; x < mapWidth; x++) {
    for (var y = 0; y < mapHeight; y++) {
      if(mapArray[y][x]!='0')
      var brick = game.add.sprite(x*brickSize, y*brickSize, 'redbrick');
      brick.height=brickSize;
      brick.width=brickSize;
    }
  }  

};

