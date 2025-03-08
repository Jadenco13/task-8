import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from '@angular/router';
import { SpinerLoaderComponent } from "./spiner-loader/spiner-loader.component";
import { HttpClient } from '@angular/common/http';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavComponent, SpinerLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lesson_8';
  constructor(public service: ApiService) {
    this.activationLoader()
  }
  public isLoading!: boolean;
  activationLoader() {
    this.service.loader.subscribe((el: any) => {
      this.isLoading = el
    })
  }
}
