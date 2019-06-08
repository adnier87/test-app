import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule
} from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './components/part1/part1.component';
import { Part2Component } from './components/part2/part2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule
  ],
  entryComponents: [
    ClientDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
