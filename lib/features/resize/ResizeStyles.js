import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * Resize styles
 */
 .djs-resize-overlay {
  fill: none;

  stroke-dasharray: 5 1 3 1;
  stroke: var(--shape-resize-preview-stroke-color);

  pointer-events: none;
}

.djs-resizer-hit {
  fill: none;
  pointer-events: all;
}

.djs-resizer-visual {
  fill: var(--resizer-fill-color);
  stroke-width: 1px;
  stroke-opacity: 0.5;
  stroke: var(--resizer-stroke-color);
  shape-rendering: geometricprecision;
}

.djs-resizer:hover .djs-resizer-visual {
  stroke: var(--resizer-stroke-color);
  stroke-opacity: 1;
}

.djs-cursor-resize-ns,
.djs-resizer-n,
.djs-resizer-s {
  cursor: ns-resize;
}

.djs-cursor-resize-ew,
.djs-resizer-e,
.djs-resizer-w {
  cursor: ew-resize;
}

.djs-cursor-resize-nwse,
.djs-resizer-nw,
.djs-resizer-se {
  cursor: nwse-resize;
}

.djs-cursor-resize-nesw,
.djs-resizer-ne,
.djs-resizer-sw {
  cursor: nesw-resize;
}

.djs-shape.djs-resizing > .djs-outline {
  visibility: hidden !important;
}

.djs-shape.djs-resizing > .djs-resizer {
  visibility: hidden;
}

.djs-dragger > .djs-resizer {
  visibility: hidden;
}

/**
 * shape / connection basic styles
 */
 .djs-connection .djs-visual {
  stroke-width: 2px;
  fill: none;
}

.djs-cursor-grab {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}

.djs-cursor-grabbing {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

.djs-cursor-crosshair {
  cursor: crosshair;
}

.djs-cursor-move {
  cursor: move;
}

.djs-cursor-resize-ns {
  cursor: ns-resize;
}

.djs-cursor-resize-ew {
  cursor: ew-resize;
}
`;

includeStyles(styles);
