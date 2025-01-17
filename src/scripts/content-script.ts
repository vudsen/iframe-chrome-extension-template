console.log('send')
function sendMsg(count: number) {
  try {
    chrome.runtime.sendMessage(Date.now().toString())
  } catch (_: unknown) { /* empty */ }
  if (count < 60) {
    setTimeout(() => {
      sendMsg(count + 1)
    }, 1000)
  }
}

sendMsg(0);
