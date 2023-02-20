import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalstorageService {
    constructor() {}

    setItem(key: string, value: any, change = false) {
        if (change) {
            localStorage.setItem(key, JSON.stringify(value));
            return;
        }
        let old = this.getItem(key) ?? [];
        old.unshift(value);
        old = old.map((el: any) => {
            if (typeof el === 'string') {
                return el.toLowerCase().trim();
            }
            return;
        });
        const uniq = [...new Set(old)];
        localStorage.setItem(key, JSON.stringify(uniq));
    }

    getItem(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }
}
