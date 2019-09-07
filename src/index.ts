import namespace from "./namespace"
import "./script_warning"
import ExampleLogger from './ExampleLogger'

export default namespace

if (!window.Turbolinks) {
  console.log("create window.Turbolinks");
  console.log("woo");
  ExampleLogger.log('test31242343');
  
  window.Turbolinks = namespace
  
  if (!isAMD() && !isCommonJS()) {
    
    console.log('namepace.start !isAMD() !isCommonJs()');
    namespace.start()
  }
}

declare var define: (() => any) & { amd: any }

function isAMD() {
  return typeof define == "function" && define.amd
}

function isCommonJS() {
  return typeof exports == "object" && typeof module != "undefined"
}
