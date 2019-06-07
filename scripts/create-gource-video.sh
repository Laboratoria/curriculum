#! /usr/bin/env bash

deps=(gource ffmpeg)

for dep in ${deps[@]}; do
  command -v "${dep}" >/dev/null 2>&1 \
  || { echo >&2 "I require ${dep} but it's not installed.  Aborting."; exit 1; }
done

gource \
  --camera-mode track \
  --hide filenames,mouse \
  --key \
  --title curricula-js \
  --font-size 18 \
  --seconds-per-day 0.3 \
  --auto-skip-seconds 0.3 \
  --max-file-lag 0.15 \
  -1280x720 \
  -o - \
  | ffmpeg \
      -y \
      -r 60 \
      -f image2pipe \
      -vcodec ppm \
      -i - \
      -vcodec libx264 \
      -preset ultrafast \
      -pix_fmt yuv420p \
      -crf 1 \
      -threads 0 \
      -bf 0 \
      gource-no-filenames-track.mp4
