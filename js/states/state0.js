var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = pubColor[0];
        console.log(pubStates[0]);
        setKeyListener();
    },
    update: function(){}
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