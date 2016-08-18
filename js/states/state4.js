demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[4];
        console.log(pubStates[4]);
        setKeyListener();
    },
    update: function(){}
};