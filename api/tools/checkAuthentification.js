//Ce middleware ne vérifie pas l'authentification ici, seulement l'identification via le cookie
const checkAuthentification = (req, res, next) => {
  if (req.session.username) {
    console.log("Utilisateur connecté :", req.session.username);
    console.log("Utilisateur connecté id :", req.session.userId);

    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = checkAuthentification;
