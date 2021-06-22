import { IParameter } from "../interfaces/IParameter";

export class Parameter implements IParameter {
  ID_PARAMETER: number;
  NAME_PARAMETER: string;
  VALUE_PARAMETER: string;
  DESCRIPTION_PARAMETER: string;
  TYPED: string;
  GROUP_PARAMETER: string;

  constructor(ID_PARAMETER: number,
    NAME_PARAMETER: string,
    VALUE_PARAMETER: string,
    DESCRIPTION_PARAMETER: string,
    TYPED: string,
    GROUP_PARAMETER: string) {
    this.ID_PARAMETER = ID_PARAMETER;
    this.NAME_PARAMETER = NAME_PARAMETER;
    this.VALUE_PARAMETER = VALUE_PARAMETER;
    this.DESCRIPTION_PARAMETER = DESCRIPTION_PARAMETER;
    this.TYPED = TYPED;
    this.GROUP_PARAMETER = GROUP_PARAMETER;
  }

}
