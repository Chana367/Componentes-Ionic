import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  palabraBuscar="";
  frutasIniciales=["manzana", "naranja", "mandarina"];
  frutasMostrar=["manzana", "naranja", "mandarina"];
  constructor() { }

  ngOnInit() {
  }

  buscar(){
    console.log(this.palabraBuscar);
    this.frutasMostrar = [];
    for(let i =0; i< this.frutasIniciales.length; i++){
        if(this.frutasIniciales[i].startsWith(this.palabraBuscar)){
          this.frutasMostrar.push(this.frutasIniciales[i]);
        }
    }
  }
  hayfocus(){
    console.log("hay focus");
  }
  hayionblur(){
    console.log("hay ionBlur");
  }

}
