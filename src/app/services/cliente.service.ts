import { Observer } from './../../../node_modules/dot-prop/node_modules/type-fest/source/observable-like.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesUrl ="http://localhost:3000/clientes"
  constructor(private http: HttpClient) { 

    

  }
// lista que virá da API
// nesse exemplo vem do Cliente.ts
  clientes:Cliente[] = [

  ];


  listar():Observable<Cliente[]>{
    //return this.clientes;
    return this.http.get<Cliente[]>(this.clientesUrl) as Observable<Cliente[]>;
  }
  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id);

    if(cliente){
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);

    }

  }

  adicionar(cliente:Cliente){
    this.clientes.push(cliente);
    
  }
}
