import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.html',
  styleUrl: './history-tab.css',
})


// Implement ngOnInit() here

export class HistoryTab {


  @Input() historyList: string[] = [];
  @Output() selectedUrl = new EventEmitter<string>(); //eventEmitter funciona como triggers

  selectUrl(url: string) {
    this.selectedUrl.emit(url);
  }

}

// Create OnInit() function, and put the EventListener inside it. You're goign to look for 'storage',
// and inside you can put a condition to look for your 'key' that you setup in searchbar.ts
// then you can set historyList to have the values of your localStorage key object.
// You can try getting your localStorage object with historyList = JSON.parse(localStorage.getItem('key') || '[]')

//onSearch -> store item in local storage (localStorage.set)
//on history tab .> retrieve item

//eventListener (checks for storage, )

//when typing an URL, it will send an event to the localStorage

//make the history tab interact with the video viewer, link it similar to search bar

//history tab dynamic