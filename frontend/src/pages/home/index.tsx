import { Profile } from '#/widgets/profile';
import { SpotifyWidget } from '#/widgets/spotify';
import { Terminal } from '#/widgets/terminal';
import { type FC } from 'react';
import Section from './ui/section';

export const Homepage: FC = () => (
  <>
    <Profile />
    <Section />
    <aside className="min-w-60 lg:col-span-1" aria-label="Spotify API terminal">
      <Terminal
        title="Spotify API"
        cmd="curl --request GET --url https://api.spotify.com/v1/me/player --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z"
      >
        <SpotifyWidget className="p-3 px-6 transition-all duration-300 hover:blur-none hover:grayscale-0 sm:px-0" />
      </Terminal>
    </aside>
  </>
);
