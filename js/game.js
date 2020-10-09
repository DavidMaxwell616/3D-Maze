var game = new Phaser.Game(640, 420, Phaser.CANVAS, 'container', {
  preload: preload,
  create: create,
  update: update,
  render: render
});

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  bmd = game.add.bitmapData(640, 320);
  game.add.sprite(0, 0, bmd);
  // stone = this.add.sprite(-100, 0, 'stones');
  // barrel = this.add.sprite(-100, 0, 'barrel');
  // playerSprite = this.add.sprite(-100, 0, 'player');
  // images = [
  //   //pass null first as 0 position is not a wall
  //   null,
  //   stone.key,
  //   'barrel'
  // ];


  //let x, y;


  walls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //   var i = 0;
  //   for (var y = 0; y < 20; y++) {
  //     let subArray = [];
  //     for (var x = i; x < i + 20; x++) {
  //       subArray.push(walls[x]);
  //     }
  //     mapArray.push(subArray);
  //     i += 20;
  //   }
  // walls = mapArray;

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
  makemaze(1, 1);
  //console.log(mapArray);


  // for (x = 0; x < mapWidth; x++)
  //   for (y = 0; y < mapLength; y++)
  //       maze[x,y] = 1;
  //       console.log(maze);
  //       makemaze(1, 1);

  //       var array = [];
  //       for (var y = 0; y < mapLength; y++) {
  //           array[y] = [];
  //           mapArray[y] = [];
  //           for (var x = 0; x < mapWidth; x++) {
  //               array[y][x] = maze[y][x];
  //               if (array[y][x] < 0) {
  //                   array[y][x] = 0;
  //               }
  //               mapArray[y].push(array[y][x]);
  //           }
  //       }
  mapArray[0, 1] = 0;
  mapArray[mapWidth - 1, mapLength - 2] = 0;
  walls = mapArray;

  // Initializes the raycaster application
  // Setup the canvas
  //var canvas = texture.context;
  var canvas = bmd;
  context = canvas.context;

  //var canvas = document.getElementById(canvasId);
  //context = canvas.getContext("2d");
  //context = texture.getContext(); //canvas.context;

  //graphics = this.add.graphics();
  distanceToViewport = Math.round(screenWidth / 2 / Math.tan(fieldOfView / 2 * (Math.PI / 180)));
  arrows(this);

  // debug.innerHTML= text ;
  //  for (var y = 0; y < walls.length; y++) {
  //             dot[y]=[];
  //             for (var x = 0; x < walls[0].length; x++) {
  //                 dot[y][x] = game.add.sprite(-100,0,'dot64');
  //                 game.physics.enable(dot[y][x],Phaser.Physics.ARCADE);
  //             }
  //         }
  //     game.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.UP, Phaser.Keyboard.DOWN]);
}

function update() {
  //  for (var y = 0; y < walls.length; y++) {

  //             for (var x = 0; x < walls[0].length; x++) {
  //                 game.physics.arcade.collide(playerSprite,dot[y][x],change,null,this);
  //             }
  //         }
  // if (game.input.keyboard.justPressed(Phaser.Keyboard.M, 10)) {
  //     setMapToggle();
  // }

  if (game.input.keyboard.justPressed(Phaser.Keyboard.M, 10)) {
    setMapToggle();
  }

  if ((this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) || left) {
    movement.update("left");
  } else if ((game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) || right) {
    movement.update("right");
  } else if ((this.input.keyboard.isDown(Phaser.Keyboard.UP)) || up) {
    movement.update("up");
  } else if ((game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) || down) {
    movement.update("down");
  }

  drawWorld();
  //drawSprite();
  if (mapToggle()) {
    drawMiniMap();

  }


  // debug.innerHTML=  Object.getOwnPropertyNames(mapper.layers[0].data[1][0]) ;     
  // console.log(mapper);
}


function render() {

}

/*
MAXMAZEMAKER ALGORITHM: How it works
The algorithm first creates a 25X25 map of block walls
It then creates a 4 element array of zero values
This will then update to indicate which neighbors of the current cell (e.g. 1,1) to analyze (N, S, E, W)
Availability is based upon potential cells being within map boundaries and cells 2 cells away being available(wall)
e.g. if East and South were available, the end result would be [3,4,0,0]
It then chooses one of those directions at random (e.g. 3 or 4, ignoring trailing zeroes)
It then carves out that cell and progresses 2 cells in the chosen direction
It repeats recursively like that until it finds zero available neighbors 2 cells away
*/

