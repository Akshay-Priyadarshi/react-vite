export class User {
  id: number
  name: string
  username: string
  email: string
  address: unknown
  phone: string
  website: string
  company: unknown

  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    address: unknown,
    phone: string,
    website: string,
    company: unknown,
  ) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this.address = address
    this.phone = phone
    this.website = website
    this.company = company
  }
}
