import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato-form',
  standalone: true,
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css'],
  imports: [ReactiveFormsModule, FormsModule]
})
export class ContatoFormComponent {
  @Output() save = new EventEmitter<Contato>();
  @Input() contato?: Contato = {
    nome: '',
    email: '',
    celular: '',
    telefone: '',
    ativo: false,
    favorito: false,
    dataCadastro: ''
  };

    

  saveContato(): void {
    if (this.contato) {
      this.save.emit(this.contato);
    }
  }
}
