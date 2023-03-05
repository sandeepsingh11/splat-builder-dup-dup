// https://downgit.github.io/#/home to download param files at https://github.com/Leanny/leanny.github.io/tree/master/splat3/data/parameter/210/weapon
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const version = process.argv[2]; // get argument from cli command

const latestPath = `${__dirname}/../src/lib/Leanny/latest`;
const versionOutputPath = `${__dirname}/../src/lib/Leanny/versions/${version}`;

const paramsPath = `${__dirname}/params/${version}`;
const paramsOutputPath = `${latestPath}/params.json`;
const paramsVersionOutputPath = `${versionOutputPath}/params.json`;

const weaponInfoPath = `${paramsPath}/WeaponInfoMain.json`;
const subInfoPath = `${paramsPath}/WeaponInfoSub.json`;
const specialInfoPath = `${paramsPath}/WeaponInfoSpecial.json`;
const hmlPath = `${paramsPath}/params.json`;
const infoHmlOutputPath = `${latestPath}/infoHml.json`;
const infoHmlVersionOutputPath = `${versionOutputPath}/infoHml.json`;

const gearsPath = `${__dirname}/gears/${version}`;
const gearOutputPath = `${latestPath}/gears.json`;
const gearVersionOutputPath = `${versionOutputPath}/gears.json`;

const langs = ['USen'];
const transDir = `${__dirname}/translations`;
const transOutputPath = `${latestPath}/../translations.json`;

let weaponParams = {};
let subParams = {};
let specialParams = {};
let infoHml = {};
let gears = {};
let translations = {};



main();

function main() {
  // check if a version was supplied in the cli
  if (!version) {
    console.error('Error: you must specify a version to run this script. Example: npm run params 210\n');
    return -1;
  }

  // create version's dir if necessary
  if(!existsSync(versionOutputPath)) {
    mkdirSync(versionOutputPath);
    console.log(`Created version output path: ${versionOutputPath}\n`);
  }

  parseWSS();
  parseInfoAndHml();
  parseGears();
  parseTranslations();
}

function parseWSS() {
  parseWeapons();
  parseSubs();
  parseSpecials();

  const params = {
    version: Number.parseInt(version),
    weapons: weaponParams,
    subs: subParams,
    specials: specialParams
  };

  writeFile(paramsOutputPath, params);
  writeFile(paramsVersionOutputPath, params);
}

function parseWeapons() {
  // get weapon list
  let weaponData = readFileSync(weaponInfoPath);
  weaponData = JSON.parse(weaponData.toString());

  weaponData.forEach(weapon => {
    if (weapon.Type === 'Versus') {
      const weaponNameParts = weapon.__RowId.split('_');
      const weaponCategory = weaponNameParts[0];
      const weaponType = weaponNameParts[1];
      const weaponParamFilename = `Weapon${weaponCategory}${weaponType}.game__GameParameterTable.json`;
  
      try {
        // get each specified weapon params
        let weaponParam = readFileSync(`${paramsPath}/${weaponParamFilename}`);
        weaponParam = JSON.parse(weaponParam.toString());
  
        weaponParam['WeaponName'] = weapon.__RowId;
  
        weaponParams[weapon.Id] = weaponParam;
      } catch (error) {
        console.error(`Got an error trying to read ${paramsPath}/${weaponParamFilename}: ${error.message}\n`);
      }
    }
  })
}

function parseSubs() {
  // get sub list
  let subData = readFileSync(subInfoPath);
  subData = JSON.parse(subData.toString());

  subData.forEach(sub => {
    if (sub.Type === 'Versus') {
      const subNameParts = sub.__RowId.split('_');
      const subFilename = (sub.__RowId.includes('Bomb'))
        ? subNameParts[0] + subNameParts[1]
        : sub.__RowId;
      const subParamFilename = `Weapon${subFilename}.game__GameParameterTable.json`;
  
      try {
        // get each specified sub params
        let subParam = readFileSync(`${paramsPath}/${subParamFilename}`);
        subParam = JSON.parse(subParam.toString());
  
        subParam['SubName'] = sub.__RowId;
  
        subParams[sub.Id] = subParam;
      } catch (error) {
        console.error(`Got an error trying to read ${paramsPath}/${subParamFilename}: ${error.message}\n`);
      }
    }
  });
}

