import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {

  transform(value: any, fallback = '-'): string {
    return value || fallback;
  }

}
