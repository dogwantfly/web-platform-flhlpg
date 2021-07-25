// api url: https://jsonplaceholder.typicode.com/users
var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://jsonplaceholder.typicode.com/users');
oReq.send();
function reqListener() {
  userData = JSON.parse(oReq.response);
  console.log('userData:', userData);
  if (userData.length) {
    render(userData);
  }
}
let userData;
function render(data) {
  let str = '';
  console.log(data);
  data.forEach((item, index) => {
    console.log(item);
    str += `<li data-index="${index}">${item.name} / ${item.company.name} / ${
      item.email
    }<button class="delete-btn">刪除</button></li>`;
  });
  document.querySelector('ol').innerHTML = str;
}
document.querySelector('.list').addEventListener('click', deleteItem);
function deleteItem(e) {
  console.log(e.target);
  if (e.target.classList.contains('delete-btn')) {
    let index = e.target.closest('li').dataset.index;
    console.log(index);
    userData.splice(index, 1);
    render(userData);
  }
}
