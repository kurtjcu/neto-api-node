import sharedModule = require("../shared");
import AddModule = require("./methods/add");
import GetModule = require("./methods/get");
import UpdateModule = require("./methods/update");

export class AddCustomer extends AddModule {
  public exec(params: sharedModule.ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddCustomer",
      schema: "Customer"
    });
  }
}

export class GetCustomer extends GetModule {
  public exec(params: sharedModule.ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetCustomer"
    });
  }
}

export class UpdateCustomer extends UpdateModule {
  public exec(params: sharedModule.ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateCustomer",
      schema: "Customer"
    });
  }
}

export class AddCustomerLog {
  private addModule: any;

  constructor(data: any) {
    this.addModule = new AddModule(data);
    return this;
  }

  public addLog(data: any) {
    this.addModule.add(data);
    return this;
  }

  public exec({ debug = false }: sharedModule.ExecOptions = {}) {
    let body = {
      CustomerLogs: {
        CustomerLog: this.addModule.data
      }
    };
    let req = { action: "AddCustomerLog", body: body };

    if (debug) return req;
    return sharedModule.postApi(req);
  }
}

export class UpdateCustomerLog {
  private updateModule: any;

  constructor(data: any) {
    this.updateModule = new UpdateModule(data);
    return this;
  }

  public updateLog(data: any) {
    this.updateModule.update(data);
    return this;
  }

  public exec({ debug = false }: sharedModule.ExecOptions = {}) {
    let body = {
      CustomerLogs: {
        CustomerLog: this.updateModule.data
      }
    };
    let req = { action: "UpdateCustomerLog", body: body };

    if (debug) return req;
    return sharedModule.postApi(req);
  }
}

export const methods = {
  add: (data: any) => {
    return new AddCustomer(data);
  },
  get: (filter: any) => {
    return new GetCustomer(filter);
  },
  update: (data: any) => {
    return new UpdateCustomer(data);
  },
  addLog: (data: any) => {
    return new AddCustomerLog(data);
  },
  updateLog: (data: any) => {
    return new UpdateCustomerLog(data);
  }
};
