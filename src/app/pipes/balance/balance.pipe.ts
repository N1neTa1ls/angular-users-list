import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balance'
})
export class BalancePipe implements PipeTransform {

  transform(value: unknown): unknown {
    const val = Number(value);
    let result = '0';

    if (!isNaN(val)) {
      const parts = `${val.toFixed(1)}`.split('.');
      const stringArray = parts[0].split('').reverse();

      const middleResult = stringArray.map((item, ind) => {
        if (!(ind%3) && ind && ind + 1 !== stringArray.length) {
          return item + ' ';
        }

        return item;
      }).reverse().join('');

      result = [middleResult, parts[1]].join('.')
    }

    return result;
  }

}
