COMMENT AJOUTER TES IMAGES
===========================

Le site va chercher les images automatiquement à ces emplacements exacts.
Il suffit de renommer tes photos avec les noms ci-dessous et de les glisser
dans le bon dossier. Formats acceptés : .jpg, .jpeg ou .png (si tu utilises
.png, pense à changer l'extension dans index.html au même endroit).


1) assets/profil/
   -> photo-profil.jpg
   C'est LA photo principale de Renoix, utilisée en haut de la page d'accueil
   (hero). Choisis une photo nette, plutôt verticale (portrait), visage bien
   visible.


2) assets/parcours/
   -> etape-1-inscription-faseg.jpg
   -> etape-2-debuts-ecommerce.jpg
   -> etape-3-publicite-digitale.jpg
   -> etape-4-produits-digitaux.jpg
   -> etape-5-obtention-licence.jpg
   -> etape-6-installation-france.jpg
   -> etape-7-aujourdhui.jpg
   Ce sont les 7 photos de la section "Mon parcours" : une par étape de la
   timeline. La photo affichée change automatiquement quand on clique sur
   une étape (ou quand on scrolle jusqu'à elle). Si tu n'as pas de photo
   différente pour chaque étape, tu peux réutiliser la même photo de profil
   sous ces 7 noms, ou choisir des visuels représentatifs (ex: une photo de
   la fac pour l'étape 1, une capture d'écran de la première boutique pour
   l'étape 2, etc.).


3) assets/temoignages/
   -> temoignage-1.jpg
   -> temoignage-2.jpg
   -> temoignage-3.jpg
   -> temoignage-4.jpg
   -> temoignage-5.jpg
   -> temoignage-6.jpg
   Ce sont les captures d'écran de résultats d'élèves (ventes, commandes,
   messages de retour, etc.). Tu peux en mettre plus ou moins de 6 : si tu
   en ajoutes, duplique un bloc <figure class="proof-card">...</figure>
   dans index.html (section id="temoignages") en changeant juste le nom
   du fichier.


4) assets/eleves/
   -> prudence-azah.jpg   (photo de Prudence AZAH, badge 1er)
   -> dehahou-axel.jpg    (photo de DEHAHOU Axel, badge 2e)
   -> kegou-bruno.jpg     (photo de KEGOU Bruno, badge 3e)
   Ces photos s'affichent en cercle avec le badge de classement, dans la
   section "Mes meilleurs élèves formés" tout en bas du site.


CONSEILS PRATIQUES
-------------------
- Respecte bien la casse et les tirets dans les noms de fichiers
  (ex: "dehahou-axel.jpg", pas "Dehahou_Axel.JPG").
- Compresse tes images avant de les ajouter (par ex. via squoosh.app)
  pour que le site reste rapide sur mobile — vise moins de 300 Ko par image.
- Si un fichier n'est pas trouvé, l'espace reste vide mais le site
  continue de fonctionner normalement.
