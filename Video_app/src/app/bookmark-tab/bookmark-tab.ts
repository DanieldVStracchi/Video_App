import { Component, Input, Output, EventEmitter} from '@angular/core';
import { BookmarkUrl } from '../home/home';
import { Icons } from '../icons/icons';

@Component({
  selector: 'app-bookmark-tab',
  imports: [Icons],
  templateUrl: './bookmark-tab.html',
  styleUrl: './bookmark-tab.css',
})

export class BookmarkTab {
  @Input() bookmarkList: BookmarkUrl[] = [];
  @Output() selectedUrl = new EventEmitter<string>();
  @Output() onDeleteBookmark = new EventEmitter<string>();


  isPopUpOpen = false;
  isDeletePopUpOpen = false;
  selectedItem: BookmarkUrl | null = null;

  openPopUp(item: BookmarkUrl) {
    this.selectedItem = item;
    this.isPopUpOpen = true;
  }

  openDeletePopUp(item: BookmarkUrl) {
    this.selectedItem = item;
    this.isDeletePopUpOpen = true;
  }

  confirmDeletePopUp(){
    if(this.selectedItem){
      this.onDeleteBookmark.emit(this.selectedItem.url)
    }
    this.closePopUp();
  }

  closePopUp() {
    this.isPopUpOpen = false;
    this.isDeletePopUpOpen = false;
    this.selectedItem = null;
  }
}

