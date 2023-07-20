import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL,FOOD_BY_NAME_URL } from '../shared/constants/url';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  //for all food items
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  //for search bar
  getAllFoodBySearch(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  //for tags
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }
  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag == 'All'
      ? this.getAll()
      : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  //for specific food item
  getFoodByName(foodName: string): Observable<Food> {
    return this.http.get<Food>(FOOD_BY_NAME_URL + foodName);
  }
}
