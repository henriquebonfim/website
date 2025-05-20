import { Profile } from "#/widgets/profile";
import { SpotifyWidget } from "#/widgets/spotify";
import { Terminal, PrettyJSON } from "#/widgets/terminal";

const exampleJson = {
  is_active: true,
  shuffle_state: false,
  is_playing: false,
  actions: {
    pausing: false,
    resuming: false,
    seeking: false,
    skipping_next: false,
    skipping_prev: false,
  },
  device: {
    id: "string",
    is_active: false,
    is_private_session: false,
    is_restricted: false,
    name: "Kitchen speaker",
    volume_percent: 59,
    supports_volume: false,
  },
  item: {
    album: {
      name: "string",
      release_date: "2023-10-01",
      release_date_precision: "day",
      total_tracks: 0,
      type: "album",
      uri: "string",
    },
  },
};

export function Homepage() {
  return (
    <>
      <Profile />

      <Terminal
        title="Spotify API"
        cmd="curl --request GET --url https://api.spotify.com/v1/me/player --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'"
      >
        <PrettyJSON json={exampleJson} />
        <SpotifyWidget />
      </Terminal>
    </>
  );
}
