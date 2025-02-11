document.addEventListener("DOMContentLoaded", () => {
    let inputs = [...document.querySelectorAll('.inp input')];

    // Générer un mot de passe aléatoire de la longueur des inputs
    let password = generatePassword(inputs.length);
    console.log("%cVotre mot de passe généré :", "color: blue; font-weight: bold;", password);
    console.log("%cVeuillez entrer le mot de passe dans les champs ci-dessous.", "color: orange;");

    // Écouteur d'événements pour vérifier la saisie utilisateur
    inputs.forEach((element, index) => {
        element.addEventListener('input', () => {
            // Passer au champ suivant automatiquement
            if (element.value.length === 1 && index + 1 < inputs.length) {
                inputs[index + 1].focus();
            }

            // Vérifier si tous les champs sont remplis
            let userInput = inputs.map(input => input.value).join('');

            if (userInput.length === password.length) {
                if (userInput === password) {
                    console.log("%c✅ Mot de passe correct !", "color: green; font-weight: bold;");
                } else {
                    console.log("%c❌ Mot de passe incorrect ! Essayez à nouveau.", "color: red; font-weight: bold;");
                }
            }
        });

        // Gérer le "Backspace" pour revenir au champ précédent
        element.addEventListener('keydown', (e) => {
            if (e.key === "Backspace" && element.value === "" && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // Fonction pour générer un mot de passe aléatoire
    function generatePassword(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }
});
















