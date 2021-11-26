import HoverFixModule from '../hover-fix';
import SelectionModule from '../selection';

import Dragging from './Dragging';

import './DraggingStyles';

export default {
  __depends__: [
    HoverFixModule,
    SelectionModule,
  ],
  dragging: [ 'type', Dragging ],
};