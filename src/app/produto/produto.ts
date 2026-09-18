  import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-produto',
  styleUrl: './produto.css',
  templateUrl: './produto.html',
})
export class Produto {
  @Input() nome: string = "";
  @Input() preco: number = 0;

  @Output() produtoSelecionado = new EventEmitter<{ nome:string, preco: number}> ();

  selecionarProduto(nome: string, preco: number){
    this.produtoSelecionado.emit({

      nome: nome,
      preco: preco,
    });
  }
}

