import { Button, Input, notification, Modal } from "antd"
import { useEffect, useState } from "react"
import { upadateUserAPI } from "../../services/api.service"

const UpdateUserModal = (props) => {

    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props

    useEffect(() => {
        console.log('test', dataUpdate)
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])
    const handleClickBtn = async () => {

        const res = await upadateUserAPI(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Update user thành công"
            })

            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setPhone("")
        setId("")
        setDataUpdate(null)
    }
    return (
        <Modal
            title="Update User"
            open={isModalUpdateOpen}
            onOk={() => handleClickBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"SAVE"}>
            {/* <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p> */}
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>
                        Id
                    </span>
                    <Input value={id}
                        disabled />
                </div>
                <div>
                    <span>
                        FullName
                    </span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)} />
                </div>
                <div>
                    <span>
                        Phone number
                    </span>
                    <Input value={phone}
                        onChange={(event) => setPhone(event.target.value)} />
                </div>

            </div>
        </Modal>
    )

}

export default UpdateUserModal