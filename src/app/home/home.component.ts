import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly productService = inject(ProductsService);

  title: string = 'alternance';
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  buy(product: Product) {
    const foundProduct = this.products.find((p) => p.id === product.id);
    if (foundProduct && foundProduct.price !== 0) {
      product.price = foundProduct.price - 10;
    }
  }
}
