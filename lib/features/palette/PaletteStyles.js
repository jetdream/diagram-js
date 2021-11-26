import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * palette
 */

.djs-palette {
  position: absolute;
  left: 20px;
  top: 20px;

  box-sizing: border-box;
  width: 48px;
}

.djs-palette .separator {
  margin: 0 5px;
  padding-top: 5px;

  border: none;
  border-bottom: solid 1px var(--palette-separator-color);

  clear: both;
}

.djs-palette .entry:before {
  vertical-align: text-bottom;
}

.djs-palette .djs-palette-toggle {
  cursor: pointer;
}

.djs-palette .entry,
.djs-palette .djs-palette-toggle {
  color: var(--palette-entry-color);
  font-size: 30px;

  text-align: center;
}

.djs-palette .entry {
  float: left;
}

.djs-palette .entry img {
  max-width: 100%;
}

.djs-palette .djs-palette-entries:after {
  content: '';
  display: table;
  clear: both;
}

.djs-palette .djs-palette-toggle:hover {
  background: var(--palette-toggle-hover-background-color);
}

.djs-palette .entry:hover {
  color: var(--palette-entry-hover-color);
}

.djs-palette .highlighted-entry {
  color: var(--palette-entry-selected-color) !important;
}

.djs-palette .entry,
.djs-palette .djs-palette-toggle {
  width: 46px;
  height: 46px;
  line-height: 46px;
  cursor: default;
}

/**
 * Palette open / two-column layout is controlled via
 * classes on the palette. Events to hook into palette
 * changed life-cycle are available in addition.
 */
.djs-palette.two-column.open {
  width: 94px;
}

.djs-palette:not(.open) .djs-palette-entries {
  display: none;
}

.djs-palette:not(.open) {
  overflow: hidden;
}

.djs-palette.open .djs-palette-toggle {
  display: none;
}

.djs-palette {
  background: var(--palette-background-color);
  border: solid 1px var(--palette-border-color);
  border-radius: 2px;
}`;

includeStyles(styles);