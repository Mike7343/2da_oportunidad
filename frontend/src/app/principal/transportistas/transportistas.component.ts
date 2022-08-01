import { Component, OnInit } from '@angular/core';
import { ConsultaServicioService, Transportista } from 'src/app/servicio/consulta-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportistas',
  templateUrl: './transportistas.component.html',
  styleUrls: ['./transportistas.component.css']
})
export class TransportistasComponent implements OnInit {

  //variable
  ListarTransportista: Transportista[]=[];

  constructor(private consultaservicio: ConsultaServicioService, private router:Router) { }

  ngOnInit(): void {
    this.listarTransportista();
  }

  listarTransportista(){
    this.consultaservicio.getTransportista().subscribe(
      res=>{
        console.log(res);
        this.ListarTransportista=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.consultaservicio.deleteTransportista(id).subscribe(
      res=>{
        console.log('Transportista eliminado');
        this.listarTransportista();
      },
      err=>console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/Edit/'+id]);
  }

}
