import { Observable, of } from "rxjs";

export class ActivatedRouteStub {
    params?: Observable<any> = of();
}