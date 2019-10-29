import { Rental } from './Rental';
import { Subscription } from './Subscription';

export class GenericUser {

    id: number;

    name: string;

    surname: string;

    username: string;

    email: string;

    role: string;

    password: string;

    inscriptionDate: Date;

    subscriptionList: Subscription[];

    rentalList: Rental[];
}
