import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material';
import { Client } from 'src/app/includes/Client';
import { ClientDetailsComponent } from '../client-details/client-details.component';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'username', 'actions'];
  dataSource = []

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {

    let newClient = {
      "Nombre" : "Juan",
      "Apellidos" : "Perez Hernandez",
      "Nombre_Usuario" : "Ju",
      "Correo_Electronico" : "jperez@hotmail.com",
      "Contraseña" : "juanitoperez"
    }

    this.apiService.createClient(newClient).subscribe((res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    })

    this.apiService.getClients().subscribe((res) => {
      this.dataSource = res.body;
      console.log(this.dataSource);
    });

    let data = {
      "Edad" : 39,
      "Estatura" : 1.80,
      "Peso" : 60,
      "GEB" : 1500
    }

    this.apiService.updateClient(data, 59).subscribe((res) => {
      console.log(res);
    })

  }

  openDialog(contact: Client): void {
    console.log(contact);
    const dialogRef = this.dialog.open(ClientDetailsComponent, {
      width: '400px',
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
