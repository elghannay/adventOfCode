#### step 1

retrieve data using the fetch Api from a txt file and convert it to array using this function:

```js
async function getData() {
  const response = await fetch('input.txt');
  const text = await response.text();
  data = text.split('\n');
  checkSum(data);
}
```

#### step 2

then use a basic nested for loops to check whether the sum adds up to 2020 and log the result of multiplication if true using checkSum function:

```js
function checkSum(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      if (parseInt(data[i]) + parseInt(data[j]) === 2020)
        console.log(data[i] * data[j]);
    }
  }
}
```