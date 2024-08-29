import { Component, EventEmitter, Output } from '@angular/core';
import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css'],
})
export class ContatoListComponent {
  contatos: Contato[] = [];
  @Output() edit = new EventEmitter<Contato>();
  @Output() add = new EventEmitter<void>();

  constructor(private contatoService: ContatoService) {
    this.contatos = this.contatoService.getContatos();
  }

  editContato(index: number): void {
    this.edit.emit(this.contatos[index]);
  }

  deleteContato(index: number): void {
    this.contatoService.deleteContato(index);
    this.contatos = this.contatoService.getContatos();
  }

  addContato(): void {
    this.add.emit();
  }
}
