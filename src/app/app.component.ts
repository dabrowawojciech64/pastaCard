import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Wszystkiego Najlepszego!';


  constructor(private renderer:Renderer2) {
  }
  @ViewChild('balloonContainer', { static: false }) balloonContainer!: ElementRef

  ngAfterViewInit() {
    this.createBalloons(5)
    setTimeout(() => this.createBalloons(5), 2000)
    setTimeout(() => this.createBalloons(5), 4000)
    setTimeout(() => this.createBalloons(5), 6000)
  }


  random(num: number) {
    return Math.floor(Math.random() * num);
  }

  getRandomStyles() {
    let hue = this.random(360);
    let marginTop = this.random(100);
    let marginLeft = this.random(75) - 5;
    let duration = this.random(8) + 10;
    return `
    background-color: hsl(${hue},100%,60%);
    color: hsl(${hue},100%,60%);
    box-shadow: inset -7px -3px 10px hsl(${hue},100%,40%);;
    margin: ${marginTop}% 0 0 ${marginLeft}%;
    animation: float ${duration}s ease-in infinite
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
