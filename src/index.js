module.exports = function toReadable (number) {
    let y;
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
      let b = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
      let c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
      let e = 'hundred';
      if(number < 11) {
          y = a[number];
      } else if(number <= 20) {
          y = b[number - 11];
      } else if(number <= 99) {
          if(number % 10 ===0) {
              y = c[number / 10 - 2];
          } else {
          y = c[Math.floor(number / 10) - 2] + ' ' + a[number % 10];
        }
      } else if(number <= 999) {
          if(number % 100 === 0) {
              y = a[number / 100] + ' ' + e;
          }  else if(number % 100 <= 11) {
              y = a[Math.floor(number / 100)] + ' ' + e + ' ' + a[number % 100];
          } else if(number % 100 <= 20) {
              y = a[Math.floor(number / 100)] + ' ' + e + ' ' + b[number % 100 -11];
          } else if(number % 10 ===0) {
              y = a[Math.floor(number / 100)] + ' ' + e + ' ' + c[number % 100 / 10 - 2];
          } else {
              y = a[Math.floor(number / 100)] + ' ' + e + ' ' + c[(number % 100 - number % 10) / 10 -2] + ' ' + a[number % 10];
          }
      }
      return y;
}
