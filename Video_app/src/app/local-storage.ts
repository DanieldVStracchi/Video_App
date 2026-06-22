import { Service, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class LocalStorage {

  private isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // COLOCA VALORES EN EL LOCAL STORAGE
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // PARA CONSEGUIR VALORES DE LOCAL STORAGE
  getItem(key: string): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);

    }
    return null;
  }

  // QUITA VALORES DEL LOCAL STORAGE
  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  // VACÍA EL LOCAL STORAGE
  clear(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}