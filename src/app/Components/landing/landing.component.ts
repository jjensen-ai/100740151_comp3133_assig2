import { PropertyRead } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  @Input()formSelected = 'login';
  pinkPanel: string = 'bg-pastel-pink-300/30';
  bluePanel: string = 'bg-cerulean-100/20';
  loginBg: string = 'loginBg';
  registerBg: string = 'registerBg ';
  loginSelected: string = 'loginSelected ';
  registerSelected: string = 'registerButtonSelected';
  landingButtonBg: string = 'landingButtonBg';
  blueLandingButtonBg: string = 'blueLandingButtonBg';
  loginHover: string = 'loginHover';
  registerHover: string = 'registerHover';
}
