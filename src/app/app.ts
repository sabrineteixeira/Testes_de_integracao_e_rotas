import { Component, signal } from '@angular/core';
import { ListaProduto } from './lista-produto/lista-produto';
@Component({
  imports: [ListaProduto],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projeto-teste');
}
