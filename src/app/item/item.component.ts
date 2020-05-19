import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() items;
  @Output() getUsage = new EventEmitter<number>();
  @Output() getSpace = new EventEmitter<number>();
  usage;
  inc = faPlus;
  dec = faMinus;

  totalSpace = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  setUsage(usage){
    this.usage = usage;
    this.getUsage.emit(this.usage);
    this.getSpace.emit(this.totalSpace);
  }

  getUsageClass(index){
    if(index != undefined){
      return this.usage === index?'selected':'';
    }else{
      return '';
    }
  }

  calcSpace(){
    this.totalSpace = 0;
    for(let item of this.items){
      this.totalSpace+=item.areareq*item.count;
    }
  }

  addCount(index){
    
    this.items[index].count++;
    this.calcSpace();
  }

  delCount(index){
    let count = this.items[index].count;
    if(count>0){
      this.items[index].count--;
      this.calcSpace();
    }

  }
}
