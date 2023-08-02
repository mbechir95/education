import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(objs: any, x: string) {
    if (x === undefined) {
      return objs;
    }
    return objs.filter((obj) => {
      return (
        // obj.firstName.toLowerCase().includes(x.toLowerCase()) ||
        obj.speciality.toLowerCase().includes(x.toLowerCase())
      );
    });
  }

}
