"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["East"] = 3] = "East";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
console.log(Direction.South);
console.log(Direction.East);
console.log(Direction.West);
