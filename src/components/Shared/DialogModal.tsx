import { useState } from "react";
import ReactModal from "react-modal";
import CancelIcon from "../../assets/icons/cancel-google-fonts.svg";

type DialogModalProps = {
  title?: string;
  /* If isOpen is not provided, by default Dialog will be opened and be closed on request */
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: {
    overlay?: ReactModal.Styles["overlay"];
    content?: ReactModal.Styles["content"];
  };
};

const DialogModal = (props: DialogModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    props.onClose();
  };

  return (
    <ReactModal
      isOpen={props.isOpen !== undefined ? props.isOpen : isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      ariaHideApp={false}
      closeTimeoutMS={150}
      style={{
        overlay: {
          // Blur Background
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          transition: "background-color 0.2s ease-in-out",
          ...props.style?.overlay,
        },
        content: {
          margin: "auto",
          maxWidth: "800px",
          minWidth: "fit-content",
          ...props.style?.content,
        },
      }}
    >
      <div className="flex flex-col gap-4 w-full h-full">
        <div className=" flex flex-wrap justify-center items-center gap-5 p-2 border-b border-slate-200">
          <div className="text-xl flex-grow text-left">{props.title}</div>

          <div
            className="cursor-pointer hover:bg-slate-50 rounded-full p-2 transition-all"
            onClick={handleClose}
          >
            <img
              src={CancelIcon}
              height={30}
              width={30}
              alt="Cancel"
              className="opacity-70 hover:opacity-100 transition-all"
            />
          </div>
        </div>

        <div className="p-5 flex-grow">{props.children}</div>

        <div className="w-full text-center py-4 p-2 border-t border-slate-200">
          <button
            className="bg-slate-300 text-white rounded-md py-1 px-3 hover:bg-slate-400 transition-all"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default DialogModal;
