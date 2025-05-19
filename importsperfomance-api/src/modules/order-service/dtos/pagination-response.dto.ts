export class PaginationResponseDTO {
  constructor(page: number, totalPages: number) {
    page = Number(page);
    totalPages = Number(totalPages);
  }

  page: number;
  totalPages: number;
}
