let data = [];

// fetching data from txt file
async function getData() {
  const response = await fetch('input.txt');
  const text = await response.text();
  data = text.split('\n');
  checkSum(data);
}

// check the sum and log the multiplication if the sum is true
function checkSum(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      if (parseInt(data[i]) + parseInt(data[j]) === 2020)
        console.log(data[i] * data[j]);
    }
  }
}

getData();
