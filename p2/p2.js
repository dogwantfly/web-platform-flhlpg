// 把程式碼寫在這檔案裡面

let randomFoods = ['拉麵', '泡麵', '乾麵', '陽春麵', '牛肉麵'];
const foodList = [];
document.querySelector('.add-btn').addEventListener('click', addItem);
document.querySelector('.list').addEventListener('click', deleteItem);
document.querySelector('.delete-all-btn').addEventListener('click', deleteAll);
document.querySelector('.pick-btn').addEventListener('click', pickRamdomFoods);
function addItem() {
  const food = document.querySelector('input').value.trim();
  console.log(food);
  foodList.push(food);
  console.log(foodList);
  document.querySelector('input').value = '';
  render(foodList);
}
function render(data) {
  let str = '';
  data.forEach((item, index) => {
    str += `<li data-index="${index}">${item}<button class="delete-btn">刪除</button></li>`;
    // console.log(str);
  });
  document.querySelector('ol').innerHTML = str;
}
function deleteItem(e) {
  console.log(e.target);
  if (e.target.classList.contains('delete-btn')) {
    let index = e.target.closest('li').dataset.index;
    console.log(index);
    foodList.splice(index, 1);
    render(foodList);
  }
}
function deleteAll() {
  foodList = [];
  render(foodList);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function pickRamdomFoods() {
  console.log(getRandomInt(5));
  let index = getRandomInt(5);
  foodList.push(randomFoods[index]);
  render(foodList);
}
