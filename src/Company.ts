/** @format */

import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
	name: string;
	catchPhrase: string;
	location: {
		latitude: number;
		longitude: number;
	};
	constructor() {
		this.name = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			latitude: +faker.address.latitude(),
			longitude: +faker.address.longitude(),
		};
	}
	markerContent(): string {
		return `
			<h1>${this.name}</h1>
			<p>${this.catchPhrase}</p>
		`;
	}
}
