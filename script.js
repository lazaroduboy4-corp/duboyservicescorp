const telefonoWhatsApp = "17542365536";

document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        let mensaje = "Hola, soy cliente de Duboy Services Corp.%0A%0A";
        const inputs = form.querySelectorAll("input, textarea");

        inputs.forEach(input => {
            if (input.value && input.type !== "hidden") {
                mensaje += `${input.placeholder || input.name}: ${input.value}%0A`;
            }
        });

        window.open(`https://wa.me/${telefonoWhatsApp}?text=${mensaje}`, "_blank");
        form.submit();
    });
});