import Jimp from 'jimp'

const outputPath = './art_pack/output/';

function readFrame(f, cb) {
  const framePath = `./art_pack/default/frame${f}.png`;
  Jimp.read(framePath).then((frame) => {
    cb(frame);
  });
}
function processDefault(imgPath, imgName, tier, offsetX=0, offsetY=0) {
  const result = new Jimp(417, 527, 0x00000000, () => {});
  readFrame(tier, (frame) => {
    Jimp.read('./art_pack/default/mask.png').then((mask) => {
      Jimp.read(imgPath).then((img) => {
        result.blit(img.resize(230, 342).mask(mask.resize(230, 342), 0, 0), 88, 130)
          .composite(frame, offsetX, offsetY)
          .write(`${outputPath}${imgName}_${tier}.png`);
      });
    });
  });
  // result.write(`${outputPath}output.png`);
  // readFrame('50', (frame) => {
  //   Jimp.read(imgPath).then((img) => {
  //     frame.composite(img, 86, 128).write(`${outputPath}${imgName}.png`);
  //   });
  // });
}

function frameDefaultSet() {
  const charlist = [
    'angelia', 'aosta', 'charle', 'crushfang', 'dagger',
    'dylan', 'experiment', 'fatima', 'fredrica', 'golemwalt',
    'hestia', 'jahan', 'karnulla', 'kitty', 'koll',
    'leah', 'lio', 'lisa', 'naya', 'ned',
    'nigel', 'nolva', 'pang', 'puggi', 'roger',
    'sharice', 'sherlock', 'sione', 'theodore', 'tica',
    'yami', 'yan-bo',
  ];

  const spCharlist = ['dylan_sp', 'angelia_sp', 'sione_sp'];

  for (const c of charlist) {
    let path = `./art_pack/default/ssr/${c}.png`;
    processDefault(path, c, 'ssr');

    path = `./art_pack/default/sr/${c}.png`;
    processDefault(path, c, 'sr');

    path = `./art_pack/default/r/${c}.png`;
    processDefault(path, c, 'r', 5, 27);

    processDefault(path, c, 'n', 50, 100);
  }
  for (const c of spCharlist) {
    let path = `./art_pack/default/ssr/${c}.png`;
    processDefault(path, c, 'ssr');
  }
}

export default {
  frameDefaultSet,
};
