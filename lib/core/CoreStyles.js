import includeStyles from '../../helpers/includeStyles';


// TODO(marstamm): move feature variables to separate files
var styles = /* css */`
/**
 * color definitions
 */
 .djs-container {
  --color-grey-225-10-15: hsl(225, 10%, 15%);
  --color-grey-225-10-35: hsl(225, 10%, 35%);
  --color-grey-225-10-55: hsl(225, 10%, 55%);
  --color-grey-225-10-75: hsl(225, 10%, 75%);
  --color-grey-225-10-80: hsl(225, 10%, 80%);
  --color-grey-225-10-85: hsl(225, 10%, 85%);
  --color-grey-225-10-90: hsl(225, 10%, 90%);
  --color-grey-225-10-95: hsl(225, 10%, 95%); 
  --color-grey-225-10-97: hsl(225, 10%, 97%);

  --color-blue-205-100-45: hsl(205, 100%, 45%);
  --color-blue-205-100-45-opacity-30: hsla(205, 100%, 45%, 30%);
  --color-blue-205-100-50: hsl(205, 100%, 50%);
  --color-blue-205-100-95: hsl(205, 100%, 95%);

  --color-green-150-86-44: hsl(150, 86%, 44%);

  --color-red-360-100-40: hsl(360, 100%, 40%);
  --color-red-360-100-45: hsl(360, 100%, 45%);
  --color-red-360-100-92: hsl(360, 100%, 92%);
  --color-red-360-100-97: hsl(360, 100%, 97%);

  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 0%); 
  --color-black-opacity-05: hsla(0, 0%, 0%, 5%); 
  --color-black-opacity-10: hsla(0, 0%, 0%, 10%);

  --bendpoint-fill-color: var(--color-blue-205-100-45-opacity-30);
  --bendpoint-stroke-color: var(--color-blue-205-100-50);

  --context-pad-entry-background-color: var(--color-white);
  --context-pad-entry-hover-background-color: var(--color-grey-225-10-95);

  --element-dragger-color: var(--color-blue-205-100-50);
  --element-hover-outline-fill-color: var(--color-blue-205-100-45);
  --element-selected-outline-stroke-color: var(--color-blue-205-100-50);

  --lasso-fill-color: var(--color-black-opacity-05);
  --lasso-stroke-color: var(--color-black);

  --palette-entry-color: var(--color-grey-225-10-15);
  --palette-entry-hover-color: var(--color-blue-205-100-45);
  --palette-entry-selected-color: var(--color-blue-205-100-50);
  --palette-separator-color: var(--color-grey-225-10-75);
  --palette-toggle-hover-background-color: var(--color-grey-225-10-55);
  --palette-background-color: var(--color-grey-225-10-97);
  --palette-border-color: var(--color-grey-225-10-75);

  --popup-body-background-color: var(--color-white);
  --popup-header-entry-selected-color: var(--color-blue-205-100-50);
  --popup-header-entry-selected-background-color: var(--color-black-opacity-10);
  --popup-header-separator-color: var(--color-grey-225-10-75);
  --popup-background-color: var(--color-grey-225-10-97);
  --popup-border-color: var(--color-grey-225-10-75);

  --resizer-fill-color: var(--color-blue-205-100-45-opacity-30);
  --resizer-stroke-color: var(--color-blue-205-100-50);

  --search-container-background-color: var(--color-grey-225-10-97);
  --search-container-border-color: var(--color-blue-205-100-50);
  --search-container-box-shadow-color: var(--color-blue-205-100-95);
  --search-container-box-shadow-inset-color: var(--color-grey-225-10-80);
  --search-input-border-color: var(--color-grey-225-10-75);
  --search-result-border-color: var(--color-grey-225-10-75);
  --search-result-highlight-color: var(--color-black);
  --search-result-selected-color: var(--color-blue-205-100-45-opacity-30);

  --shape-attach-allowed-stroke-color: var(--color-blue-205-100-50);
  --shape-connect-allowed-fill-color: var(--color-grey-225-10-97);
  --shape-drop-allowed-fill-color: var(--color-grey-225-10-97);
  --shape-drop-not-allowed-fill-color: var(--color-red-360-100-97);
  --shape-resize-preview-stroke-color: var(--color-blue-205-100-50);

  --snap-line-stroke-color: var(--color-blue-205-100-50-opacity-30);

  --space-tool-crosshair-stroke-color: var(--color-black);

  --tooltip-error-background-color: var(--color-red-360-100-97);
  --tooltip-error-border-color: var(--color-red-360-100-45);
  --tooltip-error-color: var(--color-red-360-100-45);
 }`;

includeStyles(styles);
