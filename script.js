// ====================================== create table  ===========================================//
let products = [];

if(localStorage.productstable != null){
 products = JSON.parse(localStorage.getItem('productstable'));
 xd()
}else{
  products = [];
}

class Article {
  constructor(name, brand, price, date, type, discount) {
    this.name = name;
    this.marque = brand;
    this.price = price;
    this.date = date;
    this.type = type;
    this.discount = discount;
  }
  details() {
    let message = `
    Name: ${this.name} <br>
    Marque: ${this.brand} <br>
    Prix: ${this.price} <br>
    Date de publication: ${this.date} <br>
    Type: ${this.type} <br>
    On discount: ${this.discount} <br>
    `;

   productsdetails.innerHTML = message;

   const productInfo = new prod.Modal(
     document.getElementById("product_info")
   );
   productInfo.show();
 }
}































 xd(() => {
   document.querySelector("tbody").innerHTML = "";
   for (i in products) {
     document.querySelector("tbody").innerHTML += `
<tr>
  <td>${products[i].name}</td>
  <td>${products[i].brand}</td>
  <td>${products[i].price}</td>
  <td>${products[i].date}</td>
  <td>${products[i].type}</td>
  <td>${products[i].discount}</td>  
  <td><i id='${i}' class="fas fa-edit" onClick="Upload(this)" ></i><i  onclick="preparefordeletion(${i})"  class="fa-solid fa-trash"  ></i> <i id='${i}' onclick="document.getElementById('product_info').style.display='block'" class="fa-solid fa-circle-info"></i>  </td> 
`;
     products.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
   }
   localStorage.setItem("productstable", JSON.stringify(products));

 }, 1000);
// ====================================== empty inputs  ===========================================//
function emptyF() {
  document.getElementById("form").reset();
}

// ====================================== create rows  ===========================================//
function AddRow() {
  products.push({
    name: document.getElementById("name").value,
    brand: document.getElementById("brand").value,
    price: document.getElementById("price").value,
    date: document.getElementById("date").value,
    type: document.getElementById("type").value,
    discount: document.querySelector('form').discount.value

  
  })
  let formD = ;
  
  xd();
  emptyF();
  add.style.display = "none";
  submit.style.display = "block";
  arr.length = 0
  localStorage.setItem("productstable", JSON.stringify(products));
}
// ====================================== delete data frm array ===========================================//
function preparefordeletion(x) {
  document.getElementById('md').style.display = 'block';
  document.querySelector(".deletebtn").id = x
}

function myDelete(ele) {
  i = Number(ele.id);
  products.splice(i, 1)
  xd()
  emptyF()
  document.getElementById('md').style.display = 'none';
  localStorage.setItem('productstable', JSON.stringify(products));
}
// =============================== upload data in table to inputs  =====================//
function Upload(ele) {
  i = Number(ele.id);
  saveMo.title = ele.id;
  document.getElementById("name").value = products[Number(ele.id)].name;
  document.getElementById("brand").value = products[Number(ele.id)].brand;
  document.getElementById("price").value = products[Number(ele.id)].price;
  document.getElementById("date").value = products[Number(ele.id)].date;
  document.getElementById("type").value = products[Number(ele.id)].type;
  document.querySelector('form').discount.value = products[Number(ele.id)].discount;
  submit.setAttribute('onclick', "validateInputs('save')")
}


// ========================== save modifications from inputs to data table   =======================//
function saveMo(ele) {
  i = Number(ele.title);
  let ind = saveMo.title;

  products[Number(ind)].name = document.getElementById("name").value;
  products[Number(ind)].brand = document.getElementById("brand").value;
  products[Number(ind)].price = document.getElementById("price").value;
  products[Number(ind)].date = document.getElementById("date").value;
  products[Number(ind)].type = document.getElementById("type").value;
  products[Number(ind)].discount = document.querySelector('form').discount.value;
  document.getElementById('submit').style.display = "block";
  document.getElementById('save').style.display = "none";
  submit.setAttribute('onclick', "validateInputs('add')")
  localStorage.setItem('productstable', JSON.stringify(products));
  xd()
  emptyF()
}






















