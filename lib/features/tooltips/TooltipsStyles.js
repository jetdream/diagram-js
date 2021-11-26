import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * tooltips
 */
 .djs-tooltip-error {
  width: 160px;
  padding: 6px;

  background: var(--tooltip-error-background-color);
  border: solid 1px var(--tooltip-error-border-color);
  border-radius: 2px;
  color: var(--tooltip-error-color);
  font-size: 12px;
  line-height: 16px;

  opacity: 0.75;
}

.djs-tooltip-error:hover {
  opacity: 1;
}`;

includeStyles(styles);