import SortableTable from '../components/SortableTable'
import { TableConfigModel, TableDataModel } from '../models/tableDataModel'

const TableExample = () => {
    const tableData: TableDataModel[] = [
        { name: 'Turupy', species: 'Exotic Shorthair', age: 4 },
        { name: 'Casar', species: 'Maine Coon', age: 2 },
        { name: 'Bolotou', species: 'Persian', age: 5 },
    ]

    const configData: TableConfigModel[] = [
        {
            header: 'Name',
            render: (data: TableDataModel) => data.name,
            sortedValue: (data: TableDataModel) => data.name,
            dataType: 'string',
        },
        { header: 'Species', render: (data: TableDataModel) => data.species },
        {
            header: 'Age',
            render: (data: TableDataModel) => <p>{data.age} years old</p>,
            sortedValue: (data: TableDataModel) => data.age,
            dataType: 'number',
        },
    ]

    const getKeyForTable = (data: TableDataModel) => {
        return data.name
    }

    return (
        <div>
            <SortableTable
                tableData={tableData}
                config={configData}
                getKey={getKeyForTable}
            />
        </div>
    )
}

export default TableExample
