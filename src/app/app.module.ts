import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { } from './material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
//import { MatPaginator } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TestComponent } from './components/test/test.component';
import { ParameterComponent } from './components/parameter/parameter.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ParameterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    HttpClientModule,

    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
