import RuleProvider from '../rules/RuleProvider';

/**
 * This is a base rule provider for the element.autoResize rule.
 */
export default class AutoResizeProvider extends RuleProvider {

  /**
   * Needs to be implemented by sub classes to allow actual auto resize
   *
   * @param  {Array<djs.model.Shape>} elements
   * @param  {djs.model.Shape} target
   *
   * @return {boolean}
   */
  canResize(elements, target) {
    return false;
  }

  init() {
    var self = this;

    this.addRule('element.autoResize', function(context) {
      return self.canResize(context.elements, context.target);
    });
  }
}

