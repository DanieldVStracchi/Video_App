import { Component, OnInit, NgModule, inject } from '@angular/core';
import { HistoryTab } from '../history-tab/history-tab';
import { BookmarkTab } from '../bookmark-tab/bookmark-tab';
import { Searchbar } from '../searchbar/searchbar';
import { VideoViewer } from "../video_viewer/video_viewer";
import { Icons } from '../icons/icons';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';

export interface BookmarkUrl {
    url: string;
    bookmarkedAt: string; // Guardará la fecha y hora
}
@Component({
    selector: 'home',
    imports: [Searchbar, HistoryTab, BookmarkTab, VideoViewer, Icons],
    templateUrl: 'home.html',
    styleUrls: ['home.css'],
})

export class Home implements OnInit {

    private http = inject(HttpClient);
    currentUrl: string | null = null;

    historyList: string[] = [] //ARRAY QUE GUARDA LOS URLS BUSCADOS (Y QUE FUNCIONAN)
    bookmarkList: BookmarkUrl[] = [] //LO MISMO PERO PARA LOS URLS QUE SE QUIERAN GUARDAR

    ngOnInit(): void {  //PARA CARGAR LOS DATOS TANTO DE HISTORIAL COMO DE BOORKMARK
        /* if (typeof window !== 'undefined') {
             //HISTORY 
             const data = localStorage.getItem('searchHistory');
             this.historyList = data ? JSON.parse(data) : [];
 
             //BOOKMARK (ES LO MISMO)
             const bookmarkData = localStorage.getItem('bookmarks');
             this.bookmarkList = bookmarkData ? JSON.parse(bookmarkData) : [];
         }*/

        this.http.get('http://localhost:8000/history').subscribe((res: any) => {
            console.log(res);
            this.historyList = res
        });

        fetch('http://localhost:8000/bookmarks')
            .then(response => response.json())
            .then(data => {
                this.bookmarkList = data;
                console.log('BOOKMARK RECIEVED FROM SERVER', data);
            })

    }

    onSearch(url: string) {
        this.currentUrl = url;

        if (url && url.trim() !== '') {  //SE AÑADE EN EL HISTORIAL UNA VEZ COMPRUEBA LA VALIDEZ
            /*if (!this.historyList.includes(url)) {
                this.historyList = [...this.historyList, url];
                if (typeof window !== 'undefined') {    //GUARDA EN LOCALSTORAGE
                    localStorage.setItem('searchHistory', JSON.stringify(this.historyList));
                }
            }*/

            const bodyData = { url: url };
            this.http.post('http://localhost:8000/history', bodyData).subscribe((res: any) => {
                console.log('res = ', res);
            })

            // fetch('http://localhost:8000/history', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application.json'
            //     },
            //     body: JSON.stringify(bodyData)
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('URL SAVED', data)
            //         this.ngOnInit();
            //     })
        }
    }
    urlBookmarked(): boolean {  //BOOLEAN DE SI EXISTE O NO EL URL EN BOOKMARKS
        if (!this.currentUrl) return false;
        return this.bookmarkList.some(item => item.url === this.currentUrl);
    }

    modifyBookmark() {
       /* if (!this.currentUrl) return;

        if (this.urlBookmarked()) {
            this.deleteBookmark(this.currentUrl);
        } else {
            const newItem: BookmarkUrl = {
                url: this.currentUrl, bookmarkedAt: new Date().toLocaleString()
            };
            this.bookmarkList = [...this.bookmarkList, newItem];
            this.saveBookmark();
        }*/

        fetch('http://localhost:8000/bookmarks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: this.currentUrl })
        })
            .then(res => res.json())
            .then(() => this.ngOnInit());
    }

    deleteBookmark(url: string) {
        this.bookmarkList = this.bookmarkList.filter(item => item.url !== url);
        this.saveBookmark();

       /* this.http.delete('{API_URL}/bookmarks/${item.id}').subscribe(() => {
            console.log('DELETING FROM BOOKMARKS')
            this.loadBookmarks()
        })*/
    }

    saveBookmark() {
        if (typeof window !== 'undefined') {
            localStorage.setItem('bookmarks', JSON.stringify(this.bookmarkList));
        }
    }
}

