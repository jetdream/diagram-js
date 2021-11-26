import RuleProvider from 'lib/features/rules/RuleProvider';

export default class GlobalConnectRules extends RuleProvider {
  init() {
    this.addRule('connection.start', function(context) {
      var source = context.source;

      if (source.canStartConnection) {
        return true;
      }

      return false;
    });
  }
}
