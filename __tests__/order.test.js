const Joi = require('Joi');
const { setup } = require('./main.test.js');


let api;
beforeAll(function() {
    api = setup();
});


describe('order', function() {

    describe('.add()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.order
                    .add({ Name: 'test' })
                    .add([{ Name: 'test2' }, { Name: 'test3' }])
                    .add({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.order.add().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('AddOrder').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Order: Joi.array().required().length(4).items(
                        Joi.object().required().keys({
                            Name: Joi.string().required()
                        })
                    )
                };
                Joi.assert(req.body, schema);
            });

        })

    });

    describe('.get()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.order
                    .get({
                        ID: 'test'
                    })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.order.get().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetOrder').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Filter: {
                        ID: Joi.string().valid('test').required(),
                        OutputSelector: Joi.array().required().items(
                            Joi.string().valid('test1').required(),
                            Joi.string().valid('test2').required()
                        )
                    }
                };
                Joi.assert(req.body, schema);
            });

        });

    });

    describe('.update()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.order
                    .update({ Name: 'test' })
                    .update([{ Name: 'test2' }, { Name: 'test3' }])
                    .update({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.order.update().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateOrder').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Order: Joi.array().required().length(4).items(
                        Joi.object().required().keys({
                            Name: Joi.string().required()
                        })
                    )
                };
                Joi.assert(req.body, schema);
            });

        })

    });

});
