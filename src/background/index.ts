console.log('background is running')

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'COUNT' && message.count !== undefined) {
    console.log('background has received a message from popup, and count is ', message.count)

    chrome.action.setBadgeText({ text: String(message.count) })

    // Send to all tab
    chrome.tabs.query({}, (tabs) => {
      tabs
        .filter((tab) => tab.url?.startsWith('http'))
        .forEach((tab) => chrome.tabs.sendMessage(tab.id!, message))
    })
  }
})
