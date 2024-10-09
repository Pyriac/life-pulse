const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// Import Actions file

const daynotesAction = require("../../controllers/dayNotesAction");

// Declare route

router.get("/notes", daynotesAction.browse);
router.get("/notes/:id", daynotesAction.read);
router.post("/notes", daynotesAction.add);
router.put("/notes/:id", daynotesAction.edit);
router.delete("/notes/:id", daynotesAction.destroy);

/* ************************************************************************* */

module.exports = router;
