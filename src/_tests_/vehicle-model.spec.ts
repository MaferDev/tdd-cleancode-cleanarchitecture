import { VehicleModel } from "../models/vehicle-model";

describe("Classes", () => {
    it("Class VehicleModel", () => {
        const vehicleModel = new VehicleModel({
            name: "Nissan",
            model: 'DNT',
            year: 2022,
            price: 1000,
            inventory: true
        });

        expect(vehicleModel.getName()).toEqual("Nissan");
        expect(vehicleModel.getModel()).toEqual("DNT");
        expect(vehicleModel.getYear()).toBe(2022);
        expect(vehicleModel.getPrice()).toEqual(1000);
        expect(vehicleModel.getInventory()).toEqual(true);
    })
})