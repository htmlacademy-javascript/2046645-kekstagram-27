import { uploadForm, clearPristineErrors } from './validation.js';
import { resetPhotoScale } from './scale.js';
import { resetPhotoEffect, resetPhotoEffectSlider } from './effect.js';

const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadClosePopupBtn = uploadForm.querySelector('#upload-cancel');


const showModal = (modal) => {
  document.body.classList.add('modal-open');
  modal.classList.remove('hidden');
};

const closeModal = (modal) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const addPopupCloseHandlers = (closeBtn, closeClickHandler, closeKeydownHandler) => {
  closeBtn.addEventListener('click', closeClickHandler);
  document.addEventListener('keydown', closeKeydownHandler);
};

const removePopupCloseHandlers = (closeBtn, closeClickHandler, closeKeydownHandler) => {
  closeBtn.removeEventListener('click', closeClickHandler);
  document.removeEventListener('keydown', closeKeydownHandler);
};

const closeUploadPopup = () => {
  closeModal(uploadPopup);
  removePopupCloseHandlers(uploadClosePopupBtn, closePopupClickHandler, closePopupKeydownHandler);

  uploadFileInput.value = '';
  uploadForm.reset();

  clearPristineErrors();
  resetPhotoScale();
  resetPhotoEffect();
  resetPhotoEffectSlider();
};

const showUploadPopup = () => {
  showModal(uploadPopup);
  addPopupCloseHandlers(uploadClosePopupBtn, closePopupClickHandler, closePopupKeydownHandler);
};

function closePopupClickHandler() {
  closeUploadPopup();
}

function closePopupKeydownHandler(evt) {
  if (evt.code === 'Escape' && document.activeElement.getAttribute('type') !== 'text' && document.activeElement.tagName !== 'TEXTAREA') {
    closeUploadPopup();
  }
}

uploadFileInput.addEventListener('change', () => {
  showUploadPopup();
});

export {showModal, closeModal, addPopupCloseHandlers, removePopupCloseHandlers, uploadPopup, closeUploadPopup, closePopupKeydownHandler };
