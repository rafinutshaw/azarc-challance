export class UserModel {
    id!: string;
    photoUrl!: string;
    firstName!: string;
    lastName!: string;
    residentialAddress!: string;
    officeAddress!: string;
    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}