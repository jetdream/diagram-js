import CommandInterceptor from '../../command/CommandInterceptor';

export default class PlanesBehavior extends CommandInterceptor {
  constructor(canvas, eventBus) {
    super(eventBus);

    this.executed(function(event) {
      var context = event.context;

      if (context.plane) {
        canvas.setActivePlane(context.plane);
      } else {
        context.plane = canvas.getActivePlane();
      }
    });

    this.revert(function(event) {
      var context = event.context;

      if (context.plane) {
        canvas.setActivePlane(context.plane);
      }
    });
  }
}

PlanesBehavior.$inject = [ 'canvas', 'eventBus'];