// ============================ create variables =================================================== //
const form = document.getElementById("form");
const namee = document.getElementById("name");
const brand = document.getElementById("brand");
const price = document.getElementById("price");
const type = document.getElementById("type");
const date = document.getElementById("date");
const discount = document.getElementsByName('discount');

let myRegex = /^[a-zA-Z.]+(\s[a-zA-Z.+'-]+)*\s?$/;

const arr = []
// ============================ event listner adding ====================================== //
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
// ============================ set Errors function=================================================== //
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
// ============================ set Success function ================================================== //
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
//=======================  onblur functions =============================//
namee.onblur = () => {
  const nameValue = namee.value;
  if (nameValue === "") {
    setError(namee, "name is required");

  } else if (nameValue.length > 30) {
    setError(
      namee,
      "name is too long, it should be less than 30 characters "
    );
  } else if (myRegex.test(nameValue) === false) {
    setError(namee, "name cannot contain numbers");
  } else {
    setSuccess(namee);
  }
}
brand.onblur = () => {
  const brandValue = brand.value;
  if (brandValue === "") {
    setError(brand, "brand is required ");

  } else if (brandValue.length > 30) {
    setError(brand, "brand is too long, it should be less than 30 characters ");

  } else if (myRegex.test(brandValue) === false) {
    setError(brand, "brand cannot contain numbers");

  } else {
    setSuccess(brand);
  }
}
price.onblur = () => {
  const priceValue = price.value;
  if (priceValue === "") {
    setError(price, "price required");

  } else if (priceValue.length > 30) {
    setError(price, "price is too long");

  } else {
    setSuccess(price);
  }
}
date.onblur = () => {
  const dateValue = date.value;
  if (dateValue === "") {
    setError(date, "date is required");

  } else {
    setSuccess(date);
  }
};
// ================================== onclick function =============================================== //
const validateInputs = (x) => {
  // ======================= variables Values  ======================//
  const nameValue = namee.value;
  const brandValue = brand.value;
  const priceValue = price.value;
  const typeValue = type.value;
  const dateValue = date.value;
  //======================= name validaton ====================//
  if (nameValue === "") {
    setError(namee, "name is required");
    arr.push(false);
  } else if (nameValue.length > 30) {
    setError(
      namee,
      "first name is too long, it should be less than 30 characters "
    );
    arr.push(false);
  } else if (myRegex.test(nameValue) === false) {
    setError(namee, "first  name cannot contain numbers");
    arr.push(false);
  } else {
    setSuccess(namee);
  }
  //======================= first name validaton =========================//
  if (brandValue === "") {
    setError(brand, "brand is required ");
    arr.push(false);
  } else if (brandValue.length > 30) {
    setError(brand, "brand is too long, it should be less than 30 characters ");
    arr.push(false);
  } else if (myRegex.test(brandValue) === false) {
    setError(brand, "brand cannot contain numbers");
    arr.push(false)
  } else {
    setSuccess(brand);
  }
  //======================= phone Validation =============================//

  if (priceValue === "") {
    setError(price, "price is required , can't be empty ");
    arr.push(false);
  } else if (priceValue.length > 30) {
    setError(price, "price is too long");
    arr.push(false);
  } else {
    setSuccess(price);
  }
  //======================= email Validation =============================//
  if (typeValue === "") {
    setError(type, "type is required");
    arr.push(false);
  } else {
    setSuccess(type);
  }
  //======================= email Validation =============================//
  if (dateValue === "") {
    setError(date, "email is required , cannot be empty ");
    arr.push(false);
  } else {
    setSuccess(date);
  }
  //======================= group Validation =============================//
  if (discount[0].checked == false && discount[1].checked == false) {
    document.querySelector(".error_discount").innerHTML =
      "Please choose if product on discount or no ";
    arr.push(false);
  } else {
    document.querySelector(".error_discount").innerHTML = '';
  }
  if (arr.length != 0) {
    submit.style.display = "block";
  } else if ((arr.length == 0)) {
    if (x === 'add') {
      submit.style.display = "none";
      add.style.display = "block";
    } else {
      submit.style.display = "none";
      save.style.display = "block";
    }
  }
};
