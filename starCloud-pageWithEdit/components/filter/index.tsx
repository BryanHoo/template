import { SearchFormLayout } from '@fruits-chain/react-bailu'
import { Button, Form, Input } from 'antd'
import type { FormInstance } from 'antd/es/form'
import type { FC } from 'react'
import React from 'react'

interface IProps {
  submit: () => void
  reset: () => void
  form: FormInstance<any>
}

/** 列表搜索 */
const ListFilter: FC<IProps> = props => {
  const { submit, reset, form } = props

  return (
    <Form form={form}>
      <SearchFormLayout.Row>
        <SearchFormLayout.Col>
          <Form.Item label="label" name="name">
            <Input allowClear />
          </Form.Item>
        </SearchFormLayout.Col>
        <SearchFormLayout.Col>
          <Form.Item>
            <SearchFormLayout.Space>
              <Button type="primary" onClick={submit}>
                搜索
              </Button>
              <Button type="default" onClick={reset}>
                重置
              </Button>
            </SearchFormLayout.Space>
          </Form.Item>
        </SearchFormLayout.Col>
      </SearchFormLayout.Row>
    </Form>
  )
}

export default ListFilter
