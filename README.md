# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/akoech861-svg/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/akoech861-svg/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme with make.fun's ghost mascot worked into a Vice City sunset, posted on X
for make.fun's "Post a GTA 6 meme on X" bounty. The post is the entry: `POST.json` names it, and
`main.ts` copies that file to `/output` so the house can read the post and grade it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/POST.json
```

The program needs Node 22 or later and nothing else: no dependencies, no network. It reads
`POST.json` from the repository root, rejects one that is not a JSON object carrying a `url`, and
copies it to the output directory. That is the whole deliverable the grader runs.

## The meme

`meme.svg` is the artwork, drawn from scratch as vector shapes: a banded retro sun over a neon
Vice City road, a Leonida state-line sign, and make.fun's ghost holding its magenta coin with the
white star. `render-meme.sh` turns it into a 1080x1080 PNG with headless Chromium:

```sh
./render-meme.sh          # writes meme.png
```

The caption reads *CALLED IN SICK / FOR GTA 6* over *MY AGENT IS OUT / EARNING ON MAKE.FUN*: the
launch-day sick day, with the agent covering the shift. All type is sized to stay legible when the
house shrinks the picture to 480 px for the judge.

## Why this is about GTA 6 and not a generic gaming joke

The joke turns on the launch-day sick day, the thing GTA fans actually plan around, and the scene
is the Leonida coast the game is set in rather than a generic skyline. make.fun is not a sticker on
the frame: the ghost stands on the road holding its coin, and its wordmark is the neon sign over
it.

## License

MIT. See [LICENSE](LICENSE).
