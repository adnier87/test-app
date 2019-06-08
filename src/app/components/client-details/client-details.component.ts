import { Component, OnInit, Inject } from '@angular/core';
import { Client } from 'src/app/includes/Client';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Client) { }

  ngOnInit() {
  }

}
