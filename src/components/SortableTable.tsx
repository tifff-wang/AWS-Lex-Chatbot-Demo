import Table from './Table'
import { TableConfigModel, TableDataModel } from '../models/tableDataModel'
import { FaSort } from 'react-icons/fa'
import { FaSortAlphaDown } from 'react-icons/fa'
import { FaSortAlphaDownAlt } from 'react-icons/fa'
import useSortableData from '../hooks/useSortableData'

interface TableProps {
    tableData: TableDataModel[]
    config: TableConfigModel[]
    getKey: (data: TableDataModel) => string
}

const SortableTable = ({ config, tableData, getKey }: TableProps) => {
    const { sortedData, sortBy, sortOrder, setSorting } = useSortableData(
        tableData,
        config
    )

    const updatedConfig = config.map((column) => {
        if (!column.sortedValue) {
            return column
        }

        const sortIcon = () => {
            if (sortBy === column.header) {
                if (sortOrder === 'asc') {
                    return column.dataType === 'number' ? (
                        '▲'
                    ) : (
                        <FaSortAlphaDownAlt />
                    )
                } else if (sortOrder === 'desc') {
                    return column.dataType === 'number' ? (
                        '▼'
                    ) : (
                        <FaSortAlphaDown />
                    )
                }
            }
            return <FaSort />
        }

        return {
            ...column,
            specialHeader: () => (
                <th onClick={() => setSorting(column.header)}>
                    {column.header} {sortIcon()}
                </th>
            ),
        }
    })

    return (
        <Table config={updatedConfig} tableData={sortedData} getKey={getKey} />
    )
}

export default SortableTable
