import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../shared/usuario.model';
import { Observable } from 'rxjs';
import { UsuarioService } from '../shared/usuario.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Observable<UsuarioModel[]> | undefined

  constructor(private usuarioService: UsuarioService ,private router: Router) { }
  ngOnInit() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }
  borrarUsuario(id: string) {
    this.usuarioService.borrarUsuario(id).subscribe(data => {
      console.log(data);
    })
    this.usuarios = this.usuarioService.obtenerUsuarios();
    window.location.reload();
  }

}
