import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from './Services/api.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  let loader = inject(ApiService);
  loader.startLoader();
  return next(req).pipe(
    finalize(() => {
      loader.stopLoader();
    })
  );
};
