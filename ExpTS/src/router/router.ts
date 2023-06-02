import { Router } from 'express';
import mainController from '../controllers/main';

const router = Router();

router.get('/', mainController.home);

router.get('/welcome/:nome', mainController.welcome); // http://localhost:3333/welcome/Josué

router.get('/statics-files-page', mainController.staticsFiles);

router.get('/lorem-ipsum-generator', mainController.loremIpsumGenerator);

router.get('/hb1', mainController.hb1);

router.get('/hb2', mainController.hb2);

router.get('/hb3', mainController.hb3);

router.get('/hb4', mainController.hb4);

router.get('/hb5', mainController.hb5);

export default router;
