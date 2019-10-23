import { GenericStation } from './GenericStation';
import { Rental } from './Rental';

export class PowerBank {

    id: number;

    level: number;

    status: PowerBankStatus;

    rentalList: Rental[];

    GenericStation: GenericStation;
}