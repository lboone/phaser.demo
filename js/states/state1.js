demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[1];
        console.log(pubStates[1]);
        setKeyListener();
    },
    update: function(){}
};