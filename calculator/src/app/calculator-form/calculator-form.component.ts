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

  isOperation(value){
    var op = ["+", "-", "/", "*", "="] 
    return op.filter(p => p == value).length > 0;
  }
  doCalculation(result){
    var firstOperand = this.numbers[0];
    var secondOperand = this.numbers[2];
    var operation = this.numbers[1];
    var r;

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

  dis(value, result){
    debugger
    var isOperation = this.isOperation(value);

    if(this.displayNumber && !isOperation){
      this.displayNumber = this.displayNumber + value;
    }
    else{
      this.displayNumber = value;
    }

    if(!isOperation){
      this.numbers.push(Number(this.displayNumber)); 

    } else {
      this.numbers.push(this.displayNumber);
    }
    if(this.numbers.length == 3 || value=="="){
      this.doCalculation(result);
    }
    
    
    
    
    result.value = this.displayNumber;
  }
  updateResult(result, r){
    this.numbers = [];
    this.numbers.push(r);
    result.value = r;
    this.displayNumber = r
  }

  

}
