document.addEventListener('DOMContentLoaded', function() {
    const abstractCheckboxes = document.querySelectorAll('.abstract-checkbox');
    abstractCheckboxes.forEach(currentCheckbox => {
        currentCheckbox.addEventListener('change', function() {
            if (this.checked) {
                abstractCheckboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
});