function makemaze(y, x) {
  let p1 = 0;
  d = [0, 0, 0, 0];
  mapArray[y][x] = 0;

  if ((y > 1) && (mapArray[y - 2][x] > 0)) d[p1++] = 1;
  if ((x > 1) && (mapArray[y][x - 2] > 0)) d[p1++] = 2;
  if ((y < (mapLength - 2)) && (mapArray[y + 2][x] > 0)) d[p1++] = 3;
  if ((x < (mapWidth - 2)) && (mapArray[y][x + 2] > 0)) d[p1++] = 4;
  if (p1 == 0) return;
  let rnd = this.game.rnd.integerInRange(0, p1 - 1);
  let p2 = d[rnd];
  switch (p2) {
    case 1:
      mapArray[y - 1][x] = 0;
      makemaze(y - 2, x);
      break; //Carve wall to North
    case 2:
      mapArray[y][x - 1] = 0;
      makemaze(y, x - 2);
      break; //Carve wall to West
    case 3:
      mapArray[y + 1][x] = 0;
      makemaze(y + 2, x);
      break; //Carve wall to South
    case 4:
      mapArray[y][x + 1] = 0;
      makemaze(y, x + 2);
      break; //Carve wall to East
  }
  makemaze(y, x);
}

// Defines player values
var player = {
  x: 200,
  y: 200,
  angle: new angle(290)
};

var centerOfScreen = {
  x: screenWidth / 2,
  y: screenHeight / 2
};


// Reference to the canvas context
var context = null,
  gameloopInterval = null,
  redrawScreen = true,
  // Array with Image objects containing the textures
  textures = null;

function change() {
  playerSprite.width = 50;
}


function mapToggle() {
  if (toggleMap === true) {
    return true;
  } else {
    return false;
  }

}

function setMapToggle() {
  if (toggleMap === true) {
    // playerSprite.kill();
    toggleMap = false;
  } else {
    //   playerSprite.revive();
    toggleMap = true;
  }
}

// Point on the screen or on the map
function point(x, y) {
  return {
    x: x,
    y: y
  };
};

// Defines a wall that is found during raycasting
function wall() {
  return {
    x: 0, // X coordinate of this wall
    y: 0, // Y coordinate of this wall
    intersectsWithX: false, // Ray intersected on the X-axis?
    intersectsWithY: false, // Ray intersected on the Y-axis?
    distance: 0, // Distance to the wall
    textureIndex: 0, // index of texture for this wall
    textureX: 0 // X coordinate of the texture scanline to draw
  };
}

function keyButton(code) {
  return {
    code: code,
    down: false
  };
}

// Represents an angle and implements some helpers to manipulate the angle
function angle(degrees) {
  var _degrees;

  var setValue = function (v) {
    _degrees = parseFloat(v);

    if (_degrees < 0) {
      _degrees += 359;
    } else if (_degrees > 359) {
      _degrees -= 360;
    }
  };

  var getValue = function () {
    return parseFloat(_degrees);
  };

  var toRadians = function () {
    if (_degrees === 90) {
      return Math.PI / 2;
    } else if (_degrees === 270) {
      return 3 * Math.PI / 2;
    }
    return _degrees * (Math.PI / 180);
  };

  var turn = function (degrees) {
    setValue(_degrees + degrees);
  };

  var facingNorth = function () {
    return _degrees < 180 && _degrees > 0;
  };

  var facingSouth = function () {
    return _degrees > 180 && _degrees <= 359;
  };

  var facingEast = function () {
    return (_degrees < 90 && _degrees >= 0) || (_degrees > 270 && _degrees <= 359);
  };

  var facingWest = function () {
    return _degrees > 90 && _degrees < 270;
  };

  setValue(degrees);

  // Reveal public members
  return {
    setValue: setValue, // Set the value of this angle
    getValue: getValue, // Get the value of this angle
    turn: turn, // Turn the angle with n degrees
    toRadians: toRadians, // Converts the angle from degrees to radians
    facingNorth: facingNorth, // Does the angle face north?
    facingSouth: facingSouth, // Does the angle face south?
    facingEast: facingEast, // Does the angle face east?
    facingWest: facingWest // Does the angle face west?
  };
}

