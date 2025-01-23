import { setupInIframe } from "cross-iframe-rpc";

export default function iframeSetup() {
  if (process.env.NODE_ENV === 'development') {
    window.chrome = setupInIframe<typeof chrome>()
  }
}

