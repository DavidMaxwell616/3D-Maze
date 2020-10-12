
function preload() {
game.load.onLoadStart.add(loadStart, this);
game.load.onFileComplete.add(fileComplete, this);
game.load.onLoadComplete.add(loadComplete, this);
loadText = game.add.text(32, 32, '', {
  fill: '#ffffff',
});

this.load.path = '../assets/images/';
this.load.image('arrowRight', 'arrowRight.png');
this.load.image('redbrick', 'redbrick.png');
this.load.image('bluestone', 'bluestone.png');
this.load.image('stone1', 'stoneWall.png');
this.load.image('stone2', 'stoneWall2.png');
this.load.image('stone3', 'stoneWall3.png');
this.load.image('purplestone', 'purplestone.png');
this.load.image('wood', 'wood.png');
this.load.image('mossy', 'mossy.png');
this.load.image('barrel', 'barrel.png');
this.load.image('player', 'character.png');
this.load.start();
}

function loadStart() {
loadText.setText('Loading ...');
}

function loadComplete() {
loadText.setText('Load Complete');
loadText.destroy();
}
//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

loadText.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);


}