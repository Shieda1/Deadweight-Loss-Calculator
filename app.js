// https://www.omnicalculator.com/finance/deadweight-loss

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const deadweightlossRadio = document.getElementById('deadweightlossRadio');
const originalpriceRadio = document.getElementById('originalpriceRadio');
const newpriceRadio = document.getElementById('newpriceRadio');
const originalquantityRadio = document.getElementById('originalquantityRadio');
const newquantityRadio = document.getElementById('newquantityRadio');

let deadweightloss;
let originalprice = v1;
let newprice = v2;
let originalquantity = v3;
let newquantity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

deadweightlossRadio.addEventListener('click', function() {
  variable1.textContent = 'Original price';
  variable2.textContent = 'New price';
  variable3.textContent = 'Original quantity';
  variable4.textContent = 'New quantity';
  originalprice = v1;
  newprice = v2;
  originalquantity = v3;
  newquantity = v4;
  result.textContent = '';
});

originalpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Deadweight loss';
  variable2.textContent = 'New price';
  variable3.textContent = 'Original quantity';
  variable4.textContent = 'New quantity';
  deadweightloss = v1;
  newprice = v2;
  originalquantity = v3;
  newquantity = v4;
  result.textContent = '';
});

newpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Deadweight loss';
  variable2.textContent = 'Original price';
  variable3.textContent = 'Original quantity';
  variable4.textContent = 'New quantity';
  deadweightloss = v1;
  originalprice = v2;
  originalquantity = v3;
  newquantity = v4;
  result.textContent = '';
});

originalquantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Deadweight loss';
  variable2.textContent = 'Original price';
  variable3.textContent = 'New price';
  variable4.textContent = 'New quantity';
  deadweightloss = v1;
  originalprice = v2;
  newprice = v3;
  newquantity = v4;
  result.textContent = '';
});

newquantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Deadweight loss';
  variable2.textContent = 'Original price';
  variable3.textContent = 'New price';
  variable4.textContent = 'Original quantity';
  deadweightloss = v1;
  originalprice = v2;
  newprice = v3;
  originalquantity = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(deadweightlossRadio.checked)
    result.textContent = `Deadweight loss = ${computedeadweightloss().toFixed(2)}`;

  else if(originalpriceRadio.checked)
    result.textContent = `Original price = ${computeoriginalprice().toFixed(2)}`;

  else if(newpriceRadio.checked)
    result.textContent = `New price = ${computenewprice().toFixed(2)}`;

  else if(originalquantityRadio.checked)
    result.textContent = `Original quantity = ${computeoriginalquantity().toFixed(2)}`;

  else if(newquantityRadio.checked)
    result.textContent = `New quantity = ${computenewquantity().toFixed(2)}`;
})

// calculation

function computedeadweightloss() {
  return ((Number(newprice.value) - Number(originalprice.value)) * (Number(originalquantity.value) - Number(newquantity.value))) / 2;
}

function computeoriginalprice() {
  return Number(newprice.value) - ((Number(deadweightloss.value) * 2) / (Number(originalquantity.value) - Number(newquantity.value)));
}

function computenewprice() {
  return ((Number(deadweightloss.value) * 2) / (Number(originalquantity.value) - Number(newquantity.value))) + Number(originalprice.value);
}

function computeoriginalquantity() {
  return ((Number(deadweightloss.value) * 2) / (Number(newprice.value) - Number(originalprice.value))) + Number(newquantity.value);
}

function computenewquantity() {
  return Number(originalquantity.value) - ((Number(deadweightloss.value) * 2) / (Number(newprice.value) - Number(originalprice.value)));
}