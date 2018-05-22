import { ExecOptions } from "../shared";
import AddModule = require("./methods/add");
import GetModule = require("./methods/get");
import UpdateModule = require("./methods/update");

export class AddOrder extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddOrder",
      schema: "Order"
    });
  }
}

export class GetOrder extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetOrder"
    });
  }
}

export class UpdateOrder extends UpdateModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateOrder",
      schema: "Order"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddOrder(data);
  },
  get: (filter: any) => {
    return new GetOrder(filter);
  },
  update: (data: any) => {
    return new UpdateOrder(data);
  }
};
