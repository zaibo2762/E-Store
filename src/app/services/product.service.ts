import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://localhost:7021/api/Product'; // Replace with your API URL

  

  constructor(private http: HttpClient) {}

  getItemById(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.get(url);
  }
}
