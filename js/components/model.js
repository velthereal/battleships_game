// true - horisontal
// false - vertical
export class Model{
   constructor(){
      this.ships = [
         {
            location:[0,0,0,0],
            hits:['','',''],
            direction:true,
         },
         {
            location:[0,0,0,],
            hits:['','',''],
            direction:true,
         },
         {
            location:[0,0,0,],
            hits:['','',''],
            direction:true,
         },
         {
            location:[0,0,],
            hits:['','',],
            direction:true,
         },        
         {
            location:[0,0,],
            hits:['','',],
            direction:true,
         }, 
         {
            location:[0,0,],
            hits:['','',],
            direction:true,
         },
         {
            location:[0,],
            hits:['',],
            direction:true,
         },
         {
            location:[0,],
            hits:['',],
            direction:true,
         },
         {
            location:[0,],
            hits:['',],
            direction:true,
         },
         {
            location:[0,],
            hits:['',],
            direction:true,
         },   
      ];
      this.hits = 0;
      this.size = 10;
   	this.generateLocation();
   }
   getShips(){
      return this.ships;
   }
   generateLocation(){
      for (let j = 0; j < this.ships.length;) {
      	let direct = Math.floor(Math.random() * 2) == 0 ? false : true;
         let x = Math.floor(Math.random() * 10);
         let y = Math.floor(Math.random() * 10);
         if(!this.checkShipsCoord(x,y,j) || !this.checkPointer(x,y,j)) continue;
         this.ships[j].location[0] = [x, y];
         this.ships[j].direction = direct;
         let flag = true;
         for (let i = 1; i < this.ships[j].location.length; i++) {
            direct ? y++ : x++;
            if(this.checkOut(x, y) && this.checkShipsCoord(x,y,j) && this.checkPointer(x,y,j)){
               this.ships[j].location[i] = [x,y];
            } 
            else {
               flag = false;
               break;
            }
         }
         if(flag){
            this.createPointer(j);
            j++;
         }
      }
   }
   checkPointer(x,y, end){
      for (let i = 0; i < end; i++) {
         for (let j = 0; j < this.ships[i].pointer.length; j++) {
            if(this.ships[i].pointer[j][0] == x && this.ships[i].pointer[j][1] == y){
               return false;
            }
         }
      }
      return true;
   }
   createPointer(index){
      let pointer = [];
      let current = this.ships[index].location;
      for (let i = 0; i< current.length; i++) {
         if(this.ships[index].direction){
            if(i == 0){
               pointer.push([current[i][0] - 1, current[i][1]  - 1]);
               pointer.push([current[i][0], current[i][1] - 1]);
               pointer.push([current[i][0] + 1, current[i][1] - 1]);
            }
            if(i == current.length - 1){
               pointer.push([current[i][0] - 1, current[i][1] + 1]);
               pointer.push([current[i][0], current[i][1]  + 1]);
               pointer.push([current[i][0] + 1, current[i][1]  + 1]);
            }
            pointer.push([current[i][0] - 1, current[i][1]]);
            pointer.push([current[i][0] + 1, current[i][1]]);
         }
         else {
            if(i == 0){
               pointer.push([current[i][0] - 1, current[i][1]  - 1]);
               pointer.push([current[i][0] - 1, current[i][1]]);
               pointer.push([current[i][0] - 1, current[i][1] + 1]);
            }
            if(i == current.length - 1){
               pointer.push([current[i][0] + 1, current[i][1] - 1]);
               pointer.push([current[i][0] + 1, current[i][1]]);
               pointer.push([current[i][0] + 1, current[i][1] + 1]);
            }
            pointer.push([current[i][0], current[i][1] - 1]);
            pointer.push([current[i][0], current[i][1] + 1]);
         }
      }
      this.ships[index].pointer = pointer.filter((e) => {
         return e[0] >= 0 && e[0] < this.size && e[1] >= 0 && e[1] < this.size;
      });
   }
   createPointerAllShips(){
      for (let i = 0; i < this.ships.length; i++) {
         this.createPointer(i);
      }
   }
   checkOut(x, y){
      if(x < 0 || x >= this.size || y < 0 || y >= this.size){
         return false;
      }
      return true;
   }
   checkShipsCoord(x, y, end){
      for (let i = 0; i < end; i++) {
         for (let j = 0; j < this.ships[i].location.length; j++) {
            if(this.ships[i].location[j][0] == x && this.ships[i].location[j][1] == y){
               return false;
            }
         }
		}
      return true;
   }
}