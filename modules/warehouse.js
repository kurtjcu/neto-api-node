const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddWarehouse extends AddModule {
    exec() {
        let body = {
            Warehouse: this.data
        };
        return sharedModule.postApi({ action: 'AddWarehouse', body: body });
    }
}


class GetWarehouse extends GetModule {
    exec() {
        return sharedModule.postApi({ action: 'GetWarehouse', body: this.body });
    }
}


class UpdateWarehouse extends UpdateModule {
    exec() {
        let body = {
            Warehouse: this.data
        };
        return sharedModule.postApi({ action: 'UpdateWarehouse', body: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddWarehouse(data);
    },
    get: (filter) => {
        return new GetWarehouse(filter);
    },
    update: (data) => {
        return new UpdateWarehouse(data);
    }
};