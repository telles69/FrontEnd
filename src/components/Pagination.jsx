import { HStack, Stack, Text, Box } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination"
import { useState } from "react"

export default function Pagination({datalength, pageSize, page, setPage}) {

const count = datalength

  return (
    <Box mb="1">
      <PaginationRoot
        page={page}
        count={count}
        pageSize={pageSize}
        onPageChange={(e) => setPage(e.page)}
        siblingCount={2}
        defaultPage={1}
      >
        <HStack>
          <PaginationPrevTrigger onClick={() => setPage(prev => Math.max(prev - 1, 1))}/>
          <PaginationItems />
          <PaginationNextTrigger onClick={() => setPage(prev => Math.min(prev + 1, Math.ceil(datalength / pageSize)))}/>
        </HStack>
      </PaginationRoot>
      </Box>
  )

}