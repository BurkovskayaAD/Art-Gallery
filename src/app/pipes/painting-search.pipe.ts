import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paintingSearch'
})
export class PaintingSearchPipe implements PipeTransform {

  transform(painting, searchPainting: string): unknown {
    if (!painting || !searchPainting){
      return painting;
    }

    return painting.filter(item =>
      item.name.toLowerCase().indexOf(searchPainting.toLowerCase()) !== -1);
  }
}
