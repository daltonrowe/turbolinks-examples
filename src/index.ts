import namespace from "./namespace"
import "./script_warning"
import ExampleLogger from './ExampleLogger'

export default namespace

if (!window.Turbolinks) {
  ExampleLogger.log('assign window.Turbolinks');
  window.Turbolinks = namespace
  
  if (!isAMD() && !isCommonJS()) {
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
