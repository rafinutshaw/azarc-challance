import { TokenModel } from "../models/token.model";
import { UserModel } from "../models/user.model";

export class AuthHelper {
    public static setToken(token: TokenModel) {
        localStorage.setItem('auth_token', JSON.stringify(token));
    }

    public static setUserInfo(userModel: UserModel) {
        localStorage.setItem('user_info', JSON.stringify(userModel));
    }
    public static getUserInfo(): UserModel {
        const userInfo = localStorage.getItem('user_info');
        return userInfo ? JSON.parse(userInfo) : null;
    }

    public static getToken(): TokenModel {
        const token = localStorage.getItem('auth_token');
        return token ? JSON.parse(token) : null;
    }

    public static getLoggedInUserId(): string {
        const token = localStorage.getItem('auth_token');
        return token ? JSON.parse(token).id : null;
    }

    public static clearToken(): void {
        localStorage.setItem('auth_token', '');
    }

    public static isAuthenticated() {
        const token = this.getToken();
        if (!token) {
            return false;
        }
        return true
    }
}