// Raycasting functions
var raycasting = function () {
  // Converts world coordinates to map coordinates (array indexes)
  var coordsToMap = function (coordX, coordY) {
    return new point(parseInt(coordX / wallSize), parseInt(coordY / wallSize));
  };

  // Determines if specified world coordinates are out of bounds
  var isOutOfBounds = function (coordX, coordY) {
    var mapPoint = coordsToMap(coordX, coordY);
    return mapPoint.y < 0 || mapPoint.y >= walls.length ||
      mapPoint.x < 0 || mapPoint.x >= walls[0].length;
  };

  // Determines wether specified world coordinates contains a wall
  var containsWall = function (coordX, coordY) {
    var mapPoint = coordsToMap(coordX, coordY);
    return !isOutOfBounds(coordX, coordY) && walls[mapPoint.y][mapPoint.x] !== 0 &&
      walls[mapPoint.y][mapPoint.x] < 2;
  };

  var containsSprite = function (coordX, coordY) {
    var mapPoint = coordsToMap(coordX, coordY);
    return !isOutOfBounds(coordX, coordY) && walls[mapPoint.y][mapPoint.x] >= 2;
  };

  // Choose the wall nearest to the player
  var chooseNearest = function (angle, wallX, wallY) {
    if (wallX !== null) {
      wallX.distance = Math.abs(Math.abs(player.x - wallX.x) / Math.cos(angle.toRadians()));
    }

    if (wallY !== null) {
      wallY.distance = Math.abs(Math.abs(player.x - wallY.x) / Math.cos(angle.toRadians()));
    }

    if (wallX === null) {
      return wallY;
    } else if (wallY === null) {
      return wallX;
    }

    return (wallX.distance < wallY.distance) ? wallX : wallY;
  };

  // Use raycasting to find the nearest wall at the specified angle
  var findWall = function (angle) {
    var angleTan = Math.tan(angle.toRadians()),
      deltaX = wallSize / angleTan,
      deltaY = wallSize * angleTan,
      foundX = false,
      foundY = false,
      foundSpriteY = false,
      foundSpriteX = false,
      wallX = null,
      wallY = null;

    if (angle.facingSouth()) {
      deltaX = -deltaX;
    }

    if (angle.facingEast()) {
      deltaY = -deltaY;
    }

    if (angle.facingNorth() || angle.facingSouth()) {
      while (wallX === null || (!foundX && !isOutOfBounds(wallX.x, wallX.y) && !foundSpriteX)) {
        if (wallX === null) {
          wallX = new wall();
          wallX.intersectsWithX = true;
          wallX.y = Math.floor(player.y / wallSize) * wallSize;
          wallX.y += angle.facingNorth() ? -0.001 : wallSize;
          wallX.x = player.x + (player.y - wallX.y) / angleTan;
        } else {
          wallX.x = wallX.x + deltaX;
          wallX.y += angle.facingNorth() ? -wallSize : wallSize;
        }

        foundX = containsWall(wallX.x, wallX.y);
        foundSpriteX = containsSprite(wallX.x, wallX.y);
      }
    }

    if (angle.facingWest() || angle.facingEast()) {
      while (wallY === null || (!foundY && !isOutOfBounds(wallY.x, wallY.y) && !foundSpriteY)) {
        if (wallY === null) {
          wallY = new wall();
          wallY.intersectsWithY = true;
          wallY.x = Math.floor(player.x / wallSize) * wallSize;
          wallY.x += angle.facingWest() ? -0.001 : wallSize;
          wallY.y = player.y + (player.x - wallY.x) * angleTan;
        } else {
          wallY.y = wallY.y + deltaY;
          wallY.x += angle.facingWest() ? -wallSize : wallSize;
        }

        foundY = containsWall(wallY.x, wallY.y);
        foundSpriteY = containsSprite(wallY.x, wallY.y);
      }
    }

    return chooseNearest(angle, wallX, wallY);
  };

  // Expose public members
  return {
    findWall: findWall
  };
}();

