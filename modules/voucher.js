const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddVoucher extends AddModule {
    exec() {
        let body = {
            Voucher: this.data
        };
        return sharedModule.postApi({ action: 'AddVoucher', body: body });
    }
}


class GetVoucher extends GetModule {
    exec() {
        return sharedModule.postApi({ action: 'GetVoucher', body: this.body });
    }
}


class UpdateVoucher extends UpdateModule {
    exec() {
        let body = {
            Voucher: this.data
        };
        return sharedModule.postApi({ action: 'UpdateVoucher', body: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddVoucher(data);
    },
    get: (filter) => {
        return new GetVoucher(filter);
    },
    update: (data) => {
        return new UpdateVoucher(data);
    }
};