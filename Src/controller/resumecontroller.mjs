export default class ResumeController {
    getResume(req, res) {
        res.render('home', { layout: 'layout' });
    }
    
    getTemplate(req, res) {
        res.render('mytemplate',{ layout: 'layout' });
    }

    getFirstTemplate(req, res) {
        res.render('myfirsttemplate');
    }
}