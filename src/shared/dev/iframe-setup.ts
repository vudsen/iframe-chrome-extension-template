import {createBridePeerClientWithTypeOnly} from "cross-iframe-rpc";

export default function iframeSetup() {
  if (process.env.NODE_ENV === 'development') {
    window.chrome = createBridePeerClientWithTypeOnly<typeof chrome>({
      poster: {
        postMessage(str) {
          window.parent.window.postMessage(str, '*')
        },
        addEventListener(name, callback) {
          window.addEventListener(name, (evt) => {
            callback(evt)
          })
        },
        removeEventListener(name, callback) {
          window.removeEventListener(name, callback)
        }
      }
    })
  }

}

