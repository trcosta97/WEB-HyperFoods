import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  restaurante = {
    name: '',
    description:'',
    address:{
      street:'',
      number:'',
      city:'',
      province:'',
      zipCode:'',
      phoneNumber:''
    }
  }

  saveRestaurante(){
    alert("Novo pensamento criado")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
