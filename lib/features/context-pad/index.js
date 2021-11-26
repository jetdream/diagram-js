import InteractionEventsModule from '../interaction-events';
import OverlaysModule from '../overlays';

import ContextPad from './ContextPad';

import './ContextPadStyles';

export default {
  __depends__: [
    InteractionEventsModule,
    OverlaysModule
  ],
  contextPad: [ 'type', ContextPad ]
};