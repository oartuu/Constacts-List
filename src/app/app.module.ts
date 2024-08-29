import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContatoListComponent } from './ContatoList/contato-list.component';
import { ContatoFormComponent } from './ContatoForm/contato-form.component';
import { ContatoService } from './services/contato.service';

@NgModule({
  declarations: [AppComponent, ContatoListComponent, ContatoFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ContatoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
