import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date(); 
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value)// returns value in milliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1 && value < todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
