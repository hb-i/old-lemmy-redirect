const host = "https://old.lemmy.world"
const regex = /^https?:\/\/(?:www.lemmy.world|lemmy.world)([\S\s]*)/

chrome.webRequest.onBeforeRequest.addListener(
  function(details){
    return {redirectUrl: host + details.url.match(regex)[1]}
  },
  {
    urls: [
      "*://www.lemmy.world/*",
      "*://lemmy.world/*"
    ]
  },
  ["blocking"]
);
