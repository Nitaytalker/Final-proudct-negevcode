const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
        user: "nitay7747@gmail.com",
        pass: "!Aa123456789"
    },
});

router.post('/', (req, res) => {
    const {token} = req.headers;
    console.log(token);
    if(!token){
        res.status(440).send("Need to login")
        return
    }
    
    const { to, textFromUser, subjectFromUser } = req.body;
    console.log(req.body);
    const mailOptionsToMe = {
        to: "nitay7747@gmail.com",
        subject: subjectFromUser,
        text: textFromUser,
        from: {
            name: to,
            address: 'nitay7747@gmail.com'
        }
    };
    transporter.sendMail(mailOptionsToMe, function (err, info) {
        if (err) {
            res.status(500).send(err)
        } else {

            const mailOptions = {
                to: to,
                subject: "המייל שלך התקבל בהצלחה!",
                text: "תודה רבה על פנייתך! תיענה בהקדם",
                html: `<html>
                <body>
                Thank you very much for your inquiry! Will be answered soon
                </body>
                </html>`
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).send("Email sent successfully" + info.res)
                    console.log("Email sent successfully" + info.res);
                }
            })

        }
    })

})

module.exports = router;
