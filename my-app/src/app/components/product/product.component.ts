import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
selector: 'app-product',
templateUrl: './product.component.html',
styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productLists: Products[]; 
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProductList().subscribe((response) => {
      console.log("log :"+response);
      this.productLists = response;
      }); 
  }

}
interface Products {
  id: number;
  name: string;
  price: number;
  }
