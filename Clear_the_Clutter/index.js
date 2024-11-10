const fs = require('fs').promises;
const path = require('path');
let newDirNameList = []
let oldFilesList = []

const oldFilesPath = path.join(__dirname, 'old_file_structure')
const newFilesPath = path.join(__dirname, 'new_file_structure')

async function readDirectory(exactPath) {
    try {
        const files = await fs.readdir(exactPath);
        console.log("\nCurrent directory filenames:");
        console.log(files);
        return files;
    } catch (err) {
        console.error(err);
        return [];
    }
}

async function makeDirectory(){
    oldFilesList = await readDirectory(oldFilesPath);
    for (const file of oldFilesList) {
        newDirectoryName = (path.extname(file)).slice(1);
        await fs.access(path.join(newFilesPath,newDirectoryName)).catch(async () => {
            await fs.mkdir(path.join(newFilesPath,newDirectoryName));
            console.log(`Directory ${newDirectoryName} created.`);
        });
    }
}

async function moveFiles() {
    await makeDirectory();
    for (const file of oldFilesList) {
        const fileExtension = path.extname(file).slice(1);
        const sourcePath = path.join(oldFilesPath, file);
        const destinationDir = path.join(newFilesPath, fileExtension);
        const destinationPath = path.join(destinationDir, file);
        try {
            await fs.copyFile(sourcePath, destinationPath)
        } catch (error) {
            console.error(`Error moving ${file}:`, err);
        }
    }
}


// Starting Point....
moveFiles()
