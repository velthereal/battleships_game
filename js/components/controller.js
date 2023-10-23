import { Model } from "./model.js";
import { View } from "./view.js";

export class Controller{
   constructor(gridElement){
      this.view = new View(gridElement);
      this.board = this.view.getBoard();
      this.data = new Model().getShips();
		this.fire = 0;

		this.timerElement = document.getElementById('time');
		this.timer = 0;
		this.timerInterval = null;
   }
   startGame(){
		this.startTimer();
      for (let i = 0; i < this.board.length; i++) {
         for (let j = 0; j < this.board.length; j++) {
            this.board[i][j].addEventListener('click', () => {
					if(this.checkShipFire(i, j)){
						this.view.showShips(this.board[i][j]);
						this.fire++;
						if(this.fire == 20){
							this.endGame();
						}
					}
					else {
						this.view.showHits(this.board[i][j]);
					}
            })
         }
      }
   }
   checkShipFire(x,y){
      	for (let i = 0; i < this.data.length; i++) {
         	for (let j = 0; j < this.data[i].location.length; j++) {
               if(this.data[i].location[j][0] == x && this.data[i].location[j][1] == y){
                  return true;
               }
            }
      	}
      	return false;
	}
	endGame(){
		this.view.winGame();
	}
	startTimer(){
		this.timerInterval = setInterval(()=>{
			this.timer++;
			const minutes = Math.floor(this.timer / 60);
			const seconds = this.timer % 60;
			document.getElementById('minutes').textContent = minutes;
			document.getElementById('seconds').textContent = seconds;
			document.getElementById('minutes').style.color = 'rgb(47, 176, 176)';
			document.getElementById('minutes').style.marginLeft = '10px';
			document.getElementById('seconds').style.color = 'rgb(47, 176, 176)';
			document.getElementById('seconds').style.marginLeft = '10px';
		}, 1000);
	}
}