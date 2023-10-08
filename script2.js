const imagenes = document.querySelectorAll("img");

        imagenes.forEach((imagen) => {
            imagen.onclick = ()=>{
                localStorage.direccion = imagen.src;
                window.location.href = "pagina_usauario.html"
            };
        });

        