export const getIdFromUrl = (urlSound) => {
  return urlSound.substring(urlSound.lastIndexOf("/") + 1).replace(".mp3", "");
};

export function verifySound(sound) {
  if (sound.text !== undefined && sound.soundURL !== undefined) {
    return true;
  }
  return false;
}
