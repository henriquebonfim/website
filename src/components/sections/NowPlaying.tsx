import { motion } from 'framer-motion';
import { TerminalWindow } from '../TerminalWindow';

// Static mock — wire to Spotify Web API later via an edge function.
const track = {
  title: 'Strobe',
  artist: 'deadmau5',
  album: 'For Lack of a Better Name',
  cover: 'https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a',
  url: 'https://open.spotify.com/track/3ZffCQKLFLUvYM59XKLbVm',
  isPlaying: true,
};

export const NowPlaying = () => {
  return (
    <section id="now-playing" className="relative py-24 md:py-32">
      <div className="container max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] comment-highlight mb-3">
          // now playing
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
          What's in my headphones.
        </h2>

        <div className="space-y-4">
          <TerminalWindow title="spotify.sh">
            <p className="text-muted-foreground">
              <span className="text-primary-glow">$</span> curl
              https://api.henriquebonfim.com/now-playing
            </p>
          </TerminalWindow>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="terminal-window p-5 sm:p-6"
          >
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <img
                  src={track.cover}
                  alt={`${track.album} cover`}
                  className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl object-cover ring-1 ring-border"
                />
                {track.isPlaying && (
                  <div className="absolute -bottom-2 -right-2 flex items-end gap-0.5 rounded-full bg-background/90 backdrop-blur px-2 py-1 ring-1 ring-border">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="block w-0.5 bg-term-green animate-equalizer origin-bottom"
                        style={{ height: 12, animationDelay: `${i * 0.12}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-term-green mb-1">
                  {track.isPlaying ? '● playing' : '○ recently played'}
                </p>
                <a
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-display text-xl sm:text-2xl font-bold leading-tight hover:text-primary-glow transition-colors truncate"
                >
                  {track.title}
                </a>
                <p className="mt-1 text-sm text-muted-foreground truncate">
                  {track.artist} · <span className="italic">{track.album}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
