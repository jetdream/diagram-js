import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * bendpoints
 */
 .djs-segment-dragger .djs-visual {
  display: none;

  fill: var(--bendpoint-fill-color);
  stroke: var(--bendpoint-stroke-color);
  stroke-width: 1px;
  stroke-opacity: 1;
}

.djs-segment-dragger:hover .djs-visual {
  display: block;
}

.djs-bendpoint .djs-visual {
  fill: var(--bendpoint-fill-color);
  stroke: var(--bendpoint-stroke-color);
  stroke-width: 1px;
  stroke-opacity: 0.5;
}

.djs-segment-dragger:hover,
.djs-bendpoints.hover .djs-segment-dragger,
.djs-bendpoints.selected .djs-segment-dragger,
.djs-bendpoint:hover,
.djs-bendpoints.hover .djs-bendpoint,
.djs-bendpoints.selected .djs-bendpoint {
  display: block;
}

.djs-drag-active .djs-bendpoints * {
  display: none;
}

.djs-bendpoints:not(.hover) .floating {
  display: none;
}

.djs-segment-dragger:hover .djs-visual,
.djs-segment-dragger.djs-dragging .djs-visual,
.djs-bendpoint:hover .djs-visual,
.djs-bendpoint.floating .djs-visual {
  fill: var(--bendpoint-fill-color);
  stroke: var(--bendpoint-stroke-color);
  stroke-opacity: 1;
}

.djs-bendpoint.floating .djs-hit {
  pointer-events: none;
}

.djs-segment-dragger .djs-hit,
.djs-bendpoint .djs-hit {
  fill: none;
  pointer-events: all;
}

.djs-segment-dragger.horizontal .djs-hit {
  cursor: ns-resize;
}

.djs-segment-dragger.vertical .djs-hit {
  cursor: ew-resize;
}

.djs-segment-dragger.djs-dragging .djs-hit {
  pointer-events: none;
}

.djs-updating,
.djs-updating > * {
  pointer-events: none !important;
}

.djs-updating .djs-context-pad,
.djs-updating .djs-outline,
.djs-updating .djs-bendpoint,
.connect-ok .djs-bendpoint,
.connect-not-ok .djs-bendpoint,
.drop-ok .djs-bendpoint,
.drop-not-ok .djs-bendpoint {
  display: none !important;
}

.djs-segment-dragger.djs-dragging,
.djs-bendpoint.djs-dragging {
  display: block;
  opacity: 1.0;
}`;

includeStyles(styles);