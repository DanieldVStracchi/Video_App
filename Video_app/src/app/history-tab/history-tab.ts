import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-history-tab',
  imports: [],
  templateUrl: './history-tab.html',
  styleUrl: './history-tab.css',
})
export class HistoryTab {

  @Input() historyList: string [] = [];

  @Output() selectedUrl = new EventEmitter<string>(); //eventEmitter funciona como triggers

  selectUrl(url: string){
    this.selectedUrl.emit(url);
  }

}


//onSearch -> store item in local storage (localStorage.set)
//on history tab .> retrieve item 

//eventListener (checks for storage, )