// Draw the mini map
function drawMiniMap() {
  // Map is smaller than world, determine shrink factor
  var shrinkFactor = parseFloat(wallSize / mapBlockSize);

  var mapOffsetX = 520,
    mapOffsetY = 200;

  // Draw white background
  drawing.rectangle(mapOffsetX, mapOffsetY,
    walls[0].length * mapBlockSize, walls.length * mapBlockSize,
    0xffffff);

  // Draw walls
  for (var y = 0; y < walls.length; y++) {

    for (var x = 0; x < walls[0].length; x++) {

      if (walls[y][x] !== 0) {
        /*    dot[y][x].x=mapOffsetX + x * mapBlockSize;
            dot[y][x].y = mapOffsetY + y * mapBlockSize;
            dot[y][x].width = mapBlockSize;
            dot[y][x].height = mapBlockSize; */
        drawing.rectangle(mapOffsetX + x * mapBlockSize, mapOffsetY + y * mapBlockSize,
          mapBlockSize, mapBlockSize,
          0xffffff);
      }
    }
  }

  // Draw player
  var playerX = mapOffsetX + Math.floor(player.x / shrinkFactor),
    playerY = mapOffsetY + Math.floor(player.y / shrinkFactor);
  //  playerSprite.x = playerX-4;
  //  playerSprite.y = playerY-4;
  drawing.circle(playerX, playerY, mapBlockSize / 2, 0xffffff);

  // Visualize the raycasting
  // var miniWallAngle = new angle(player.angle.getValue() + fieldOfView / 2);
  // for (var i = 0; i < scre   enWidth; i++) {
  //   var wall = raycasting.findWall(miniWallAngle),
  //     deltaX = Math.floor(Math.cos(miniWallAngle.toRadians()) * (wall.distance / shrinkFactor)),
  //     deltaY = Math.floor(Math.sin(miniWallAngle.toRadians()) * (wall.distance / shrinkFactor));

  //   drawing.line(playerX, playerY,
  //     playerX + deltaX, playerY - deltaY, 0xffffff);

  //   miniWallAngle.turn(-angleBetweenRays);
  // }

};

// Basic drawing functions
var drawing = {
  // Clear the screen
  clear: function () {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  },
  // Get rgb() color string
  colorRgb: function (r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  },
  // Get rgba() color string
  colorRgba: function (r, g, b, a) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  },
  // Draws a circle
  circle: function (x, y, radius, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  },
  // Draws a rectangle
  rectangle: function (x, y, width, height, color) {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
    context.closePath();
  },
  // Draws a line
  // Note: for some reason lineTo() and stroke() result in a semi-transparent line
  // If you want to be sure the line is of solid color, use lineRectangle() instead
  line: function (x, y, x2, y2, color) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
  },
  lineRectangle: function (x, y, x2, y2, color) {
    drawing.rectangle(x, y, 1, y2 - y, color);
  }
};

