import { Localisation } from './Localisation';
import { PowerBank } from './PowerBank';

export class GenericStation {

    id: number;

    localisation: Localisation;

    nslots: number;

    status: GenericStationStatus;

    powerBankList: PowerBank[];

}