import { Component, Injectable, signal, computed, inject } from '@angular/core';
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

export class Home {

    currentUrl: string | null = null;

    onSearch(url: string) {
        this.currentUrl = url;
    }

}