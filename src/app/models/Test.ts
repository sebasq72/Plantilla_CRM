import { ITest } from "../interfaces/ITest";

export class Test implements ITest {

  idUser: string;
  urlReturn: string;
  idHeader: string;
  idTurn: string;
  documentType: string;
  documentNumber: string;
  account: string;
  source: string;
  min: string;
  SuscriptionState: string;
  ReasonState: string;
  Customer: string;
  OverDue: string;
  PlaceID: string;
  Type: string;
  originSource: string;

  constructor(
    idUser: string,
    urlReturn: string,
    idHeader: string,
    idTurn: string,
    documentType: string,
    documentNumber: string,
    account: string,
    source: string,
    min: string,
    SuscriptionState: string,
    ReasonState: string,
    Customer: string,
    OverDue: string,
    PlaceID: string,
    Type: string,
    originSource: string
  ) {
    this.idUser = idUser;
    this.urlReturn = urlReturn;
    this.idHeader = idHeader;
    this.idTurn = idTurn;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.account = account;
    this.source = source;
    this.min = min;
    this.SuscriptionState = SuscriptionState;
    this.ReasonState = ReasonState;
    this.Customer = Customer;
    this.OverDue = OverDue;
    this.PlaceID = PlaceID;
    this.Type = Type;
    this.originSource = originSource;
  }

}
