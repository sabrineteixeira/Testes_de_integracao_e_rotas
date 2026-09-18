import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  imports: [Produto],
  selector: 'app-lista-produto',
  styleUrl: './lista-produto.css',
  templateUrl: './lista-produto.html',
})
export class ListaProduto {
  produtos =
  [
    {nome: 'notebook', preco: 15.50},
    {nome: 'fone', preco: 55.50},
    {nome: 'mouse', preco: 45.50},
    {nome: 'monitor', preco: 35.50},
    {nome: 'teclado', preco: 150.50},
    {nome: 'mouse', preco: 10.50},
  ]

  exibirProduto(nome: string, preco:number){
    console.log(`Produto: $(nome) - $(preco)`);
  }
}
