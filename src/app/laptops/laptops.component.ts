import {Component, Input} from '@angular/core';
import {LaptopInterface} from '../share/interfaces/laptop.interface';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent {
  @Input() public laptops: LaptopInterface[] = [];
}
