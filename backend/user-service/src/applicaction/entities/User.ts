import { randomUUID } from 'node:crypto';

interface UserProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }
  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.props.password = password;
  }

  get firstName(): string {
    return this.props.firstName;
  }
  set firstName(firstName: string) {
    this.props.firstName = firstName;
  }

  get lastName(): string {
    return this.props.lastName;
  }
  set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
