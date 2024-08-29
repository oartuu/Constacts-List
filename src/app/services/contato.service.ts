import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [];

  getContatos(): Contato[] {
    return this.contatos;
  }

  addContato(contato: Contato): void {
    this.contatos.push(contato);
  }

  updateContato(index: number, contato: Contato): void {
    this.contatos[index] = contato;
  }

  deleteContato(index: number): void {
    this.contatos.splice(index, 1);
  }
}
