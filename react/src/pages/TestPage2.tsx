import React, { useState } from "react";
import Button from "@components/widgets/Button";
import Divider from "@components/widgets/Divider";
import Form from "@components/widgets/Form";
import Input from "@components/widgets/Input";
import Modal from "@components/widgets/Modal";
import Select from "@components/widgets/Select";

function Testpage2() {
  const [modalOpen, setModalOpen] = useState(false);
  const [okOpen, setOkOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const openOk = () => {
    setOkOpen(true);
  };
  const closeOk = () => {
    setOkOpen(false);
  };

  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        <Input width="150px" />
        <Input width="150px" disabled />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Select width="150px">
          <option>option 1</option>
          <option>option 1</option>
          <option>option 1</option>
        </Select>
        <Select width="150px" disabled>
          <option>option 1</option>
          <option>option 1</option>
          <option>option 1</option>
        </Select>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Button btnType="primary">Primary Button</Button>
        <Button btnType="default">Default Button</Button>
        <Button btnType="success">Success Button</Button>
        <Button btnType="warning">Warning Button</Button>
        <Button btnType="danger">Danger Button</Button>
        <Button btnType="disabled">Disabled Button</Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Button onClick={openModal}>DefaultmodalOpen</Button>
        <Button onClick={openOk}>OkCanclemodalOpen</Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <h4>form</h4>
        <Form
          name={"form"} // 라벨 이름
          inputId={"input"} // 인풋 아이디
          required // 필수일때 작성 아니면 비워도됨
          vertical // label input 수평 수직
        />
        <div>
          <Form
            name={"form"} // 라벨 이름
            inputId={"input"} // 인풋 아이디
          />
        </div>
      </div>
      {modalOpen && (
        <Modal
          open={modalOpen}
          close={closeModal}
          header={"modal header"}
          type={"default"}
        >
          modal contents
        </Modal>
      )}
      {okOpen && (
        <Modal
          open={okOpen} //모달 열기 함수
          close={closeOk} // 모달 닫기 함수
          onClick={closeOk} // 확인버튼 클릭시 실행함수
          header={"modal header"} //모달 헤더
          type={"okCancle"} // 모달 타입 (default,okCancle)
        >
          modal contents
        </Modal>
      )}
      <Divider />
    </div>
  );
}

export default Testpage2;
