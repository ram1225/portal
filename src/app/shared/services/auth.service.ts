import { Injectable } from "@angular/core";

/* This service is for authentication */
@Injectable()
export class AuthService {
    constructor(){

    }

    isLoggedIn(): boolean {
          return false;
      }
}