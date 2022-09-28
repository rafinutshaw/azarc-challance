export class TokenModel {
    idToken!: string;
    id!: string;
    name!: string;
    email!: string;
    photoUrl!: string;
    firstName!: string;
    lastName!: string;
    provider!: string;
    
    public constructor(init?: Partial<TokenModel>) {
        Object.assign(this, init);
    }
}