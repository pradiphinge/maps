/** @format */

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customGoogleMap = new CustomMap('custom-google-map');
customGoogleMap.addMarker(user);
customGoogleMap.addMarker(company);
