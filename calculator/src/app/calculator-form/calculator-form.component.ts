import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {
result: any;

  constructor() { }

  firstRow = ["1", "2", "3", "/"];
  secondRow = ["4", "5", "6", "*"];
  thirdRow = ["7", "8", "9", "-"];
  fourthRow = ["0", ".", "=", "+"];


  ngOnInit() {
  }
  clear(result){
      result.value = "";
  }
  dis(value){
    console.log("pressed: "+ value)
  }
  solve(){
    console.log("solve")
  }

}
