import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contato } from '../models/contato.model';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css'],
})
export class ContatoFormComponent {
  @Input() contato?: Contato;
  @Output() save = new EventEmitter<Contato>();

  saveContato(): void {
    if (this.contato) {
      this.save.emit(this.contato);
    }
  }
}
