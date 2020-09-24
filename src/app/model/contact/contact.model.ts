/**
 * Contact Modal
 *
 * Applying fields required by our business logic
 */
export class Contact {
  constructor(
    public id: number = 0,
    public name: string,
    public address: string,
    public email: string,
    public phone: number
  ) {}
}

export const contactSeed = [
  {
    id: 0,
    name: 'John Doe',
    address: '123 The Street, Lehi',
    email: 'john.doe@email.com',
    phone: 5551231122,
  },
  new Contact(
    1,
    'Ron Swanson',
    '123 Rich hood, City',
    'david.n@email.com',
    5551231133
  ),
  new Contact(
    2,
    'Jim Halpert',
    '123 His Street, City',
    'jim.halpert@dundermifflin.com',
    5551231144
  ),
  new Contact(
    3,
    'Tom Haverford',
    '123 Fancy Place, City',
    't.haverford@parksdpt.com',
    5551231133
  ),
  new Contact(
    4,
    'Clauber Oliveira',
    '123 My Street, My City',
    'clauber@email.com',
    5551231111
  ),
];
