import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-history-tab',
  imports: [],
  templateUrl: './history-tab.html',
  styleUrl: './history-tab.css',
})


// Implement ngOnInit() here
export class HistoryTab implements OnInit {


  @Input() historyList: string[] = [];
  @Output() selectedUrl = new EventEmitter<string>(); //eventEmitter funciona como triggers

  private storageListener!: (event: StorageEvent) => void;

constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void{
    this.loadHistory();

    this.storageListener = (event: StorageEvent) => {
      if (event.key === 'searchHistory') {

        this.loadHistory();
      }
    };

    window.addEventListener('storage', this.storageListener);
  }

  private loadHistory(): void{

    const data = this.localStorageService.getItem('searchHistory');
    this.historyList = data ? JSON.parse(data) : [];
  };

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

