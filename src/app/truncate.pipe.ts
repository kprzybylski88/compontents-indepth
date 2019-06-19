import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let limit = 20;
    let trail = '...';
    if (args && args.length > 0) { limit = parseInt(args[0], 10); }
    if (args && args.length > 1) { trail = args[1]; }
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
