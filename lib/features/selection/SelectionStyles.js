import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
* Selection box style
*
*/
.djs-lasso-overlay {
  fill: var(--lasso-fill-color);

  stroke-dasharray: 5 1 3 1;
  stroke: var(--lasso-stroke-color);

  shape-rendering: geometricPrecision;
  pointer-events: none;
}`;

includeStyles(styles);