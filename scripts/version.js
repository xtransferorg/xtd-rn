const fs = require('fs');
const path = require('path');
const { version } = require('../package.json');
const list = require('../version.json');

!async function () {
  const oldVersion = list.join(',');
  const newVersion = [...new Set(list.concat(version))]
  fs.writeFileSync(
    path.resolve(__dirname, '../version.json'),
    JSON.stringify(newVersion)
  );

  if (oldVersion === newVersion.join(',')) {
    return
  }

  const execShPromise = require('exec-sh').promise;

  await execShPromise('git add .')

  await execShPromise(`git commit -m "chore: update docs version"`)

  await execShPromise(`git push`)
}()
