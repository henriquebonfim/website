import { Profile } from "#/widgets/profile";
import { SpotifyWidget } from "#/widgets/spotify";
import { MacTerminal } from "#/widgets/terminal/mac";

export function Homepage() {

  return (
    <>
      <Profile />
      <pre className="font-mono text-gray-200">"Hello, World!"</pre>
      <pre className="font-mono text-gray-200">"I am a software engineer."</pre>
      <pre className="mb-4 font-mono text-gray-200">
        Transforming dreams into reality.
      </pre>

      <div className="relative z-10 w-1/2">
        <MacTerminal
          cmd="curl --request GET --url https://api.spotify.com/v1/me/player --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'"
          showCursor
          json={JSON.stringify(
            {
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
            },
            null,
            2,
          )}
        >
          <SpotifyWidget />
        </MacTerminal>
      </div>
    </>
  );
}
