import { trigger, state, transition, style, animate, group} from '@angular/animations';

export const sliceToRight= trigger('routerAnims',[
    state('void',style({position:'fixed',width:'100%',height:'80%'})),
    state('*',style({position:'fixed',width:'100%',height:'80%'})),
    transition(':enter',[
        style({transform:'translateX(-100%)', opacity:0}),
        group([
            animate('.5s ease-in-out', style({transform:'translateX(0)'})),
            animate('1s ease-in', style({opacity:1 }))
        ])
    ]),
    transition(':leave',[
        style({transform:'translateX(0)'}),
        group([
            animate('.5s ease-in-out', style({transform:'translateX(100%)'})),
            animate('1s ease-out', style({opacity:0 }))
        ])
    ])
]);