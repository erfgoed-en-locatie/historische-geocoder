#! /bin/sh
# just run it...

if [ "$#" -ne 1 ]; then

find * -type d -maxdepth 0 -print0 | xargs -0 -n1 ./mkMetadata.sh

else

echo "generating $1/$1.source.json"
cat <<EOF > $1/$1.source.json
{"id": "$1",
 "title": "$1",
 "license": "?",
 "description": "$1",
 "author": "histograph"}
EOF

fi
