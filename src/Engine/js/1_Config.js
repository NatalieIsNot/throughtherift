/* Sets number for current version */
Config.saves.version = { major: 0, minor: 0, patch: 1 };

/* Bashing SugarCube on the head to make the autosave slot appear */
Config.saves.autosave = [];

/* Limiting max history to 10 */
/* Set to 30 for alpha stage */
/* Remove the following line for kinetic novels */
Config.history.maxStates = 30;

/* Custom Save Title Function */
/* Fill `save.title` with desired title, add variables above */
Save.onSave.add(function (save) {
  save.title = ``;
});