import { randomUUID, UUID } from 'node:crypto';

type UserProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class User {
  private _id: UUID;
  private readonly props: UserProps;

  private constructor(props: UserProps, id?: UUID) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  public static create(props: UserProps): User {
    return new User(props);
  }

  get id(): UUID {
    return this.id;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get firstName(): string {
    return this.props.firstName;
  }

  get lastName(): string {
    return this.props.lastName;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
