demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[8];
        console.log(pubStates[8]);
        setKeyListener();
    },
    update: function(){}
};