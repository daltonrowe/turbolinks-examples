const Turbolinks = require('../../dist/turbolinks.js')

class TurbolinksExamplesBasic {
   start() {
      Turbolinks.start();
   }
}

const example = new TurbolinksExamplesBasic;
console.log('YourApp.start', 5);
example.start();