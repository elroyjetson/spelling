#!/usr/local/bin/bash

for x in $(cat wordlist.txt); do
	echo $x;
	output="$x.mp4"
	`say -o $output --file-format=m4af "$x"`
done
