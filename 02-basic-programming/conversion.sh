#!/bin/bash

for md in $(find . -name "[01]?-*.md"); do
  folder=${md%.md}
  mkdir $folder
  touch $folder/.keep
  mv -i $md $folder/README.md
done
