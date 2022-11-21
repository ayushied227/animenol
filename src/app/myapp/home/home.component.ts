import { Component, OnInit, Input } from '@angular/core';
interface frameImage{
  imageSrc:string
  imageAlt:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input ()images:frameImage[]=[{
    imageSrc:'./assets/images/moon.jpg',
  imageAlt:'moon'
  }
  ]
  selectedIndex=0
  constructor() { }

  ngOnInit(): void {
  }

}
