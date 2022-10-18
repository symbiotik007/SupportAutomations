import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  productUpc: FormControl = new FormControl('');
  storeList: FormControl = new FormControl('');
  isOnStore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  generateUpc(): void {
    console.log(this.productUpc.value);
    console.log(this.storeList.value);
    console.log(this.isOnStore);
  }

  setStatusStoreList(status: boolean): void {
    this.isOnStore = !status;
  }

}
