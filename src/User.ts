/** @format */
import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	name: string;
	location: {
		latitude: number;
		longitude: number;
	};
	constructor() {
		this.name = faker.name.firstName('female');
		this.location = {
			latitude: parseFloat(faker.address.latitude()),
			longitude: parseFloat(faker.address.longitude()),
		};
	}
	markerContent(): string {
		return `
			<h1>${this.name}</h1>
			<p>I live here!</p>
		`;
	}
}
