import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });


      const {email,nombre,token} = datos;

      const info = await transporter.sendMail({
        from: "Gestion de Clientes - AgustinMolinaCode",
        to: email,
        subject: 'Comprueba tu cuenta',
        text: 'Comproba tu cuenta de tu Gestion de Clientes',
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en "Gestion de Clientes".</p>
        <p>Tu cuenta ya esta lista ,solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a> </p>

        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>
        
        `
      });

      console.log("mensaje enviado: %s", info.messageId)

}

export default emailRegistro;