import RuleProvider from 'lib/features/rules/RuleProvider';

export default class ConnectRules extends RuleProvider {
  init() {
    this.addRule('connection.create', function(context) {
      var source = context.source,
          target = context.target;

      if (source.targetOnly) {
        return false;
      }

      if (source.notConnectable || target.notConnectable) {
        return false;
      }
    });
  }
}
