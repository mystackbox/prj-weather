import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-btn',
  standalone: false,
  templateUrl: './share-btn.component.html',
  styleUrl: './share-btn.component.scss',
})
export class ShareBtnComponent {
  @Input() url: string = typeof window !== 'undefined' ? window.location.href : '';
  @Input() title: string = '';

  isNativeSupported = typeof navigator !== 'undefined' && !!navigator.share;

  share(platformName: string) {
    const encodedUrl = encodeURIComponent(this.url);
    const encodedTitle = encodeURIComponent(this.title);

    let shareUrl = '';

    switch (platformName) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;

      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;

      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;

      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=500');
  }

  nativeShare() {
    if (this.isNativeSupported) {
      navigator.share({
        title: this.title,
        url: this.url
      });
    }
  }
}
