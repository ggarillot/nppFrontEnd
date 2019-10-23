import { GenericUser } from './GenericUser';

export class Subscription {

    id: number;

    beginDate: Date;

    endDate: Date;

    type: SubscriptionType;

    genericUser: GenericUser;

}