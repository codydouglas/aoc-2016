import { inputDay3 } from "../../utils/inputs.mjs";
import { log } from "../../utils/log.mjs";
log("Day 3 Part 1");

const input = inputDay3;
let triangleCount = 0;
const groups = [];

parseNumbers(input);
groups.forEach((group) => {
  calculateTriangle(group);
});
log(triangleCount);

function parseNumbers(input) {
  const numbers = input.trim().split(/\s+/).map(Number);

  for (let i = 0; i < numbers.length; i += 3) {
    groups.push(numbers.slice(i, i + 3));
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
