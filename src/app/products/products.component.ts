import { Component, OnInit } from '@angular/core';
import { ProductService} from '../services/product.service';

import { NewProductComponent } from '../new-product/new-product.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],



})
export class ProductsComponent implements OnInit {

  constructor( private productService:ProductService,public dialog: MatDialog) { }

  products: any;
  ngOnInit(): void {
    this.showProducts();
  }
  showProducts(){
    this.products=this.productService.listProducts().subscribe(product=>
      {
        this.products=product;
        console.log(this.products);
      })

  }
  openDialog() {
    const dialogRef = this.dialog.open(NewProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.showProducts();
    });
  }

}
