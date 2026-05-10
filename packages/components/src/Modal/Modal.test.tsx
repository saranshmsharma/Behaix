import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, ModalDescription } from './Modal';

test('renders modal when open', () => {
  render(
    <Modal isOpen={true}>
      <ModalHeader>
        <ModalTitle>Test Modal</ModalTitle>
        <ModalDescription>This is a test description</ModalDescription>
      </ModalHeader>
      <ModalBody>Content</ModalBody>
      <ModalFooter>Footer</ModalFooter>
    </Modal>
  );

  expect(screen.getByText('Test Modal')).toBeInTheDocument();
  expect(screen.getByText('This is a test description')).toBeInTheDocument();
  expect(screen.getByText('Content')).toBeInTheDocument();
  expect(screen.getByText('Footer')).toBeInTheDocument();
});

test('calls onClose when close button is clicked', () => {
  const onClose = vi.fn();
  render(
    <Modal isOpen={true} onClose={onClose}>
      <ModalHeader>
        <ModalTitle>Test Modal</ModalTitle>
      </ModalHeader>
    </Modal>
  );

  const closeButton = screen.getByRole('button', { name: /close modal/i });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalledTimes(1);
});
