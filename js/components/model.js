// true - horisontal
// false - vertical
export class Model{
    constructor(){
        this.ships = [
            {
                location:[0,0,0,],
                hits:['','',''],
                direction:true,
            },
            {
                location:[0,0,],
                hits:['','',],
                direction:true,
            },            {
                location:[0,],
                hits:['',],
                direction:true,
            },
        ];
        this.hits = 0;
        this.size = 10;
        this.generateLocation();
    }
    generateLocation(){
        for (let j = 0; j < this.ships.length;) {
            let direct = Math.floor(Math.random() * 2) == 0 ? false : true;
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            if(!this.checkShipsCoord(x,y,j)) continue;
            this.ships[j].location[0] = [x, y];
            this.ships[j].direction = direct;
            let flag = true;
            for (let i = 1; i < this.ships[j].location.length; i++) {
                direct ? y++ : x++;
                if(this.checkOut(x, y) && this.checkShipsCoord(x,y,j)){
                    this.ships[j].location[i] = [x,y];
                } 
                else {
                    flag = false;
                    break;
                }
            }
            if(flag){
                console.log(this.ships[j].location, this.ships[j].direction);
                j++;
            }
        }
    }
    createPointer(index){
        let pointer = [];
        let current = this.ships[index].location[i];
        let q = current.direction;
        for (let i = 0; i< current.length; i++) {
            if(current.direction){
                pointer.push([current[i][0] - 1, current[i][1]]);
                pointer.push([current[i][0] - 1, current[i][1]]);
            }
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