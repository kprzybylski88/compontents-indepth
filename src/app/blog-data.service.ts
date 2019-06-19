import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  getData(): BlogPost[][] {
    return [
      [
        {title: 'Post title 1', summary: 'Post summary 1'},
        {title: 'Post title 2', summary: 'Post summary 2'},
        {title: 'Post title 3', summary: 'Lorem ipsum dolor,\
         sit amet consectetur adipisicing elit. Veniam a\
         inventore, quis reiciendis blanditiis tenetur\
         nihil error ratione. Ipsum sint culpa similique\
         expedita impedit cupiditate, doloremque a explicabo\
         delectus dolorem. Lorem ipsum dolor, sit amet\
         consectetur adipisicing elit. Veniam a inventore,\
         quis reiciendis blanditiis tenetur nihil error\
         ratione. Ipsum sint culpa similique expedita\
         impedit cupiditate, doloremque a explicabo delectus dolorem.'},
        {title: 'Post title 4', summary: 'Lorem ipsum dolor,\
         sit amet consectetur adipisicing elit. Veniam a\
        inventore, quis reiciendis blanditiis tenetur nihil\
        error ratione. Ipsum sint culpa similique expedita\
        impedit cupiditate, doloremque a explicabo delectus\
        dolorem. Lorem ipsum dolor, sit amet consectetur\
        adipisicing elit. Veniam a inventore, quis reiciendis\
        blanditiis tenetur nihil error ratione. Ipsum sint\
        culpa similique expedita impedit cupiditate,\
        doloremque a explicabo delectus dolorem.'}
      ],
      [
        {title: 'Post title 5', summary: 'Post summary 1'},
        {title: 'Post title 6', summary: 'Post summary 2'},
        {title: 'Post title 7', summary: 'Lorem ipsum dolor,\
        sit amet consectetur adipisicing elit. Veniam a\
       inventore, quis reiciendis blanditiis tenetur nihil\
       error ratione. Ipsum sint culpa similique expedita\
       impedit cupiditate, doloremque a explicabo delectus\
       dolorem. Lorem ipsum dolor, sit amet consectetur\
       adipisicing elit. Veniam a inventore, quis reiciendis\
       blanditiis tenetur nihil error ratione. Ipsum sint\
       culpa similique expedita impedit cupiditate,\
       doloremque a explicabo delectus dolorem.'},
        {title: 'Post title 8', summary: 'Lorem ipsum dolor,\
        sit amet consectetur adipisicing elit. Veniam a\
       inventore, quis reiciendis blanditiis tenetur nihil\
       error ratione. Ipsum sint culpa similique expedita\
       impedit cupiditate, doloremque a explicabo delectus\
       dolorem. Lorem ipsum dolor, sit amet consectetur\
       adipisicing elit. Veniam a inventore, quis reiciendis\
       blanditiis tenetur nihil error ratione. Ipsum sint\
       culpa similique expedita impedit cupiditate,\
       doloremque a explicabo delectus dolorem.'}
      ],
      [
        {title: 'Post title 9', summary: 'Post summary 1'},
        {title: 'Post title 10', summary: 'Post summary 2'},
        {title: 'Post title 11', summary: 'Lorem ipsum dolor,\
       sit amet consectetur adipisicing elit. Veniam a\
       inventore, quis reiciendis blanditiis tenetur nihil\
       error ratione. Ipsum sint culpa similique expedita\
       impedit cupiditate, doloremque a explicabo delectus\
       dolorem. Lorem ipsum dolor, sit amet consectetur\
       adipisicing elit. Veniam a inventore, quis reiciendis\
       blanditiis tenetur nihil error ratione. Ipsum sint\
       culpa similique expedita impedit cupiditate,\
       doloremque a explicabo delectus dolorem.'},
        {title: 'Post title 12', summary: 'Lorem ipsum dolor,\
        sit amet consectetur adipisicing elit. Veniam a\
       inventore, quis reiciendis blanditiis tenetur nihil\
       error ratione. Ipsum sint culpa similique expedita\
       impedit cupiditate, doloremque a explicabo delectus\
       dolorem. Lorem ipsum dolor, sit amet consectetur\
       adipisicing elit. Veniam a inventore, quis reiciendis\
       blanditiis tenetur nihil error ratione. Ipsum sint\
       culpa similique expedita impedit cupiditate,\
       doloremque a explicabo delectus dolorem.'}
      ]
    ];
  }
  constructor() {

   }
}
