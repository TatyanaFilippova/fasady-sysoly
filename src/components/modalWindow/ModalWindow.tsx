import React from "react";
import Modal from "react-modal";
import close from "./img/Close.png";
import qr from "./img/QR.png";
import {
  CloseImg,
  Wrapper,
  Shell,
  Title,
  Content,
  QrImg,
  Link,
} from "@/app/../components/modalWindow/ModalWindow.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#Modal");

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function ModalWindow({ isOpen, setIsOpen }: Props) {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Shell>
          <button onClick={closeModal}>
            <CloseImg src={close.src} />
          </button>
          <Wrapper>
            <div>
              <QrImg src={qr.src} />
            </div>
            <Title>https://vk.com/centrcveta</Title>
            <form>
              <Content>
                Чтобы заказать фасад, услугу или просто задать вопрос, напишите
                нам в Вк
              </Content>
              <Link
                href="https://vk.com/centrcveta?from=groups"
                target="_blank"
                rel="noopener noreferrer"
              >
                Перейти
              </Link>
            </form>
          </Wrapper>
        </Shell>
      </Modal>
    </div>
  );
}

export default ModalWindow;
