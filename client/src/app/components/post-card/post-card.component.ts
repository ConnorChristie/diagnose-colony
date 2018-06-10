import { Component, Input } from '@angular/core';
import { IAuthor } from '../author-list/author-list.component';

export interface IPostCardDetails {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;

  metadata?: string;
  progress?: number;

  contributors: IAuthor[];
}

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() public details: IPostCardDetails;

  constructor() {}

  get link() {
    return ['/stories', this.details.id];
  }
}