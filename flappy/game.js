'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});
var background;
var flappy;
var pipe_down;
var pipe_up;
function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('background', 'background.gif');
  game.load.spritesheet('flappy', 'flappy.gif',40,32);
  game.load.image('pipe_up','pipe_up.gif');
  game.load.image('pipe_down','pipe_down.gif');
}

function create() {
  background = game.add.tileSprite(0,0,320,568,'background');
  background.autoScroll(-100,0);
  flappy = game.add.sprite(100,100,'flappy');
  pipe_up = game.add.sprite(150,320,'pipe_up');
  flappy.animations.add('fly', [0,1,2], 10, true);
  flappy.play('fly')

}


function update() {
}

function render() {
}
