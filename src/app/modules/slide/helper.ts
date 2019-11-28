import { Plane } from 'src/app/shared/plane/model/plane';

export class Helper {
  public getData(): Plane[] {
    return [
      {
        alt: 'CF-1 parts',
        index: 0,
        line: 'CF-1',
        imagePath: '../../../assets/CF-1.png'
      }, {
        alt: 'CF-3 parts',
        index: 1,
        line: 'CF-3',
        imagePath: '../../../assets/CF-3.png'
      }, {
        alt: 'Portas Legacy parts',
        index: 2,
        line: 'Portas Legacy',
        imagePath: '../../../assets/ELP.png'
      }, {
        alt: 'Over Wings parts',
        index: 3,
        line: 'OW',
        imagePath: '../../../assets/OW.png'
      }, {
        alt: 'Porta Pax Dian.',
        index: 4,
        line: 'Porta Pax Dian.',
        imagePath: '../../../assets/Porta Pax Dian.png'
      }, {
        alt: 'Porta Pax Tras.',
        index: 5,
        line: 'Porta Pax Tras.',
        imagePath: '../../../assets/Porta Pax Tras.png'
      }, {
        alt: 'Porta Serv. Dian.',
        index: 6,
        line: 'Porta Serv. Dian.',
        imagePath: '../../../assets/Porta Serv Dian.png'
      }, {
        alt: 'Porta Serv. Tras.',
        index: 7,
        line: 'Porta Serv. Tras.',
        imagePath: '../../../assets/Porta Serv Tras.png'
      }, {
        alt: 'Porta Bag. Dian. E1',
        index: 8,
        line: 'Porta Bagag. Diant.E1',
        imagePath: '../../../assets/Porta Bag Dian E1 e E2.png'
      }, {
        alt: 'Porta Bag. Tras. E1',
        index: 9,
        line: 'Porta Bagag. Tras.E1',
        imagePath: '../../../assets/Porta Bag Tras E1 e E2.png'
      }, {
        alt: 'Porta Bag. Diant. E2',
        index: 10,
        line: 'Porta Bagag. Diant.E2',
        imagePath: '../../../assets/Porta Bag Dian E1 e E2.png'
      }, {
        alt: 'Porta Bag. Tras. E2',
        index: 11,
        line: 'Porta Bagag. Tras.E2',
        imagePath: '../../../assets/Porta Bag Tras E1 e E2.png'
      }
    ];
  }
}
