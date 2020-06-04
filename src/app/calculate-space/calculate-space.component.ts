import { Component, OnInit } from '@angular/core';
import { AllRooms } from '../models/rooms';
import { Router } from '@angular/router';
// import { };

@Component({
  selector: 'app-calculate-space',
  templateUrl: './calculate-space.component.html',
  styleUrls: ['./calculate-space.component.css']
})
export class CalculateSpaceComponent implements OnInit {

  // total = 0;
  totalArea = 0;
  RoomArea1=0;
  all_rooms;
  room_spaces=[];
  constructor(private router:Router) { }

  ngOnInit() {

    this.all_rooms = new AllRooms().all_rooms;
    console.log(this.all_rooms);
  }

  getTotalArea(){
    let abc=0;
    for(let i=0;i<this.all_rooms.length;i++){

      abc= this.getRoomArea(i);
      this.all_rooms[i].area=abc;
      this.totalArea+=this.all_rooms[i].area;  
    }

    sessionStorage.setItem('areareq',"this.totalArea");
    return this.totalArea;
  }
  resetRoom(index)
  {
    this.totalArea -=this.all_rooms[index].area; 
    this.all_rooms[index].area = 0;
    for(let thing of this.all_rooms[index].things){
      thing.count = 0;
    }
  }
  // getRoomArea(index){
  //   let total=0;
  //   for(let thing of this.all_rooms[index].things){
  //     total+=thing.count*thing.spacereq;
  //   }
  //   return total;
  // }

  // setRoomIndex(index){
  //   for(let thing of this.all_rooms[index].things){
  //     this.room_spaces[index]+=thing.count*thing.spacereq;
  //   }
  // }

  getRoomArea(index){
      let total=0;
       for(let thing of this.all_rooms[index].things){
         total+=thing.count*thing.spacereq;
       }
       
       return total;
     }

  removeThing(room1index,thing1index){
    if(this.all_rooms[room1index].things[thing1index].count>0){
    this.all_rooms[room1index].things[thing1index].count--;
    // this.total=0;
    this.totalArea=0;
    this.getTotalArea();
    // this.setRoomIndex(room1index);
  }
  }

  addThing(roomindex,thingindex){
    this.all_rooms[roomindex].things[thingindex].count++;
      this.totalArea=0;
     
     this.getTotalArea();
     //this.setRoomIndex(roomindex);
  }
  
  

}
