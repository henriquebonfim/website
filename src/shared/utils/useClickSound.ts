/**
 * React hook to play a click sound effect.
 *
 * @returns {() => void} Function to play the click sound.
 */
export const useClickSound = (): (() => void) => {
  const audio = new Audio(
    'https://ia802901.us.archive.org/16/items/Win95-audio-media/Windows%2095%20audio%20media%2FTADA.mp3',
  );
  audio.preload = 'auto';

  /**
   * Plays the click sound from the start.
   */
  const playClick = (): void => {
    audio.currentTime = 0;
    void audio.play();
  };

  return playClick;
};
