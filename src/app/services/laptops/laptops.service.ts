import { Injectable } from '@angular/core';
import {ScaleService} from '../scale/scale.service';
import {LaptopInterface} from '../../share/interfaces/laptop.interface';
import {laptops} from './constants/laptops.const';
import {ScaleItemInterface} from '../../share/interfaces/scale-item.interface';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  public laptops: LaptopInterface[] = laptops;

  constructor(private scaleService: ScaleService) { }

  public getLaptopsSortedByScale(): LaptopInterface[] {
    const mostValuableScale: ScaleItemInterface = this.scaleService.getMostValuableScale();

    const sortedLaptops: LaptopInterface[] = this.laptops.sort((a, b) => {
      return b.scale[mostValuableScale.key] - a.scale[mostValuableScale.key];
    });

    return sortedLaptops;
  }
}
