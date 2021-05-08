const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../db/associations.js');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: {
        model: Student,
      },
    });
    res.send(campuses);
  } catch (ex) {
    next(ex);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, {
      include: {
        model: Student,
      },
    });
    if (campus) {
      res.send(campus);
    } else {
      res.send(`<h1>Campus can't be found. ¯\\_(ツ)_/¯</h1>`);
    }
  } catch (ex) {
    next(ex);
  }
});

router.post('/addCampus', async (req, res, next) => {
  try {
    res.send(await Campus.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

router.delete('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    res.send(await campus.destroy());
  } catch (ex) {
    next(ex);
  }
});

router.put('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    const updatedCampus = await campus.update(req.body);
    res.send(updatedCampus);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
