export class Localisation {

    latitude: number;

    longitude: number;

    public static toArray(loc: Localisation): number[] {
        const array = [];
        array[0] = loc.longitude;
        array[1] = loc.latitude;
        return array;
    }
    public static fromArray(array: number[]): Localisation {
        const loc = new Localisation();
        loc.longitude = array[0];
        loc.latitude = array[1];
        return loc;
    }

    public static betweenTwoPoints(a: Localisation, b: Localisation) {
        const loc = new Localisation();
        loc.latitude = 0.5 * (a.latitude + b.latitude);
        loc.longitude = 0.5 * (a.longitude + b.longitude);
        return loc;
    }
}
