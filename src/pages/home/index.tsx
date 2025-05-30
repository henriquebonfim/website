import { SpotifyWidget } from '#/widgets/spotify';
import { type FC } from 'react';
import { Profile } from './contents/profile';
import { Section, Terminal } from './ui';

export const Homepage: FC = () => (
  <>
    <Profile />
    <Section />
    <aside className="min-w-60 lg:col-span-1">
      <Terminal
        title="Spotify API"
        cmd="curl --request GET --url https://api.spotify.com/v1/me/player --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z"
      >
        <SpotifyWidget className="grayscale-25 transition-all duration-300 hover:blur-none hover:grayscale-0" />
      </Terminal>
    </aside>
  </>
);
