import { trigger, state, transition, style, animate} from '@angular/animations';

export const ItemAnim = trigger('item',[
    state('out', style({ 'border-left-width': '3px' })),
    state('in', style({ 'border-left-width': '8px' })),
    transition('out=>hover', animate('100ms ease-in')),
    transition('hover=>out', animate('100ms ease-out'))
]);