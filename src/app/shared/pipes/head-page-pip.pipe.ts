import { Pipe, PipeTransform } from '@angular/core';
import { Homepage } from '../../core/Constants/stringConstants/homepageString';

@Pipe({
  name: 'headPagePip',
  standalone: true
})
export class HeadPagePipPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    return Homepage;
  }
  printPrevious() {

 }
}
