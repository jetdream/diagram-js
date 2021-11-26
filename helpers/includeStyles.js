export default function includeStyles(css) {
  var style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}