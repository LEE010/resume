#!/bin/bash
echo "Thumbnail maker!"

width=600
hight=600
# gap=0

sdir=$(pwd)

if [ "$1" != "" ]; then
  cd $1
fi

if [ ! -d thumb ]; then
  mkdir thumb
fi

convert -size ${width}x${hight} xc:white ./thumb/background.jpg

for img in ./*.jpg ./*.jpeg ./*.png ./*.JPG; do
  if [[ $(readlink -e ${img}) = '' ]]; then
    continue
  fi

  name=$(basename ${img})
  img_name=thumb_"${name%.*}"

  convert ${img} -resize ${width}x${hight} -quality 100 ./thumb/temp.jpg
  convert ./thumb/background.jpg ./thumb/temp.jpg -gravity center -composite ./thumb/${img_name}.jpg
  echo 'done '${img_name}
done

rm thumb/background.jpg
rm thumb/temp.jpg
cd ${sdir}
