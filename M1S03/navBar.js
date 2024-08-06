document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar-container");

    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Empadas Deliciosas</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="cardapio.html">Cardápio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="sobre.html">Sobre Nós</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contato.html">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;
});
