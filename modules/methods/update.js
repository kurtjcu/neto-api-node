const sharedModule = require('../../shared');


class UpdateModule {
    constructor(data) {
        this.data = [];
        return this.update(data);
    }

    update(data) {
        if (Array.isArray(data)) {
            for (let element of data) {
                this.data.push(element);
            }
        } else this.data.push(data);

        return this;
    }

    exec({ debug = false, action, schema }) {
        let body = {};
        body[schema] = this.data;
        let req = { action: action, body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


module.exports = UpdateModule;