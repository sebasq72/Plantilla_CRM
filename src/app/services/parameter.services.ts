import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseService } from './../models/ResponseService';
import { Parameter } from './../models/Parameter';

import { IParameter } from '../interfaces/IParameter';
import { IResponseService } from '../interfaces/IResponseService';

@Injectable({
  providedIn: 'root'
})

/**
 * Clase creada para consumir los servicios de parametros
 */
export class ParameterService {

  constructor(private http: HttpClient) {
  }

  getParameterByNameWs(name: string): Observable<Parameter> {
    return this.http.post<IParameter>(`/api/Parameter?name=${name}`, null);
  }

  updateParameter(id: number, parameter: Parameter): Observable<ResponseService> {
    return this.http.post<IResponseService>(`/api/Parameter/UpdatePARAMETER?id=${id}`, parameter);
  }

}
