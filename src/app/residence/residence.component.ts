import { Component } from '@angular/core';
import { Residence } from '../model/residence';

@Component({
  selector: 'app-residence',
  standalone: false,
  templateUrl: './residence.component.html',
  styleUrl: './residence.component.css'
})
export class ResidenceComponent {


  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"images/R2.jpeg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"images/R3.png", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"images/R4.jpeg", status: "En Construction"}
    ];

    favorites: Residence[] = [];
    searchAddress: string = '';
  
    showLocation(address: string) {
      if (address === 'inconnu') {
        alert('L\'adresse de cette résidence est inconnue');
      } else {
        alert(`L'adresse est: ${address}`);
      }
    }
  
    addToFavorites(residence: Residence) {
      if (!this.favorites.includes(residence)) {
        this.favorites.push(residence);
      }
    }

    removeFromFavorites(residence: Residence) {
      this.favorites = this.favorites.filter(favorite => favorite !== residence);
    }
  
    getFilteredResidences() {
      return this.listResidences.filter(residence =>
        residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
      );
    }
    
    
}
