import { FoodModel } from "../models/food-model";

describe("Classes", () => {
    it("Class FoodModel", () => {
        const foodModel = new FoodModel({
            name: "rise with chiken",
            description: "Description food",
            price: 15,
        });

        expect(foodModel.getName()).toEqual("rise with chiken");
        expect(foodModel.getDescription()).toEqual("Description food");
        expect(foodModel.getPrice()).toBe(15);
    })
})