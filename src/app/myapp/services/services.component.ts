import { Component, Input, OnInit } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { CarouselComponent } from 'angular-responsive-carousel';
// import {} from '../assets/images';
interface carousalImage{
  imageSrc:string
  imageAlt:string
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  @Input ()indicators=true;
  @Input ()controls=true; 
  @Input ()autoslide=true;
  @Input ()slideInterval=3000; 

  @Input ()images:carousalImage[]=[
    {imageSrc:'./assets/images/jjk.jpg',
        imageAlt:'jjk'},
        {imageSrc:'./assets/images/aot.jpg',
        imageAlt:'aot'},
        {imageSrc:'./assets/images/naruto.jpg',
        imageAlt:'naruto'},
        {imageSrc:'./assets/images/demonslayer.jpg',
        imageAlt:'demonslayer'},
        {imageSrc:'./assets/images/deathnote.jpg',
        imageAlt:'deathnote'},
        {imageSrc:'./assets/images/spyxfamily.jpg',
        imageAlt:'spyxfamily'},
        {imageSrc:'./assets/images/tokyorevengers.jpg',
        imageAlt:'tokyo'},
        {imageSrc:'./assets/images/erased.jpg',
        imageAlt:'erased'}
        ]
  selectedIndex=0
 

  constructor() { }

  ngOnInit(): void {
    if(this.autoslide){
      this.autoslideImages();
    }
  }
  autoslideImages():void{
    setInterval(()=>{
      this.onnextclick();
    },this.slideInterval);

  }


  selectImage(index:number):void{
    this.selectedIndex=index
  }
  onprevclick():void{
    if(this.selectedIndex===0){
      this.selectedIndex = this.images.length-1;
    }else{
      this.selectedIndex--;
    }
  }
  onnextclick():void{
    if(this.selectedIndex===this.images.length-1){
      this.selectedIndex=0;
    }else{
      this.selectedIndex++;
    }
  }

}
