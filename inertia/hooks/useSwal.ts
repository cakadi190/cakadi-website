import Swal, { SweetAlertOptions } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export type InitSweetalertType = SweetAlertOptions & {
  coloredConfirmButton?: boolean;
  coloredCancelButton?: boolean;
  coloredDenyButton?: boolean;
};

type ButtonType = string;

/**
 * Hook for SweetAlert2 integration with React components.
 * Provides utility functions for displaying various types of alerts.
 *
 * @returns {Object} - An object containing functions to display alerts.
 */
export const useSweetalert = () => {
  // Integrates SweetAlert2 with React content.
  const swal = withReactContent(Swal);

  /**
   * Initializes and displays a SweetAlert with the given options.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const initSweetalert = (options: InitSweetalertType) => {
    const confirmButton: ButtonType = options.coloredConfirmButton ? {
      info: 'btn btn-info',
      success: 'btn btn-success',
      error: 'btn btn-danger',
      warning: 'btn btn-warning',
      question: 'btn btn-warning',
    }[options.icon || 'info'] : 'btn btn-light';

    const cancelButton: ButtonType = options.coloredCancelButton ? {
      info: 'btn btn-info',
      success: 'btn btn-success',
      error: 'btn btn-danger',
      warning: 'btn btn-warning',
      question: 'btn btn-warning',
    }[options.icon || 'info'] : 'btn btn-light';

    const denyButton: ButtonType = options.coloredDenyButton ? {
      info: 'btn btn-info',
      success: 'btn btn-success',
      error: 'btn btn-danger',
      warning: 'btn btn-warning',
      question: 'btn btn-warning',
    }[options.icon || 'info'] : 'btn btn-light';

    return swal.fire({
      reverseButtons: options.reverseButtons || false,
      customClass: {
        actions: 'd-flex',
        confirmButton,
        cancelButton,
        denyButton,
      },
      ...options,
    });
  };

  /**
   * Displays a success alert.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalSuccess = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'success' });
  };

  /**
   * Displays an error alert.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalError = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'error' });
  };

  /**
   * Displays an info alert.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalInfo = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'info' });
  };

  /**
   * Displays a warning alert.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalWarning = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'warning' });
  };

  /**
   * Displays a question alert.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalQuestion = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'question' });
  };

  /**
   * Displays an alert with a callback on confirmation.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @param {Function} callback - The callback function executed on confirmation.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalVariantWithCallback = (options: InitSweetalertType, callback: () => void) => {
    return initSweetalert({ ...options }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
      return result;
    });
  };

  return {
    swalSuccess,
    swalError,
    swalInfo,
    swalWarning,
    swalQuestion,
    swalVariantWithCallback,
  };
};
