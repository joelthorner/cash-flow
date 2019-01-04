import { Component, OnInit } from '@angular/core';
import { Operation } from './../operation';

@Component({
  selector: 'cf-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public kindsOfOperations = ['Income', 'Expense'];
  public numberOfOperations = 0;
  public operation: Operation = new Operation();
  public operations: Operation[] = [];
  public title = 'New Operation';

  constructor() { }

  ngOnInit() { }

  public saveOperation() {
    const clonedOperation = this.cloneOperation(this.operation);
    this.operations.push(clonedOperation);
    this.numberOfOperations = this.operations.length;
    this.operation = new Operation();
  }
  public deleteOperation(operation: Operation) {
    const index = this.operations.indexOf(operation);
    this.operations.splice(index, 1);
    this.numberOfOperations = this.operations.length;
  }

  private cloneOperation(originalOperation: Operation): Operation {
    const targetOperation = Object.assign({}, originalOperation);
    return targetOperation;
  }
}
