export class Listing{
  content: string;
  username: string;
  listingId?: string;
  userId?: string;

  constructor(content: string, username: string, listingId?: string, userId?: string){
    this.content= content;
    this.username= username;
    this.listingId= listingId;
    this.userId= userId;
  }
}