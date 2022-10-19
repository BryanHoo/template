import type { ColumnsType } from '@fruits-chain/react-bailu'
import { Table } from '@fruits-chain/react-bailu'
import type { FC } from 'react'
import React from 'react'

interface IProps {
  tableProps: any
  refresh: () => void
}

const ListTable: FC<IProps> = props => {
  const { tableProps } = props

  const columns: ColumnsType<any> = [
    { title: 'title', dataIndex: 'name' },
    {
      title: '操作',
      dataIndex: 'action',
      render: (value, row) => {
        return null
      },
    },
  ]

  return <Table {...tableProps} columns={columns} bordered showEmpty rowKey="id" />
}

export default ListTable
