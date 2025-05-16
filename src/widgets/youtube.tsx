export function YoutubeWidget() {
  return (
    <iframe
      className="rounded-lg border-3 border-[#333333] bg-[#131313] shadow-lg"
      id="ytplayer"
      width="100%"
      height="500"
      src="https://www.youtube.com/embed/ogoZCRLjRgA?enablejsapi=1&loop=1&modestbranding=1&playsinline=1&color=white&iv_load_policy=3"
      allowFullScreen
    />
  );
}