function parseSpecials() {
  // get special list
  let specialData = readFileSync(specialInfoPath);
  specialData = JSON.parse(specialData.toString());
  
  specialData.forEach(special => {
    if (special.Type === 'Versus') {
      const specialParamFilename = `Weapon${special.__RowId}.game__GameParameterTable.json`;
  
      try {
        // get each specified special params
        let specialParam = readFileSync(`${paramsPath}/${specialParamFilename}`);
        specialParam = JSON.parse(specialParam.toString());
  
        specialParam['SpecialName'] = special.__RowId;
  
        specialParams[special.Id] = specialParam;
      } catch (error) {
        console.error(`Got an error trying to read ${paramsPath}/${specialParamFilename}: ${error.message}\n`);
      }
    }
  });
}

function parseInfoAndHml() {
  const infoPaths = [weaponInfoPath, subInfoPath, specialInfoPath];
  const infoTypes = ['Main', 'Sub', 'Special'];
  
  // parse info files
  infoTypes.forEach((infoType, i) => {
    infoHml[infoType] = {};

    try {
      let infoTypeData = readFileSync(`${infoPaths[i]}`);
      infoTypeData = JSON.parse(infoTypeData.toString());
      infoTypeData.forEach(infoObj => {
        if (infoObj.Type === 'Versus') {
          infoHml[infoType][infoObj.__RowId] = infoObj;
        }
      });
    }
    catch (error) {
      console.error(`Got an error trying to read ${infoPaths[i]}: ${error.message}\n`);
    }
  });

  // add hml file
  try {
    let hmlData = readFileSync(`${hmlPath}`);
    infoHml['Hml'] = JSON.parse(hmlData.toString());
  }
  catch (error) {
    console.error(`Got an error trying to read ${hmlPath}: ${error.message}\n`);
  }

  writeFile(infoHmlOutputPath, infoHml);
  writeFile(infoHmlVersionOutputPath, infoHml);
}

function parseGears() {
  // parse through gears
  const gearTypes = ['Head', 'Clothes', 'Shoes'];

  gearTypes.forEach(gearType => {
    gears[gearType] = {};
  
    try {
      let gearTypeData = readFileSync(`${gearsPath}/GearInfo${gearType}.json`);
      gearTypeData = JSON.parse(gearTypeData.toString());
      gearTypeData.forEach(gear => {
        let gearTypeObj = {};
        gearTypeObj['Brand'] = gear['Brand'];
        gearTypeObj['HowToGet'] = gear['HowToGet'];
        gearTypeObj['Price'] = gear['Price'];
        gearTypeObj['Rarity'] = gear['Rarity'];
        gearTypeObj['Season'] = gear['Season'];
        gearTypeObj['Skill'] = gear['Skill'];
    
        gears[gearType][gear['__RowId']] = gearTypeObj;
      });
    }
    catch (error) {
      console.error(`Got an error trying to read ${gearsPath}/GearInfo${gearType}.json: ${error.message}\n`);
    }
  });

  writeFile(gearOutputPath, infoHml);
  writeFile(gearVersionOutputPath, infoHml);
}

function parseTranslations() {
  // parse translations for all listed languages
  langs.forEach(lang => {
    translations[lang] = {};
  
    try {
      let langData = readFileSync(`${transDir}/${lang}.json`);
      langData = JSON.parse(langData.toString());
      
      let transObj = {};
      transObj['GearBrandName'] = langData['CommonMsg/Gear/GearBrandName'];
      transObj['GearName_Head'] = langData['CommonMsg/Gear/GearName_Head'];
      transObj['GearName_Clothes'] = langData['CommonMsg/Gear/GearName_Clothes'];
      transObj['GearName_Shoes'] = langData['CommonMsg/Gear/GearName_Shoes'];
      transObj['GearPowerExp'] = langData['CommonMsg/Gear/GearPowerExp'];
      transObj['GearPowerName'] = langData['CommonMsg/Gear/GearPowerName'];
      transObj['WeaponName_Main'] = langData['CommonMsg/Weapon/WeaponName_Main'];
      transObj['WeaponName_Special'] = langData['CommonMsg/Weapon/WeaponName_Special'];
      transObj['WeaponName_Sub'] = langData['CommonMsg/Weapon/WeaponName_Sub'];
      transObj['WeaponParamName'] = langData['CommonMsg/Weapon/WeaponParamName'];
      transObj['WeaponTypeName'] = langData['CommonMsg/Weapon/WeaponTypeName'];
  
      translations[lang] = transObj;
    }
    catch (error) {
      console.error(`Got an error trying to read ${transDir}/${lang}.json: ${error.message}\n`);
    }
  });

  writeFile(transOutputPath, translations);
}

function writeFile(path, data) {
  // write parsed json file
  writeFileSync(path, JSON.stringify(data));
  console.log(`Successfully wrote to ${path}\n`);
}
