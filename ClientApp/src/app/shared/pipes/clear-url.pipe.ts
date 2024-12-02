import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearURL'
})
export class ClearURLPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace("menu.", "/").replace(".","/");
  }

}
