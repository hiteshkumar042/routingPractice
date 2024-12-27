import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient)
  constructor() { }

  getuser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/')
  }

  getuserData(id:string){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
