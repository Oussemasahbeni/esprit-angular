import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

  title: string = 'alternance';
  products : Product[]= [
    {
      id: 1,
      name: 'product 1',
      price: 100,
      image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258'
    },
    {
      id: 2,
      name: 'product 2',
      price: 200,
      image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Green_PDP_Image_Position-1__en-IN_a957365d-0aa2-43da-88b1-fcaa9b0be4cf.jpg?v=1694606789&width=823'
    },
    {
      id: 3,
      name: 'product 3',
      price: 300,
      image: 'https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF894,1000_QL80_.jpg'
    }
  ]

  buy(product: Product){
    const foundProduct = this.products.find(p => p.id === product.id);
    if(foundProduct && foundProduct.price !== 0){
      product.price = foundProduct.price - 10;
    }
  }

}
