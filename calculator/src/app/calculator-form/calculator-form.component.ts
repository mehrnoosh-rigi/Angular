import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {
result: any;

  constructor() { }

  firstRow = ["1", "2", "3"];
  secondRow = ["4", "5", "6"];
  thirdRow = ["7", "8", "9"];
  numbers = [];
  displayNumber=undefined;
  error = "";
  

  ngOnInit() {
  }
  clear(result){
      result.value = "";
      this.displayNumber= "";
      this.numbers = [];
  }
  dis(value, result){
    if(this.displayNumber){
      this.displayNumber = this.displayNumber + value;
    }else{
      this.displayNumber = value;
    }
    this.numbers.push(Number(this.displayNumber));
    
    
    result.value = this.displayNumber;
    this.displayNumber = Number(this.displayNumber);
  }
  updateResult(result, r){
    debugger

    this.numbers = [];
    this.numbers.push(r);
    result.value = r;

  }
  operation(result, operation){
    var r;
    this.numbers.push(operation);



    // result.value = "";
    this.displayNumber = undefined
    if(this.numbers.length > 2){
      var firstOperand = this.numbers[0]
      var secondOperand = this.numbers[2]
      if(operation == "="){
        operation = this.numbers[1]
        // this.numbers = [];
        // this.numbers.push(r);
        // result.value = r;

      }
      switch (operation)
      {
        case "/":
          if(secondOperand == 0){
            this.error = "Division by zero"
          }else{
            r = firstOperand / secondOperand;
            this.updateResult(result, r);
          }
          break;
        case "+":{
          r = firstOperand + secondOperand;
          this.updateResult(result, r);
          break;
        }
        case "-":{
          r = firstOperand - secondOperand;
          this.updateResult(result, r);
          break;
        }
        case "*":{
          r = firstOperand * secondOperand;
          this.updateResult(result, r);
          break;
        }
      }        

    }
    // if(this.displayNumber == 0){
    //   r = this.numbers[0] / this.numbers[1]
    //   this.result = r
    // } else {
    //   this.error = "Can not divide by zero"
    // }
  }
  solve(){
    console.log("solve")
  }

}
