import { Profile } from '#/widgets/profile';
import { SpotifyWidget } from '#/widgets/spotify';
import { PrettyJSON, Terminal } from '#/widgets/terminal';
import { Windows96 } from '#/widgets/windows-96';
import type { FC } from 'react';

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
    id: 'string',
    is_active: false,
    is_private_session: false,
    is_restricted: false,
    name: 'Kitchen speaker',
    volume_percent: 59,
    supports_volume: false,
  },
  item: {
    album: {
      name: 'string',
      release_date: '2023-10-01',
      release_date_precision: 'day',
      total_tracks: 0,
      type: 'album',
      uri: 'string',
    },
  },
};

export const Homepage: FC = () => {
  return (
    <section className="grid w-full gap-3 lg:grid-flow-row-dense lg:grid-cols-3">
      <div className="min-w-60 lg:col-span-1">
        <Profile />
      </div>
      <div className="h-full lg:col-span-2 lg:row-span-2">
        <Terminal
          title="Spotify API"
          cmd="curl --request GET --url https://api.spotify.com/v1/me/player --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'"
        >
          <div className="flex flex-col gap-4">
            <PrettyJSON json={exampleJson} />
            <Windows96></Windows96>
          </div>
        </Terminal>
      </div>
      <div className="min-w-60 lg:col-span-1">
        <SpotifyWidget />
      </div>
    </section>
  );
};
