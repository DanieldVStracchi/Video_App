import { Component, OnInit } from '@angular/core';
import { HistoryTab } from '../history-tab/history-tab';
import { BookmarkTab } from '../bookmark-tab/bookmark-tab';
import { Searchbar } from '../searchbar/searchbar';
import { VideoViewer } from "../video_viewer/video_viewer";


@Component({
    selector: 'home',
    imports: [Searchbar, HistoryTab, BookmarkTab, VideoViewer],
    templateUrl: 'home.html',
    styleUrls: ['home.css'],
})

export class Home implements OnInit {

    currentUrl: string | null = null;

    historyList: string[] = [] //ARRAY QUE GUARDA LOS URLS BUSCADOS (Y QUE FUNCIONAN)

    ngOnInit(): void {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('searchHistory');
            this.historyList = data ? JSON.parse(data) : [];
        }
    }

    onSearch(url: string) {
        this.currentUrl = url;

        if (url) {  //SE AÑADE EN EL HISTORIAL UNA VEZ COMPRUEBA LA VALIDEZ
            if (!this.historyList !== undefined) {
                this.historyList.push(url);
            }
            if (typeof window !== 'undefined') {    //GUARDA EN LOCALSTORAGE
                localStorage.setItem('searchHistory', JSON.stringify(this.historyList));
            }
        }
    }
}