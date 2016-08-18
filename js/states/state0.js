var demo = {};
var hero;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('hero','assets/sprites/heroRight.png');
    },
    create: function(){
        game.stage.backgroundColor = pubColor[0];
        console.log(pubStates[0]);
        setKeyListener();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        hero = game.add.sprite(centerX, centerY,'hero');
        hero.anchor.setTo(0.5,0.5);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            hero.x += heroSpeed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            
            hero.x -= heroSpeed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            hero.y -= heroSpeed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            
            hero.y += heroSpeed;
        }
    }
};

function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn,null, null, args);
}

function setKeyListener(){
    for (var i = 0; i < pubKeys.length; i++) {
        addKeyCallback(pubKeys[i].pk,changeState,pubKeys[i].k);
    }
}