import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioAppComponent } from "./components/portfolio-app.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, PortfolioAppComponent]
})
export class AppComponent {
  title = 'portfolio-app';
}
