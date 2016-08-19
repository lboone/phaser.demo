demo.state1 = function(){};
var cursors, vel = 500, rocks, grass;
demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field','assets/tilemaps/field.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles','assets/tilemaps/grassTiles.png');
        game.load.image('rockTiles','assets/tilemaps/rockTiles.png');
        game.load.image('hero','assets/sprites/hero.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = pubColor[1];
        setKeyListener();
        var map = game.add.tilemap('field');
        console.log(map);
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks')
        
        map.setCollisionBetween(1,9,true,'rocks');
        map.setCollision(11,true,'grass');
        hero = game.add.sprite(10,10,'hero');
        hero.scale.setTo(0.2,0.2);
        game.physics.enable(hero);
        hero.body.collideWorldBounds = true;
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(hero, rocks, function(){
            console.log('Ouch! Rocks!');
        });
        game.physics.arcade.collide(hero, grass, function(){
            console.log('Ouch! Grass!');
        });
        
        if (cursors.up.isDown){
            hero.body.velocity.y = -vel;
        } else if (cursors.down.isDown){
            hero.body.velocity.y = vel;
        } else {
            hero.body.velocity.y = 0;
        }
        if (cursors.left.isDown){
            hero.body.velocity.x = -vel;
        } else if (cursors.right.isDown){
            hero.body.velocity.x = vel;
        } else {
            hero.body.velocity.x = 0
        }
    }
};