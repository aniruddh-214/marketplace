import 'dotenv/config';
import App from './app';
import CommonHelper from './helpers/common';

/**
 * Main method for the server boot
 * and exported because we gonna use this to check for the test cases
 */
export default async function boot() {
  const app = new App().listen(3000);
  const date = CommonHelper.formattedTimestamp();
  console.log('----date---->>>>>>😍', date, '😍<<<<<------date----');
}

// This shows that if this file is the entry point of the application then start otherwise console the message
if (require.main === module) {
  boot();
} else {
  console.log('your file is being accessed by another file');
}
