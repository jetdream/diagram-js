import RuleProvider from 'lib/features/rules/RuleProvider';

import { find } from 'min-dash';

export default class KeyboardMoveRules extends RuleProvider {
  init() {
    this.addRule('elements.move', function(context) {
      var shapes = context.shapes;

      return !find(shapes, function(shape) {
        return shape.id === 'shapeDisallowed';
      });
    });
  }
}
