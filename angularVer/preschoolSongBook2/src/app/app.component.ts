import { Component } from '@angular/core';
import {Category} from './categories/category';
import { CATEGORY } from './categories/categoriesData';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Categories'
  categories = CATEGORY;
  constructor(
    private router : Router,
    private activeRoute: ActivatedRoute,) { 

    }
  viewSongs(): void{
    console.log("I got clicked")
    this.router.navigate(['/songs'])
  }
  ngOnInit(): void {
  }
}
