import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'pastaCard';


  constructor(private renderer:Renderer2) {
  }
  @ViewChild('balloonContainer', { static: false }) balloonContainer!: ElementRef

  ngAfterViewInit() {
    setInterval(() => this.createBalloons(1), 200)
  }


  random(num: number) {
    return Math.floor(Math.random() * num);
  }

  getRandomStyles() {
    var r = this.random(255);
    var g = this.random(255);
    var b = this.random(255);
    var mt = this.random(100);
    var ml = this.random(75) - 5;
    var dur = this.random(8) + 5;
    return `
    background-color: rgba(${r},${g},${b},1.0);
    color: rgba(${r},${g},${b},1.0);
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},1.0);
    margin: ${mt}% 0 0 ${ml}%;
    animation: float ${dur}s ease-in infinite
    `;
  }

  createBalloons(num: number) {
    for (let i = num; i > 0; i--) {
      let balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.cssText = this.getRandomStyles();
      this.renderer.appendChild(this.balloonContainer.nativeElement, balloon)
    }
  }
}
