import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * popup styles
 */
 .djs-popup .entry {
  line-height: 20px;
  white-space: nowrap;
  cursor: default;
}

/* larger font for prefixed icons */
.djs-popup .entry:before {
  vertical-align: middle;
  font-size: 20px;
}

.djs-popup .entry > span {
  vertical-align: middle;
  font-size: 14px;
}

.djs-popup .entry:hover,
.djs-popup .entry.active:hover {
  background: var(--popup-header-entry-selected-background-color);
}

.djs-popup .entry.disabled {
  background: inherit;
}

.djs-popup .djs-popup-header .entry {
  display: inline-block;
  padding: 2px 3px 2px 3px;

  border: solid 1px transparent;
  border-radius: 3px;
}

.djs-popup .djs-popup-header .entry.active {
  color: var(--popup-header-entry-selected-color);
  border: solid 1px var(--popup-header-entry-selected-color);
  background-color: var(--popup-header-entry-selected-background-color);
}

.djs-popup-body .entry {
  padding: 4px 10px 4px 5px;
}

.djs-popup-body .entry > span {
  margin-left: 5px;
}

.djs-popup-body {
  background-color: var(--popup-body-background-color);
}

.djs-popup-header {
  border-bottom: 1px solid var(--popup-header-separator-color);
}

.djs-popup-header .entry {
  margin: 1px;
  margin-left: 3px;
}

.djs-popup-header .entry:last-child {
  margin-right: 3px;
}

.djs-popup {
  background: var(--popup-background-color);
  border: solid 1px var(--popup-border-color);
  border-radius: 2px;
}
`;

includeStyles(styles);