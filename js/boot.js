var canvasTexture;
var showTextures = true;
var showShadows = true;
var showLighting = true;
var arrowRight;
var toggleMap = true;
var right = left = up = down = false; //arrow images on screen
var spriteMap;
var stone;
var mapper;
var layer;
var mapArray = [];
var barrel;
var player;
var dot = [];
var lastLoop = new Date();
var wallImage;
var bmd;
var mapHeight = 25;
var mapWidth = 25;
var maze = [];
//CONSTANTS
const mapBlockSize = 5, // Size of walls on the mini map
  wallSize = 64, // Size of walls in the game world
  fieldOfView = 66, // Field of view of the player (in degrees)
  screenWidth =800, // Width of the viewport
  screenHeight = 500, // Height of the viewport
  angleBetweenRays = parseFloat(66 / 640), // Angle between casted rays
  movementStep = 3, // How much the player moves each step 10
  turningStep = 2, // How fast the player turns 2.5
  sprite = null,
  images = [],
  sprites3d = [];
  const mapOffsetX = 670,
    mapOffsetY = 0;

 const distanceToViewport = Math.round(screenWidth / 2 / Math.tan(fieldOfView / 2 * (Math.PI / 180)));
 
const textureMap = {
  1: 'redbrick',
  2: 'bluestone',
  3: 'stone1',
  4: 'stone2',
  5: 'stone3',
  6: 'purplestone',
  7: 'wood',
  8: 'mossy',
  9: 'exit'
};

const centerOfScreen = {
  x: screenWidth / 2,
  y: screenHeight / 2
};