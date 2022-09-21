import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'second-class-1';

  name : string = '';
  order : string = '';

  constructor ( public requestService : RequestService ) {

  }

  ngOnInit(): void {
    this.search();
  }

  search(){
    let button = document.getElementById('btn-search');
    let search : HTMLInputElement = document.getElementById('search') as HTMLInputElement;

    button?.addEventListener("click", () => {
      this.requestService.getPokemon(search.value).subscribe({
        next : (resp : any ) => {
          this.name = resp.name;
          this.order = resp.order;
          console.log(resp);
        }
      });
    });
  }

  
}
