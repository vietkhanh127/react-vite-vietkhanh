import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';




const UserTable = (props) => {
    const { dataUsers, loadUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <Space size="middle">
                    <a href='#'> {record._id}</a>

                </Space>
            ),

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true)
                        }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },

    ];
    //console.log(dataUpdate)
    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}

            />
        </>

    )

}

export default UserTable;