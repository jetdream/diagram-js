import RuleProvider from 'lib/features/rules/RuleProvider';

export default class SpaceRules extends RuleProvider {
  init() {
    this.addRule('shape.resize', function(context) {
      var shape = context.shape;

      return shape.children.length > 0 || shape.id === 'shape';
    });
  }
}