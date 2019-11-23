import { Plane } from 'src/app/shared/plane/model/plane';

export class Helper {
  public getData(): Plane[] {
    return [
      {
        alt: 'CF-1 parts',
        index: 0,
        line: 'CF-1',
        imagePath: '../../../assets/CF-1.png'
      },{
        alt: 'CF-3 parts',
        index: 1,
        line: 'CF-3',
        imagePath: '../../../assets/CF-3.png'
      },{
        alt: 'Portas Legacy parts',
        index: 2,
        line: 'Portas Legacy',
        imagePath: '../../../assets/ELP.png'
      },{
        alt: 'Over Wings parts',
        index: 3,
        line: 'OW',
        imagePath: '../../../assets/OW.png'
      }
  ]
  }
}