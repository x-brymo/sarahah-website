function showToast(type, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 4000,
        customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup custom-swal-popup-'+type,
            header: 'custom-swal-header',
            title: 'custom-swal-title',
            closeButton: 'custom-swal-close-button',
            image: 'custom-swal-image',
            content: 'custom-swal-content',
            input: 'custom-swal-input',
            actions: 'custom-swal-actions',
            confirmButton: 'custom-swal-confirm-button',
            cancelButton: 'custom-swal-cancel-button',
            footer: 'custom-swal-footer'
        }
    });
    Toast.fire({
        type: type,
        html: message
    })
}