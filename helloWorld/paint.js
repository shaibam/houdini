// checkerboard.js
class CheckerboardPainter {
    // inputProperties returns a list of CSS properties that this paint function gets access to
    static get inputProperties() { return ['--some']; }

    paint(ctx, geom, properties) {
        // Paint worklet uses CSS Typed OM to model the input values.
        // As of now, they are mostly wrappers around strings,
        // but will be augmented to hold more accessible data over time.
        const some = JSON.parse(properties.get('--some'));

        for (var i = 0; i < some.length; i++) {
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.strokeRect(some[i][0], some[i][1], some[i][2] - some[i][0], some[i][3] - some[i][1]);
            ctx.lineWidth = 10;
            ctx.fill();
        }

    }
}
// Register our class under a specific name
registerPaint('checkerboard', CheckerboardPainter);