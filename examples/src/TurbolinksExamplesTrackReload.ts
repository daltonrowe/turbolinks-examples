class TurbolinksExamplesTrackReload {
   numberOfLoadEvents: number;

   constructor() {
      this.numberOfLoadEvents = 0;
   }

   shout() {
      console.log('TrackReload Script!');

      addEventListener('turbolinks:load', () => {
         this.numberOfLoadEvents++
         console.log('Load Number: ', this.numberOfLoadEvents);
      })
   }
}

const trackReloadExample = new TurbolinksExamplesTrackReload;
trackReloadExample.shout();