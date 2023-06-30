import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit{

  construtor(private router: Router) {
    
  }

  ngOnInit(): void{
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }
}
