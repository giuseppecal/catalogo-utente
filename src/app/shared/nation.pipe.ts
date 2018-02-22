import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nationality'
})
export class NationPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        var nation;
        switch (value) {
            case 'GB':
                nation = 'England'
                break;
            case 'DE':
                nation = 'German'
                break;
            case 'FR':
                nation = 'France'
                break;
            case 'CH':
                nation = 'Switzerland'
                break;
            case 'ES':
                nation = 'Spain'
                break;
            default:
                nation = '-'
                break;
        }
        return nation;
    }
}