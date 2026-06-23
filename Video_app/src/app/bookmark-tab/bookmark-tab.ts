import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookmarkUrl } from '../home/home';

@Component({
  selector: 'app-bookmark-tab',
  imports: [],
  templateUrl: './bookmark-tab.html',
  styleUrl: './bookmark-tab.css',
})
export class BookmarkTab {
  @Input() bookmarkList: BookmarkUrl[] = [];
  @Output() selectedUrl = new EventEmitter<string>();
  @Output() onDeleteBookmark = new EventEmitter<string>();


  isPopUpOpen = false;
  selectedItem: BookmarkUrl | null = null;

  openPopUp(item: BookmarkUrl) {
    this.selectedItem = item;
    this.isPopUpOpen = true;
  }

  closePopUp() {
    this.isPopUpOpen = false;
    this.selectedItem = null;
  }
}

