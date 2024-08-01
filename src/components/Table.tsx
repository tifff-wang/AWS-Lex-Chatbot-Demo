import { Fragment } from 'react/jsx-runtime'
import { TableConfigModel, TableDataModel } from '../models/tableDataModel'

interface TableProps {
    tableData: TableDataModel[]
    config: TableConfigModel[]
    getKey: (data: TableDataModel) => string
}

const Table = ({ tableData, config, getKey }: TableProps) => {
    const renderedHeadingRow = config.map((column) => {
        if (column.specialHeader) {
            return (
                <Fragment key={column.header}>
                    {column.specialHeader()}
                </Fragment>
            )
        }
        return (
            <th className="table-header" key={column.header}>
                <div className='header-content'>{column.header}</div>
            </th>
        )
    })

    const renderedBodyRow = tableData.map((row) => {
        const renderedBodyCells = config.map((column) => {
            return (
                <td className="table-cells" key={column.header}>
                    {column.render(row)}
                </td>
            )
        })

        return (
            <tr className="body-row" key={getKey(row)}>
                {renderedBodyCells}
            </tr>
        )
    })

    return (
        <table className="table-container">
            <thead>
                <tr className="header-row">{renderedHeadingRow}</tr>
            </thead>
            <tbody>{renderedBodyRow}</tbody>
        </table>
    )
}

export default Table
