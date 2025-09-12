import { Component } from '@angular/core';
import { ListHeaderComponent } from './list-header/list-header.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../core/models/movie.model';
import { SliderControlComponent } from './slider-control/slider-control.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, ListHeaderComponent, SliderControlComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies: Movie[] = [
    { id: 1, title: 'Show 1', imageUrl: 'assets/shows/1.webp' },
    { id: 2, title: 'Show 2', imageUrl: 'assets/shows/2.webp' },
    { id: 3, title: 'Show 3', imageUrl: 'assets/shows/3.webp' },
    { id: 4, title: 'Show 4', imageUrl: 'assets/shows/4.webp' },
    { id: 5, title: 'Show 5', imageUrl: 'assets/shows/5.jpg' },
    { id: 6, title: 'Show 6', imageUrl: 'assets/shows/6.jpg' },
    { id: 7, title: 'Show 7', imageUrl: 'assets/shows/7.webp' },
    { id: 8, title: 'Show 8', imageUrl: 'assets/shows/8.webp' },
    { id: 9, title: 'Show 9', imageUrl: 'assets/shows/9.webp' },
    { id: 10, title: 'Show 10', imageUrl: 'assets/shows/10.webp' },
    { id: 11, title: 'Show 11', imageUrl: 'assets/shows/11.webp' },
    { id: 12, title: 'Show 12', imageUrl: 'assets/shows/12.jpg' },
    { id: 13, title: 'Show 13', imageUrl: 'assets/shows/13.jpg' },
    { id: 14, title: 'Show 14', imageUrl: 'assets/shows/14.jpg' },
    { id: 15, title: 'Show 15', imageUrl: 'assets/shows/15.webp' },
    { id: 16, title: 'Show 16', imageUrl: 'assets/shows/16.webp' },
    { id: 17, title: 'Show 17', imageUrl: 'assets/shows/17.webp' },
    { id: 18, title: 'Show 18', imageUrl: 'assets/shows/18.jpg' },
    { id: 19, title: 'Show 19', imageUrl: 'assets/shows/19.webp' },
    { id: 20, title: 'Show 20', imageUrl: 'assets/shows/20.jpg' },
    { id: 21, title: 'Show 21', imageUrl: 'assets/shows/21.jpg' },
    { id: 22, title: 'Show 22', imageUrl: 'assets/shows/22.jpg' },
    { id: 23, title: 'Show 23', imageUrl: 'assets/shows/23.webp' },
    { id: 24, title: 'Show 24', imageUrl: 'assets/shows/24.jpg' },
  ];
  isRowHovered = false;
  sliderTotalPages = 0;
  sliderCurrentPage = 0;

  onCardHoverChange(isHovered: boolean): void {
    this.isRowHovered = isHovered;
  }

  onPagesInitialized(totalPages: number): void {
    setTimeout(() => {
      this.sliderTotalPages = totalPages;
    });
  }

  onPageChange(currentPage: number): void {
    this.sliderCurrentPage = currentPage;
  }
}
