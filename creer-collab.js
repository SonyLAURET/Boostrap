function openModal() {
    document.getElementById('#modalId').on('shown.bs.modal', function () {
        document.getElementById('#create').trigger('focus')
    })
}