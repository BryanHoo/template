import type { ColumnsType } from '@fruits-chain/react-bailu'
import { ActionText, Table } from '@fruits-chain/react-bailu'
import type { FC } from 'react'
import React from 'react'

interface IProps {
  tableProps: any
  refresh: () => void
  openEdit: (row?: any) => void
}

const ListTable: FC<IProps> = props => {
  const { tableProps, openEdit } = props

  const columns: ColumnsType<any> = [
    { title: 'title', dataIndex: 'name' },
    {
      title: '操作',
      dataIndex: 'action',
      render: (value, row) => {
        return (
          <ActionText.Group>
            <ActionText
              status="primary"
              text="编辑"
              onClick={() => openEdit(row)}
            />
          </ActionText.Group>
        )
      },
    },
  ]

  return (
    <Table {...tableProps} columns={columns} bordered showEmpty rowKey="id" />
  )
}

export default ListTable
