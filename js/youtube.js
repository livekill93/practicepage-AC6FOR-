// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
      new YT.Player('player',{
          videoId: '5a0K11uPUD4',
    
  playerVars:{
      autoplay:true,//자동재생
      loop:true,//반복재생
      playlist: '5a0K11uPUD4'//반복할 유튜브 영상 id
      },
    events: {
      onReady: function (event){
          event.target.mute()
      }
    }
  });
}
