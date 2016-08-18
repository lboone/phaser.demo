demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[9];
        console.log(pubStates[9]);
        setKeyListener();
    },
    update: function(){}
};