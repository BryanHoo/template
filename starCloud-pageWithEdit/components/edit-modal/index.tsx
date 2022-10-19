import { Form, Input, Modal } from 'antd'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

export interface IEditModalRef {
  open: (row?: any) => void
}

interface IProps {
  refresh: () => void
}

/** 新增/编辑模块 */
const EditModal: React.ForwardRefRenderFunction<IEditModalRef, IProps> = (
  props,
  ref,
) => {
  const [form] = Form.useForm()
  const { refresh } = props

  const [visible, setVisible] = useState(false)
  const [row, setRow] = useState<any>()

  const onCancel = () => {
    setVisible(false)
  }

  const onOk = async () => {
    refresh()
    onCancel()
  }

  useImperativeHandle(ref, () => ({
    open: (row?: any) => {
      setVisible(true)
      if (row) {
        setRow(row)
      }
    },
  }))

  return (
    <Modal
      title={row ? '编辑' : '新增'}
      visible={visible}
      maskClosable={false}
      destroyOnClose
      onCancel={onCancel}
      onOk={onOk}>
      <Form form={form} layout="vertical" preserve={false}>
        <Form.Item label="label" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default forwardRef(EditModal)
