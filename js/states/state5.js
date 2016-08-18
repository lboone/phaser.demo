demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[5];
        console.log(pubStates[5]);
        setKeyListener();
    },
    update: function(){}
};