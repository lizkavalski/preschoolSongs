import { Component, OnInit } from '@angular/core';
import {Category} from './category';
import { CATEGORY } from './categoriesData';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = CATEGORY;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}