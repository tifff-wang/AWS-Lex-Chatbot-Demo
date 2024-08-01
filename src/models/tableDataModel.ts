export interface TableDataModel {
    name: string
    species: string
    age: number
}

export interface TableConfigModel {
    header: string
    render: (data: TableDataModel) => React.ReactNode
    sortedValue?: (data: TableDataModel) => React.ReactNode
    specialHeader?: () => React.ReactNode
    dataType?: 'number' | 'string'
}
