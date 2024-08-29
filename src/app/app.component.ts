import { Component } from '@angular/core';
import { Contato } from './models/contato.model';
import { ContatoService } from './services/contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contatos: Contato[] = [];
  selectedContato?: Contato;
  isEditing = false;

  constructor(private contatoService: ContatoService) {
    this.contatos = this.contatoService.getContatos();
  }

  openForm(contato?: Contato): void {
    this.selectedContato = contato ? { ...contato } : this.createEmptyContato();
    this.isEditing = !!contato;
  }

  saveContato(contato: Contato): void {
    if (this.isEditing) {
      const index = this.contatos.findIndex((c) => c.email === contato.email);
      this.contatoService.updateContato(index, contato);
    } else {
      this.contatoService.addContato(contato);
    }
    this.isEditing = false;
    this.selectedContato = undefined;
    this.contatos = this.contatoService.getContatos();
  }

  createEmptyContato(): Contato {
    return {
      nome: '',
      email: '',
      telefone: '',
      celular: '',
      favorito: false,
      ativo: true,
      dataCadastro: new Date().toISOString().split('T')[0],
    };
  }
}
