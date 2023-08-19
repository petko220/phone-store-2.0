import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StateManagementService } from "../services/state-management.service";


Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

    constructor(private state: StateManagementService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        return this.state.isLogged;
    }
}