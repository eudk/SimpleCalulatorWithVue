new Vue({
    el: '#app',
    data: {
      firstNumber: 0,
      secondNumber: 0,
      operator: '+',
      result: 0
    },
    methods: {
      calculate: function() {
        switch(this.operator) {
          case '+':
            this.result = this.firstNumber + this.secondNumber;
            break;
          case '-':
            this.result = this.firstNumber - this.secondNumber;
            break;
          case '*':
            this.result = this.firstNumber * this.secondNumber;
            break;
          case '/':
            this.result = this.firstNumber / this.secondNumber;
            break;
        }
      }
    }
  });