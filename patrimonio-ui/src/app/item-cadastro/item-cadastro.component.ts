import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService : ItemService) { }

  ngOnInit() { this.allItens() }

  private allItens() {
    this
      .itemService
        .listar()
          .subscribe(itens => this.itens = itens);
  }

  cadastrar(frm : FormControl) {
    console.log(frm.value);
    this.itemService.cadastrar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.allItens();
    });
  }
}
