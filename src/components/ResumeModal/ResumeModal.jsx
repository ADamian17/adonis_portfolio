import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';

import resume from './adonisMartinResume2020.pdf';

const ModalScrollingExample = () => (
  <Modal trigger={<Link to="">resume</Link>}>
    <Modal.Header>Available for Download</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <embed src={resume} frameBorder="0" width="100%" height="500px" />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalScrollingExample;
