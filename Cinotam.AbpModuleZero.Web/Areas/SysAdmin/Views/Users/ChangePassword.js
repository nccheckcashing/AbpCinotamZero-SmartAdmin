﻿(function () {
    var modalType = "USER_PASSWORD_CHANGED";

    $(document)
        .ready(function () {

            var $form = $("#changePasswordForm");
            $form.on("submit",
                function (e) {
                    var self = this;
                    e.preventDefault();

                    var confirmPasswordVal = $(".js-confirm-password").val();
                    var passwordVal = $(".js-password").val();

                    if (confirmPasswordVal !== passwordVal) {
                        abp.message.error(LSys("PasswordsNotMatch"), LSys("Error"));
                    } else {
                        var data = $(self).serializeFormToObject();
                        abp.ui.setBusy(form, abp.services.app.user.changePassword(data).done(function () {
                            window.modalInstance.close({}, modalType);
                        }));
                    }
                });
        });

})();