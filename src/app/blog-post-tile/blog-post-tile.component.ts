import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';
import { isUndefined } from 'util';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost;
  displayText: string;
  expanded = false;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {

    this.displayText = this.truncatePipe.transform(this.post.summary);

  }

  showFullText(setFullDisplay?: boolean) {
    if (isUndefined(setFullDisplay)) {
      this.displayText = this.expanded ? this.truncatePipe.transform(this.post.summary) : this.post.summary;
      this.expanded = !this.expanded;
    } else {
      this.expanded = setFullDisplay;
      this.displayText = setFullDisplay ? this.post.summary : this.truncatePipe.transform(this.post.summary);
    }
  }

  toggleFav() {
    this.post.isFav = !this.post.isFav;
  }

}
