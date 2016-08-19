demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[2];
        setKeyListener();
    },
    update: function(){}
};