import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): food{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAll():food[]{
    return[
      {
        id:1,
        name:'Fire And Ice Pizzeria',
        cookTime:'10-20',
        price:150,
        favorite:true,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-1.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:2,
        name:'The Workshop Eatery',
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-2.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:3,
        name:'Cafe Soma',
        cookTime:'10-20',
        price:150,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-3.jpeg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:4,
        name:'Mittraan Da Dhaba',
        cookTime:'10-20',
        price:250,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-4.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:5,
        name:'Le Trio',
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-5.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:6,
        name:'Pizza Inn',
        cookTime:'10-20',
        price:350,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-6.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:7,
        name:'Zhong Hua',
        cookTime:'10-20',
        price:100,
        favorite:true,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-7.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:8,
        name:'Bricks Cafe Firewood Pizza',
        cookTime:'10-20',
        price:150,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-8.png',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:9,
        name:'Bricks Cafe Firewood Pizza',
        cookTime:'10-20',
        price:150,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-9.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:10,
        name:'Alphabeat Restaurant',
        cookTime:'10-20',
        price:300,
        favorite:false,
        origin:['italy'],
        stars:4.5,
        imageUrl:'/assets/img/food/food-10.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
     
    ]
  }
}
