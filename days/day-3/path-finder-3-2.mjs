import { inputDay3 } from "../../utils/inputs.mjs";
import { log } from "../../utils/log.mjs";
log("Day 3 Part 2");

const input = inputDay3;

let triangleCount = 0;
const groups = [];

parseNumbers(input);
groups.forEach((group) => {
  calculateTriangle(group);
});
log(triangleCount);

function parseNumbers(input) {
  const rows = input
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/).map(Number));

  for (let i = 0; i < rows.length; i += 3) {
    for (let col = 0; col < 3; col++) {
      groups.push([rows[i][col], rows[i + 1][col], rows[i + 2][col]]);
    }
  }
}

function calculateTriangle(group) {
  const isTriangle =
    group[0] + group[1] > group[2] &&
    group[0] + group[2] > group[1] &&
    group[1] + group[2] > group[0];

  if (isTriangle) {
    triangleCount++;
  }
}
