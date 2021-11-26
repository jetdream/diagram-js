import includeStyles from '../../../helpers/includeStyles';

var styles = /* css */`
/**
 * search pad
 */
 .djs-search-container {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  width: 25%;
  min-width: 300px;
  max-width: 400px;
  z-index: 10;

  font-size: 1.05em;
  opacity: 0.9;
  background: var(--search-container-background-color);
  border: solid 1px var(--search-container-border-color);
  border-radius: 2px;
  box-shadow: 0 0 0 2px var(--search-container-box-shadow-color), 0 0 0 1px var(--search-container-box-shadow-inset-color) inset;
}

.djs-search-container:not(.open) {
  display: none;
}

.djs-search-input input {
  font-size: 1.05em;
  width: 100%;
  padding: 6px 10px;
  border: 1px solid var(--search-input-border-color);
  box-sizing: border-box;
}

.djs-search-input input:focus {
  outline: none;
  border-color: var(--search-input-border-color);
}

.djs-search-results {
  position: relative;
  overflow-y: auto;
  max-height: 200px;
}

.djs-search-results:hover {
  cursor: pointer;
}

.djs-search-result {
  width: 100%;
  padding: 6px 10px;
  background: white;
  border-bottom: solid 1px var(--search-result-border-color);
  border-radius: 1px;
}

.djs-search-highlight {
  color: var(--search-result-highlight-color);
}

.djs-search-result-primary {
  margin: 0 0 10px;
}

.djs-search-result-secondary {
  font-family: monospace;
  margin: 0;
}

.djs-search-result:hover {
  background: var(--search-result-selected-color);
}

.djs-search-result-selected {
  background: var(--search-result-selected-color);
}

.djs-search-result-selected:hover {
  background: var(--search-result-selected-color);
}

.djs-search-overlay {
  background: var(--search-result-selected-color);
}`;

includeStyles(styles);