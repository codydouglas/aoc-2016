import { log } from "../../utils/log.mjs";

// const input = "R2, L3"; //expects 5
// const input = "R2, R2, R2"; //expects 2
// const input = "R5, L5, R5, R3"; //expects 12
// const input = "R2, R2"; //expects 4
// const input = "R6, R2"; //expects 8
const input =
  "R1, R1, R3, R1, R1, L2, R5, L2, R5, R1, R4, L2, R3, L3, R4, L5, R4, R4, R1, L5, L4, R5, R3, L1, R4, R3, L2, L1, R3, L4, R3, L2, R5, R190, R3, R5, L5, L1, R54, L3, L4, L1, R4, R1, R3, L1, L1, R2, L2, R2, R5, L3, R4, R76, L3, R4, R191, R5, R5, L5, L4, L5, L3, R1, R3, R2, L2, L2, L4, L5, L4, R5, R4, R4, R2, R3, R4, L3, L2, R5, R3, L2, L1, R2, L3, R2, L1, L1, R1, L3, R5, L5, L1, L2, R5, R3, L3, R3, R5, R2, R5, R5, L5, L5, R2, L3, L5, L2, L1, R2, R2, L2, R2, L3, L2, R3, L5, R4, L4, L5, R3, L4, R1, R3, R2, R4, L2, L3, R2, L5, R5, R4, L2, R4, L1, L3, L1, L3, R1, R2, R1, L5, R5, R3, L3, L3, L2, R4, R2, L5, L1, L1, L5, L4, L1, L1, R1"; //expects 8

const directions = input
  .split(",")
  .map((dir) => dir.trim())
  .map((dir) => ({
    turn: dir[0],
    distance: parseInt(dir.slice(1), 10),
  }));
// log(directions);

const position = { x: 0, y: 0 };
let facing = "N";

directions.forEach((element) => {
  if (element.turn === "R") {
    if (facing === "N") facing = "E";
    else if (facing === "E") facing = "S";
    else if (facing === "S") facing = "W";
    else if (facing === "W") facing = "N";
  }
  if (element.turn === "L") {
    if (facing === "N") facing = "W";
    else if (facing === "E") facing = "N";
    else if (facing === "S") facing = "E";
    else if (facing === "W") facing = "S";
  }
  if (facing === "N") {
    position.y = position.y + element.distance;
  }
  if (facing === "E") {
    position.x = position.x + element.distance;
  }
  if (facing === "S") {
    position.y = position.y - element.distance;
  }
  if (facing === "W") {
    position.x = position.x - element.distance;
  }
});

log(position);

const positionX = Math.abs(position.x);
const positionY = Math.abs(position.y);

const finalValue = positionX + positionY;

log(finalValue);
