import { IResponseService } from "../interfaces/IResponseService";

export class ResponseService implements IResponseService {

  State: string;
  Message: string;
  ObjType: any;

  constructor(State: string, Message: string, ObjType: any) {
    this.State = State;
    this.Message = Message;
    this.ObjType = ObjType;
  }

}
