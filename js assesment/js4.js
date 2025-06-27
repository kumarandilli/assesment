function chain(initialValue) {
  let value = initialValue;

  return {
    add(num) {
      value += num;
      return this; 
    },
    subtract(num) {
      value -= num;
      return this;
    },
    result() {
      return value;
    }
  };
}


const output = chain(5).add(2).subtract(1).result();
console.log(output); 
