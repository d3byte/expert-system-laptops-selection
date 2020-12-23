import { Injectable } from '@angular/core';
import {ScaleInterface} from '../../share/interfaces/scale.interface';
import {BehaviorSubject} from 'rxjs';
import {ScaleItemInterface} from '../../share/interfaces/scale-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  public userScale$: BehaviorSubject<ScaleInterface> = new BehaviorSubject({
    price: 0,
    processor: 0,
    coresAmount: 0,
    frequency: 0,
    memorySpace: 0,
    inch: 0,
    videoMemory: 0,
    ram: 0,
    weight: 0,
    workTime: 0,
  });

  public getNormalizedScale(): ScaleInterface {
    const sum: number = Object.values(this.userScale$.value).reduce((acc, currentVal) => acc + currentVal, 0);

    const normalizedScale: ScaleInterface = {} as any;

    Object.entries(this.userScale$.value).forEach(([key, value]: [keyof ScaleInterface, number]) => {
      normalizedScale[key] = value / sum;
    });

    return normalizedScale;
  }

  public patchUserScale(key: keyof ScaleInterface, value: number): void {
    this.userScale$.next({
      ...this.userScale$.value,
      [key]: value,
    });
  }

  public putUserScale(scale: ScaleInterface): void {
    this.userScale$.next(scale);
  }
}
