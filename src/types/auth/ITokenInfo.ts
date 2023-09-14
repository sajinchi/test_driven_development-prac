export interface ITokenInfo {
    accessToken: string;
    refreshToken: string;
    accessExpiresIn: number;
    refreshExpiresIn: number;
    userId: string;
    message: string;
}