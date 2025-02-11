# 🔐 OTP Verification

Ce projet est une interface de vérification OTP où un mot de passe aléatoire est généré et affiché dans la console du navigateur. L'utilisateur doit entrer ce mot de passe dans les champs d'input, et le script vérifie automatiquement s'il est correct.

---

## 🚀 Fonctionnalités

✅ **Génération automatique d'un mot de passe aléatoire** affiché en console  
✅ **Saisie manuelle du mot de passe par l'utilisateur**  
✅ **Vérification automatique de la correspondance du mot de passe**  
✅ **Affichage du résultat dans la console** (`correct` ou `incorrect`)  
✅ **Navigation automatique entre les champs après chaque saisie**  
✅ **Support du retour en arrière ("Backspace")**  

---

## 💂 Structure du projet

```
/OTP_Verification
│── index.html       # Page principale
│── style.css        # Styles de l'interface
│── script.js        # Code JavaScript pour la vérification OTP
│── README.md        # Documentation du projet
```

---

## 🔧 Installation et utilisation

### 📅 1. Télécharger ou cloner le projet

```sh
git clone https://github.com/ton-repo/OTP_Verification.git
```

Ensuite, ouvre **`index.html`** dans ton navigateur.

---

## 📚 Instructions d'utilisation

1. **Ouvrir la console du navigateur** :
   - **Google Chrome** → `F12` → **Onglet "Console"`**
   - **Firefox** → `F12` → **Onglet "Console"`**

2. **Regarder le mot de passe généré en console** (affiché en bleu) :
   ```
   Votre mot de passe généré : A4KZ
   Veuillez entrer le mot de passe dans les champs ci-dessous.
   ```

3. **Taper ce mot de passe dans les champs d'input.**

4. **La console affichera :**
   - ✅ **"Mot de passe correct !"** si la saisie est correcte.
   - ❌ **"Mot de passe incorrect ! Essayez à nouveau."** si le code ne correspond pas.

---

## 🛠️ Technologies utilisées

- 🏗 **HTML5** – Structure de la page  
- 🎨 **CSS3** – Design et mise en page  
- ⚡ **JavaScript (ES6)** – Génération et vérification du code OTP  

---

## 📉 Améliorations possibles

📉 **Idées pour améliorer ce projet :**
- 🔹 Ajouter un bouton pour **régénérer un code OTP** sans recharger la page.  
- 🔹 Ajouter une **limite d'essais** avec un **délai de verrouillage** après plusieurs erreurs.  
- 🔹 Enregistrer les **tentatives réussies ou échouées** en base de données.  
- 🔹 Ajouter une **API backend** pour envoyer un OTP réel via **email/SMS**.  
![image](https://github.com/user-attachments/assets/e9d32eac-7018-4f1a-ac55-e6ae2ef41da7)

