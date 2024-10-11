
const admin = require('firebase-admin');
const auth = admin.auth();
const {baseHtmlInit, baseHtmlEnd, registerForm,loginForm, getNavBar} = require('../templates/templates')


const authController = {
    async showLogin (req,res) {
        const form = loginForm()
        const html = baseHtmlInit + getNavBar(false) + form + baseHtmlEnd
        res.send(html)
    },
    async register (req,res) {
        const { email, password } = req.body;
        try {
          await auth.createUser({
            email,
            password
          });
          res.redirect('/login');
        } catch (error) {
          console.error('Error creating new user:', error);
          res.redirect('/register');
        }
    },
    async showRegister (req,res) {
        const form = registerForm()
        const html = baseHtmlInit + getNavBar(false) + form + baseHtmlEnd
        res.send(html)
    },
    async logout (req,res) {
        res.clearCookie('token');
        res.redirect('/login');
    },
    async login(req, res) {
        const { idToken } = req.body;
        try {
            await auth.verifyIdToken(idToken);
            res.cookie('token', idToken, { httpOnly: true, secure: false }); 
            res.json({ success: true });
        } catch (error) {
            console.error('Error verifying ID token:', error);
            res.status(401).json({ error: 'Invalid token' });
        }
    }
    


}

module.exports = authController