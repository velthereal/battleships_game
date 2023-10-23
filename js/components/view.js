export class View{
   constructor(board){
      this.elements = document.querySelectorAll(`${board} div`);
      this.board = [];
      let counter = 0;
      for (let i = 0; i < 10; i++) {
         let tmp = [];
         for (let j = 0; j < 10; j++) {
            tmp.push(this.elements[i * 10 + j]);
         }
         this.board.push(tmp);
      }
   }
   showShips(element){
      element.classList.add('ship');
   }
   showHits(element){
      element.textContent = 'X';
   }
   getBoard(){
      return this.board;
   }
	winGame(){
		let win = document.createElement('div');
		win.textContent = 'You win!!!';
		win.classList.add('win');
		document.body.insertAdjacentElement('afterbegin',win);
	}
}