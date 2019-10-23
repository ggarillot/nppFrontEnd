import { GenericUser } from './GenericUser';
import { PowerBank } from './PowerBank';

export class Rental {

    id: number;

    beginDate: Date;

    limitDate: Date;

    endDate: Date;

    wasFaulty: boolean;

    genericUser: GenericUser;

    powerBank: PowerBank;

}
