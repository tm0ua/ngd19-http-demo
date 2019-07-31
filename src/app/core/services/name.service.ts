import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
  orders = [];
  constructor() { }

  getName(name: string): string {
    return `Hello Angular ${name}`;
  }

}