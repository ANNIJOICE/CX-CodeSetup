import { Injectable } from '@angular/core';
import { Environment } from '@calib-exchange/types';

export let environment: Environment = {
  production: false,
  apiBase: 'http://localhost:3000/api'
};

@Injectable({
  providedIn: 'root'
})
export class EnvironmentServices {
  setEnvironment(env: Environment): void {
    environment = env;
  }

  getEnvironment(): Environment {
    return environment;
  }
}
