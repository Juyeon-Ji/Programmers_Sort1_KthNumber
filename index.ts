function solution(array, commands) {
  var answer = [];
  commands.forEach(function(command) {
    let [i, j, k] = command;
    let i2jArr = [];

    i2jArr = array.slice(i - 1, j);
    sort_ascending(i2jArr);
    answer.push(i2jArr[k - 1]);
  });
  return answer;
}

function sort_ascending(arr) {
  arr.sort(function(a, b) {
    // 오름차순
    return a - b;
  });
}

let result = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);

console.log("result", result);
