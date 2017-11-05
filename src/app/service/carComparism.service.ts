import {CarComparismResult} from '../model/carComparismResult.model';
import {Car} from '../model/car.model';
import {CarAttribute} from '../constants/carAttribute.const';

export class CarComparismService {
    
    results: CarComparismResult[];
    cars: Car[];
    constructor (){
        this.cars = [
            new Car('Honda', 2015, CarAttribute.LowMileage),
            new Car('GMC', 1996, CarAttribute.SportPackage),
            new Car('Toyota', 2001, CarAttribute.Basicmodel)

        ]
    }

    GetCars(): CarComparismResult[] {
        this.results = [];
                
        this.cars.forEach(car => {
            let result = this.CalculatePrice(car)
            this.results.push(result)
        });

        return this.results;
    }

    CalculatePrice(car: Car) {
        let price = 0;
        let currentDate = 2017;
        let carAge = currentDate - car.Year;
        let pricePercentage = this.GetAttribute(car);

        if(car.Name == 'Honda' || car.Name == 'Toyota') {
            let basepri
            price = (20000 - (1000 * carAge)) * pricePercentage;
        }

        else {
            price = (20000 - (1500*carAge)) * pricePercentage;
        }

        if (price < 0) {
            price = 0;
        }

        return new CarComparismResult(car.Name, price);
    }

    GetAttribute(car: Car) {
        let percent = 0;
        if (car.Attribute == CarAttribute.LowMileage) {
            percent = 1.04;
        }

        else if(car.Attribute == CarAttribute.Basicmodel) {
            percent = 0.95;
        }

        else if(car.Attribute == CarAttribute.FourWheelDrive) {
            percent = 1.15;
        }

        else {
            percent = 1.06;
        }

        return percent;
    };
}