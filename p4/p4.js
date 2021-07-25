// 請把解題函式寫在這個裡面
function solve(arr) {
  let idArr;
  arr.forEach(item => {
    idArr.push(item.id);
  })
  idArr = new Set(idArr)
  arr.forEach(item => {
    let newArr = arr.filter(item => (item.id = item));
    let valueArr;
    newArr.forEach(item => {
      valueArr.push(item.value);
    });
    let resultIdArr = [id: item]
  })
  
  console.log(newArr);
  let valueArr;
  newArr.forEach(item => {
    valueArr.push(item.value);
  });

  return [{ id: 1, value: valueArr }];
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

function solve1(arr1) {
 console.log(typeof arr1)
  // let newArr = arr1.filter(item => (item.id = 1));
  // console.log(newArr);
  // let valueArr;
  // newArr.forEach(item => {
  //   valueArr.push(item.value);
  // });

  // return [{ id: 1, value: valueArr }];
}
solve1();
