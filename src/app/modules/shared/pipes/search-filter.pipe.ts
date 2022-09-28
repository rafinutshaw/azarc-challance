import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../../auth/models/user.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: UserModel) => {
      let rVal = (val.firstName.toLowerCase() + ' ' + val.lastName.toLowerCase()).indexOf(args.toLowerCase());
      return rVal != -1;
    })

  }

}
