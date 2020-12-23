import { Injectable } from '@angular/core';
import {ScaleService} from '../scale/scale.service';
import {LaptopInterface} from '../../share/interfaces/laptop.interface';
import {laptops} from './constants/laptops.const';
import {ScaleInterface} from '../../share/interfaces/scale.interface';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  public laptops: LaptopInterface[] = laptops;

  constructor(private scaleService: ScaleService) { }

  public getLaptopsSortedByScale(): LaptopInterface[] {
    const minScale: ScaleInterface = {
      price: 40000,
      processor: 3,
      coresAmount: 2,
      frequency: 1.5,
      memorySpace: 256,
      inch: 13,
      videoMemory: 2,
      ram: 4,
      weight: 1,
      workTime: 7,
    };

    const maxScale: ScaleInterface = {
      price: 400000,
      processor: 9,
      coresAmount: 6,
      frequency: 3.5,
      memorySpace: 2000,
      inch: 18,
      videoMemory: 8,
      ram: 64,
      weight: 2,
      workTime: 12,
    };

    const normalizedScale: ScaleInterface = this.scaleService.getNormalizedScale();

    const normalizedLaptops = this.laptops.map(item => {
      const handledLaptop: LaptopInterface = {
        ...item,
        scale: {
          price: (maxScale.price - item.scale.price) / (maxScale.price - minScale.price),
          processor: (maxScale.processor - item.scale.processor) / (maxScale.processor - minScale.processor),
          coresAmount: (maxScale.coresAmount - item.scale.coresAmount) / (maxScale.coresAmount - minScale.coresAmount),
          frequency: (maxScale.frequency - item.scale.frequency) / (maxScale.frequency - minScale.frequency),
          memorySpace: (maxScale.memorySpace - item.scale.memorySpace) / (maxScale.memorySpace - minScale.memorySpace),
          inch: (maxScale.inch - item.scale.inch) / (maxScale.inch - minScale.inch),
          videoMemory: (maxScale.videoMemory - item.scale.videoMemory) / (maxScale.videoMemory - minScale.videoMemory),
          ram: (maxScale.ram - item.scale.ram) / (maxScale.ram - minScale.ram),
          weight: (maxScale.weight - item.scale.weight) / (maxScale.weight - minScale.weight),
          workTime: (maxScale.workTime - item.scale.workTime) / (maxScale.workTime - minScale.workTime),
        },
      };

      handledLaptop.globalCriteria = Object.entries(handledLaptop.scale).reduce((sum, [key, value]) => {
        return sum + handledLaptop.scale[key] * normalizedScale[key];
      }, 0);

      return handledLaptop;
    });

    const sortedLaptops: LaptopInterface[] = normalizedLaptops.sort((a, b) => {
      return a.globalCriteria - b.globalCriteria;
    });

    return sortedLaptops;
  }
}
