demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[3];
        console.log(pubStates[3]);
        setKeyListener();
    },
    update: function(){}
};