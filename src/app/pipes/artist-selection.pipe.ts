import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistSelection'
})
export class ArtistSelectionPipe implements PipeTransform {

  transform(artist, selection: string): unknown {
    if (!artist || !selection){
      return artist;
    } else if (selection === 'Painter'){
      return artist.filter(item =>
      item.occupation === selection);
    } else if (selection === 'Sculptor'){
      return artist.filter(item =>
        item.occupation === selection);
    }else if (selection === 'Photographer'){
      return artist.filter(item =>
        item.occupation === selection);
    }
  }

}
