import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  usuario: Usuario;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      confirmacaoSenha: ['']
    });
  }

  adicionarUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }

}
