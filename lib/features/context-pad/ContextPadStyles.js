import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * context-pad
 */
 .djs-overlay-context-pad {
  width: 72px;
  z-index: 100;
}

.djs-context-pad {
  position: absolute;
  display: none;
  pointer-events: none;
}

.djs-context-pad .entry {
  width: 22px;
  height: 22px;
  text-align: center;
  display: inline-block;
  font-size: 22px;
  margin: 0 2px 2px 0;

  border-radius: 3px;

  cursor: default;

  background-color: var(--context-pad-entry-background-color);
  box-shadow: 0 0 2px 1px var(--context-pad-entry-background-color);
  pointer-events: all;
}

.djs-context-pad .entry:before {
  vertical-align: top;
}

.djs-context-pad .entry:hover {
  background: var(--context-pad-entry-hover-background-color);
}

.djs-context-pad.open {
  display: block;
}`;

includeStyles(styles);
