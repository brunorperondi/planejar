/* eslint-disable max-len */
import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  date: string;
  id: number;
  read: boolean;
  message: string;
  airTicket: string;
  accommodation: string;
  locomotion: string;
  situation: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Rock In Rio',
      date: '2022',
      id: 0,
      read: false,
      message: 'O Rock in Rio é um festival de música idealizado pelo empresário brasileiro Roberto Medina pela primeira vez em 1985, sendo, desde sua criação, reconhecidamente, o maior festival musical do planeta. Foi originalmente organizado no Rio de Janeiro, de onde vem o nome.',
      airTicket: 'Latam',
      accommodation: 'Airbnb',
      locomotion: 'Uber',
      situation: 'Executar',
    },
    {
      fromName: 'KnotFest',
      date: '2022',
      id: 1,
      read: false,
      message: 'Conhecido por ser um dos maiores festivais de metal do mundo, a edição brasileira terá como headliner os mascarados do Slipknot, donos do evento. Um dos grandes atrativos é o Mr. Bungle, projeto do vocalista Mike Patton (Faith No More), que retornou as atividades após 20 anos de hiato e tocará no país pela primeira vez. Já o Trivium e o Bring Me The Horizon são conhecidos - e sempre muito aguardados - pelos fãs.',
      airTicket: 'Latam',
      accommodation: 'Airbnb',
      locomotion: 'Uber',
      situation: 'Executar',
    },
    {
      fromName: 'Lorem',
      date: '2024',
      id: 2,
      read: false,
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      airTicket: 'Latam',
      accommodation: 'Airbnb',
      locomotion: 'Uber',
      situation: 'Executar',
    },
    {
      fromName: 'Ipsum',
      date: '2023',
      id: 3,
      read: false,
      message: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      airTicket: 'Latam',
      accommodation: 'Airbnb',
      locomotion: 'Uber',
      situation: 'Executar',
    },
    {
      fromName: 'McClintock',
      date: '2021',
      id: 4,
      read: false,
      message: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      airTicket: 'Latam',
      accommodation: 'Airbnb',
      locomotion: 'Uber',
      situation: 'Executar',
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
