
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Test } from 'src/app/models/Test';
import { ParameterService } from 'src/app/services/parameter.services';

import { Parameter } from './../../models/Parameter';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  lstParameter: Array<Parameter>;

  rForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private parameterWs: ParameterService,

  ) {

    this.rForm = fb.group({
      'idUser': ["",],
      'urlReturn': ["",],
      'idHeader': ["",],
      'idTurn': ["",],
      'documentType': ["",],
      'documentNumber': ["",],
      'account': ["",],
      'source': ["",],
      'min': ["",],
      'SuscriptionState': ["",],
      'ReasonState': ["",],
      'Customer': ["",],
      'OverDue': ["",],
      'PlaceID': ["",],
      'Type': ["",],
    });

    this.lstParameter = [new Parameter(0, '', '', '', '', '')];
  }

  ngOnInit(): void {

    this.loadParameters();

  }

  /**
   * Metodo creado para cargar los parametros en un array y que luego seran enviados al componente parameter para ser mostrados en pantalla
   * ! Se deben agregar todos los parametros que el sitio va a manejar
   */
  loadParameters() {

    this.lstParameter.length = 0;

    this.parameterWs.getParameterByNameWs('ReconnectionServices_Msg_Case_Generated').subscribe(param => this.lstParameter.push(param));
    this.parameterWs.getParameterByNameWs('ReconnectionServices_ChargeService').subscribe(param => this.lstParameter.push(param));
    //this.parameterWs.getParameterByNameWs('STATE_OK').subscribe(param => this.lstParameter.push(param));

  }

  /**
   * Metodo que llama al index del sitio
   * @param post Aqui llegan los valores de los inputs
   */
  onSubmitTest(post: Test) {
    console.log(post);
  }



}
