import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product/product.model';
import { ProductService } from '../../../service/product/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: Product[];
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showProducts();
  }

  onSubmit() {
    console.log(this.product);
    this.productService.saveProduct(this.product).subscribe(result => {
      this.showProducts();
    })
  }

  showProducts(): void {
    this.product = new Product();
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

}
