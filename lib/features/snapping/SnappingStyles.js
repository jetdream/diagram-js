import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * snapping
 */
 .djs-snap-line {
  stroke: var(--snap-line-stroke-color);
  stroke-linecap: round;
  stroke-width: 2px;
  pointer-events: none;
}

/**
 * snapping
 */
.djs-crosshair {
  stroke: var(--space-tool-crosshair-stroke-color);
  stroke-linecap: round;
  stroke-width: 1px;
  pointer-events: none;
  shape-rendering: crispEdges;
  stroke-dasharray: 5, 5;
}`;

includeStyles(styles);