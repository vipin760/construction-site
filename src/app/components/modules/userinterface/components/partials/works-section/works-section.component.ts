import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWorksCard } from 'src/app/components/store/interface/IProduct.interface';
import { worksData } from 'src/app/components/store/data/data';

@Component({
  selector: 'app-works-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works-section.component.html',
  styleUrls: ['./works-section.component.css']
})
export class WorksSectionComponent implements OnInit {
  worksData: IWorksCard[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  ngOnInit(): void {
    this.worksData = worksData;
  }

  get paginatedWorksData(): IWorksCard[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.worksData.slice(startIndex, endIndex);
  }
  get totalPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  get totalPages(): number {
    return Math.ceil(this.worksData.length / this.itemsPerPage);
  }

  submit() {
    console.log(this.worksData.length);
  }
}
