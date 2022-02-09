import { RegisterVehicle } from "../controllers/register-vehicle";

describe('RegisterVehicle', () => {
    test('is the name does not exist return 400', () => {
        const sut = new RegisterVehicle();
        const httpRequest = {
            body: {
                // name: 'Nissan',
                model: 'DNT',
                color: 'black',
                year: 2020
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new Error('error in the: name'))
    })
    test('is the model does not exist return 400', () => {
        const sut = new RegisterVehicle();
        const httpRequest = {
            body: {
                name: 'Nissan',
                color: 'black',
                // model: 'DNT',
                year: 2020
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new Error('error in the: model'))
    })
    test('is the year does not exist return 400', () => {
        const sut = new RegisterVehicle();
        const httpRequest = {
            body: {
                name: 'Nissan',
                model: 'DNT',
                color: 'black'
                // year: 2020
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new Error('error in the: year'))
    })
    test('is the color does not exist return 400', () => {
        const sut = new RegisterVehicle();
        const httpRequest = {
            body: {
                name: 'Nissan',
                model: 'DNT',
                year: 2020,
                // color: 'black'
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new Error('error in the: color'))
    })
})