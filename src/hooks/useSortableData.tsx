import { useState } from 'react'
import { TableConfigModel, TableDataModel } from '../models/tableDataModel'

const useSortableData = (
    tableData: TableDataModel[],
    config: TableConfigModel[]
) => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)
    const [sortBy, setSortBy] = useState<string | null>(null)

    const setSorting = (header: string) => {
        if (sortBy === header && sortOrder === 'asc') {
            setSortOrder('desc')
        } else if (sortBy === header && sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        } else {
            setSortBy(header)
            setSortOrder('asc')
        }
    }

    let sortedData = [...tableData]
    if (sortOrder && sortBy) {
        const configItem = config.find((column) => column.header === sortBy)
        if (configItem && configItem.sortedValue) {
            sortedData.sort((a, b) => {
                const valueA = configItem.sortedValue!(a)
                const valueB = configItem.sortedValue!(b)
                const reverseOrder = sortOrder === 'asc' ? 1 : -1

                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    return valueA.localeCompare(valueB) * reverseOrder
                } else if (
                    typeof valueA === 'number' &&
                    typeof valueB === 'number'
                ) {
                    return (valueA - valueB) * reverseOrder
                } else {
                    return 0
                }
            })
        }
    }

    return { sortedData, sortBy, sortOrder, setSorting }
}

export default useSortableData
