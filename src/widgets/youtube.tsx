import { API } from "#/shared/constants";

export function YoutubeWidget() {
  return (
    <iframe
      className="rounded-lg border-3 border-[#333333] bg-[#131313] shadow-lg"
      id="ytplayer"
      width="100%"
      height="500"
      src={API.YOUTUBE_EMBED}
      allowFullScreen
    />
  );
}
