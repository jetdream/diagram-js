import RuleProvider from 'lib/features/rules/RuleProvider';

export default class ConnectRules extends RuleProvider {
  init() {
    this.addRule('connection.reconnect', function(context) {
      var source = context.source,
          target = context.target;

      return source.type === target.type || source.type === 'C' || target.type === 'D';
    });

    this.addRule('connection.updateWaypoints', function() {
      return true;
    });
  }
}
