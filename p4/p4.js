// 請把解題函式寫在這個裡面
function solve(array) {
  let idArr = [];
  array.forEach(item => {
    if (idArr.indexOf(item.id) === -1) {
      idArr.push(item.id);
    }
  });
  let newResultArr = [];
  let newArr;
  array.forEach(item => {
    idArr.forEach(item => {
      let valueArr = [];
      let id = item;
      if (newResultArr.filter(item => item.id === id).length) return;
      newArr = array.filter(item => item.id == id);
      newArr.forEach(item => {
        valueArr.push(item.value);
      });
      let newResult;
      if (valueArr.length === 1) {
        newResult = {
          id,
          value: valueArr[0]
        };
      } else {
        newResult = {
          id,
          value: valueArr
        };
      }
      newResultArr.push(newResult);
    });
  });
  console.log(newResultArr);
  return newResultArr;
}

// 事先為你準備好的測驗正確性的函式，如果你很確定不會改壞的話，可以改動
function test() {
  let isCorrect = true;
  for (let i = 0; i < testCases.length; i++) {
    const result = solve(testCases[i].input);
    if (!deepEqual(testCases[i].output, result)) {
      isCorrect = false;
      console.log('Wrong Answer!');
      console.log('預期答案：');
      console.log(JSON.stringify(testCases[i].output));
      console.log('你的答案：');
      console.log(JSON.stringify(result));
      break;
    }
  }
  if (isCorrect) {
    console.log('過關！');
  }

  function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}

let arr1 = [
  { id: 1, value: 43 },
  { id: 1, value: 213 },
  { id: 2, value: 321 },
  { id: 3, value: 2 },
  { id: 3, value: 345 },
  { id: 4, value: 555 },
  { id: 4, value: 44 },
  { id: 3, value: 33 },
  { id: 3, value: 199 }
];

function solve1(array) {
  let idArr = [];
  array.forEach(item => {
    if (idArr.indexOf(item.id) === -1) {
      idArr.push(item.id);
    }
  });
  let newResultArr = [];
  let newArr;

  array.forEach(item => {
    idArr.forEach(item => {
      let valueArr = [];
      let id = item;
      if (newResultArr.filter(item => item.id === id).length) return;
      newArr = array.filter(item => item.id == id);
      console.log(newArr);
      newArr.forEach(item => {
        valueArr.push(item.value);
      });
      console.log(valueArr);
      let newResult = {
        id,
        value: valueArr
      };
      newResultArr.push(newResult);
    });
  });
  console.log(newResultArr);

  return newResultArr;
}
// solve1(arr1);
// 篩選出相同 id 的物件
// 再將所有 value 取出放到 valueArr
// 將該 id 的 value 值改為 valueArr
