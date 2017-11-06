import {CarComparismResult} from '../model/carComparismResult.model';
import {Car} from '../model/car.model';
import {CarAttribute} from '../constants/carAttribute.const';
import {CarComparismService} from './carComparism.service';
describe('CarComparismService', ()=> {
    let carService: CarComparismService;

    beforeEach (() => {
        carService = new CarComparismService();
    })

    it('can be initialized successfully', () => {
        expect(carService).toBeTruthy();
    });

    it('can returns all results', () => {
        let results = carService.GetCars();
        expect(results.length).toBe(3);
    });

    it('can be Calculate car price', () => {
        let car = new Car('Honda', 2015, CarAttribute.LowMileage)
        let price = carService.CalculatePrice(car)
        
    });
})