/*
 * step response after a start or next process
 * @interface
 */
export interface Token{
    access_token: String;
    expires_in: number;
    refresh_token: String;
    session_state: String;
    token_type: String
}