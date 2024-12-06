import qrcode from 'qrcode-terminal';
import { Client, LocalAuth  } from 'whatsapp-web.js';

const whatsapp = new Client({
  puppeteer: {
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	},
  authStrategy: new LocalAuth()
});

whatsapp.on('qr', qr => {
  qrcode.generate(qr, {
    small: true
  });
});

whatsapp.on('ready', () => {
  console.log('El Cliente esta Listo');
});

export default whatsapp;