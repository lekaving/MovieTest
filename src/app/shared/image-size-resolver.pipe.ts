import {Pipe, PipeTransform} from '@angular/core';

const IMG_PATH_URL = 'https://image.tmdb.org/t/p/';

@Pipe({
  name: 'imageSizeResolver'
})
export class ImageSizeResolverPipe implements PipeTransform {

  transform(value: any, size?: number | string): string {
    const sizeImage = !size ? 'original' : `w${size}`;
    return `${IMG_PATH_URL}${sizeImage}${value}`;
  }

}
