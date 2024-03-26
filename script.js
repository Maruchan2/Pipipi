document.addEventListener('DOMContentLoaded', function () {
        const nombreInput = document.getElementById('nombre');
            const emailInput = document.getElementById('email');
                const comentarioInput = document.getElementById('comentario');

                    nombreInput.addEventListener('focus', function () {
                            if (this.value === 'Nombre') {
                                        this.value = '';
                                                }
                                                    });

                                                        emailInput.addEventListener('focus', function () {
                                                                if (this.value === 'Correo electrónico') {
                                                                            this.value = '';
                                                                                    }
                                                                                        });
                                                                                        });
})