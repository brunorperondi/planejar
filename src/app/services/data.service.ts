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
      airTicket: 'Azul',
      accommodation: 'Airbnb',
      locomotion: 'Alugar',
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
