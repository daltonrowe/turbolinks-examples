import Turbolinks from '../../dist/turbolinks'

class TurbolinksExamplesBasic {
   start() {
      console.log('YourApp.start()');
      Turbolinks.start();
   }
}

const example = new TurbolinksExamplesBasic;
example.start();