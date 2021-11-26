import {
  bootstrapDiagram,
  inject
} from 'test/TestHelper';

import autoResizeModule from 'lib/features/auto-resize';
import gridSnappingModule from 'lib/features/grid-snapping';
import modelingModule from 'lib/features/modeling';
import moveModule from 'lib/features/move';

import AutoResizeProvider from 'lib/features/auto-resize/AutoResizeProvider';
import AutoResize from 'lib/features/auto-resize/AutoResize';

/**
 * Custom auto-resize provider.
 *
 * @param {EventBus} eventBus
 */
class CustomAutoResizeProvider extends AutoResizeProvider {
  canResize(elements, target) {
    return target.id !== 'root';
  }
}

class CustomAutoResize extends AutoResize {
  getOffset() {
    return { top: 10, bottom: 10, left: 10, right: 10 };
  }
}

var customAutoResizeModule = {
  __init__: [ 'customAutoResizeProvider' ],
  autoResize: [ 'type', CustomAutoResize ],
  customAutoResizeProvider: [ 'type', CustomAutoResizeProvider ]
};


describe('features/grid-snapping - resize', function() {

  var shape;

  beforeEach(bootstrapDiagram({
    modules: [
      autoResizeModule,
      customAutoResizeModule,
      gridSnappingModule,
      modelingModule,
      moveModule
    ]
  }));

  beforeEach(inject(function(canvas, elementFactory) {
    var rootShape = elementFactory.createRoot({
      id: 'root'
    });

    canvas.setRootElement(rootShape);

    shape = elementFactory.createShape({
      id: 'shape',
      x: 100, y: 100,
      width: 100, height: 100
    });

    canvas.addShape(shape);
  }));


  describe('simple', function() {

    it('should snap (width, height)', inject(function(modeling) {

      // given
      var newBounds = {
        x: 95,
        y: 95,
        width: 105,
        height: 105
      };

      var hints = {
        autoResize: true
      };

      // when
      modeling.resizeShape(shape, newBounds, null, hints);

      // then
      expect(shape).to.have.bounds({ x: 95, y: 95, width: 110, height: 110 });
    }));

  });


  describe('complex', function() {

    it('should snap <sw> (width, height)', inject(function(modeling) {

      // given
      var newBounds = { x: 100, y: 100, width: 105, height: 105 };

      var hints = { autoResize: 'sw' };

      // when
      modeling.resizeShape(shape, newBounds, null, hints);

      // then
      expect(shape).to.have.bounds({ x: 100, y: 100, width: 110, height: 110 });
    }));


    it('should snap <se> (x, width, height)', inject(function(modeling) {

      // given
      var newBounds = { x: 95, y: 100, width: 105, height: 105 };

      var hints = { autoResize: 'se' };

      // when
      modeling.resizeShape(shape, newBounds, null, hints);

      // then
      expect(shape).to.have.bounds({ x: 90, y: 100, width: 110, height: 110 });
    }));


    it('should snap <ne> (x, y, height, width)', inject(function(modeling) {

      // given
      var newBounds = { x: 95, y: 95, width: 105, height: 105 };

      var hints = { autoResize: 'ne' };

      // when
      modeling.resizeShape(shape, newBounds, null, hints);

      // then
      expect(shape).to.have.bounds({ x: 90, y: 90, width: 110, height: 110 });
    }));


    it('should snap <nw> (y, width, height)', inject(function(modeling) {

      // given
      var newBounds = { x: 100, y: 95, width: 105, height: 105 };

      var hints = { autoResize: 'nw' };

      // when
      modeling.resizeShape(shape, newBounds, null, hints);

      // then
      expect(shape).to.have.bounds({ x: 100, y: 90, width: 110, height: 110 });
    }));


    it('should snap <nws> (y, width, height)', inject(function(modeling) {

      // given
      var newBounds = { x: 95, y: 95, width: 105, height: 105 };

      var hints = { autoResize: 'nws' };

      // when
      modeling.resizeShape(shape, newBounds, null, hints);

      // then
      expect(shape).to.have.bounds({ x: 95, y: 90, width: 110, height: 120 });
    }));


    it('should snap <nwse> (x, y, width, height)', inject(function(modeling) {

      // given
      var newBounds = { x: 95, y: 95, width: 105, height: 105 };

      var hints = { autoResize: 'nwse' };

      // when
      modeling.resizeShape(shape, newBounds, null, hints);

      // then
      expect(shape).to.have.bounds({ x: 90, y: 90, width: 120, height: 120 });
    }));

  });

});