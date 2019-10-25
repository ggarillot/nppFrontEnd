import { Localisation } from './Localisation';
import { PowerBank } from './PowerBank';

export class GenericStation {

    id: number;

    localisation: Localisation;

    nSlots: number;

    status: GenericStationStatus;

    powerBankList: PowerBank[];

}
