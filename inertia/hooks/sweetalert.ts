import Swal, { SweetAlertOptions } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export type InitSweetalertType = SweetAlertOptions & {
  coloredConfirmButton?: boolean;
  coloredCancelButton?: boolean;
  coloredDenyButton?: boolean;
};

type ButtonType = string;

export const useSweetalert = () => {
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

    return withReactContent(Swal).fire({
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
   * Displays a success alert with an optional callback.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalSuccess = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'success' });
  };

  /**
   * Displays an error alert with an optional callback.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalError = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'error' });
  };

  /**
   * Displays an info alert with an optional callback.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalInfo = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'info' });
  };

  /**
   * Displays a warning alert with an optional callback.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalWarning = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'warning' });
  };

  /**
   * Displays a question alert with an optional callback.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @returns {Promise<SweetAlertResult>} - A promise that resolves when the alert is closed.
   */
  const swalQuestion = (options: InitSweetalertType) => {
    return initSweetalert({ ...options, icon: 'question' });
  };

  /**
   * Displays an alert with a specified variant and executes a callback on confirmation.
   * @param {InitSweetalertType} options - The options for the SweetAlert.
   * @param {Function} callback - The callback function to be executed on confirmation.
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
