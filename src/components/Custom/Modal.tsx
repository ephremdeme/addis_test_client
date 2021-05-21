import styled, { css } from "styled-components";

const Modal = styled.div`
  z-index: auto;
  position: fixed;
  top: ${({ show }: { show: boolean }) => (show ? "0px" : "-1000px")};
  height: 100%;
  width: 100%;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  padding: "1rem";
  transition: all 0.3s ease-out;
`;
const ModalContainer = styled.div<{ flat?: boolean }>`
  max-width: 600px;
  display: flex;
  max-height: calc(100% - 64px);
  flex-direction: column;
  margin: 32px;
  position: relative;
  overflow-y: auto;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${(props) =>
    !props.flat &&
    css`
      width: calc(100% - 64px);
      box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
        0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.87);
      background-color: #fff;
    `}
`;

export const ModalDialogue: React.FC<{
  flat?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, children, setOpen, flat }) => {
  return (
    <div onClick={() => setOpen(false)}>
      <Modal show={open}>
        <ModalContainer flat={flat} onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ModalDialogue;
