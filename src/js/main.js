import json1 from '../json/songList1.json';
import json2 from '../json/songList2.json';
import json3 from '../json/songList3.json';
import json4 from '../json/songList4.json';

const selectSongRandom = (buttonName, textName, jsonName) => {
  const slotButton1 = document.getElementById(buttonName);
  const songResult1 = document.getElementById(textName);

  if (slotButton1 != null) {
    slotButton1.addEventListener('click', () => {
      const result = jsonName[Math.floor(Math.random(new Date()) * jsonName.length)];
      songResult1.innerText = result;
    });
  }
};

selectSongRandom('js-slotButton1', 'js-resultSongName1', json1);
selectSongRandom('js-slotButton2', 'js-resultSongName2', json2);
selectSongRandom('js-slotButton3', 'js-resultSongName3', json3);
selectSongRandom('js-slotButton4', 'js-resultSongName4', json4);
