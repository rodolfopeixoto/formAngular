import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'https://newsapi.org/v2/top-headlines'
  constructor(private httpClient: HttpClient) { }

  createFormField(formPayload){
    return this.httpClient.post(this.BASE_URL, formPayload)
  }
}
