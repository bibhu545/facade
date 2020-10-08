import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  renderUsers() {
    return [
      { name: 'bibhu', age: 10 },
      { name: 'ranjan', age: 13 },
      { name: 'chitta', age: 14 },
      { name: 'gogo', age: 15 }
    ]
  }

}
