import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kata-integration';

  products = [
    {
      title: 'Produit 1',
      description: 'Ceci est une courte description du produit.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 2',
      description: 'Ceci est une courte description du produit.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 3',
      description: 'Ceci est une courte description du produit.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 4',
      description: 'Ceci est une courte description du produit.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 5',
      description: 'Ceci est une courte description du produit.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Produit 6',
      description: 'Ceci est une courte description du produit.',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];
}
