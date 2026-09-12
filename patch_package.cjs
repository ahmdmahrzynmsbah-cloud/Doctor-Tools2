const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.name = "doctor-tools";
pkg.build = {
  "appId": "com.foxtech.doctortools",
  "productName": "DoctorTools",
  "directories": {
    "output": "release"
  },
  "win": {
    "icon": "public/logo.png",
    "target": ["portable"]
  },
  "portable": {
    "artifactName": "DoctorTools.exe"
  },
  "npmRebuild": false,
  "files": [
    "dist/**/*",
    "electron/**/*",
    "package.json"
  ]
};

pkg.scripts["electron:build"] = "vite build && electron-builder --win portable";

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
