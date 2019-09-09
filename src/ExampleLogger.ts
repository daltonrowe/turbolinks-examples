export class ExampleLogger {
   log(text: string, detail?:any ): any {
      if (detail) {
         console.log(text, detail);
      }
      else {
         console.log(text);
      }
   }
}

export default new ExampleLogger