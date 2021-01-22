import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistSearch'
})
export class ArtistSearchPipe implements PipeTransform {

  transform(artist, searchArtist: string): unknown {
    if (!artist || !searchArtist){
      return artist;
    }

    return artist.filter(item =>
      item.name.toLowerCase().indexOf(searchArtist.toLowerCase()) !== -1);
  }

}
