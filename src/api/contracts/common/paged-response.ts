import type { ApiResponse } from "./api-response";

export interface PagedResponse<T> extends ApiResponse<T[]> {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}
