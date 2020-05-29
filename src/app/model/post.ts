export class Post {
  id: number;
  author: string;
  city: string;
  date: Date;
  titre: string;
  message: string;
  type:string;


  constructor(id: number, author: string, city: string, date: Date, message: string,titre:string,type:string) {
    this.id = id;
    this.author = author;
    this.city = city;
    this.date = date;
    this.message = message;
    this.titre=titre;
    this.type=type;
  }
}
