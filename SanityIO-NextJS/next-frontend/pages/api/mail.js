import { transporter, mailOptions } from "../../config/nodemailer"

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const generateEmailText = (data) => {
    const text = Object.entries(data).reduce((str, [key, value]) => {
        return str += `${capitalize(key)}: \n${value}\n\n`;
    }, "");
    return text;
}

const generateEmailBody = (data) => {
    const html = Object.entries(data).reduce((str, [key, value]) => {
        return str += `<h3>${capitalize(key)}</h3><p>${value}</p>`;
    }, "");
    return html;
}

const handler = async (req, res) => {
    if (req.method === "POST"){
        const { name, email, message } = req.body;
        if (!name || !email || !message)
            return res.status(400).json({ message: "Bad Request" });

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `${name} CONTACTING THROUGH PORTFOLIO`,
                text: generateEmailText({ name, email, message }),
                html: generateEmailBody({ name, email, message })
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }
    return res.status(400).json({ message: "Bad Request" });
}

export default handler;