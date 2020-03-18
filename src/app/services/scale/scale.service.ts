import { Injectable } from '@angular/core';
import {ScaleInterface} from '../../share/interfaces/scale.interface';
import {BehaviorSubject} from 'rxjs';
import {ScaleItemInterface} from '../../share/interfaces/scale-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  public userScale$: BehaviorSubject<ScaleInterface> = new BehaviorSubject({
    energyEfficiency: 0,
    mobility: 0,
    performance: 0,
    gaming: 0,
    ergonomics: 0,
  });

  public getMostValuableScale(): ScaleItemInterface {
    let mostValuableScale: ScaleItemInterface;
    let maxValue = -1;

    Object.entries(this.userScale$.value).forEach(([key, value]: [keyof ScaleInterface, number]) => {
      if (value > maxValue) {
        maxValue = value;
        mostValuableScale = { key, value };
      }
    });

    return mostValuableScale;
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
