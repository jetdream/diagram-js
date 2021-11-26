import RuleProvider from 'lib/features/rules/RuleProvider';

export default class CopyPasteRules extends RuleProvider {
  init() {
    this.addRule('element.copy', function(context) {

      return true;
    });

    this.addRule('element.paste', function(context) {
      if (context.source) {
        return false;
      }

      return true;
    });

    this.addRule('elements.paste', function(context) {
      if (context.target.id === 'parent2') {
        return false;
      }

      return true;
    });
  }
}