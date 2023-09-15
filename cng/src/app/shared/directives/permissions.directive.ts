import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Directive({
    selector: '[appPermissions]',
    standalone: true
})
export class PermissionsDirective {

  @Input('appPermissions') allowedRole!: string;
  private _subscription!: Subscription;
  constructor(private _auth: AuthService, private _vcr: ViewContainerRef, private _templateRef: TemplateRef<any>) { 

    this._subscription = this._auth.isLoggedIn$.subscribe(isLoggedIn => {
      this._vcr.clear();
      if(isLoggedIn && this._auth.userRole === this.allowedRole) {
        this._vcr.createEmbeddedView(this._templateRef)
      }
    })    
  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }

}
