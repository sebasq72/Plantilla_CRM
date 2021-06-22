import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Parameter } from 'src/app/models/Parameter';

import { ParameterService } from 'src/app/services/parameter.services';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  rForm = new FormGroup({});

  @Input() parameter: Parameter;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private parameterWs: ParameterService,
    private _snackBar: MatSnackBar
  ) {

    this.parameter = new Parameter(0, '', '', '', '', '');

  }

  ngOnInit(): void {

    this.rForm = new FormGroup({
      ID_PARAMETER: new FormControl(this.parameter.ID_PARAMETER,),
      NAME_PARAMETER: new FormControl(this.parameter.NAME_PARAMETER,),
      DESCRIPTION_PARAMETER: new FormControl(this.parameter.DESCRIPTION_PARAMETER,),
      TYPED: new FormControl(this.parameter.TYPED,),
      VALUE_PARAMETER: new FormControl(this.parameter.VALUE_PARAMETER,),
    });

  }

  /**
   * Metodo para actualizar parametro
   * @param post objeto parametro para actualizar
   */
  onSubmitParameter(post: Parameter) {
    console.log(post);

    this.parameterWs.updateParameter(post.ID_PARAMETER, post).subscribe(
      data => {
        
        this.openSnackBar(data.Message, data.State);
        this.router.navigate(["/Home/Test"]);
      },
      err => {
        this.openSnackBar('Error actualizado el registro. ' + err, 'Error');
      }
    );


  }

  /**
   * Metodo para mostrar mensajes en pantalla
   * @param message
   * @param action
   */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      //horizontalPosition: 'right',
      //verticalPosition: 'top',
      panelClass: (["snack-success"])
    });
  }



}
