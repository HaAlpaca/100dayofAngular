import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adultChecking',
})
export class AdultCheckingPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.filter((item) => item.age >= 18);
  }
}
