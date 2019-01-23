import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    const modalstyle = {display: "block"};
    return ReactDOM.createPortal(
        <div className="modal" style={modalstyle} role="dialog"  >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
            </div>
            <div className="modal-body">{props.content}</div>
            <div className="modal-footer">{props.actions}</div>
          </div>
        </div>
      </div>,
        document.querySelector('#modal')
    );
}

export default Modal;