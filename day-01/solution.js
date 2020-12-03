let data = [];

// fetching data from txt file
async function getData() {
  const response = await fetch('input.txt');
  const text = await response.text();
  data = text.split('\n');
  // partOne(data);
  partTwo(data);
}

// check the sum and log the multiplication if the sum is true
function partOne(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      if (parseInt(data[i]) + parseInt(data[j]) === 2020)
        console.log('partOne:', data[i] * data[j]);
    }
  }
}

function partTwo(data) {
  for (let k = 0; k < data.length; k++) {
    for (let i = 1; i < data.length; i++) {
      for (let j = 2; j < data.length; j++) {
        if (parseInt(data[i]) + parseInt(data[j]) + parseInt(data[k]) === 2020)
          console.log('partTwo:', data[i] * data[j] * data[k]);
      }
    }
  }
}
getData();
