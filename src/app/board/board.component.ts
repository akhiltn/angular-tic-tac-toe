import { Component, OnInit } from '@angular/core';

export interface gridTile{
  color:string;
  value:string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  currentPlayer: 'X'|'O';
  grid:gridTile[];
  winner:string;

  constructor() {
    this.currentPlayer = "X";
    this.grid = [
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
    ];
    this.winner="";
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.currentPlayer = "X";
    this.grid = [
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
      {color:"lightblue", value:""},
    ];
    this.winner="";
  }

  makeAMove(i:number){
    if(this.grid[i].value == "" && this.winner == ""){
      let temp = this.currentPlayer;
      this.currentPlayer = this.currentPlayer == 'X'?'O':'X';
      this.grid[i].value=temp;
      this.winner = this.checkWinner();
    }
  }

  checkWinner(): string{
    const winnigCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i=0; i<winnigCombinations.length; i++){
      const [a,b,c] = winnigCombinations[i];
      if(this.grid[a].value != "" && this.grid[a].value == this.grid[b].value && this.grid[b].value == this.grid[c].value){
        this.grid[a].color = this.grid[b].color = this.grid[c].color = "green";
        return this.grid[a].value;
      }
    }
    return "";
  }

}
