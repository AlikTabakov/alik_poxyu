// Made by Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
// Credits to expl0it, shellcode.team
// GitHub: https://github.com/Lumm1t/obnoxious.club

class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.12;
  musicFadeIn = 4000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['a/', 'al#', 'ali@', 'alik%','alik._','alik.T!','alik.Ta*','alik.Tab$','alik.Taba+','alik.Tabak{','alik.Tabako%','alik.Tabakov:','alik.Tabakov: мне похуй на вас','alik.Tabakov: абсолютно похуй','alik.Tabakov: как же мне похуй на вас','alik.Tabakov: всегда было похуй','alik.Tabakov: похуй','alik.Tabakov: мне похуй','alik.Tabakov: ','alik.Tabakov: похуист','alik.Tabakov: похуй на вас','alik.Tabakov: POXYU НА ВАС','alik.Tabakov: похуй на вас!!!','alik.Tabakov: Telegramm - @Alik_Tabakov', 'alik.Tabakov: похуй на тебя','alik.Tabakov: мне похуй на вас','alik.Tabakov: мне похуй на вас?','alik.Tabakov: верно!','alik.Tabakov: мне поебать','alik.Tabakov: на всех вас','alik.Tabakov: ладно, пока! И запомните мне похуй на вас!',' '];

  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 500;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
}

const app = new _app();
