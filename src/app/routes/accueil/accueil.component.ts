import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from"../../model/post";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

interface Ville {
  id: string;
  nom: string;
}
interface Type {
  id: string;
  nom: string;
}



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  villeForm:Ville;
  typeForm:Type;
  titleForm:string;
  textForm:string;

  villeSelection:Ville;
  typeSelection:Type;

  private urlPost = 'http://localhost:8080/api/posts/getall';
  private urlVille = 'http://localhost:8080/api/ville/get';
  private urlAdd = 'http://localhost:8080/api/posts/add';
  public dataList:Array<Post> = new Array<Post>();
  constructor(private http: HttpClient,public authService:AuthService,private _snackBar: MatSnackBar) { }
  villes: Ville[];
  types: Type[]=[
{id:"1",nom:"Parc"},
    {id:"2",nom:"Restaurant "},
    {id:"3",nom:"Monument historique"},
    {id:"4",nom:"Lieu à voir"}
  ];

  ngOnInit(): void {
    this.http.get<Ville[]>(this.urlVille).subscribe(g => {
      this.villes=g
    });
    this.update();
  }
  update(){

    this.http.get<JSON>(this.urlPost+"?type="+(this.typeSelection ?this.typeSelection :"") +"&city="+ (this.villeSelection ?this.villeSelection :"")).subscribe((j) => {
      this.dataList = new Array<Post>();
      for(let json in j){
        const elem = this.types.find(element => element.id == j[json].type);
        let post = new Post(j[json].id,j[json].User.author,j[json].ville.nom,j[json].date,j[json].message,j[json].titre,elem.nom);
        this.dataList.push(post);
      }
    });
  }

  submit(){
    console.log("a");
    if(this.villeForm != undefined && this.typeForm!=undefined ){
      if(this.titleForm.length>3 && this.textForm.length>19) {

        this.http.post(this.urlAdd,{'ville':this.villeForm,'type':this.typeForm,'title':this.titleForm,'text':this.textForm}).subscribe(
          data=>{
          this.textForm="";
          this.titleForm="";
          this.typeForm.id=undefined;
          this.typeForm.nom="";
          this.villeForm.id=undefined;
          this.villeForm.nom="";
          this.update();},
        error => this.authService.loggedOut());
      }
      else{
        this._snackBar.open("Le titre ou la description sont trop courts", "ok", {
          duration: 2000,
        });
      }
    }
    else{
      this._snackBar.open("Vous n'avez pas remplie tous les champs", "ok", {
        duration: 2000,
      });
    }
  }

}
