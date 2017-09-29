import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  ITEM_URL = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.ITEM_URL);
  }

  cadastrar (item : any) {
    return this.http.post(this.ITEM_URL, item);
  }

}
