const expect = require('expect');

describe('App', () => {
  beforeEach( function(){
    document.write(`
      <html>
        <head></head>
        <body>
          <button id="test"></button>
        </body>
      </html>
    `);
  });
  it('should properly run tests', () => {
    expect(1).toBe(1);
  });

  it('should find button', () => {
    let btn = document.getElementById('test');
    expect(btn).toExist();
  });
});
