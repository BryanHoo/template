import { ActionText } from '@fruits-chain/react-bailu'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
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
      render: (_, row) => {
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

  return <Table {...tableProps} columns={columns} rowKey="id" />
}

export default ListTable
