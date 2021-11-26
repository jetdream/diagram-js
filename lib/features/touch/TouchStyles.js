import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * touch
 */

 .djs-shape,
.djs-connection {
  touch-action: none;
}

.djs-segment-dragger,
.djs-bendpoint {
  display: none;
}`;

includeStyles(styles);