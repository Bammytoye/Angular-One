import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const studentGuardGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router)
  let user = JSON.parse(localStorage.getItem('currentuser')!)
  
  if (!user) {
    routes.navigate(['/signin'])
  }

  return true;
};
