import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  currentPage: number;
  blogPosts: BlogPost[][] = [];
  @ViewChildren('tile') blogPostTileChild: QueryList<BlogPostTileComponent>;
  expColl = 'Expand all';
  favUnfav = 'Favorite all';

  constructor(private blogDataService: BlogDataService) {
    this.blogPosts = blogDataService.getData();
  }

  ngOnInit() {
    this.currentPage = 0;
  }
  updatePage(newPage) {
    this.currentPage = newPage;
  }
  expandAll() {
    if (this.expColl === 'Expand all') {
      this.blogPostTileChild.forEach(e => e.showFullText(true));
      this.expColl = 'Collapse all';
    } else {
      this.blogPostTileChild.forEach(e => e.showFullText(false));
      this.expColl = 'Expand all';
    }
    // console.log(this.blogPostTileChild.toArray());
  }

  toggleFavAll() {
    this.blogPosts[this.currentPage].forEach(post => post.isFav = !post.isFav);
    if (this.favUnfav === 'Favorite all') {
      this.favUnfav = 'Unfavorite all';
    } else {
      this.favUnfav = 'Favorite all';
    }
  }

}
