import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  private photoList: {
    url: string
  }[];
  private animes:string[];
  constructor() { }

  ngOnInit() {
    this.photoList = [
      {
        url: "../../assets/image/mixanime.jpeg"
      }]
    this.animes = ["Dragon Ball","Fairy Tail"];
    
  }

  addAnime(anime){
    this.animes.unshift(anime);
    return false; // add for do not want refresh page
    
    }    

 removeAnime(anime){
  this.animes.forEach((element,index) => {
    if(element == anime){
      this.animes.splice(index,1);
    }
  });
}

}
