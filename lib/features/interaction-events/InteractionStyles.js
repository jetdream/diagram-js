import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * no pointer events for visual
*/
.djs-visual,
.djs-outline {
 pointer-events: none;
}

.djs-element.attach-ok .djs-hit {
 stroke-width: 60px !important;
}

/**
* all pointer events for hit shape
*/
.djs-element > .djs-hit-all {
 pointer-events: all;
}

.djs-element > .djs-hit-stroke,
.djs-element > .djs-hit-click-stroke {
 pointer-events: stroke;
}

/**
* all pointer events for hit shape
*/
.djs-drag-active .djs-element > .djs-hit-click-stroke {
 pointer-events: all;
}`;

includeStyles(styles);