// Draw 3D representation of the world
var drawWorld = function () {
  drawing.clear();
  drawing.rectangle(0, 0, screenWidth, screenHeight / 2, drawing.colorRgb(60, 60, 60));
  drawing.rectangle(0, screenHeight / 2, screenWidth, screenHeight / 2, drawing.colorRgb(120, 120, 120));

  var wallAngle = new angle(player.angle.getValue() + fieldOfView / 2);
  // Draw vertical scanlines for each 1px of the screen
  for (var i = 0; i < screenWidth; i++) {
    var wall = raycasting.findWall(wallAngle);
    //  console.log(wall);

    // Remove distortion (counter fishbowl effect)
    var distortRemove = new angle(fieldOfView / 2);
    distortRemove.turn(-angleBetweenRays * i);
    wall.distance *= Math.cos(distortRemove.toRadians());

    // Use distance to determine the size of the wall slice
    var wallHeight = Math.floor(wallSize / wall.distance * distanceToViewport);

    // If a wall slice is larger than the viewport height, we only need the visible section
    // skipPixels indicates how many pixels from top and bottom towards the center can be skipped during rendering
    var skipPixels = wallHeight > screenHeight ? (wallHeight - screenHeight) / 2 : 0,
      scanlineStartY = parseInt(centerOfScreen.y - (wallHeight - skipPixels * 2) / 2),
      scanlineEndY = parseInt(centerOfScreen.y + (wallHeight - skipPixels * 2) / 2);

    // Prevent the coordinates from being off screen
    scanlineStartY = scanlineStartY < 0 ? 0 : scanlineStartY;
    scanlineEndY = scanlineEndY > screenHeight ? screenHeight : scanlineEndY;

    if (showTextures) {
      // Determine which texture to use on this wall
      new point(parseInt(wall.y / wallSize), parseInt(wall.x / wallSize));

      wall.textureIndex = walls[parseInt(wall.y / wallSize)][parseInt(wall.x / wallSize)];
      wall.textureX = wall.intersectsWithX ?
        parseInt(wall.x % wallSize) :
        parseInt(wall.y % wallSize);

      // The visible scale of a wall compared to its original size
      var wallScale = wallHeight / wallSize;

      var offsetY = (skipPixels > 0) ? skipPixels / wallScale : 0;
      if (offsetY >= wallSize / 2) {
        offsetY = wallSize / 2 - 1;
      }

      var rect = new Phaser.Rectangle(wall.textureX, offsetY, 1, wallSize - offsetY * 2);
      bmd.copyPixels2(textureMap[wall.textureIndex], rect, i, scanlineStartY, 1, scanlineEndY - scanlineStartY);

    } else {
      // Draw without textures
      drawing.lineRectangle(i, scanlineStartY, i, scanlineEndY, drawing.colorRgb(128, 0, 0));
    }

    // Make one side of the walls darker to create a shadow effect
    // This is achieved by drawing a black scanline with 50% opacity
    if (showShadows) {
      if (wall.intersectsWithX) {
        drawing.lineRectangle(i, scanlineStartY, i, scanlineEndY, drawing.colorRgba(0, 0, 0, 0.5));
      }
    }

    // Make walls in the distance appear darker
    if (showLighting) {
      if (wall.distance > 100) {
        var colorDivider = parseFloat(wall.distance / 200);
        colorDivider = (colorDivider > 5) ? 5 : colorDivider;
        var opacity = parseFloat(1 - 1 / colorDivider);

        drawing.lineRectangle(i, scanlineStartY, i, scanlineEndY, drawing.colorRgba(0, 0, 0, opacity));
      }
    }

    // Move on to next scanline
    wallAngle.turn(-angleBetweenRays);
  }
};

// Draw 3D representation of a sprite
var drawSprite = function () {
  drawing.clear();
  // drawing.square(0, 0, screenWidth, screenHeight / 2, drawing.colorRgb(60, 60, 60));
  //  drawing.square(0, screenHeight / 2, screenWidth, screenHeight / 2, drawing.colorRgb(120, 120, 120));

  var spriteAngle = new angle(player.angle.getValue() + fieldOfView / 2);

  // Draw vertical scanlines for each 1px of the screen
  for (var i = 0; i < screenWidth; i++) {
    var wall = raycasting.findWall(spriteAngle);

    // Remove distortion (counter fishbowl effect)
    var distortRemove = new angle(fieldOfView / 2);
    distortRemove.turn(-angleBetweenRays * i);
    wall.distance *= Math.cos(distortRemove.toRadians());

    // Use distance to determine the size of the wall slice
    var wallHeight = Math.floor(wallSize / wall.distance * distanceToViewport);

    // If a wall slice is larger than the viewport height, we only need the visible section
    // skipPixels indicates how many pixels from top and bottom towards the center can be skipped during rendering
    var skipPixels = wallHeight > screenHeight ? (wallHeight - screenHeight) / 2 : 0,
      scanlineStartY = parseInt(centerOfScreen.y - (wallHeight - skipPixels * 2) / 2),
      scanlineEndY = parseInt(centerOfScreen.y + (wallHeight - skipPixels * 2) / 2);

    // Prevent the coordinates from being off screen
    scanlineStartY = scanlineStartY < 0 ? 0 : scanlineStartY;
    scanlineEndY = scanlineEndY > screenHeight ? screenHeight : scanlineEndY;

    if (settings.renderTextures()) {
      // Determine which texture to use on this wall
      new point(parseInt(wall.y / wallSize), parseInt(wall.x / wallSize));
      wall.textureIndex = walls[parseInt(wall.y / wallSize)][parseInt(wall.x / wallSize)];
      wall.textureX = wall.intersectsWithX ?
        parseInt(wall.x % wallSize) :
        parseInt(wall.y % wallSize);

      // The visible scale of a wall compared to its original size
      var wallScale = wallHeight / wallSize;

      var offsetY = (skipPixels > 0) ? skipPixels / wallScale : 0;
      if (offsetY >= wallSize / 2) {
        offsetY = wallSize / 2 - 1;
      }


      var rect = new Phaser.Rectangle(wall.textureX, offsetY, 1, wallSize - offsetY * 2);
      bmd.copyPixels2(textureMap[wall.textureIndex], rect, i, scanlineStartY, 1, scanlineEndY - scanlineStartY);

    } else {
      // Draw without textures
      drawing.lineRectangle(i, scanlineStartY, i, scanlineEndY, drawing.colorRgb(128, 0, 0));
    }

    // Make one side of the walls darker to create a shadow effect
    // This is achieved by drawing a black scanline with 50% opacity
    if (settings.renderShadow()) {
      if (wall.intersectsWithX) {
        drawing.lineRectangle(i, scanlineStartY, i, scanlineEndY, drawing.colorRgba(0, 0, 0, 0.5));
      }
    }

    // Make walls in the distance appear darker
    if (settings.renderLighting()) {
      if (wall.distance > 100) {
        var colorDivider = parseFloat(wall.distance / 200);
        colorDivider = (colorDivider > 5) ? 5 : colorDivider;
        var opacity = parseFloat(1 - 1 / colorDivider);

        drawing.lineRectangle(i, scanlineStartY, i, scanlineEndY, drawing.colorRgba(0, 0, 0, opacity));
      }
    }

    // Move on to next scanline
    spriteAngle.turn(-angleBetweenRays);
  }
};


