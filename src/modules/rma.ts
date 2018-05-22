import { ExecOptions } from "../shared";
import AddModule = require("./methods/add");
import GetModule = require("./methods/get");
import UpdateModule = require("./methods/update");

export class AddRma extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddRma",
      schema: "Rma"
    });
  }
}

export class GetRma extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetRma"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddRma(data);
  },
  get: (filter: any) => {
    return new GetRma(filter);
  }
};
