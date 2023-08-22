import { Injectable } from '@angular/core';
import { Environment } from '@calib-exchange/types';

export let environment: Environment = {
  production: true,
  apiBase: 'https://testin.terax.in/api'
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