// Contains all movement related functions
var movement = function () {
  var turn = function (angle) {
    player.angle.turn(angle);
    //rendering.redraw();
  };

  var walk = function (forward) {
    step = forward ? movementStep : -movementStep;

    var deltaX = Math.cos(player.angle.toRadians()) * step,
      deltaY = Math.sin(player.angle.toRadians()) * step,
      newMapX = parseInt((player.x + deltaX) / wallSize),
      newMapY = parseInt((player.y - deltaY) / wallSize);
    // the === 0 handles collision
    if (walls[newMapY][newMapX] === 0) {
      player.x += deltaX;
      player.y -= deltaY;
    }

    //rendering.redraw();
  };



  // Update movement
  var update = function (dir) {
    if (dir === "right") {
      turn(-turningStep);
    }
    if (dir === "left") {
      turn(turningStep);
    }

    if (dir === "up") {
      walk(true);
    }

    if (dir === "down") {
      walk(false);
    }

    // if (keys.esc.down) {
    //   clearInterval(gameloopInterval);
    // }
  };
  return {
    update: update
  };
}();

function arrows(game) {

  arrowRight = game.add.button(72, 355, 'arrowRight');
  arrowRight.fixedToCamera = true;
  arrowRight.events.onInputDown.add(function () {
    right = true;
  });
  arrowRight.events.onInputUp.add(function () {
    right = false;
  });

  arrowLeft = game.add.button(5, 355, 'arrowRight');
  arrowLeft.fixedToCamera = true;
  arrowLeft.anchor.setTo(1, 1);
  arrowLeft.angle = 180;
  arrowLeft.events.onInputDown.add(function () {
    left = true;
  });
  arrowLeft.events.onInputUp.add(function () {
    left = false;
  });

  arrowUp = game.add.button(70, 320, 'arrowRight');
  arrowUp.fixedToCamera = true;
  arrowUp.anchor.setTo(1, 1);
  arrowUp.angle = 270;
  arrowUp.events.onInputDown.add(function () {
    up = true;
  });
  arrowUp.events.onInputUp.add(function () {
    up = false;
  });

  arrowDown = game.add.button(38, 420, 'arrowRight');
  arrowDown.fixedToCamera = true;
  arrowDown.anchor.setTo(1, 1);
  arrowDown.angle = 90;
  arrowDown.events.onInputDown.add(function () {
    down = true;
  });
  arrowDown.events.onInputUp.add(function () {
    down = false;
  });
}