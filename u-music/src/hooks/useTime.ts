import { TimeMs } from "../types";

export const useTime = (): TimeMs => {
  const msToTime = (duration: number): string => {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return { msToTime };
};
