import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * drag styles
 */
 .djs-dragger * {
  fill: none !important;
  stroke: var(--element-dragger-color) !important;
}

.djs-dragger tspan,
.djs-dragger text {
  fill: var(--element-dragger-color) !important;
  stroke: none !important;
}

marker.djs-dragger circle,
marker.djs-dragger path,
marker.djs-dragger polygon,
marker.djs-dragger polyline,
marker.djs-dragger rect {
  fill: var(--element-dragger-color) !important;
  stroke: none !important;
}

marker.djs-dragger text,
marker.djs-dragger tspan {
  fill: none !important;
  stroke: var(--element-dragger-color) !important;
}

.djs-dragging {
  opacity: 0.3;
}

.djs-dragging,
.djs-dragging > * {
  pointer-events: none !important;
}

.djs-dragging .djs-context-pad,
.djs-dragging .djs-outline {
  display: none !important;
}`;

includeStyles(styles);
