'use strict';

var BOARD_DEFINITIONS = [
    {
        name: "MicroMinimOSD",
        identifier: "MicroMinimOSD",
        vcp: true
    }, {
        name: "MinimOSD",
        identifier: "MinimOSD",
        vcp: true
    }
];

var DEFAULT_BOARD_DEFINITION = {
    name: "Unknown",
    identifier: "????",
    vcp: false
};

var BOARD = {
    
};

BOARD.find_board_definition = function (identifier) {
    for (var i = 0; i < BOARD_DEFINITIONS.length; i++) {
        var candidate = BOARD_DEFINITIONS[i];
        
        if (candidate.identifier == identifier) {
            return candidate;
        }
    }
    return DEFAULT_BOARD_DEFINITION;
};
