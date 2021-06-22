import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
//import { MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Aqui agregar todos los import de los componentes de Material!

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule

  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule

  ]
})
export class MaterialModule { }
