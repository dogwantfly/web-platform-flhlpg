// 請把解題函式寫在這個裡面
function solve(arr) {
  arr.forEach(item => {
    let newArr = arr.filter(item => (item.id = item));
    // let valueArr = Object.keys(new)
    newArr.forEach(item => {
      valueArr.push(item.value);
    });
    // let resultIdArr = [id: item]
  });

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


function solve1(array) {
  console.log(typeof array);
  let idArr = [];
  array.forEach(item => {
    if(idArr.indexOf(item.id) === -1) {
      idArr.push(item.id);
    }
  })
  console.log(idArr)
  array.forEach(item => {
    idArr.forEach( item => {
      let id = item
      let newArr = array.filter(item => item.id == id);
      console.log(newArr);
    })

    let valueArr = [];
    newArr.forEach(item => {
      valueArr.push(item.value);
    });
    let newResultArr = [];
    let newResult = {
      id: 1,
      value: valueArr
    };
    console.log(newResult)
  })
 
  // return [{ id: 1, value: valueArr }];
}
solve1(arr1);
// 篩選出相同 id 的物件
// 再將所有 value 取出放到 valueArr
// 將該 id 的 value 值改為 valueArr
