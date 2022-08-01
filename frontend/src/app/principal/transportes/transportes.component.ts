import { Component, OnInit } from '@angular/core';
import { ConsultaServicioService, Transporte } from 'src/app/servicio/consulta-servicio.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.css']
})
export class TransportesComponent implements OnInit {

  //Variable
  ListarTransporte: Transporte[]=[]


  constructor(private consultaservicio: ConsultaServicioService, private router:Router) { }

  ngOnInit(): void{
    this.listarTransporte();
  }

  listarTransporte(){
    this.consultaservicio.getTransporte().subscribe(
      res=>{
        console.log(res);
        this.ListarTransporte=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(id:string){
    this.consultaservicio.deleteTransporte(id).subscribe(
      res=>{
        console.log('Transporte Eliminado');
        this.listarTransporte();
      },
      err=>console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id])
  }

}
