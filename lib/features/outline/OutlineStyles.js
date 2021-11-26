import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
* outline styles
*/

.djs-outline {
 fill: none;
 visibility: hidden;
}

.djs-element.hover .djs-outline,
.djs-element.selected .djs-outline {
 visibility: visible;
 shape-rendering: geometricPrecision;
 stroke-dasharray: 3,3;
}

.djs-element.selected .djs-outline {
 stroke: var(--element-selected-outline-stroke-color);
 stroke-width: 1px;
}

.djs-element.hover .djs-outline {
 stroke: var(--element-hover-outline-fill-color);
 stroke-width: 1px;
}

.djs-shape.connect-ok .djs-visual > :nth-child(1) {
 fill: var(--shape-connect-allowed-fill-color) !important;
}

.djs-shape.connect-not-ok .djs-visual > :nth-child(1),
.djs-shape.drop-not-ok .djs-visual > :nth-child(1) {
 fill: var(--shape-drop-not-allowed-fill-color) !important;
}

.djs-shape.new-parent .djs-visual > :nth-child(1) {
 fill: var(--shape-drop-allowed-fill-color) !important;
}

svg.drop-not-ok {
 background: var(--shape-drop-not-allowed-fill-color) !important;
}

svg.new-parent {
 background: var(--shape-drop-allowed-fill-color) !important;
}

.djs-connection.connect-ok .djs-visual > :nth-child(1),
.djs-connection.drop-ok .djs-visual > :nth-child(1) {
 stroke: var(--shape-drop-allowed-fill-color) !important;
}

.djs-connection.connect-not-ok .djs-visual > :nth-child(1),
.djs-connection.drop-not-ok .djs-visual > :nth-child(1) {
 stroke: var(--shape-drop-not-allowed-fill-color) !important;
}

.drop-not-ok,
.connect-not-ok {
 cursor: not-allowed;
}

.djs-element.attach-ok .djs-visual > :nth-child(1) {
 stroke-width: 5px !important;
 stroke: var(--shape-attach-allowed-stroke-color) !important;
}

.djs-frame.connect-not-ok .djs-visual > :nth-child(1),
.djs-frame.drop-not-ok .djs-visual > :nth-child(1) {
 stroke-width: 3px !important;
 stroke: var(--shape-drop-not-allowed-fill-color) !important;
 fill: none !important;
}`;

includeStyles(styles);