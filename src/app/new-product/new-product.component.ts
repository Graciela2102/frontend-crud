import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],


})
export class NewProductComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<NewProductComponent>) { }

  products:any;
  ngOnInit(): void {
  }
  add(productName:string,productDescription:string,productPrice:number, productAmount:number){
  this.products={
    'name': productName,
    'description': productDescription,
    'price':productPrice,
    'amount': productAmount

  };
  console.log(this.products);
  }

}
