var demo = {};
var hero;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('hero','assets/spriteSheets/heroSheet.png', 158, 235);
        game.load.image('state0BG','assets/scenes/state0.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = pubColor[0];
        console.log(pubStates[0]);
        setKeyListener();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0,0,4808,1000);
        var state0BG = game.add.sprite(0,0,'state0BG');
        
        hero = game.add.sprite(centerX, heroTopY,'hero');
        hero.anchor.setTo(0.5,0.5);  
        hero.scale.setTo(0.7,0.7);
        game.physics.enable(hero);
        hero.body.collideWorldBounds = true;
        hero.animations.add('walk', [0,1,2,3,4]);
        
        
        game.camera.follow(hero);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            hero.scale.setTo(0.7,0.7);
            hero.x += heroSpeed;
            hero.animations.play('walk',14, true);
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            hero.scale.setTo(-0.7,0.7);
            hero.x -= heroSpeed;
            hero.animations.play('walk',14, true);
        } else {
            hero.animations.stop('walk');
            hero.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            hero.y -= heroSpeed;
            if (hero.y < heroTopY){
                hero.y = heroTopY;
            }
            
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