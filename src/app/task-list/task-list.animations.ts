import {
  trigger,
  keyframes,
  transition,
  query,
  animate,
  style,
  group,
  animateChild,
  stagger,
  state
} from '@angular/animations';

const animationsList = [
  trigger('listAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      animate(500, style({ opacity: 1, transform: 'translateY(0px)' }))
    ]),
      transition(':leave', [
          style({ opacity: 1 }),
          animate(500, style({ opacity: 0 }))
      ])
  ])
];

export { animationsList };
