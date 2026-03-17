 

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface IPaginationHelper {
  limit: number
  page: number
  totalItems: number
  setPage:(page:number)=>void
}
const PaginationHelper = ({limit=10, page=1, totalItems=0, setPage}:IPaginationHelper) => {
 
  const itemsPerPage = 8
  
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  // Logic to get current items
  const startIndex = (page - 1) * limit 

   const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setPage(page)
    window.scrollTo({ top: 300, behavior: 'smooth' })
  }
  

    return (
         <div className="mt-12 pt-8 border-t border-slate-100">
          <Pagination>
            <PaginationContent className="gap-2">
              
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious 
                  className={`cursor-pointer rounded-xl border-slate-200 transition-colors ${page === 1 ? "pointer-events-none opacity-40" : "hover:bg-[#084399] hover:text-white"}`}
                  onClick={() => handlePageChange(page - 1)} 
                />
              </PaginationItem>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page} className="hidden sm:block">
                  <PaginationLink
                    className={`cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-xl font-bold border-slate-200 transition-all duration-300 ${
                      page === page 
                      ? "bg-[#084399] text-white hover:bg-[#084399] hover:text-white border-[#084399] shadow-lg shadow-[#084399]/20 scale-110" 
                      : "hover:text-[#084399] hover:border-[#084399]"
                    }`}
                    isActive={page === page}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Ellipsis if many pages (Optional logic can be added here) */}
              {totalPages > 5 && <PaginationEllipsis />}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext 
                  className={`cursor-pointer rounded-xl border-slate-200 transition-colors ${page === totalPages ? "pointer-events-none opacity-40" : "hover:bg-[#084399] hover:text-white"}`}
                  onClick={() => handlePageChange(page + 1)} 
                />
              </PaginationItem>

            </PaginationContent>
          </Pagination>
          
          <p className="text-center mt-6 text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} Services
          </p>
        </div>
    );
};

export default PaginationHelper;