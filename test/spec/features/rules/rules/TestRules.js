import RuleProvider from 'lib/features/rules/RuleProvider';

export default class TestRules extends RuleProvider {
  init() {
    this.addRule('shape.resize', function(context) {

      var shape = context.shape;

      if (shape.ignoreResize) {
        return null;
      }

      return shape.resizable !== undefined ? shape.resizable : undefined;
    });
  }
}
