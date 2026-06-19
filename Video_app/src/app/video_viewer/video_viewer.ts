import { Component, inject, Injectable, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-viewer',
  standalone: true,
  imports: [],
  templateUrl: './video_viewer.html',
  styleUrl: './video_viewer.css',
})


export class VideoViewer {

  workingUrl: SafeResourceUrl | null = null; 

  constructor(private sanitizer: DomSanitizer) { // algo para controlar que no sea dañino el url?
    this.workingUrl = this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');
  } 

  @Input() set rawUrl(url: string | null){
      if(url) this.updateVideoUrl(url);
  }

  updateVideoUrl(rawUrl: string) {
    const videoId = this.extractYouTubeId(rawUrl);

  if (videoId) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    // Crucial: Mark the URL as trusted
    this.workingUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  } 
  }

  private extractYouTubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
}